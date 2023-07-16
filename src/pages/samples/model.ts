import { sample } from 'effector';
import { createSampleModel } from '@/features/samples';
import { categoriesModel } from '@/entities/categories';
import { samplesModel } from '@/entities/samples';
import { routes } from '@/shared/configs';
import { authModel, contractModel } from '@/shared/models';

export const currentRoute = routes.samples;
export const contractInitiatedRoute =
	contractModel.chainContractInitiated(currentRoute);
export const authorizedRoute = authModel.chainAuthorized(
	contractInitiatedRoute,
	{ otherwise: routes.login.open, }
);

sample({
	clock: authorizedRoute.opened,
	target: [categoriesModel.query.start, samplesModel.query.start],
});

sample({
	clock: authorizedRoute.opened,
	target: createSampleModel.form.reset,
});
