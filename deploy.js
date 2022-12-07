import Web3 from 'web3';
import { readFileSync, writeFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const deploy = async () => {
	const web3 = new Web3('http://127.0.0.1:8545');
	/**
	 * @type {Record<string, any>}
	 */
	const info = JSON.parse(
		readFileSync(resolve(__dirname, 'bin', 'Total.json'))
	);
	/**
	 * @type {{abi: import('web3-utils').AbiItem[], bytecode: string}}
	 */
	const { abi, bytecode } = info;

	const contract = new web3.eth.Contract(abi);

	try {
		const [account] = await web3.eth.getAccounts();
		await web3.eth.personal.unlockAccount(account, '0000', 0);
		const newContract = await contract
			.deploy({
				data: bytecode,
			})
			.send({
				from: account,
			});
		const { address } = newContract.options;
		writeFileSync(
			resolve(__dirname, 'src', 'shared', 'configs', 'data.ts'),
			`export const address = '${address}';\nexport const abi = ${JSON.stringify(
				abi
			)};`
		);
	} catch (error) {
		console.error(error);
	}
};

deploy();
