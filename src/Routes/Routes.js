import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../App';
import Home from '../Container/Home.container';
// import CreatePost from '../Component/CreatePost/CreatePost.component';
import CreatePost from '../Container/CreatePost.container';

const Routes = () => (
  <Router>
    <div>
      <Route path="/CreatePost" component={CreatePost} />
      <Route path="/Home" component={Home} />
    </div>
  </Router>
);

export default Routes;
