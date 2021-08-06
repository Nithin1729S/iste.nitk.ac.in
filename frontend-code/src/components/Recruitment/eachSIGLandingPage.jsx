import React from 'react';
import { Link } from 'react-router-dom';
import { dummy } from './dummyData';
import SigDescription from './components/SigDescription';
import RegisterButton from './components/RegisterButton';

class RecsSIGComponent extends React.Component {
	constructor(props) {
		super(props);
		var sigs = [
			'Catalyst',
			'Crypt',
			'Create',
			'Clutch',
			'Chronicle',
			'Charge',
			'Concrete',
			'Credit',
		];
		let curSIGname = 'Catalyst';
		if (typeof this.props.match.params !== 'undefined') {
			let cur = this.props.match.params.name;
			if (sigs.includes(cur)) curSIGname = cur;
		}
		this.state = {
			sigName: curSIGname,
			data: {
				desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis quas corporis maiores vero aut nostrum tempora voluptatem pariatur expedita deserunt itaque debitis quae dolorum commodi in consequuntur, animi enim unde!"
			},
		};
	}

	//Do axios request and get data from backend.
	// URL is /recs/
	// Make sure to pass the SIG name, which is stored in this.state.sigName
	// Use state variable data to get request from backend

	// Components on this page
	// 1. Timeline
	// 2. Cards (Take from an earlier implementation if possible, else build from scratch)
	// 3. Register button (Component not really required)

	render() {
		return (
			<>
			<div>
				Recruitment SIG page here {this.state.sigName}
			</div>
			{/* component for sig desc 
				props: signame and description
			*/}
			<SigDescription sig={this.state.sigName} desc={this.state.data.desc}/>
			{/* 
				component for registration butt  
				props : link (link of Gform)
			*/}
			<RegisterButton link=""/>
			</>
		);
	}
}
export default RecsSIGComponent;