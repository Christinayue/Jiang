
import React from "react";
class DateDisplay extends React.Component{
    
    render(){
        return (
        <div>
            <h1>{this.props.Student.name}</h1>
        <p>{this.props.Student.university}</p>
        </div>);
         
    }
}

export default DateDisplay;

