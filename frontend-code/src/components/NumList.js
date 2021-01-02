import React from 'react';
import '../css/constants.css';
import CountUp from 'react-countup';


class NumList extends React.Component {

    state = {show: false};

    
    componentDidMount(){
        var elementInViewport = () => {
            const bounding = document.querySelector('.InNumbers').getBoundingClientRect();
            return (
                bounding.top>=0 &&
                bounding.left>=0 &&
                bounding.bottom<=(window.innerHeight || document.documentElement.clientHeight) &&
                bounding.right<=(window.innerWidth || document.documentElement.clientWidth) 
            );  
        }

        document.addEventListener('scroll', function(){
            if ( elementInViewport()){
                const elems = document.querySelector('.InNumbers');
                if(elems){ 
                    this.setState({show: true});
                }
            }
        }.bind(this));
    }
    render (){
        return(
            <div className='InNumbers'>
                <div className='col l4 s12 center-align'>
                    <h2>{ this.state.show ? <CountUp start={0} duration={2} end={this.props.years_in_operation}/>
                                          : null
                    }
                    </h2>
                    <span>
                        Years In Operation
                    </span>
                </div>
                <div className='col l4 s12 center-align'>
                    <h2>{ this.state.show ? <CountUp start={0} duration={2} end={this.props.member_count}/>
                                          : null
                    }
                    </h2>
                    <span>
                        Members This Year
                    </span>
                </div>
                <div className='col l4 s12 center-align'>
                    <h2>{ this.state.show ? <CountUp start={0} duration={2} end={this.props.project}/>
                                         : null
                    }
                    </h2>
                    <span>
                        Projects This Year
                    </span>
                </div>
            </div>
        );
    }
}

export default NumList;
