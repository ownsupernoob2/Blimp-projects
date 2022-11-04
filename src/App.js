import React, { Component } from 'react';
import { Provider } from "react-redux";

import Router from "./components/routes/Router";
import{ store } from "./store/reducers/store"
import './App.css';
import './components/styles/about.css';
import './components/styles/navbar.css';
import './components/styles/projects.css';

class App extends Component {
  render() {
    return (
            <Provider store={store}>
        <Router/>
      </Provider>
    );
  }
}

export default App;
