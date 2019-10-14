import React, { Component } from 'react'
import Words from './components/Word'
import DisplayWord from './components/DisplayWord'
import SubmitLetter from './components/SubmitLetter'
import './App.css'
export default class App extends Component {
  state = {
    word: Words[Math.floor(Math.random()* Words.length)],
    guessedLetters: []
  }
  update_guessedLetters(l){
    if(this.state.guessedLetters.includes(l))
    {
      alert("You already use this letter "+{l})
    }
    else{
    this.setState({
      guessedLetters: [...this.state.guessedLetters,l]
    })
  }
  }
  render() {
    return (
      <div className="App">
        <h1>Hangman</h1>
        <DisplayWord word={this.state.word} guessedLetters = {this.state.guessedLetters}/>
        <SubmitLetter/>
      </div>
    )
  }
}
