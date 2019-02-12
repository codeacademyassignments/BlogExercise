import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../Component/Home/Home.component';
import CreatePost from '../Component/CreatePost/CreatePost.component';

const routing = (
  <Router>
    <div>
      <Route path="/CreatePost" component={CreatePost} />
      <Route path="/Home" component={Home} />
    </div>
  </Router>
);

export default routing;
