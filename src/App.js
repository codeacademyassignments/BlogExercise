import React, { Component } from 'react';
import './App.css';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import artifactApp from './Reducers/Artifact.reducer';
import HomeContainer from './Container/Home.container';


class App extends Component {
  render() {
    // const store = createStore(artifactApp);
    return (
    // <Provider store={store}>
      <HomeContainer />
    // </Provider>
    );
  }
}

export default App;
