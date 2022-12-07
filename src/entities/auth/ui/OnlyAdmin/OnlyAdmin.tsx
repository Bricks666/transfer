import * as React from 'react';
import { useIsAdmin } from '../../lib';

export const OnlyAdmin: React.FC<React.PropsWithChildren> = (props) => {
	const { children, } = props;
	const isAdmin = useIsAdmin();

	if (!isAdmin) {
		return null;
	}

	return children as React.ReactElement;
};
