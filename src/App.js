import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Registration from './components/Registration';

class App extends React.Component {
  render(){
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home}></Route>
          <Route path='/Registration' component={Registration}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
