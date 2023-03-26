import React, { useContext, useMemo } from 'react';
import styles from './TokenInformation.module.scss';
import Flexbox from '@/ui/foundations/flexbox';
import TokenContext from '@/ui/store/token-context';

const TokenInformation = () => {
	const tokenCtx = useContext(TokenContext);

	return (
		<Flexbox direction="column" className={styles['token-info-con']}>
			<h2>{`About ${tokenCtx.activeToken.name}`}</h2>
			<p>{tokenCtx.activeToken.about}</p>
			<div className={styles['token-details-con']}>
				<div>
					<p>Market Cap Rank</p>
					<h3>{tokenCtx.activeToken.marketCapRank}</h3>
				</div>
				<div>
					<p>Market Cap</p>
					<h3>{tokenCtx.activeToken.marketCap}</h3>
				</div>
				<div>
					<p>Circulating Supply</p>
					<h3>{tokenCtx.activeToken.circulatingSupply}</h3>
				</div>
				<div>
					<p>All-Time ROI</p>
					<h3>{tokenCtx.activeToken.allTimeRoi}</h3>
				</div>
				<div>
					<p>24h Volumne</p>
					<h3>{tokenCtx.activeToken.volume24High}</h3>
				</div>
			</div>
		</Flexbox>
	);
};

export default TokenInformation;
