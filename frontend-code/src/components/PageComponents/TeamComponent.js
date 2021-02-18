import React from "react";
import axios from "axios";

import MemberCard from "../RenderingComponents/MemberCard";

const DataHeader = (props) => {
    return (
        <div className="col l12 s12">
            <h3>{props.header}</h3>
            <br />
        </div>
    );
};

const DataItem = (props) => {
    return (
        <div className="row proj-item">
            <MemberCard
                key={props.data.id}
                isImageLeft={props.index % 2 === 0}
                name={`${props.data.user.first_name} ${props.data.user.last_name}`}
                role={props.data.role}
                content={props.data.description}
                linkedin={props.data.linkedin_url}
                email={"mailto:" + props.data.email}
                imgurl={props.data.user.avatar}
            />
        </div>
    );
};

const MemberList = (props) => {
    const name = props.memberInfo.first_name + " " + props.memberInfo.last_name;
    return (
        <div className="col l4 m6 s12 center">
            <h6 key={props.memberInfo.id}>{name}</h6>
        </div>
    );
};

class TeamComponent extends React.Component {
    state = {
        memberData: {
            core: [],
            aux_core: [],
            members: [],
        },
    };

    componentDidMount() {
        console.log("Fetching. . .");
        axios.get("http://127.0.0.1:8000/team/").then((res) => {
            this.setState({
                memberData: res.data,
            });
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="row center">
                        <DataHeader header="Core Members" />
                        {this.state.memberData.core.map((data, index) => {
                            return <DataItem data={data} index={index} />;
                        })}
                        <DataHeader header="Auxillary Core Members" />
                        {this.state.memberData.aux_core.map((data, index) => {
                            return <DataItem data={data} index={index} />;
                        })}
                    </div>
                </div>
                <div className="row">
                    <div className="row center">
                        <DataHeader header="Executive Members" />
                        {this.state.memberData.members.map((memberInfo) => {
                            return <MemberList memberInfo={memberInfo} />;
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
export default TeamComponent;
