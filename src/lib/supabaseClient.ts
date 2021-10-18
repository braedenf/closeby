import { createClient } from '@supabase/supabase-js';

import { variables } from '$lib/variables';

export const supabase = createClient(variables.supabaseUrl, variables.supabaseAnonKey);
