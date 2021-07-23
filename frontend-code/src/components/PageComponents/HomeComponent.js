import React from 'react';

import CoreImage from '../AggregatingComponents/CoreImage';
import HomeCarousel from '../RenderingComponents/HomeCarousel';
import SigCards from '../AggregatingComponents/SigCards';
import TheNumbers from '../AggregatingComponents/TheNumbers';
import TitleWithLine from '../RenderingComponents/TitleWithLine';
import { baseRequest } from '../../constants';

class HomeComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			homeData: [],
		};
		this.fetchHome = this.fetchHome.bind(this);
	}
	async fetchHome() {
		await baseRequest.get('/home/').then((res) => {
			this.setState({
				homeData: res.data,
			});
		});
	}

	componentDidMount() {
		this.fetchHome();
	}

	render() {
		if (this.state.homeData.length !== 0) {
			return (
				<>
					<HomeCarousel photosList={this.state.homeData.carousel} />
					<TitleWithLine title="About Us" />
					<div className="center container">
						<p className="text text-lighten-4">
							ISTE NITK strives to supplement the campus’ academic environment
							by conducting a host of different technical events, workshops, and
							annual projects, aimed at making learning fun, insightful and
							impactful. With a host of various Special Interest Groups, or
							SIGs, our community specializes in domains ranging from various
							branches of engineering, to business, literature and media, ISTE
							NITK constantly strives to develop its’ members technical
							capabilities, and nurture a sense of creativity
						</p>
					</div>
					<div className="container sigCard">
						<TitleWithLine title="Special Interest Groups SIG(s)" />
						<SigCards cardList={this.state.homeData.sigs} linkOuter="/sig/" />
					</div>
					<TheNumbers stats={this.state.homeData.stats} />
					<CoreImage
						core={this.state.homeData.core}
						aux_core={this.state.homeData.aux_core}
					/>
				</>
			);
		} else {
			return <></>;
		}
	}
}
export default HomeComponent;
