import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoute } from "./components/AuthRoute";
import { routes } from "./routes";
import { useInit } from "./hooks";
import { Navigation } from "./components/Navigation";

export const App = () => {
	const isInit = useInit();

	if (isInit) {
		return <h2>Initializing...</h2>;
	}

	return (
		<div>
			<Routes>
				<Route path="/login" />
				<Route path="/registration" />
				<Route path="*" element={<Navigation />} />
			</Routes>

			<Routes>
				{routes.map(({ Component, path, isAuthRoute }) => (
					<Route
						path={path}
						element={
							isAuthRoute ? (
								<AuthRoute>
									<Component />
								</AuthRoute>
							) : (
								<Component />
							)
						}
						key={path}
					/>
				))}
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</div>
	);
};
