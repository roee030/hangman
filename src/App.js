import React, { Component } from 'react'
import Words from './components/Word'
import './App.css'
export default class App extends Component {
  state = {
    word: Words[Math.floor(Math.random()* Words.length)]
  }
  render() {
    return (
      <div className="App">
        <h1>Hangman</h1>
        {this.state.word}
      </div>
    )
  }
}
