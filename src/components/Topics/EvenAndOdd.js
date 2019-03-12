import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
    constructor() {
        super() 
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        }
    }

    handleChange(val) {
        this.setState({ userInput: val })
    }

    setEvensOdds(userInput) {
        let arr = userInput.split(',')
        let even = [];
        let odd = [];

        for(let i = 0; i < arr.length; i++) {
            if(arr[i] % 2 === 0) {
                even.push(parseInt(arr[i], 10))
            } else {
                odd.push(parseInt(arr[i],10))
            }
        }

        this.setState({ evenArray: even, oddArray: odd })
    }

    render() {
        return (
           <div className="puzzleBox evenAndOddPB">
           <h4> Evens and Odds </h4>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
            <button className="confirmationButton" onClick={ () => this.setEvensOdds(this.state.userInput)}> Split </button>
            <span class="resultsBox">Evens: {this.state.evenArray}</span>
            <span class="resultsBox"> Odds: {this.state.oddArray} </span>

           </div>
        )
    }
}
