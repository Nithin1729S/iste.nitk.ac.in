import React from 'react';

import SideButton from './SideButton';

const SideNav = ({ handleClick, projectId, data }) => {
	const styleHeight = { height: `${Math.min(100 / (4 * data.length - 1))}%` };
	const firstItem = data[0];
	const clickHandler = (sig) => {
		handleClick(sig);
	};
	return (
		<>
			<SideButton
				key={firstItem.id}
				handleClick={(sig) => clickHandler(sig)}
				name={firstItem.name}
				isActive={projectId === firstItem.id}
				projectId={projectId}
				itemId={firstItem.id}
				logoSide={typeof firstItem.logo === 'undefined' ? '' : firstItem.logo}
			/>
			{data.slice(1).map((item) => {
				return (
					<>
						<div style={styleHeight} />
						<SideButton
							key={item.id}
							handleClick={(sig) => clickHandler(sig)}
							name={item.name}
							isActive={projectId === item.id}
							projectId={projectId}
							itemId={item.id}
							logoSide={typeof item.logo === 'undefined' ? '' : item.logo}
						/>
					</>
				);
			})}
		</>
	);
};
export default SideNav;
