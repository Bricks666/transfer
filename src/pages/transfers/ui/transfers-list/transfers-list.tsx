import { List, Paper } from '@mui/material';
import cn from 'classnames';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { TransferItemWithInformation } from '@/widgets/transfers';
import { transfersModel } from '@/entities/transfers';
import type { CommonProps } from '@/shared/types';

export const TransferList: React.FC<CommonProps> = (props) => {
	const { className, } = props;
	const transfers = useUnit(transfersModel.$userTransfers);
	return (
		<Paper variant='outlined' elevation={0}>
			<List className={cn(className)} disablePadding>
				{transfers.map((transfer) => (
					<TransferItemWithInformation {...transfer} key={transfer.id} />
				))}
			</List>
		</Paper>
	);
};
