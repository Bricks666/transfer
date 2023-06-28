import { Button } from '@mui/material';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { CancelTransfer, acceptTransferModel } from '@/features/transfers';
import { CategoryLabel, useCategory } from '@/entities/categories';
import { TemplateTransferCard } from '@/entities/transfers';
import { Transfer } from '@/shared/api';
import { authModel } from '@/shared/models';
import { CommonProps, Status } from '@/shared/types';

export interface TransferCardProps extends CommonProps, Transfer {}

export const TransferCard: React.FC<TransferCardProps> = React.memo(
	function TransferCard(props) {
		const { status, sender, id, category_id: categoryId, } = props;
		const user = useUnit(authModel.$user);
		const openPopup = useUnit(acceptTransferModel.popup.open);
		const isSender = user?.address === sender;
		const isPending = status === Status.pending;

		let actions: React.ReactElement | null = null;
		if (isPending) {
			if (isSender) {
				actions = <CancelTransfer id={id.toString()} />;
			} else {
				const onClick = () => {
					openPopup(id.toString());
				};
				actions = (
					<Button
						onClick={onClick}
						variant='contained'
						color='success'
						disableElevation>
						Принять
					</Button>
				);
			}
		}
		const category = useCategory(categoryId);

		const categoryLabel = category ? <CategoryLabel {...category} /> : null;

		return (
			<TemplateTransferCard
				{...props}
				category={categoryLabel}
				actions={actions}
			/>
		);
	}
);
