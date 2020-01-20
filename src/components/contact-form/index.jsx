import { Button, Form, Input } from 'antd';
import React, { Component } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const formItems = [{
  Component: Input,
  name: 'name',
  props: {
    placeholder: 'Your name',
    required: true
  }
}, {
  Component: Input,
  name: 'email',
  props: {
    placeholder: 'Email address',
    required: true,
    type: 'email'
  }
}, {
  Component: Input,
  name: 'subject',
  props: {
    placeholder: 'Subject',
    required: true
  }
}, {
  Component: Input.TextArea,
  name: 'content',
  props: {
    autoSize: { maxRows: 6, minRows: 6 },
    required: true
  }
}]

export default class ContactForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      captchaToken: null,
      form: {}
    };
  }

  renderFormItem = ({ Component, name, props }) => {
    return (
      <Form.Item key={name}>
        <Component {...{ ...props, name }} onChange={this.handleInputChange} />
      </Form.Item>
    );
  }

  renderSubmitBlock() {
    return (
      <div className='contact-form__submit-block'>
        <Form.Item>
          <Button htmlType='submit'>
            Send Message
            </Button>
        </Form.Item>
        <Form.Item {...this.getFormState('captcha')} >
          <ReCAPTCHA
            onChange={this.handleCaptchaChange}
            sitekey={process.env.GOOGLE_CAPTCHA_CODE}
            size='normal'
          />
        </Form.Item>
      </div>
    );
  }

  renderForm() {
    return (
      <Form className='contact__form' onSubmit={this.handleSubmit}>
        {formItems.map(this.renderFormItem)}
        {this.renderSubmitBlock()}
      </Form>
    );
  }

  render() {
    return (
      <div className='contact-form'>
        {this.renderForm()}
      </div>
    );
  }

  handleCaptchaChange = (value) => {
    this.setFormState('captcha', {});

    this.setState({
      captchaToken: value
    });
  }

  handleInputChange = ({ target: { name, value } }) => {
    const { form } = this.state;
    const newForm = Object.assign({}, form, {
      [name]: { value }
    });

    this.setState({
      form: newForm
    });
  }

  handleSubmit = (event) => {
    const { captchaToken } = this.state;
    const { handleSubmit } = this.props;

    event.preventDefault();
    event.stopPropagation();

    if (!captchaToken) {
      this.setFormState('captcha', {
        help: 'Please complete captcha.',
        validateStatus: 'error'
      });

      return;
    }

    handleSubmit(event);
  }

  getFormState(name) {
    const { form } = this.state

    return form[name] || {};
  }

  setFormState(name, status) {
    const { form } = this.state;
    const newFormState = Object.assign({}, form, {
      [name]: status
    });

    this.setState({
      form: newFormState
    });
  }
}
