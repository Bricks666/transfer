import { Button } from '@mui/material';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { CancelTransfer, acceptTransferModel } from '@/features/transfers';
import { authModel } from '@/entities/auth';
import { CategoryLabel, useCategory } from '@/entities/categories';
import { TemplateTransferCard } from '@/entities/transfers';
import { Transfer } from '@/shared/api';
import { CommonProps, Status } from '@/shared/types';

export interface TransferCardProps extends CommonProps, Transfer {}

export const TransferCard: React.FC<TransferCardProps> = React.memo(
	function TransferCard(props) {
		const { status, sender, id, category_id: categoryId, } = props;
		const authAddress = useUnit(authModel.$address);
		const openPopup = useUnit(acceptTransferModel.popup.open);
		const isSender = authAddress === sender;
		const isPending = status === Status.pending;

		let actions: React.ReactElement | null | undefined;
		if (isPending) {
			if (isSender) {
				actions = <CancelTransfer id={id} />;
			} else {
				const onClick = () => {
					console.log();
					openPopup(id);
				};
				actions = (
					<Button onClick={onClick} variant='contained' color='success'>
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
