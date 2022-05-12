import React from "react";
import styled from 'styled-components'

import SigProjectCard from "../RenderingComponents/SigProjectCard";
import { baseRequest } from "../../constants";
import TitleWithLine from "../RenderingComponents/TitleWithLine";
import {contacts} from '../SMP22/contacts';


class SGPSigComponent extends React.Component {
    state = { data: [],contacts : "" };
    componentDidMount() {
        const { match } = this.props;
        const sigName = match.params.name;
        baseRequest
            .get(`/smp/${match.params.name}/`)
            .then((res) => this.setState(
                {
                    data: res.data,
                    contacts : contacts[sigName]
                }));
        
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
                    <img src="https://via.placeholder.com/1920x1080.png?text=SMP+Poster" alt="SMP Poster" />
                </PosterImageContainer>
                <TitleWithLine title={ "SMPs Offered" } />
                {/* <div className="row center">
                </div> */}
                { smpsList }
                {/* <div className="row project-item">
                <SigProjectCard
                        key={101}
                        isImageLeft={true}
                        // projID={file_url}
                        name= "SMP Test"
                        description= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem magni dolor dignissimos enim dolorem neque, nobis officia ad dolorum, hic amet, sed modi. Dolor omnis suscipit aliquam perferendis neque quos?
                Ullam, in explicabo labore cumque voluptatum repudiandae nihil ad obcaecati repellendus suscipit veniam, incidunt facilis maiores accusantium porro officiis aliquam cupiditate ipsa aperiam! Architecto expedita sed dolore. Atque, sint cumque!
                Voluptatem quas eaque reprehenderit iste ratione, tempore eum corporis adipisci nobis blanditiis dicta ut quo! Quidem quam optio impedit sapiente, voluptas enim sequi at ab alias, nostrum ut cum nulla."
                        imgUrl="https://via.placeholder.com/400?text=SMP image"
                        isLinkExternal={true}
                        // tools={softwares}
                        showButton={false}
                    />
                </div> */}
                
                <div className="row">
                    <div className="col s12">
                        <h5>For any queries, contact :</h5>
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
        width: 100%;
    }
`
