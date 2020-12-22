import React from 'react';
import users from './dummyData';
import CoreImageDisplay from './CoreImageDisplay';


class CoreImage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            team:"The Core",
            info: users
        }
    }
    render() {
        return (
            <div className="container">
                <CoreImageDisplay title={this.state.team} data={this.state.info}/>
            </div>
        );
    }
}

export default CoreImage;