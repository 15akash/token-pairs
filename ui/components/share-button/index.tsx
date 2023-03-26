import React from 'react';
import ShareIcon from '../Icons/ShareIcon';
import styles from './ShareButton.module.scss';

const ShareButton = () => {
	return (
		<button className={styles['search-btn-con']}>
			<ShareIcon />
			<h4>Share</h4>
		</button>
	);
};

export default ShareButton;
