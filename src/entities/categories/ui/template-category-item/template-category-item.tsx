import CategoryIcon from '@mui/icons-material/Category';
import {
	Avatar,
	ListItem,
	ListItemAvatar,
	ListItemProps,
	ListItemText
} from '@mui/material';
import * as React from 'react';
import type { Category } from '@/shared/api';
import { stringToColor } from '@/shared/lib';
import type { CommonProps } from '@/shared/types';

export interface TemplateCategoryItemProps
	extends CommonProps,
		Category,
		Omit<ListItemProps, keyof CommonProps | keyof Category> {}

export const TemplateCategoryItem: React.FC<TemplateCategoryItemProps> = (
	props
) => {
	const { name, id, ...rest } = props;
	const stringForGenerate = name + id;

	const color = stringToColor(stringForGenerate);

	return (
		<ListItem {...rest}>
			<ListItemAvatar>
				<Avatar sx={{ bgcolor: color, }}>
					<CategoryIcon />
				</Avatar>
			</ListItemAvatar>
			<ListItemText>{name}</ListItemText>
		</ListItem>
	);
};
