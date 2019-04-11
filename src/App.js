import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux"



class App extends Component {
  render() {
    return (
      <div className = "App">
        <div className = "col">
            <div><span>A:</span><span>{this.props.a}</span></div>
            <button onClick = {() =>this.props.updateA(this.props.b)}>Update A</button>
        </div>

        <div className = "col">
            <div><span>B:</span><span>{this.props.b}</span></div>
            <button onClick = {() => +this.props.updateB(this.props.a)}>Update B</button>
        </div>

      </div>
    );
  }
}

  const mapStateToProps = (state) => {
    return{
    a: state.reducerA.a,
    b: state.reducerB.b
    }
    
  }

  const mapDispatchToProps = (dispatch) => {
    return{
      updateA: (B) => dispatch({ type: "Update_A", B:B }),
      updateB: (A) => dispatch({ type: "Update_B", A:A})

    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(App);
