import * as React from 'react';
import { CreateCategoryForm } from '@/features/categories';
import { MainLayout } from '@/shared/layouts';
import { CommonProps } from '@/shared/types';
import { CategoryList } from '@/shared/components/CategoryList';

export interface CategoriesPageProps extends CommonProps {}

const CategoriesPage: React.FC<CategoriesPageProps> = () => {
	return (
		<MainLayout>
			<h2>Categories Page</h2>
			<CreateCategoryForm />
			<CategoryList />
		</MainLayout>
	);
};

export default CategoriesPage;
