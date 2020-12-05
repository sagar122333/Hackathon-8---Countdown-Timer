import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

// const App = () => {
class App extends React.Component{
  // write your code here
  constructor(){ 
    super();
    this.timeInterval = null;
    this.state = {time: 0};
    this.start = this.start.bind(this); 
  } 
  start(){
      this.timeInterval = setInterval(
        ()=> this.setState({time:this.state.time - 1}), 1000);
  }
  componentDidUpdate(){
    if(this.state.time === 0){
      clearInterval(this.timeInterval);
    }
  }
  render(){
    return (
      <div className="wrapper">
        <div id="whole-center">
          <h1>
            Reverse countdown for<input id="timeCount" 
            onKeyDown={
              (evt)=>{
                clearInterval(this.timeInterval);
                if(evt.keyCode === 13){
                const val = document.getElementById("timeCount").value;
                document.getElementById("timeCount").value = "";
                if(isNaN(val)){
                  this.setState({time:0});
                }
                else{
                  this.setState({time:parseInt(val)});
                }
                this.start();
              } 
            }} /> sec.
          </h1>
        </div>
        <div id="current-time">{this.state.time}</div>
      </div>
    )
  }    
}


export default App;
