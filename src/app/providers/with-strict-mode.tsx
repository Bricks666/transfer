import * as React from 'react';

export const withStrictMode = (Component: React.ComponentType) => {
	return () => {
		return (
			<React.StrictMode>
				<Component />
			</React.StrictMode>
		);
	};
};
