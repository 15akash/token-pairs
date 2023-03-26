import Flexbox from '@/ui/foundations/flexbox';
import React from 'react';
import styles from './Input.module.scss';

const Input = () => {
	return (
		<Flexbox className={styles['input-con']}>
			<input type="number" placeholder="0" />
			<p></p>
		</Flexbox>
	);
};

export default Input;
