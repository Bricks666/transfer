import * as React from 'react';
import cn from 'classnames';
import { CommonProps } from '@/shared/types';
import { Header } from '@/shared/ui/Header';

export interface MainLayoutProps extends CommonProps {}

export const MainLayout: React.FC<React.PropsWithChildren<MainLayoutProps>> = (
	props
) => {
	const { className, children, } = props;
	return (
		<>
			<Header />
			<main className={cn(className)}>{children}</main>
		</>
	);
};
