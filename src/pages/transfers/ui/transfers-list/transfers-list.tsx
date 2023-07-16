import { useUnit } from 'effector-react';
import * as React from 'react';
import { TransferItemWithInformation } from '@/widgets/transfers';
import { transfersModel } from '@/entities/transfers';
import type { CommonProps } from '@/shared/types';
import { BorderedList } from '@/shared/ui';

export const TransferList: React.FC<CommonProps> = (props) => {
	const { className, } = props;
	const transfers = useUnit(transfersModel.$userTransfers);
	return (
		<BorderedList className={className} variant='outlined' elevation={0}>
			{transfers.map((transfer) => (
				<TransferItemWithInformation {...transfer} key={transfer.id} />
			))}
		</BorderedList>
	);
};
