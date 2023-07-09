import { Autocomplete } from '@mui/material';
import { useUnit } from 'effector-react';
import * as React from 'react';
import type { Address } from 'web3';
import { User } from '@/shared/api';
import { usePreparePicker } from '@/shared/lib';
import type { CommonProps, PickerProps } from '@/shared/types';
import { Field, type FieldProps } from '@/shared/ui';
import { usersModel } from '../../model';
import { TemplateUserItem } from '../template-user-item';

export type UsersPickerProps = CommonProps &
	Omit<
		FieldProps,
		keyof PickerProps<Address> | 'multiline' | 'select' | 'type'
	> &
	PickerProps<Address>;

export const UsersPicker: React.FC<UsersPickerProps> = (props) => {
	const { multiple, onChange, value, limitTags, ...rest } = props;
	const users = useUnit(usersModel.query);
	const options = usePreparePicker({
		options: users.data,
		onChange,
		value,
		multiple,
		isSelected,
		mapBeforeChange,
	});

	return (
		<Autocomplete
			options={users.data}
			loading={users.pending}
			getOptionLabel={getOptionLabel}
			{...options}
			renderInput={(params) => {
				return (
					<Field
						{...rest}
						{...params}
						InputProps={{ ...rest.InputProps, ...params.InputProps, }}
					/>
				);
			}}
			renderOption={(params, option) => {
				return <TemplateUserItem {...params} {...option} />;
			}}
			limitTags={limitTags}
		/>
	);
};

const isSelected = (
	value: User,
	selected: Address | Address[] | null
): boolean => {
	if (Array.isArray(selected)) {
		return selected.includes(value.login);
	}

	return !!selected && selected === value.login;
};

const mapBeforeChange = (user: User): Address => {
	return user.login;
};

const getOptionLabel = (user: User): Address => {
	return user.login;
};
