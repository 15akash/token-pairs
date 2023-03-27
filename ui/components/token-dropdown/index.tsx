import React, { useContext, useMemo } from 'react';
import Flexbox from '@/ui/foundations/flexbox';
import DownArrowIcon from '../Icons/DownArrowIcon';
import Input from '../input';
import styles from './TokenDropdown.module.scss';
import TokenContext from '@/ui/store/token-context';
import Image from 'next/image';
import { useTokenImages } from '../custom-hook/getImages';

const TokenDropdown = (props: any) => {
	const tokenCtx = useContext(TokenContext);
	const tokenLogo = useTokenImages();

	const imageLogo = useMemo(
		() => tokenLogo.find(t => (props.title === 'You Receive' ? t.id === tokenCtx.tokenReceive.id : t.id === tokenCtx.tokenPay.id))?.image,
		[props, tokenCtx, tokenLogo]
	);

	return (
		<Flexbox direction="column" className={styles['main-container']}>
			<h4>{props.title}</h4>
			<div className={styles['select-token-con']}>
				<h2
					onClick={() => {
						props.setSelectTitle(props.title);
						props.setIsTokenListShown(true);
					}}>
					{imageLogo && <Image src={imageLogo} alt={props.title} className={styles['logo']} />}
					{props.title === 'You Receive' ? tokenCtx.activeToken.id.toLocaleUpperCase() : tokenCtx.tokenPay.id?.toLocaleUpperCase() ?? 'Choose Token'}
					<div style={{ marginLeft: '7px', display: 'flex', alignItems: 'center' }}>
						<DownArrowIcon />
					</div>
				</h2>
				<Input />
			</div>
		</Flexbox>
	);
};

export default TokenDropdown;
