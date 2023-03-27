import React from 'react';
import Flexbox from '@/ui/foundations/flexbox';
import DownArrowIcon from '../Icons/DownArrowIcon';
import Input from '../input';
import styles from './TokenDropdown.module.scss';

const TokenDropdown = (props: any) => {
	return (
		<Flexbox direction="column">
			<h4>{props.title}</h4>
			<div className={styles['select-token-con']}>
				<h2
					onClick={() => {
						props.setSelectTitle(props.title);
						props.setIsTokenListShown(true);
					}}>
					Chose token
					<DownArrowIcon />
				</h2>
				<Input />
			</div>
		</Flexbox>
	);
};

export default TokenDropdown;
