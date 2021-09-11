import React, { Component } from 'react';
import styles from './css/registerButton.module.css';

class RegisterButton extends Component {
	render() {
		return (
			<div className="row center">
				<a href={this.props.link}>
					<button
						className={`center-align waves-effect waves-light z-depth-3 btn-large ${styles.register}`}
						style={{ backgroundColor: 'var(--primaryDarker)' }}
					>
						REGISTER NOW !
					</button>
				</a>
			</div>
		);
	}
}

export default RegisterButton;
