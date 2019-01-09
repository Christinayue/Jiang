import React, { Component } from 'react';
import './App.css';
import imag from './imag.png';
import Card from './Card';


const title1 = [
  'Editor Picks1',
  'Editor Picks2',
  'Editor Picks3',

]  

const subtitle1 = [
  'Gifts for Him',
  'Gifts for Her',
  'Gifts for it',
]

const mystyle = { 
  float:"left",

};

class App extends Component {
  render() {
    return (
      <div style={mystyle}>
        <h1>Homework1</h1>
        
          <Card title={`${title1[0]}`} subtitle={`${subtitle1[0]}`}/>
        
        
          <Card title={`${title1[1]}`} subtitle={`${subtitle1[1]}`}/>
        
        
          <Card title={`${title1[2]}`} subtitle={`${subtitle1[2]}`}/>
        
        
      </div>
  )
  }

  
}

export default App;
