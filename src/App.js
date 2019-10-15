import React, { Component } from 'react'
import Words from './components/Word'
import DisplayWord from './components/DisplayWord'
import SubmitLetter from './components/SubmitLetter'
import KeyboardEventHandler from 'react-keyboard-event-handler';

import './App.css'
export default class App extends Component {
  state = {
    word: Words[Math.floor(Math.random()* Words.length)],
    guessedLetters: [],
    guessedRemaining: 5
  }
  
update_guessedLetters = (l)=>{
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
update_guessedRemaining = (l) => {
  if(!this.state.guessedLetters.includes(l) && !this.state.word.split('').includes(l)){
    this.setState({guessedRemaining: this.state.guessedRemaining - 1})
  }
}

wordIsGuessed = () => {
  const guessedState = this.state.word.split('').map(l => {
    if(this.state.guessedLetters.includes(l)){
      return l
    }
  })
  return guessedState.join('') === this.state.word
}

gameOver = () =>{
  if(this.state.guessedRemaining<=0)
  {
    alert("You lose")
  }
  else if(this.wordIsGuessed)
  {
    alert("You won and guessed the word")
  }
}

update_gameState = (l) =>{
  this.update_guessedLetters(l)
  this.update_guessedRemaining(l)
  this.gameOver()
}
  
  render() {
    return (
      <div className="App">
        <h1>Hangman</h1>
        {this.state.word}
        {this.state.guessedRemaining}
        <DisplayWord word={this.state.word} guessedLetters = {this.state.guessedLetters}/>
        <KeyboardEventHandler handleKeys={['alphanumeric']} onKeyEvent={(key) => this.update_gameState(key)} />
      </div>
    )
  }
}
