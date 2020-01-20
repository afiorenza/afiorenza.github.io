import ContactForm from '~components/contact-form';
import GoToTop from '~components/go-to-top';
import React, { Component } from 'react';
import SocialIcons from '~components/social-icons';

export default class Contact extends Component {

  renderGoToTop() {
    return (
      <div className='contact__go-top'>
        <GoToTop />
      </div>
    )
  }

  renderSocialContact() {
    return (
      <div className='contact__social'>
        <h2 className='contact__social-subtitle'>
          Or throught social networks
        </h2>

        <SocialIcons />
      </div>
    );
  }

  renderContactForm() {
    return (
      <ContactForm
        handleSubmit={this.handleSubmit}
      />
    );
  }

  renderTitle() {
    return (
      <h1 className='contact__title'>
        Contact me
      </h1>
    )
  }

  render() {
    return (
      <div className='contact'>
        {this.renderTitle()}
        {this.renderContactForm()}
        {this.renderSocialContact()}
        {this.renderGoToTop()}
      </div>
    );
  }

  handleSubmit(event) {
    console.log('Ok to send form')
  }
}
