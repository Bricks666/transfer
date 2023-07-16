import { createDomain } from 'effector';

const appDomain = createDomain();

export const started = appDomain.event();
