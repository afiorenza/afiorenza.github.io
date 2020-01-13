import 'antd/dist/antd.css';
import './styles/index.scss';
import Home from '~screens/home';
import React from 'react';
import ReactGA from 'react-ga';
import { render } from 'react-dom';

ReactGA.initialize(process.env.GA_CODE);
ReactGA.pageview('/');

render(<Home />, document.getElementById('root'));
