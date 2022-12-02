import { ChangeEventHandler, useCallback } from 'react';

export const useForm = <F extends object>(submit: (data: F) => unknown) => {
	const onSubmit = useCallback<ChangeEventHandler<HTMLFormElement & F>>(
		async (evt) => {
			evt.preventDefault();
			const formData = new FormData(evt.target);
			await submit(Object.fromEntries(formData) as F);
			evt.target.reset();
		},
		[submit]
	);
	return { onSubmit };
};
