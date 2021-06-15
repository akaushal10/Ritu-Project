import React, { Component } from "react";

class CounterWithClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 10,
      myname:''
    };
    // State is read only (immutable)
  }
  increase = () => {
    this.setState({counter: this.state.counter+1});
    console.log("Increase Called : ", this.state.counter);
  };
  decrease = () => {
    this.setState({counter: this.state.counter-1});
    console.log("Descrese Called : ", this.state.counter);
  };
  changeMyname = (event)=>{
   this.setState({myname:event.target.value})
  }
  render() {
    return (
      <>
        <div style={{ textAlign: "center" }}>
          <button onClick={this.increase}>+</button>
          <h1>{this.state.counter}</h1>
          <button onClick={this.decrease}>-</button>
        </div>
        <div style={{ textAlign: "center" }}>
            <input type="text" value={this.state.myname} onChange={(event)=>{this.changeMyname(event)}} />
            <h1>{this.state.myname}</h1>
        </div>        
      </>
    );
  }
}
export default CounterWithClass;
