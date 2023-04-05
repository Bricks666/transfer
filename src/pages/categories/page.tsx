import { Typography } from '@mui/material';
import * as React from 'react';
import { Header } from '@/widgets/page';
import { CreateCategoryForm } from '@/features/categories';
import { CommonProps } from '@/shared/types';
import { MainLayout } from '@/shared/ui';
import { pageModel } from './models';
import { CategoryList } from './ui';

export interface CategoriesPageProps extends CommonProps {}

const CategoriesPage: React.FC<CategoriesPageProps> = () => {
	return (
		<MainLayout header={<Header />}>
			<Typography variant='h4' align='center' component='h1'>
				Categories
			</Typography>
			<CreateCategoryForm />
			<CategoryList />
		</MainLayout>
	);
};

pageModel.loaded();

export default CategoriesPage;
