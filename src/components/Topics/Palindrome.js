import React, { Component } from 'react';

export default class Palindrome extends Component {
    constructor() {
        super()
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleChange(val) {
        this.setState({userInput: val })
    }

    palindromeUp(str) {
        let forward = str;
        let back = str;
        back = back.split('')
        back = back.reverse();
        back = back.join('');
    
        if(forward === back) {
            this.setState({ palindrome: 'true'});
        } else {
            this.setState({ palindrome: 'false'});
        }
    }
    
    render() {
        return (
            <div className="puzzleBox filterStringPB">
            <h4>Palindrome</h4>
            <input className="inputLine" onChange= { (e) => this.handleChange(e.target.value)}></input>
            <button className="confirmationButton" onClick={ () => this.palindromeUp(this.state.userInput)}>Check Word</button>
            <span className="resultsBox">Palindrome? {this.state.palindrome}</span>
            </div>
        )
    }
}