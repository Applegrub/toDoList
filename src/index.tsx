import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'mobx-react';
import {RootStore} from './stores';
import {loadState, saveState} from "./utils/localStore";
import {autorun} from "mobx";

// Store init
const initState = loadState();
const mobXStore = new RootStore(initState);

autorun(() => {
    // saveState({toDoStore: mobXStore.toDoStore.serialize()});
    saveState(mobXStore.serialize());
}, {delay: 1000});


ReactDOM.render(<Provider {...mobXStore}><App/></Provider>, document.getElementById('root'));
