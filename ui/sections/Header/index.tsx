import Image from 'next/image';
import React from 'react';
import logo from '../../assets/logo/logo.webp';
import AvatarIcon from '../../components/Icons/AvatarIcon';
import HomeIcon from '../../components/Icons/HomeIcon';
import MenuIcon from '../../components/Icons/MenuIcon';
import SearchIcon from '../../components/Icons/SearchIcon';
import TradeIcon from '../../components/Icons/TradeIcon';
import styles from './Header.module.scss';

const Header = () => {
	return (
		<div className={styles['header-con']}>
			<div className={styles['logo-column']}>
				<Image src={logo} alt="logo" style={{ width: '32px', height: '32px' }} />
				<a>Matcha</a>
			</div>
			<div className={styles['header-nav-column']}>
				<div className={styles['search-column']}>
					<input type="text" placeholder="Search by token, name, symbol or address.." />
					<SearchIcon />
				</div>
				<div className={styles['nav-column']}>
					<div className={styles['menu-left-column']}>
						<div>
							<HomeIcon />
							<a>Home</a>
						</div>
						<div>
							<TradeIcon />
							<a>Trade</a>
						</div>
					</div>
					<div className={styles['menu-right-column']}>
						<MenuIcon />
						<div className={styles['avatar-icon-con']}>
							<AvatarIcon />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
