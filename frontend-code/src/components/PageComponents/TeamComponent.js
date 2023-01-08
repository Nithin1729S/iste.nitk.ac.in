import React from "react";

import MemberCard from "../RenderingComponents/MemberCard";
import { baseRequest } from "../../constants";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const DataHeader = (props) => {
    return (
        <div>
            <div className="col l12 s12">
                <h3>
                    <span style={{marginRight: 10}}>{props.header}</span>
                    {
                        props.visible ? 
                        <button className="btn" onClick={props.toggleVisible}><AiOutlineArrowDown /></button> : 
                        <button className="btn" onClick={props.toggleVisible}><AiOutlineArrowUp /></button>
                    }
                </h3>
            </div>
        </div>
    );
};

const DataItem = (props) => {
    // default email address if email missing in backend
    const email=props.data.email ? props.data.email : 'iste@nitk.edu.in' 
    return (
        <div className="row proj-item">
            <MemberCard
                key={props.data.id}
                isImageLeft={props.index % 2 === 0}
                name={`${props.data.user.first_name} ${props.data.user.last_name}`}
                role={props.data.role}
                content={props.data.description}
                linkedin={props.data.linkedin_url}
                email={"mailto:" + email}
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
            admin_core: [],
            core: [],
            aux_core: [],
            members: [],
        },
        visible: {
            admin_core: true,
            core: false,
            aux_core: false,
            members: false,
        }
    };

    componentDidMount() {
        console.log("Fetching. . .");
        baseRequest.get("/team/").then((res) => {
            this.setState({
                memberData: {...this.state.memberData, ...res.data},
            });
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="row center">
                        <DataHeader
                            header="Admin Core Members" 
                            toggleVisible={() => {
                                this.setState({ visible: {
                                    admin_core: !this.state.visible.admin_core }
                                });
                            }}
                            visible={this.state.visible.admin_core}
                        />
                        {this.state.visible.admin_core ? this.state.memberData.admin_core.map((data, index) => {
                            return <DataItem data={data} index={index} />;
                        }) : null}
                        
                        <DataHeader 
                            header="Core Members" 
                            toggleVisible={() => {
                                this.setState({ visible: {
                                    core: !this.state.visible.core }
                                });
                            }}
                            visible={this.state.visible.core}
                        />
                        {this.state.visible.core ? this.state.memberData.core.map((data, index) => {
                            return <DataItem data={data} index={index} />;
                        }) : null}

                        <DataHeader 
                            header="Auxiliary Core Members"
                            toggleVisible={() => {
                                this.setState({ visible: {
                                    aux_core: !this.state.visible.aux_core }
                                });
                            }}
                            visible={this.state.visible.aux_core}
                        />
                        {this.state.visible.aux_core ? this.state.memberData.aux_core.map((data, index) => {
                            return <DataItem data={data} index={index} />;
                        }) : null}
                    </div>
                </div>
                <div className="row">
                    <div className="row center">
                        <DataHeader 
                            header="Executive Members" 
                            toggleVisible={() => {
                                this.setState({ visible: {
                                    members: !this.state.visible.members }
                                });
                            }}
                            visible={this.state.visible.members}
                        />
                        {this.state.visible.members ? this.state.memberData.members.map((memberInfo) => {
                            return <MemberList memberInfo={memberInfo} />;
                        }) : null}
                    </div>
                </div>
            </div>
        );
    }
}
export default TeamComponent;
