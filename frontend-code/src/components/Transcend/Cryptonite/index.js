import React from 'react';
import styles from './css/crypt.module.css';
import { imgAdd } from './imgAddress.js';

import { baseRequest } from '../../../constants';

class Cryptonite extends React.Component {
	state = {
		inputVal: 'List of Integers',
		inputSeq: [{ input: 'List of Integers', output: 'Output here' }],
		rotation: 0,
	};
	currId = this.props.match.params.id;
	numInputKey = `inputs used ${this.currId}`;
	InputObjectKey = `array current ${this.currId}`;
	componentDidMount() {
		const numInputs = localStorage.getItem(this.numInputKey);
		console.log(numInputs);
		if (numInputs !== null) {
			//TODO: Load up the data for the user here
			const initialarray = JSON.parse(localStorage.getItem(this.InputObjectKey))
				? JSON.parse(localStorage.getItem(this.InputObjectKey)).arr
				: [{ input: 'List of integers', output: 'Output here' }];
			this.setState({
				inputSeq: initialarray,
				inputVal: initialarray[0] ? initialarray[0].input : 'List of integers',
			});
			return;
		}
		localStorage.setItem(this.numInputKey, 0);
		localStorage.setItem(this.InputObjectKey, JSON.stringify({ arr: [] }));
	}
	onChangeHandler = (e) => {
		this.setState({ inputVal: e.target.value });
	};
	callAPI = () => {
		//TODO: add API call. increment number of inputs ONLY on successful return from API
		this.setState({ rotation: 1 });
		baseRequest
			.post('/cryptonite/blackbox/', {
				id: this.currId,
				input: this.state.inputVal,
			})
			.then((res) => {
				const arrayToBeEntered = JSON.parse(
					localStorage.getItem(this.InputObjectKey)
				).arr;
				const ObjectToBeStored = {
					arr: [
						{ input: this.state.inputVal, output: res.data.answer },
						...arrayToBeEntered,
					],
				};
				localStorage.setItem(
					this.InputObjectKey,
					JSON.stringify(ObjectToBeStored)
				);
				localStorage.setItem(
					this.numInputKey,
					Number(localStorage.getItem(this.numInputKey)) + 1
				);
				this.setState({ inputSeq: ObjectToBeStored.arr, rotation: 0 });
			})
			.catch(() => {
				console.log('error');
			});
	};
	render() {
		return (
			<div>
				<label htmlFor="inputString">
					<div className={styles.container}>
						<div className={`center ${styles.input}`}>
							<div className={styles.heading}>Input</div>
							<input
								type="text"
								onChange={this.onChangeHandler}
								name="inputString"
								value={this.state.inputVal}
							/>
						</div>

						<div className={styles.blackBoxCon}>
							<div className={styles.blackBoxContainer}>
								<div className={styles.blackBox}>
									<img src={imgAdd} className={styles.image} />
								</div>
							</div>

							{this.state.rotation ? (
								<div className={styles.btncon}>
									<button
										className={`btn indigo ${styles.btn}`}
										onClick={this.callAPI}
										disabled
									>
										Get corresponding output
									</button>
								</div>
							) : (
								<div className={styles.btncon}>
									<button
										className={`btn indigo ${styles.btn}`}
										onClick={this.callAPI}
									>
										Generate Output
									</button>
								</div>
							)}
						</div>
						<div className={`center ${styles.output}`}>
							<div className={styles.heading}>Output</div>
							<div className={styles.opresult}>
								{this.state.inputSeq[0]
									? this.state.inputSeq[0].output
									: 'Output here'}
							</div>
						</div>
					</div>
				</label>
				<div className={styles.tableMain}>
					<table className={styles.table}>
						<tr>
							<th>Input</th>
							<th>Output</th>
						</tr>
						{this.state.inputSeq.map((item) => (
							<tr>
								<td>{item.input}</td>
								<td>{item.output}</td>
							</tr>
						))}
					</table>
				</div>
			</div>
		);
	}
}
export default Cryptonite;
