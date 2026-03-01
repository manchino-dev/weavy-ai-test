import express from 'express';
import { createServer as createViteServer } from 'vite';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { z } from 'zod';
import { handleReset, handleLeadCapture, leadSchema } from './api/shared.js';

async function startServer() {
    const app = express();

    // 2. Helmet: Secure HTTP headers to prevent XSS and Clickjacking. 
    // We disable contentSecurityPolicy in dev mode only for Vite compatibility.
    app.use(helmet({ contentSecurityPolicy: false }));

    app.use(express.json({ limit: '10kb' })); // 3. Limit JSON payload size to prevent DDoS

    // 4. Rate Limiting: Prevent automated spam to the Supabase endpoint
    const apiLimiter = rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100, // Limit each IP to 100 requests per windowMs
        message: 'Too many requests, please try again later.',
        standardHeaders: true,
        legacyHeaders: false,
    });
    app.use('/api/', apiLimiter);

    // Blueprint: Provide Reset Route (Hidden button requirement)
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

    // Blueprint: Provide Lead Capture Route
    app.post('/api/leads', async (req, res) => {
        try {
            // 5. Schema Validation: Parse and sanitize the input
            const parsedData = leadSchema.parse(req.body);
            console.log(`[LEAD CAPTURE] Received - Name: ${parsedData.name}, Email: ${parsedData.email}`);
            const result = await handleLeadCapture(parsedData);
            console.log('[LEAD CAPTURE] Successfully written to database:', result.data);
            res.json(result);
        } catch (error) {
            console.error('[LEAD CAPTURE] Error during insert:', error);
            // Catch Zod validation errors to safely respond without leaking backend details
            if (error instanceof z.ZodError) {
                res.status(400).json({ success: false, error: 'Invalid input data', details: error.issues });
                return;
            }
            res.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    });

    // Create Vite server in middleware mode
    const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: 'spa',
    });

    // Use vite's connect instance as middleware
    app.use(vite.middlewares);

    const port = Number(process.env.PORT) || 3000;
    app.listen(port, '0.0.0.0', () => {
        console.log(`\n===========================================`);
        console.log(`🚀 B.L.A.S.T Server running at http://localhost:${port}`);
        console.log(`✨ Connected directly to Supabase PostgREST`);
        console.log(`===========================================\n`);
    });
}

startServer();
