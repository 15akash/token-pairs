import CloseIcon from '@/ui/components/Icons/CloseIcon';
import DownArrowIcon from '@/ui/components/Icons/DownArrowIcon';
import SearchIcon from '@/ui/components/Icons/SearchIcon';
import SettingsIcon from '@/ui/components/Icons/SettingsIcon';
import Input from '@/ui/components/input';
import SelectToken from '@/ui/components/select-token';
import TokenDropdown from '@/ui/components/token-dropdown';
import Flexbox from '@/ui/foundations/flexbox';
import React, { useState } from 'react';
import styles from './TokenPairSelector.module.scss';

const TokenPairSelector = () => {
	const [isTokenListShown, setIsTokenListShown] = useState<boolean>(false);
	const [selectTitle, setSelectTitle] = useState<string>('');

	return (
		<Flexbox direction="column" className={styles['token-pair-selector']}>
			<Flexbox alignItems="center" justifyContent="space-between" className={styles['place-order-settings']}>
				<Flexbox className={styles['market-limit-con']}>
					<p>Market</p>
					<p>Limit</p>
				</Flexbox>
				<SettingsIcon />
			</Flexbox>
			<TokenDropdown setIsTokenListShown={setIsTokenListShown} title="You Pay" setSelectTitle={setSelectTitle} />
			<TokenDropdown setIsTokenListShown={setIsTokenListShown} title="You Receive" setSelectTitle={setSelectTitle} />
			{isTokenListShown && <SelectToken setIsTokenListShown={setIsTokenListShown} title={selectTitle} />}
			<button>Connect Wallet</button>
		</Flexbox>
	);
};

export default TokenPairSelector;
