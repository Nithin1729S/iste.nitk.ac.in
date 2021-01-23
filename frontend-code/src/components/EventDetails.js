import React from 'react';
import Axios from 'axios';
class EventDetails extends React.Component{
    state={
        event: {}
    
    }
    
    componentDidMount(){
        let event_name = 'Cryptober' // replace with props from url
        Axios.get(`http://localhost:8000/event/${event_name}`).then(
            result =>{
                this.setState({
                    event: result.data
                })
            }
        ).catch(err => console.log(err));
    }
    render(){
        return(
            <div>
                    <div class="row">
                   <div class="card hoverable z-depth-3 col s10 push-s1">
                       <div class="card-image responsive-img">
                           <img src="{event.poster.url}"/>

                           <a id="edit" href="/eventedit" class="halfway-fab btn-floating">
                                <i class="material-icons">edit</i>
                            </a>
                       </div>
                       <div class="card-content">
                           <h5 class="center">{event.name}</h5>
                           <p class="grey-text">
                               <i class="inline-icon material-icons">date_range</i> 
                               {event.date_time}
                           </p>
                           <br/>
                           <p class="grey-text">
                               <i class="inline-icon material-icons">location_on</i>{event.venue}
                           </p>
                           <br/>
                           <p class="grey-text">
                               <i class="inline-icon material-icons">polymer</i>
                               {this.state.events[event].sigs.map(sig =>(
                                   {sig}
                               ))}
                           </p>
                           <p class="grey-text">
                               Maximum group members: {event.no_of_participants}
                           </p>
                           <br/>
                           <div class="divider"></div>
                           <h5 class="center">About the event</h5>
                           <br/>
                           <p class=" grey-text text-darken-2">
                               {event.publicity_message}
                           </p>
                           <br/>
                           <div class="divider"></div><br/>
                       </div>
                       
                       <div class="divider"></div><br/>
                       <p class=" grey-text text-darken-2">
                           Points of contact:<br/>
                           <ul>
                               {this.state.events[event].contacts.map(contact =>(
                                       {contact}
                                   ))} 
                           </ul>
                       </p><br/>
                       <div class="card-action">
                           <center>
                               <a class="indigo-text" href="{{event.form_url}}">Register Now</a>
                           </center>
                       </div>
                    </div>
               </div>
               
            </div>
        )

                }
}
export default EventDetails;