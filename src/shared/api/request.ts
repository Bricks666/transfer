import { CONTRACTS_SERVICE } from '../configs';

export const request = async <T>(
	url: string,
	options: globalThis.RequestInit = {}
): Promise<T> => {
	const response = await fetch(url, options);

	if (!response.ok) {
		throw new Error(response.statusText);
	}

	const contentType = response.headers.get('Content-Type');

	if (contentType?.toLowerCase().includes('application/json')) {
		return response.json();
	}

	return response.text() as T;
};

export const contractsServiceRequest = <T>(
	url: string,
	options: globalThis.RequestInit = {}
): Promise<T> => {
	const preparedUrl = `${CONTRACTS_SERVICE}${url}`;
	return request(preparedUrl, options);
};
