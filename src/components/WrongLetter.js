import React from 'react'
import './WrongLetter.css'
export default function WrongLetter({guessedLetters , word}) {
    const getWrongLetters = () => {
        const wrong = guessedLetters.filter(l =>{
            return !word.split('').includes(l)
            
        })
        return wrong
    }
    return (
        <div className="WrongLetters">
            {getWrongLetters()}
        </div>
    )
}