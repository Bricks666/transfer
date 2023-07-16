import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { CircularProgress, Typography } from '@mui/material';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { Header } from '@/widgets/page';
import { CreateCategoryForm } from '@/features/categories';
import { categoriesModel } from '@/entities/categories';
import { SITE_NAME } from '@/shared/configs';
import { useTitle } from '@/shared/lib';
import { CommonProps } from '@/shared/types';
import { Center, CollapsedForm, MainLayout, PageTitle } from '@/shared/ui';
import styles from './page.module.css';
import { CategoryList } from './ui';

export interface CategoriesPageProps extends CommonProps {}

const CategoriesPage: React.FC<CategoriesPageProps> = () => {
	useTitle(`${SITE_NAME} - Категории`);

	return (
		<MainLayout header={<Header />}>
			<PageTitle title='Категории' extra={<Form />} />
			<Result />
		</MainLayout>
	);
};

const Form: React.FC = () => {
	return (
		<CollapsedForm
			title='Создать категорию'
			openedTitle='Закрыть форму'
			collapseClassName={styles.form}
			form={<CreateCategoryForm />}
			closedIcon={<AddIcon />}
			openedIcon={<CloseIcon />}
		/>
	);
};

const Result: React.FC = () => {
	const loading = useUnit(categoriesModel.query.$pending);
	const empty = useUnit(categoriesModel.$empty);

	if (loading) {
		return (
			<Center>
				<CircularProgress size={60} />
			</Center>
		);
	}
	if (empty) {
		return (
			<Center>
				<Typography component='p'>У вас еще нет ни одного перевода</Typography>
			</Center>
		);
	}

	return <CategoryList />;
};

export default CategoriesPage;
