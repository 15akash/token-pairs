import React, { ReactNode } from 'react';

interface FlexboxProps {
	direction?: 'row' | 'column';
	justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
	alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
	children?: ReactNode;
	className?: string;
}

const Flexbox = ({ direction = 'row', justifyContent = 'flex-start', alignItems = 'flex-start', children, className, ...props }: FlexboxProps) => {
	return (
		<div
			className={className}
			style={{
				display: 'flex',
				flexDirection: direction,
				justifyContent,
				alignItems
			}}
			{...props}>
			{children}
		</div>
	);
};

export default Flexbox;
