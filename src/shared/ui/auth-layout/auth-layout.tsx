import { Container } from '@mui/material';
import cn from 'classnames';
import * as React from 'react';
import { CommonProps } from '@/shared/types';

import styles from './auth-layout.module.css';

export interface AuthLayoutProps extends CommonProps {}

export const AuthLayout: React.FC<React.PropsWithChildren<AuthLayoutProps>> = (
	props
) => {
	const { className, children, } = props;
	return (
		<Container className={styles.container}>
			<main className={cn(className)}>{children}</main>
		</Container>
	);
};
