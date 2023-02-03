import React from 'react'
import styled from 'styled-components';

const ImageDisplay = (props) => {
    return (
        <div className="coreImageDisplay container">
            <div className="center row">
                <div className="flexrow">
                    {props.data.map((member) => {
                        return (
                            <ImageContainer key={member.id} className=" z-depth-2">
                                <div className="img__overlay">
                                    {member.first_name}{" "}
                                    {member.last_name}
                                    <br />
                                    {member.role}
                                </div>
                                <img
                                    src={member.image}
                                    alt="SHE Core"
                                />
                            </ImageContainer>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

const ImageContainer = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;
    position: relative;
    flex-direction: row;
    margin: 2%;
`;

export default ImageDisplay