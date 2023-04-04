import { useUnit } from 'effector-react';
import * as React from 'react';
import { authModel } from '../../model';

export const OnlyAdmin: React.FC<React.PropsWithChildren> = (props) => {
	const { children, } = props;
	const isAdmin = useUnit(authModel.$isAdmin);

	if (!isAdmin) {
		return null;
	}

	return children as React.ReactElement;
};
