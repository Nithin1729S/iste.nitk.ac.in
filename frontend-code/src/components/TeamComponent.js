import React from 'react';
import axios from 'axios';
import MemberCard from './MemberCard';
import MembersList from './MembersList';

class TeamComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            memberData: {
                core: [],
                aux_core: [],
                members: []
            }
        };
    }

    componentDidMount(){
        console.log("Fetching. . .")
        axios.get("http://127.0.0.1:8000/team/")
            .then(res => {
                this.setState({
                    memberData: res.data,
                });
                console.log(this.state.memberData);
            })
    }
    render(){
        return(
            <div className="container">
                            
                <div className="row"> 
                    <div className="row center">
                        <div className="col l12 s12">
                            <h3>Core Members</h3><br />
                        </div>
                        {
                            this.state.memberData.core.map((coreData,index)=>{
                                return(
                                    <div className="row proj-item">
                                        <MemberCard key={coreData.id} isImageLeft={index%2==0} name={coreData.user.first_name+ " " + coreData.user.last_name } role={coreData.role} content={coreData.description} linkedin={coreData.linkedin_url} email={"mailto:" + coreData.email} imgurl={coreData.user.avatar} />
                                    </div>
                                )
                            })
                        }
                        <div className="col l12 s12">
                            <h3>Auxillary Core</h3><br />
                        </div>
                        {
                            this.state.memberData.aux_core.map((auxCoreData,index)=>{
                                return(
                                    <div className="row proj-item">
                                        <MemberCard key={auxCoreData.id} isImageLeft={index%2==0} name={auxCoreData.user.first_name+ " " + auxCoreData.user.last_name } role={auxCoreData.role} content={auxCoreData.description} linkedin={auxCoreData.linkedin_url} email={"mailto:" + auxCoreData.email} imgurl={auxCoreData.user.avatar} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="row">
                    <div className="row center">
                        <div className="col l12 s12">
                            <h3>Executive Members</h3>
                        </div>
                        {
                            this.state.memberData.members.map((memberInfo)=>{
                                return(            
                                <div className="col l4 m6 s12 center">
                                    <MembersList key={memberInfo.id} name={memberInfo.first_name+" "+memberInfo.last_name} />
                                </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            
            

        );
    }
}
export default TeamComponent;