import { supabaseClient } from '$lib/supabaseClient';
import type { AuthResponse } from '$lib/types';

export async function get() {
	const { error }: AuthResponse = await supabaseClient.auth.signOut();

	if (error) {
		return {
			status: error.status,
			body: error.message
		};
	}

	return {
		status: 302,
		headers: {
			location: '/signin',
			'set-cookie': `session=; path=/; expires=0;`
		}
	};
}
