import React, { Component } from 'react';
import config from '../../config';
import TokenService from '../../services/token-service';

class DashboardRoute extends Component {

  constructor(props) {
    super(props);
    this.state = {
      words: [],
      language: {}
    };
  }

  componentDidMount = () => {
    this.fetchLanguage();
  }

  fetchLanguage = () => {
    const { API_ENDPOINT } = config;
    const fetchHeaders = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      }
};

fetch(`${API_ENDPOINT}/language`, fetchHeaders)
  .then((res) => res.json())
  .then((data) => {
    console.log('this is the server response from /language', data);
    this.setState({ words: data.words, language: data.language })
  })
  .catch((err) => console.log(err.message));
  }

  wordCard = (word) => {
    return (
      <div className="wordCard">
        <div className="wordCard_word">
          <h3>{word.original}</h3>
        </div>
        <div className="counts">
          <div className="correct">
          <h4>Correct Count: </h4>
          <p>{word.correct_count}</p>
          </div>
          <div className="incorrect"> 
          <h4>Incorrect Count: </h4>
          <p>{word.incorrect_count}</p>
          </div>
        </div>
      </div>
    )
  }


  render() {
    return (
      <div>
        <section>
          <div>
            <h1> Language: {this.state.language.name} </h1>
            <a id="learn" className="learnLink" href="/learn">Start Learning</a>
          </div>
        </section>
        <h2> Words: </h2>
        {this.state.words.map((word) => this.wordCard(word))}
        <section>
        </section>
      </div>
    );
  }
}

export default DashboardRoute
