import React, { Component } from 'react';
import config from '../../config';
import TokenService from '../../services/token-service';
import './LearningRoute.css';

class LearningRoute extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nextWord: "",
      totalScore: 0,
      wordCorrectCount: 0,
      wordIncorrectCount: 0,
      answerInput: "",
      answerData: {
        answer: "",
        isCorrect: null,
        nextWord: "",
        totalScore: 0,
        wordCorrectCount: 0,
        wordIncorrectCount: 0
      }
    };
  }

  componentDidMount = () => {
    this.getWords();
  }

  getWords = () => {
    const { API_ENDPOINT } = config;
    const fetchHeaders = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      }
    };

    fetch(`${API_ENDPOINT}/language/head`, fetchHeaders)
      .then((res) => res.json())
      .then((data) => {
        console.log('this is the server response from /language/head', data);
        this.setState({  answer: data.answer,
        isCorrect: data.isCorrect,
        nextWord: data.nextWord,
        totalScore: data.totalScore,
        wordCorrectCount: data.wordCorrectCount,
        wordIncorrectCount: data.wordIncorrectCount})
      })
      .catch((err) => console.log(err.message));
    }

  currentWord = () => {
    return (
      <div className="currentWordContainer">
        
          <h2>Translate the following word:</h2>
          <p className="wordToGuess">{this.state.nextWord}</p>
        
      </div>
    )
  };

  totalScoreCount = () => {
    return (
      <div className="runningScoreContainer">
        <p className="runningScore">Your total score is: {this.state.totalScore}</p>
      </div>
    )
  }

  inputValue = (value) => {
     this.setState({answerInput: value});
  }

  guessBox = () => {
    return (
      <div className="guessBoxContainer">
        <div className="guessDirectionsContainer">
          <p className="guessDirections">Input your answer below</p>
        </div>
        <form onSubmit={(e) => this.checkAnswer(e)} >
          <input name="guess" id="guessInput" type="text" onChange={this.inputValue}required></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }

  checkAnswer = (e) => {
    e.preventDefault();
    console.log(this.state.answerInput);
    // const { API_ENDPOINT } = config;
    // fetch(`${API_ENDPOINT}/language/guess`, {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json',
    //     authorization: `bearer ${TokenService.getAuthToken()}`,
    //   },
    //   body: JSON.stringify({ guess: this.state.answerInput }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log('this is the guess return data', data);
    //     this.setState({ answerData: data });
    //   });
  };

  returnedResult = () => {
    if (this.state.answerData.isCorrect) {
      return (
        <div className="correctReturn">
          <h1>Awesome! You got it right!</h1>
          <button>Try Next Word</button>
        </div>
      ) 
    } else if (!this.state.answerData.isCorrect) {
      return (
        <div className="correctReturn">
          <h1>Oh no! You got it wrong!</h1>
          <button><a href="/learn">Try Next Word</a></button>
        </div>
      ) 
      } else {
        return (
          <div className="correctReturn">
            <p></p>
          </div>
        ) 
      }
    }
  

  answerCounts = () => {
    return (
      <div className="answerCountContainer">
        <div className="correctAnswersContainer">
          <h3 className="answerCountHeading">Correct Answers: {this.state.wordCorrectCount}</h3>
        </div>
        <div className="incorrectAnswersContainer">
          <h3 className="answerCountHeading">Incorrect Answers: {this.state.wordIncorrectCount}</h3>
        </div>
      </div>
    )
  }



  render() {
    return (
      <section>
        {this.returnedResult()}
        {this.currentWord()}
        {this.totalScoreCount()}
        {this.guessBox()}
        {this.answerCounts()}
      </section>
    );
  }
}

export default LearningRoute
