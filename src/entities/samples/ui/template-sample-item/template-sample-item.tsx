import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import cn from 'classnames';
import * as React from 'react';
import { Sample } from '@/shared/api';
import { prepareMoney, stringToColor } from '@/shared/lib';
import { CommonProps } from '@/shared/types';

import styles from './template-sample-item.module.css';

export interface TemplateSampleItemProps
	extends CommonProps,
		Omit<Sample, 'category_id'> {
	readonly category: React.ReactElement | null;
	readonly divider?: boolean;
}

export const TemplateSampleItem: React.FC<TemplateSampleItemProps> = (
	props
) => {
	const { name, category, money, className, divider, } = props;

	const { money: preparedMoney, unitName, } = prepareMoney({ money, });

	const primaryText = <span>Имя: {name}</span>;
	const secondaryText = <span>Категория: {category}</span>;

	return (
		<ListItem className={cn(className)} divider={divider}>
			<ListItemAvatar>
				<Avatar sx={{ bgcolor: stringToColor(name), }}>
					<FeaturedPlayListIcon />
				</Avatar>
			</ListItemAvatar>
			<ListItemText primary={primaryText} secondary={secondaryText} />
			<ListItemText className={styles.money}>
				<span className={styles.money__label}>Сумма:</span> {preparedMoney}{' '}
				{unitName}
			</ListItemText>
		</ListItem>
	);
};
