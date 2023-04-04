import { routes } from '@/shared/configs';
import { createPageLoadModel } from '@/shared/lib';

export const { currentRoute, loaded, loadedWithRouteState, } =
	createPageLoadModel(routes.categories);
