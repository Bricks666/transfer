import { samplesApi } from '@/api';
import { addFx, getAllFx } from './units';

getAllFx.use(samplesApi.getAll);
addFx.use(samplesApi.create);
