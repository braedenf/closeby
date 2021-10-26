export async function post(event, session) {
	try {
		let supabaseEvent = await JSON.parse(event.body);

		if (supabaseEvent.event == 'SIGNED_IN') {
			return {
				status: 200,
				body: 'success',
				headers: {
					'set-cookie': `session=${'supabase'}; Path=/; HttpOnly; Secure; SameSite=Strict; Expires="${new Date(
						supabaseEvent.expires_at * 1000
					).toUTCString()};`
				}
			};
		} else {
			return {
				status: 302,
				redirect: '/signin',
				props: {
					session
				}
			};
		}
	} catch (e) {
		return {
			status: 302,
			redirect: '/signin',
			props: {
				session
			}
		};
	}
}
