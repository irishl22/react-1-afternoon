import React, { Component } from 'react';

export default class Sum extends Component {
    constructor() {
        super()
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    handleChange1(val) {
        this.setState({ number1: parseInt(val, 10) })
    }
    handleChange2(val) {
        this.setState({ number2: parseInt(val, 10) })
    }
    
    findSum(number1, number2) {      
        this.setState({sum: number1 + number2})
    }
    
    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange= { (e) => this.handleChange1(e.target.value)}></input>
                <input className="inputLine" onChange= { (e) => this.handleChange2(e.target.value)}></input>
                <button className="confirmationButton" onClick={ () => this.findSum(this.state.number1, this.state.number2)}>Add</button>
                <span className="resultsBox">Equals: {this.state.sum} </span>
            </div>

        )
    }
}