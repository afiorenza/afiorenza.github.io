require('./_app.scss');

import {Image, ButtonToolbar, Button} from 'react-bootstrap';
import Body from 'components/body';
import english from 'data/en/data.json';
import Header from 'components/headers';
import React, {Component} from 'react';
import spanish from 'data/es/data.json';

const LANGUAGES = {
  english,
  spanish
};
const ENGLISH = 'english';
const SPANISH = 'spanish';

export default class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      language: LANGUAGES[ENGLISH]
    };
  }

  componentWillMount () {
    if (window.navigator.language === 'es')
      this.setState({language: LANGUAGES[SPANISH]});
  }

  handleLanguageButtonClick (language) {
    this.setState({
      language: LANGUAGES[language]
    });
  }

  render() {
    return (
      <div className="App">
        <ButtonToolbar bsClass="App--language-bar">
          <Button onClick={() => this.handleLanguageButtonClick(ENGLISH)} bsClass="btn btn-link App--languageButton" bsStyle="link">English</Button>
          <Button onClick={() => this.handleLanguageButtonClick(SPANISH)} bsClass="btn btn-link App--languageButton" bsStyle="link">Spanish</Button>
        </ButtonToolbar>
        <div className="App--header-container">
          <Image bsClass="App--profileImage" src="/assets/profile.png" circle />
          <div className="App--contact">
            <h1 className="App--title text-bold">{this.state.language.name}</h1>
            <div className="App--header">
              <Header />
            </div>
          </div>
        </div>
        <Body language={this.state.language} />
      </div>
    );
  }
}
