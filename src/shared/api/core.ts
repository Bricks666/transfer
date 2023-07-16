import { createContractsIntegration } from '@bricks-ether/contracts-integration';
import Web3, { HttpProvider } from 'web3';
import {
	CONTRACTS_SERVICE,
	CONTRACT_NAME,
	PROVIDER_ADDRESS,
	abi
} from '../configs';

const provider = new HttpProvider(
	`${window.location.origin}${PROVIDER_ADDRESS}`
);

export const web3 = new Web3(provider);
export const personal = new Web3.modules.Personal(web3.provider);

export const { fetch, createRequest, } = createContractsIntegration({
	abi,
	contractName: CONTRACT_NAME,
	providerHost: provider,
	contractsServiceHost: CONTRACTS_SERVICE,
	normalizeResponse: true,
});
