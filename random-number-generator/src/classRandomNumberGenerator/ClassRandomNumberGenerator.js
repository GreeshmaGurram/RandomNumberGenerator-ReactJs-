import { Component } from "react";

import "./ClassRandomNumberGenerator.css"

class ClassRandomNumberGenerator extends Component{
    state = { newNumber : 0}

    onClickGenerateNumber = () => {
        const generatedNumber = Math.ceil(Math.random() * 100)
        this.setState({ newNumber : generatedNumber })
    }

    render(){
        const { newNumber } = this.state;
        return(
            <div className="div-container">
                <h1 className="heading">Random Number Generator</h1>
                <p>Generate a random number in the range of 0 to 100</p>
                <button className="generate-button" type="button" onClick={this.onClickGenerateNumber}>Generate</button>
                <p className="number-text">{newNumber}</p>
            </div>

        )
    }
}

export default ClassRandomNumberGenerator;