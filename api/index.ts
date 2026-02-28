import express from 'express';
import { createClient } from '@supabase/supabase-js';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { z } from 'zod';
import * as dotenv from 'dotenv';
dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

const leadSchema = z.object({
    name: z.string().min(2).max(100).trim(),
    email: z.string().email().max(255).trim().toLowerCase(),
    message: z.string().max(1000).optional(),
});

const app = express();
app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.json({ limit: '10kb' }));

const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: 'Too many requests, please try again later.',
    standardHeaders: true,
    legacyHeaders: false,
});
app.use('/api/', apiLimiter);

app.post('/api/reset', async (req, res) => {
    try {
        console.log('RESET INITIATED: Clearing leads database table in Supabase');
        const { error } = await supabase.from('leads').delete().neq('id', 0);
        if (error) throw error;
        console.log('RESET COMPLETE: Leads table is empty');
        res.json({ success: true, message: 'Table cleared' });
    } catch (error) {
        console.error('RESET FAILED', error);
        res.status(500).json({ success: false, error: String(error) });
    }
});

app.post('/api/leads', async (req, res) => {
    try {
        const parsedData = leadSchema.parse(req.body);
        console.log(`[LEAD CAPTURE] Received - Name: ${parsedData.name}, Email: ${parsedData.email}`);

        const { data, error } = await supabase
            .from('leads')
            .insert([parsedData])
            .select();

        if (error) throw error;

        console.log('[LEAD CAPTURE] Successfully written to database:', data[0]);
        res.json({ success: true, data: data[0] });
    } catch (error) {
        console.error('[LEAD CAPTURE] Error during insert:', error);
        if (error instanceof z.ZodError) {
            res.status(400).json({ success: false, error: 'Invalid input data', details: error.issues });
            return;
        }
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

export default app;
