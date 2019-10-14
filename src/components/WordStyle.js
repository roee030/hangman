import React from 'react'
import './WordStyle.css'
export default function WordStyle({word}) {
    return (
        <div className="wordWrapper" >
            {word}
        </div>
    )
}
