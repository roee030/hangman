import React from 'react'
import './WordStyle.css'
export default function WordStyle({word}) {
    return (
        <div className="wordWrapper" >
            <h1 >{word}</h1>
        </div>
    )
}
