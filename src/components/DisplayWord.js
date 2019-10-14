import React from 'react'
import WordStyle from './WordStyle'

export default function DisplayWord({word}) {
    word = word.split("")

    var wordLetters = word.map(w=>{
        return <WordStyle word={w}/>
    })
    
    return (
        <div>
            {wordLetters}
        </div>
    )
}
