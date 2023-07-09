import { createContractsIntegration } from '@bricks-ether/contracts-integration';
import Web3 from 'web3';
import {
	CONTRACTS_SERVICE,
	CONTRACT_NAME,
	PROVIDER_ADDRESS,
	abi
} from '../configs';

export const web3 = new Web3(PROVIDER_ADDRESS);
export const personal = new Web3.modules.Personal(web3.provider);

export const { fetch, createRequest, } = createContractsIntegration({
	abi,
	contractName: CONTRACT_NAME,
	providerHost: PROVIDER_ADDRESS,
	contractsServiceHost: CONTRACTS_SERVICE,
	normalizeResponse: true,
});
