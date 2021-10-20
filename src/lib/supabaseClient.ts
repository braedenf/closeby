import { createClient } from '@supabase/supabase-js';

import { variables } from '$lib/variables';

export const supabaseClient = createClient(variables.supabaseUrl, variables.supabaseAnonKey);
