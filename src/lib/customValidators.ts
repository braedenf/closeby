import type { Form, ValidationErrors } from 'svelte-use-form';

export function passwordMatch(value: string, form: Form): null | ValidationErrors {
	return value === form.password.value ? null : { passwordMatch: 'Passwords are not matching' };
}
