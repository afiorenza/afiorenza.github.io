require('./_app.scss');

import React, {Component} from 'react';
import Body from 'components/body';
import {Image, ButtonToolbar, Button} from 'react-bootstrap';
import SocialBadges from 'components/social-badges';
import english from 'data/en/data.json';
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

  handleLanguageButtonClick (language) {
    this.setState({
      language: LANGUAGES[language]
    });
  }

  render() {
    return (
      <div className="App">
        <ButtonToolbar bsClass="App--languageBar">
          <Button onClick={() => this.handleLanguageButtonClick(ENGLISH)} bsClass="btn btn-link App--languageButton" bsStyle="link">English</Button>
          <Button onClick={() => this.handleLanguageButtonClick(SPANISH)} bsClass="btn btn-link App--languageButton" bsStyle="link">Spanish</Button>
        </ButtonToolbar>
        <div>
          <Image bsClass="App--profileImage" src="/assets/profile.png" circle/>
          <div className="App--contact">
            <h1 className="App--title text-bold">Agustín Fiorenza</h1>
            <div>
              <span className="App--email text-bold"><i className="fa fa-envelope-o" aria-hidden="true"></i> agustinfiorenza@gmail.com</span>
              <SocialBadges type="linkedin" link="https://www.linkedin.com/in/agustin-fiorenza-88869892/" className="App--social-media-icons"/>
              <SocialBadges type="github" link="https://github.com/afiorenza" className="App--social-media-icons"/>
            </div>
          </div>
        </div>
        <Body language={this.state.language} />
      </div>
    );
  }
}
