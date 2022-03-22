import React from 'react';

import Description from './components/Description';
import EventCards from './components/EventCards';
import { description,  eventData,  } from './Constants';
import Timeline from './components/Timeline';
import TitleWithLine from '../RenderingComponents/TitleWithLine';
class SquareOne extends React.Component {
	render() {
		const { title, desc, img } = description;
		return (
			<>
				<Description title={title} desc={desc} img={img} />
				{/* <TitleWithLine title="Timeline" /> */}
				{/* <Timeline TimelineData={timelineData} /> */}
				<TitleWithLine title="Events" />
				<EventCards EventData={eventData} />
			</>
		);
	}
}
export default SquareOne;
