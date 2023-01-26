import React from 'react'

const ImageDisplay = (props) => {
  return (
    <div className="coreImageDisplay container">
            <div className="center row">
                <div className="flexrow">
                    {props.data.map((member) => {
                        return (
                            <div key={member.id} className="core_img z-depth-2">
                                <div className="img__overlay">
                                    {member.first_name}
                                    {member.last_name}
                                    <br />
                                    {member.role}
                                </div>
                                <img
                                    src={member.image}
                                    alt="SHE Core"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
  )
}

export default ImageDisplay