import { Container } from '@mui/material';
import cn from 'classnames';
import * as React from 'react';
import { CommonProps } from '@/shared/types';
import { Center } from '../center';

export interface AuthLayoutProps extends CommonProps {}

export const AuthLayout: React.FC<React.PropsWithChildren<AuthLayoutProps>> = (
	props
) => {
	const { className, children, } = props;
	return (
		<Container>
			<Center fullHeight>
				<main className={cn(className)}>{children}</main>
			</Center>
		</Container>
	);
};
