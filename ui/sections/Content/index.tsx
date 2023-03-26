import React from 'react';
import TokenInformation from './token-information';
import styles from './Content.module.scss';
import Image from 'next/image';
import TokenHeader from './token-header';
import chartImage from '../../assets/images/chart.png';
import Flexbox from '@/ui/foundations/flexbox';
import TokenPairSelector from './token-pair-selector';

const Content = () => {
	return (
		<Flexbox className={styles['content-con']}>
			<Flexbox direction="column" className={styles['content-left-con']}>
				<TokenHeader />
				<Image src={chartImage} alt="chart" className={styles['chart']} />
				<TokenInformation />
			</Flexbox>
			<Flexbox className={styles['content-right-con']}>
				<TokenPairSelector />
			</Flexbox>
		</Flexbox>
	);
};

export default Content;
