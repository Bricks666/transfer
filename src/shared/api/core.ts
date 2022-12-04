import Web3 from 'web3';
import { abi, address } from '@/shared/data';
import { PROVIDER_ADDRESS } from '../configs';

export const web3 = new Web3(PROVIDER_ADDRESS);
export const contract = new web3.eth.Contract(abi, address);
