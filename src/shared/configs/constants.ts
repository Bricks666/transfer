export const PROVIDER_ADDRESS = import.meta.env.VITE_API_PROVIDER;

export const getParams = {
	popup: 'p',
	transferId: 't-id',
} as const;

export const popups = {
	acceptTransfer: 'accept-t',
} as const;

export const SITE_NAME = 'TransEther';
