import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import './index.css';
import App from './App';
import About from './components/about/index'
ReactDOM.render((
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/getstart" component={App}/>
      <Route exact path="/api" component={App}/>
      <Route exact path="/about" component={App}/>
      <Route path="/tag" component={App}></Route>
      <Route path="/topic" component={App}></Route>
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={App} />
      
    </Switch>
  </Router>
), document.getElementById('root'));

