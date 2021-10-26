import { supabaseClient } from '$lib/supabaseClient';
import type { AuthResponse } from '$lib/types';

export async function post(request) {
	let email = request.body.get('email');
	let password = request.body.get('password');

	const { session, error }: AuthResponse = await supabaseClient.auth.signIn({ email, password });

	if (error) {
		return {
			status: error.status,
			body: error.message
		};
	}

	return {
		status: 200,
		body: 'success',
		headers: {
			'set-cookie': `session=${
				session.user.email
			}; Path=/; HttpOnly; Secure; SameSite=Strict; Expires="${new Date(
				session.expires_at * 1000
			).toUTCString()};`
		}
	};
}
