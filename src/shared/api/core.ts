import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import { PROVIDER_ADDRESS, abi, address } from '../configs';

export const web3 = new Web3(PROVIDER_ADDRESS);
export const contract = new web3.eth.Contract(abi as AbiItem[], address);
