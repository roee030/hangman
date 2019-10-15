import React from 'react'
import './WrongLetter.css'
export default function WrongLetter() {
    getWrongLetters = () => {
        const wrong = this.props.guessedLetters.filter(l =>{
            return !this.props.word.split('').includes(l)
        })
        return wrong
    }
    return (
        <div className="WrongLetters">
            {this.getWrongLetters()}
        </div>
    )
}
