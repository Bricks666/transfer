import * as React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { routes } from '@/routes';
import { CommonProps } from '@/types';
import { AdminRoute } from '../AdminRoute';
import { AuthRoute } from '../AuthRoute';

export interface AppRoutesProps extends CommonProps {}

export const AppRoutes: React.FC<AppRoutesProps> = React.memo(
	function AppRoutes() {
		return (
			<Routes>
				{routes.map(({ Component, path, isAuthRoute, isAdminOnly }) => (
					<Route
						path={path}
						element={
							(isAdminOnly && (
								<AdminRoute>
									<Component />
								</AdminRoute>
							)) ||
							(isAuthRoute && (
								<AuthRoute>
									<Component />
								</AuthRoute>
							)) || <Component />
						}
						key={path}
					/>
				))}
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		);
	}
);
