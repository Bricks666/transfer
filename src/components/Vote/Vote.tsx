import Web3 from 'web3';
import { useAuthAddress } from '../../hooks';
import { useVote } from './useVote';

export const Vote = ({ candidate, voters, against, isFinish, id }) => {
	const address = useAuthAddress();
	const mayToVote = !voters.includes(address) && !isFinish;

	const { voteFor, voteAgainst } = useVote(id);

	const againstLabel =
		Web3.utils.hexToNumberString(against) !== '0' || 'nobody';

	return (
		<div>
			<dl>
				<dt>Candidate:</dt> <dd>{candidate}</dd>
				<dt>Voters</dt>
				<dd>
					<ul>
						{voters.map((voter) => (
							<li key={voter}> {voter}</li>
						))}
					</ul>
				</dd>
				<dt>Against:</dt> <dd>{againstLabel}</dd>
				<dt>Status:</dt> <dd>{isFinish ? 'Finished' : 'Pending'}</dd>
			</dl>
			{mayToVote && (
				<>
					<button onClick={voteFor}>For</button>
					<button onClick={voteAgainst}>Against</button>
				</>
			)}
		</div>
	);
};
