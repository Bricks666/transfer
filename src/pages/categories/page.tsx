import * as React from 'react';
import { Header } from '@/widgets/page';
import { CreateCategoryForm } from '@/features/categories';
import { SITE_NAME } from '@/shared/configs';
import { useTitle } from '@/shared/lib';
import { CommonProps } from '@/shared/types';
import { MainLayout, PageTitle } from '@/shared/ui';
import { CategoryList } from './ui';

export interface CategoriesPageProps extends CommonProps {}

const CategoriesPage: React.FC<CategoriesPageProps> = () => {
	useTitle(`${SITE_NAME} - Категории`);

	return (
		<MainLayout header={<Header />}>
			<PageTitle title='Категории' />

			<CreateCategoryForm />
			<CategoryList />
		</MainLayout>
	);
};

export default CategoriesPage;
