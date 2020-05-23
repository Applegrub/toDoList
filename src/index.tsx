import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'mobx-react';
import {RootStore} from './stores';

const mobXStore = new RootStore();

ReactDOM.render(<Provider {...mobXStore}><App/></Provider>, document.getElementById('root'));
