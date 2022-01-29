import React from 'react';
// import parse from 'html-react-parser';
import { sigsdata } from './Constants/EventCards';
import styles from './css/EventPage.module.css';

class SIGSquareOne extends React.Component {
	constructor(props) {
		super(props);
		let value = 0;
		if (
			typeof this.props.match.params !== 'undefined' &&
			this.props.match.params.name in
				['0', '1', '2', '3', '4', '5', 0, 1, 2, 3, 4, 5]
		) {
			value = this.props.match.params.name;
		}
		console.log(this.props.match.params);
		console.log(value);
		this.state = {
			name: value,
		};
	}
	render() {
		return (
			<div className={styles.body}>
				<div className={styles.main}>
					<div className={`container ${styles.mainCard}`}>
						<div className={styles.text}>
							<h3>{sigsdata[this.state.name]['eventName']}</h3>
							<h3 className={styles.subtitle}>
								{sigsdata[this.state.name]['sig']}
							</h3>
							<h4 className={styles.heading}>
								<i className="material-icons">description</i> Description
							</h4>
							{sigsdata[this.state.name]['desc']}
							<h4 className={styles.heading}>
								<i className="material-icons">call</i> Points of Contact
							</h4>
							{sigsdata[this.state.name]['poc']}
							<div className={styles.buttonContainer}>
								<a href={sigsdata[this.state.name]['link']}>
									<button className={`waves-effect btn ${styles.button}`}>
										REGISTER NOW!
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SIGSquareOne;
