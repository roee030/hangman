import React, { Component } from 'react'
import Words from './components/Word'
import DisplayWord from './components/DisplayWord'
import SubmitLetter from './components/SubmitLetter'
import KeyboardEventHandler from 'react-keyboard-event-handler';


import './App.css'
import WrongLetter from './components/WrongLetter';
export default class App extends Component {
  state = {
    word: Words[Math.floor(Math.random()* Words.length)],
    guessedLetters: [],
    guessedRemaining: 11,
    imagesNumber: 0
  }
/**
 * @param {l} letter from user input
 * Description: this method get a letter and check if already we guessed 
 * the letter and if not we add the letter to the array of guessedLetters.
 */
update_guessedLetters = (l)=>{
  console.log(this.state.guessedLetters)
    if(this.state.guessedLetters.includes(l))
    {
      alert("You already guessed the letter "+l)
    }
    else if (!this.state.word.split('').includes(l) && !this.state.guessedLetters.includes(l)){
      this.setState({guessedRemaining: this.state.guessedRemaining - 1})
      this.setState({guessedLetters: [...this.state.guessedLetters,l]})
      this.setState({imagesNumber: this.state.imagesNumber+1})

    }
    else{
    this.setState({
      guessedLetters: [...this.state.guessedLetters,l]
    })
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
    //alert("You guessed the word")
  }
}

update_gameState = (l) =>{
  this.update_guessedLetters(l)
  this.gameOver()
}
  
  render() {
    return (
      <div className="App">
      
        <div className="wrapper">
          <img className="imgs" src={"./images/"+this.state.imagesNumber+".jpg"}/>
          <DisplayWord className="answer" word={this.state.word} guessedLetters = {this.state.guessedLetters}/>

          
        </div>
        <WrongLetter className="wronga" word={this.state.word} guessedLetters = {this.state.guessedLetters} />
        {this.state.word}
        <h1>{this.state.guessedRemaining}</h1>
        <div className="answerguess">
        </div>
        <KeyboardEventHandler handleKeys={['alphanumeric']} onKeyEvent={(key) => this.update_gameState(key)} />
      </div>
    )
  }
}
