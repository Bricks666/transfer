import { useLayoutEffect } from 'react';

export const useTitle = (title: string) => {
	useLayoutEffect(() => {
		const oldTitle = document.title;

		document.title = title;

		return () => {
			document.title = oldTitle;
		};
	}, [title]);
};
