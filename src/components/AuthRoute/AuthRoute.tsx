import * as React from 'react';
import { useUnit } from 'effector-react';
import { Navigate } from 'react-router-dom';
import { authModel } from '@/models';

export const AuthRoute: React.FC<React.PropsWithChildren> = (props) => {
	const { children } = props;
	const isAuth = useUnit(authModel.$isAuth);

	if (!isAuth) {
		return <Navigate to='/login' replace />;
	}

	return children as React.ReactElement;
};
