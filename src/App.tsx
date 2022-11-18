import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoute } from './components/AuthRoute';
import { routes } from './routes';
import { useInit } from './hooks';
import { Header } from './components/Header';
import { AdminRoute } from './components/AdminRoute';
import './models/init';

export const App = () => {
	const isInit = useInit();

	if (isInit) {
		return <h2>Initializing...</h2>;
	}

	return (
		<div>
			<Routes>
				<Route path='/login' />
				<Route path='/registration' />
				<Route path='*' element={<Header />} />
			</Routes>

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
		</div>
	);
};
