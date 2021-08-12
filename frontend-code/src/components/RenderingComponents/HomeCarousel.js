import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

import '../../css/carousel.css';
import { baseUrl } from '../../constants';
import { Link } from 'react-router-dom';

class HomeCarousel extends React.Component {
	state = {};
	componentDidMount() {
		if (!this.props.photosList || !this.props.photosList.length) return;
		let elems = document.querySelectorAll('.carousel');
		M.Carousel.init(elems, {
			fullWidth: true,
			indicators: true,
			duration: 300,
			numVisible: 3,
		});
		let instance = M.Carousel.getInstance(
			document.getElementById('desktop-carousel')
		);
		setInterval(function () {
			instance.next();
		}, 3500);
	}
	render() {
		let carouselSortedList = this.props.photosList.sort((a, b) => a.id - b.id);
		let carouselContent = carouselSortedList.map((item) => {
			return (
				<a key={item.name} className="carousel-item" href="/">
					<img
						className="carousel_images"
						alt={item.name}
						src={`${baseUrl}${item.image}`}
					></img>
				</a>
			);
		});

		// Uncomment and use when necessary
		// let button = (
		// 	<div className="carousel-fixed-item center">
		// 		<Link to="/recs" className="btn white-text dark">
		// 			APPLY FOR RECRUITMENTS!
		// 		</Link>
		// 	</div>
		// );

		let button = <></>;
		return (
			<>
				<div className="carousel carousel-slider slides" id="desktop-carousel">
					{button}
					{carouselContent}
				</div>
				<div className="carousel carousel-slider slides" id="mobile-carousel">
					{button}
					{carouselContent}
				</div>
			</>
		);
	}
}

export default HomeCarousel;
