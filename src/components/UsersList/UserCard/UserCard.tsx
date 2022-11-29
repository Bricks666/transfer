import * as React from 'react';
import { useMutation } from '@farfetched/react';
import { requestsModel, User } from '@/models';
import { CommonProps } from '@/types';
import { UserInfo } from '../../UserInfo';

export interface UserCardProps extends CommonProps, User {}

export const UserCard: React.FC<UserCardProps> = (props) => {
	const { login, role, className } = props;
	const create = useMutation(requestsModel.addMutation);
	const onCreate = () => {
		create.start({ candidate: login });
	};
	return (
		<div className={className}>
			<UserInfo login={login} role={role} />
			<button type='button' onClick={onCreate}>
				Set on offer
			</button>
		</div>
	);
};
