import React from 'react';
import TitleWithLine from '../../../../RenderingComponents/TitleWithLine';
import { instructions } from '../../../constants';
import parse from 'html-react-parser';
import styles from './instructions.module.css';

const RecInstructions = () => {
	return (
		<div>
			<TitleWithLine title="Instructions" />
			<ul>
				{instructions.map((item) => {
					return (
						<div className={styles.instructions} style={{ color: 'black' }}>
							<li style={{ listStyleType: 'disc' }}>{parse(item)}</li>
						</div>
					);
				})}
			</ul>
		</div>
	);
};

export default RecInstructions;
