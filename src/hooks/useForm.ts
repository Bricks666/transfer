import { ChangeEventHandler, useCallback } from 'react';

export const useForm = <F extends object>(submit: (data: F) => unknown) => {
	const onSubmit = useCallback<ChangeEventHandler<HTMLFormElement & F>>(
		(evt) => {
			const formData = new FormData(evt.target);
			submit(Object.fromEntries(formData) as F);
		},
		[submit]
	);
	return { onSubmit };
};
