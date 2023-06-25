import { sample } from 'effector';
import { requestsModel } from '@/entities/requests';
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
	target: [requestsModel.query.start, samplesModel.query.start],
});
