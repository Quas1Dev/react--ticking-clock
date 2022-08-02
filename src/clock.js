import React from "react"

export default class Clock extends React.Component{
  constructor(props) {
     // This calls the parent Class constructor.
     // props objects are sent so the Class may access its members.
     super(props);

     // Set a new state
     this.state = {
       date: new Date()
     };
  }

  componentDidMount(){
    // Set up a timer to run after the component is rendered
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  // Called when the component is removed from the DOM
  componentWillUnmount(){
    // Tear down timer
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render(){
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
