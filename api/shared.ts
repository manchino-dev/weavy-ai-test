import { createClient } from '@supabase/supabase-js';
import { z } from 'zod';
import * as dotenv from 'dotenv';
dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
export const supabase = createClient(supabaseUrl, supabaseKey);

export const leadSchema = z.object({
    name: z.string().min(2).max(100).trim(),
    email: z.string().email().max(255).trim().toLowerCase(),
    message: z.string().max(1000).optional(),
});

export async function handleReset() {
    const { error } = await supabase.from('leads').delete().neq('id', 0);
    if (error) throw error;
    return { success: true, message: 'Table cleared' };
}

export async function handleLeadCapture(parsedData: z.infer<typeof leadSchema>) {
    const { data, error } = await supabase
        .from('leads')
        .insert([parsedData])
        .select();
    if (error) throw error;
    return { success: true, data: data[0] };
}
