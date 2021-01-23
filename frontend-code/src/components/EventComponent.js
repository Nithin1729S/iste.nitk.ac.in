import React from 'react';
import axios from 'axios';
class EventComponent extends React.Component{
state={
    events:[]

}

componentDidMount(){
    axios.get("http://localhost:8000/event").then(
        result =>{
            this.setState({
                events: result.data
            })
        }
    );
}
render(){
    const mystyle={
        fontSize: 18,
        color: "black"
    }
    return(
        <div>
            {!this.state.events||this.state.events.length<=0?(
                <div class="row">
                    <h2 class="indigo-text text-darken-4 center-align" style={{textDecoration: "underline"}}>Events</h2>
                    <div class="col s12 m8 push-m2" >
                        <div class="card-panel z-depth-3" style={{height: 200}}>
                            <span class="grey-text text-lighten-1 center-align"  >
                                <br/><br/>
                                <div style={{fontSize: 25}}>No Events Scheduled For Now</div>  
                                <br/>
                            </span>
                        </div>
                    </div>
                </div>
            ):(
                <div class="row">
                {this.state.events.map(event =>(
                <div class="row">
                    <h2 class="indigo-text text-darken-4 center-align" style={{textDecoration: "underline"}}>Events</h2>
                   <div class="card hoverable large z-depth-3">
                       <div class="card-image">
                           <img src="{{event.poster.url}}"/>
                           <h5 class="center card-title">{event.name}</h5>
                       </div>
                       <div class="card-content">
                           
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
                       </div>
       
                       <div class="card-action">
                           <center><a class="indigo-text" href="/eventdetails">View Details</a></center>
                       </div>
        
                   </div>
               </div>
                ) )}
                </div>
            )}
        </div>
    )
}
}
export default EventComponent;