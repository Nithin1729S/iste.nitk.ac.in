import React from "react";
import styled from 'styled-components'

import SigProjectCard from "../RenderingComponents/SigProjectCard";
import { baseRequest } from "../../constants";
import TitleWithLine from "../RenderingComponents/TitleWithLine";
import {contacts} from '../SMP22/contacts';


class SGPSigComponent extends React.Component {
    state = { data: [],contacts : "",poster_img:"" };
    componentDidMount() {
        const { match } = this.props;
        const sigName = match.params.name;
        baseRequest
            .get(`/smp/${match.params.name}/`)
            .then((res) => {
                this.setState(
                    {
                        data: res.data,
                        contacts: contacts[sigName],
                        poster_img : res.data[0].file_url
                    }
                )
                // console.log(res.data)
                }
                );
        
        
    }
    render() {
        if (!this.state.data) return null;
        const smpsList = this.state.data.map((item) => {
            const { id, name, summary, img_url, file_url, softwares } = item;
            return (
                <div className="row project-item">
                    <SigProjectCard
                        key={id}
                        isImageLeft={true}
                        projID={file_url}
                        name={name}
                        description={summary}
                        imgUrl={img_url}
                        isLinkExternal={true}
                        tools={ softwares }
                        showButton={false}
                    />
                </div>
            );
        });
        return (
            <div className="center">
                <TitleWithLine title={ this.props.match.params.name } />
                
                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdcYIZcDm08OHC7RY4rui9p3DbhbXJd4zYcq4vt8GR06QHa6w/viewform"
                    className="waves-light btn pulse"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                        marginBottom: "20px",
                        background: "var(--primary)",
                    }}
                >
                    Click here to register!!!
                </a>
                {/* The poster goes here */ }
                <PosterImageContainer className="row center">
                    <img src={this.state.poster_img} alt="SMP Poster" />
                </PosterImageContainer>
                <TitleWithLine title={ "SMPs Offered" } />
                
                { smpsList }
                
                
                <div className="row">
                    <div className="col s12">
                        <h5>For any queries, contact on WhatsApp :</h5>
                        {this.state.contacts}
                    </div>
                </div>
            </div>
        );
    }
}
export default SGPSigComponent;

const PosterImageContainer = styled.div`
    width: 60%;
    img{
        width: 90%;
    }
    @media only screen and (max-width:700px){
        width: 90%;
    }
`
