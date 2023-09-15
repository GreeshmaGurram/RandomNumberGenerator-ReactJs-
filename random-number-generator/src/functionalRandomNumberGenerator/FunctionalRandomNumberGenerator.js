import React, {useState} from "react";

import "./FunctionalRandomNumberGenerator.css"

function FunctionalRandomNumberGenerator(){
    const [ newNumber, setNewNumber ] = useState(0);

    const onClickGenerateNumber = () => {
        const generatedNumber = Math.ceil(Math.random()*100)
        setNewNumber(generatedNumber)
    }

    return(
        <div className="div-container">
                <h1 className="heading">Random Number Generator</h1>
                <p>Generate a random number in the range of 0 to 100</p>
                <button className="generate-button" type="button" onClick={onClickGenerateNumber}>Generate</button>
                <p className="number-text">{newNumber}</p>
            </div>
    )
}

export default FunctionalRandomNumberGenerator