import React from 'react';
import Details from './Details';


class Project extends React.Component{
    render(){
        const id=19;
        return(
            <div>
     <Details id={id}/>
            </div>
        );
    }
}
export default Project;