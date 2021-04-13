import React from "react";

import CoreImageDisplay from "./CoreImageDisplay";

class CoreImage extends React.Component {
    render() {
        return (
            <div>
                <CoreImageDisplay title="The Core" data={this.props.core} />
                <CoreImageDisplay
                    title="Auxiliary Core"
                    data={this.props.aux_core}
                />
            </div>
        );
    }
}

export default CoreImage;
