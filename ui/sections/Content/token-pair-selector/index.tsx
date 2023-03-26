import SettingsIcon from '@/ui/components/Icons/SettingsIcon';
import Input from '@/ui/components/input';
import Flexbox from '@/ui/foundations/flexbox';
import React from 'react';
import styles from './TokenPairSelector.module.scss';

const TokenPairSelector = () => {
	return (
		<Flexbox direction="column" className={styles['token-pair-selector']}>
			<Flexbox alignItems="center" justifyContent="space-between" className={styles['place-order-settings']}>
				<Flexbox className={styles['market-limit-con']}>
					<p>Market</p>
					<p>Limit</p>
				</Flexbox>
				<SettingsIcon />
			</Flexbox>
			<Flexbox direction="column">
				<h4>You pay</h4>
				<div className={styles['select-token-con']}>
					<h4>Chose token</h4>
					<Input />
				</div>
			</Flexbox>
			<Flexbox direction="column">
				<h4>You Receive</h4>
				<div className={styles['select-token-con']}>
					<h4>Chose token</h4>
					<Input />
				</div>
			</Flexbox>
			<button>Connect Wallet</button>
		</Flexbox>
	);
};

export default TokenPairSelector;
