import FlexBox from '@/ui/foundations/flexbox';
import DownArrowIcon from '@/ui/components/Icons/DownArrowIcon';
import ShareButton from '@/ui/components/share-button';
import TokenContext from '@/ui/store/token-context';
import React, { useContext, useMemo } from 'react';
import Image from 'next/image';
import styles from './TokenHeader.module.scss';
import { useTokenImages } from '@/ui/components/custom-hook/getImages';

const TokenHeaderInfo = () => {
	const tokenCtx = useContext(TokenContext);
	const getTokenLogo = useTokenImages();

	const tokenLogo = useMemo(() => getTokenLogo.find(image => tokenCtx.activeToken.id == image.id), [getTokenLogo, tokenCtx.activeToken.id]);

	return (
		<>
			<FlexBox justifyContent="space-between" alignItems="center" className={styles['token-header-con']}>
				<FlexBox className={styles['token-name-con']} alignItems="center">
					<h1>{tokenCtx.activeToken.name}</h1>
					<h1 style={{ color: 'rgb(117, 120, 181)' }}>({tokenCtx.activeToken.id.toLocaleUpperCase()})</h1>
				</FlexBox>
				<FlexBox className={styles['select-token-con']} alignItems="center">
					<FlexBox className={styles['select-token']} alignItems="center">
						<Image src={tokenLogo?.image ?? ''} alt="logo" width={26} height={26} />
						<h4>{tokenCtx.activeToken.name}</h4>
						<DownArrowIcon />
					</FlexBox>
					<ShareButton />
				</FlexBox>
			</FlexBox>
			<h1 style={{ fontSize: '48px', lineHeight: '50px', margin: '0' }}>{tokenCtx.activeToken.currentPrice}</h1>
		</>
	);
};

export default TokenHeaderInfo;
