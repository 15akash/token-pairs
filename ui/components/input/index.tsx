import Flexbox from '@/ui/foundations/flexbox';
import React from 'react';
import styles from './Input.module.scss';

const Input = () => {
	return (
		<Flexbox direction="column" alignItems="flex-end" className={styles['input-con']}>
			<input type="number" placeholder="0" />
			<p>$0.00</p>
		</Flexbox>
	);
};

export default Input;
