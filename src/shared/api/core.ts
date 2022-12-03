import Web3 from 'web3';
import { abi, address } from '@/shared/data';

export const web3 = new Web3(import.meta.env.VITE_API_PROVIDER);
export const contract = new web3.eth.Contract(abi, address);
