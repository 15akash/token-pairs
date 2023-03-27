import React, { useContext, useMemo } from 'react';
import styles from './SelectToken.module.scss';
import Flexbox from '@/ui/foundations/flexbox';
import CloseIcon from '../Icons/CloseIcon';
import SearchIcon from '../Icons/SearchIcon';
import TokenContext from '@/ui/store/token-context';
import { IToken } from '@/ui/interfaces/TokenInterface';
import Image from 'next/image';
import { useTokenImages } from '../custom-hook/getImages';

const SelectToken = (props: any) => {
	const tokenCtx = useContext(TokenContext);

	const tokenLogo = useTokenImages();

	return (
		<Flexbox direction="column" className={styles['token-list-con']}>
			<Flexbox direction="column" className={styles['token-list-content']}>
				<Flexbox alignItems="center" justifyContent="space-between" className={styles['token-list-header']}>
					<h4>{props.title}</h4>
					<button onClick={() => props.setIsTokenListShown(false)}>
						<CloseIcon />
					</button>
				</Flexbox>
				<Flexbox alignItems="center" className={styles['token-pair-input-con']}>
					<div style={{ position: 'absolute', left: '0', top: '0' }}>
						<SearchIcon />
					</div>
					<input placeholder="Search or paste any token" />
				</Flexbox>
				<Flexbox direction="column" className={styles['token-list']}>
					{tokenCtx.tokens.map((token: IToken) => {
						return (
							<div
								key={token.id}
								onClick={() => {
									tokenCtx.selectToken(token, props.title);
									props.setIsTokenListShown(false);
								}}
								className={styles['token-con']}>
								<Image
									src={tokenLogo.find(t => t.id === token.id)?.image ?? ''}
									style={{ borderRadius: '50px', border: '1px solid black', marginRight: '20px' }}
									alt={token.id}
									width={46}
									height={46}
								/>
								<h4>{`${token.name}`} &nbsp;</h4>
								<h4 style={{ color: 'rgb(117, 120, 181)' }}>{`- ${token.id.toLocaleUpperCase()}`}</h4>
							</div>
						);
					})}
				</Flexbox>
			</Flexbox>
		</Flexbox>
	);
};

export default SelectToken;
