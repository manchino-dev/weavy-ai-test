import express from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { z } from 'zod';
import { handleReset, handleLeadCapture, leadSchema } from './shared.js';

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
        const result = await handleReset();
        console.log('RESET COMPLETE: Leads table is empty');
        res.json(result);
    } catch (error) {
        console.error('RESET FAILED', error);
        res.status(500).json({ success: false, error: String(error) });
    }
});

app.post('/api/leads', async (req, res) => {
    try {
        const parsedData = leadSchema.parse(req.body);
        console.log(`[LEAD CAPTURE] Received - Name: ${parsedData.name}, Email: ${parsedData.email}`);
        const result = await handleLeadCapture(req.body);
        console.log('[LEAD CAPTURE] Successfully written to database:', result.data);
        res.json(result);
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
