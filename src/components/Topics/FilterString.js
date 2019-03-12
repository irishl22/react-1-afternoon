import React, { Component } from 'react';

export default class FilterString extends Component {
    constructor() {
        super(); 
        this.state = {
            unFilteredArray: ["Winni", "Charlie", "Ginger", "Lucas"],
            userInput: "",
            filteredArray: []
        };
    }
    
    handleChange(val) {
        this.setState( {userInput: val} );
    }

    filterArr(userInput) {
        let unFilteredArray = this.state.unFilteredArray;
        let filteredArray = [];

        for(let i = 0; i < unFilteredArray.length; i++) {
            if(unFilteredArray[i].includes(userInput)) {
                filteredArray.push(unFilteredArray[i]);
            }
        }

        this.setState({ filteredArray: filteredArray })
    }


    render() {
        return (
          <div className="puzzleBox filterStringPB">
            <h4> Filter String </h4>
            <span className="puzzleText"> Names: { JSON.stringify(this.state.unFilteredArray, null, 10) } </span>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
            <button className="confirmationButton" onClick={ () => this.filterArr(this.state.userInput) }> Filter </button>
            <span className="resultsBox filterStringRB"> Filtered Names: { JSON.stringify(this.state.filteredArray, null, 10) } </span>
          </div>
        )
      }



    // render() {
    //     return (
    //         <div className='puzzleBox filterStringRB'>
    //             <h4>Filter String</h4>
    //             <span className="puzzleText">Unfiltered: {JSON.stringify(this.state.UnFilteredArray, null, 10)}</span>
    //             <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
    //             <button className="confirmationButton" onClick={ () => this.filterArr(this.state.userInput)}>Filter</button>
    //             <span className="resultsBox filterStringRB">Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
    //         </div>
    //     )
    // }
}