import React, { Component } from 'react';
import Styles from './css/timeline.module.css';

class Timeline extends Component {
    constructor(props){
        super(props);
        this.timelineRef = React.createRef();
    }
    formattedDate(date) {
        //date filter 
        let dateFilter = new Date('2022-12-31');
	    if (dateFilter.getTime() === date.getTime()) {
		    return "TBD";
        }
        //return formatted date
        let year = date.getFullYear();
        let month = (1 + date.getMonth()).toString().padStart(2, '0');
        let day = date.getDate().toString().padStart(2, '0');
        return day + '-' + month + '-' + year;
    }
    
    render() {
        const timelineItems = this.props.rounds.map((round) => {
            let date = this.formattedDate(new Date(round.date_time));
            return (
            <div className={Styles.timelineItem}>
                <p className={Styles.name}>{date}</p>
                <span className={Styles.point}></span>
                <p className={Styles.description}>
                    {round.name}
                </p>
            </div>
            );
        });
        return (
            <div className={Styles.timelineContainer}>
                <button className={Styles.arrowBtn}>
                    <i className="material-icons" onClick = {() => this.timelineRef.current.scrollLeft -= 200}>chevron_left</i>
                </button>
                <div ref={this.timelineRef} className={Styles.timeline}>
                    {timelineItems}
                </div>
                <button className={Styles.arrowBtn}>
                    <i className="material-icons" onClick = {() => this.timelineRef.current.scrollLeft += 200}>chevron_right</i>
                </button>
            </div>
        );
    }
}

export default Timeline;