import React from 'react';
import '../../css/CoreImagesDisplay.css';

const CoreImageDisplay = props => {
    return (
        
         <div className="center row">
                <h3>
                    <span className="animateLine">
                        {props.title}
                    </span>
                </h3> 
                <div className="flexrow">
                    {props.data.map(
                        function (member) {
                            return (
                              <a key={member._id} className="core_img z-depth-2">
                                <div className="img__overlay">
                                    {member.name.first} {member.name.last}
                                </div> 
                                <img src={member.picture} alt="person"/>
                                </a>  
                            );
                        }
                    )}
                </div>
            </div>
        
    );
}

export default CoreImageDisplay;