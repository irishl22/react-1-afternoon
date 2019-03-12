import React, { Component } from 'react';

export default class FilterObject extends Component {
   constructor () {
       super()
       this.state = {
           unFilteredArray: [{name: 'Lauren', age: 27} , {name: 'Bob', age: 33}, {name: 'John', age: 22}, {age: 90}],
           userInput: '',
           filteredArray: []

       }
   }
   
   handleChange(val) {
    this.setState({ userInput: val })
   }

   propertyFilter(prop) {
       let unFilteredArray = this.state.unFilteredArray;
       let filteredArray = [];

       for(let i = 0; i < unFilteredArray.length; i++) {
           if(unFilteredArray[i].hasOwnProperty(prop)) {
               filteredArray.push(unFilteredArray[i])
           }
       } 

       this.setState( {filteredArray: filteredArray})
   }
   


    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText"> Original: { JSON.stringify(this.state.unFilteredArray, null, 10)} </span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick= { () => this.propertyFilter(this.state.userInput)}> Filter </button>
                <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
            
        )
    }
}