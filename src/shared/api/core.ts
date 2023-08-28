import { createContractsIntegration } from '@bricks-ether/contracts-integration';
import Web3 from 'web3';
import {
	CONTRACTS_SERVICE,
	CONTAINER_ID,
	PROVIDER_ADDRESS,
	abi,
	CONTRACTS_TOKEN
} from '../configs';

const provider = `${window.location.origin}${PROVIDER_ADDRESS}`;

export const web3 = new Web3(provider);
export const personal = new Web3.modules.Personal(web3.provider);

export const { fetch, createRequest, } = createContractsIntegration({
	abi,
	containerId: CONTAINER_ID,
	apiToken: CONTRACTS_TOKEN,
	network: provider,
	host: CONTRACTS_SERVICE,
	normalizeResponse: true,
});
