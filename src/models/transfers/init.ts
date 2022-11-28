import { transfersApi } from '@/api';
import { acceptFx, addFx, cancelFx, getAllFx } from './units';

getAllFx.use(transfersApi.getAll);
addFx.use(transfersApi.create);
acceptFx.use(transfersApi.accept);
cancelFx.use(transfersApi.cancel);
