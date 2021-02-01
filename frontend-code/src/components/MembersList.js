import React from 'react';

class MembersList extends React.Component{    
    render(){
        return(
            <h6>{this.props.name}</h6>
        );
    }
};

export default MembersList;