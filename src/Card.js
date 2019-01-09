import React from "react";
import imag from './imag.png';



const mystyle = {
    float:"left",
    marginleft:"20px",
  };


class Card extends React.Component{
    
    render(){
        return (
        <div style={mystyle}>   
            <h2>{this.props.title}</h2>
            <img src={imag} alt="heart" height="200px" />
            <h5>{this.props.subtitle}</h5>

        </div>
        );
        
    }
}

export default Card;