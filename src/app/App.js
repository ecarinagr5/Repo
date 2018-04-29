import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './views/Home';
import Header from './components/Header';
import Form from './components/Form';
import Car208 from './views/Car208';

class App extends Component {
   render() {
      return (
         <Router>
            <div>
               <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/Peogeut208' component={Car208} />
               </Switch>
               <Header />
               <Form />
            </div>
         </Router>
      );
   }
}
export default App;