import React, { Component } from 'react'
import Words from './components/Word'
import DisplayWord from './components/DisplayWord'
import './App.css'
export default class App extends Component {
  state = {
    word: Words[Math.floor(Math.random()* Words.length)],
    guessedLetters: []
  }
  update_guessedLetters(l){
    this.setState({
      guessedLetters: this.state.guessedLetters.push(l)
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hangman</h1>
        <DisplayWord word={this.state.word} guessedLetters = {this.state.guessedLetters}/>
      </div>
    )
  }
}
