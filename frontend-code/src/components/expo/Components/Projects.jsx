import React from 'react';

import ProjectContent from './ProjectContent';
import { constant } from '../Assets/constants';
const Projects = ({ sig }) => {
	const sigData = constant[sig];
	return (
		<>
			{sigData.map((item) => (
				<ProjectContent
					key={item.id}
					projectData={item}
					id={item.id}
					sig={sig}
				/>
			))}
		</>
	);
};
export default Projects;
