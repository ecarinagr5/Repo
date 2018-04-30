import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './views/Home';
import Header from './components/Header';
import Form from './components/Form';
import Car208 from './views/Car208';
import Exterior208 from './views/Exterior208';
import Interior208 from './views/Interior208';

class App extends Component {
   render() {
      return (
         <Router>
            <div>
               <Switch>
                  <Route path='/' exact component={ Home } />
                  <Route path='/Peugeot208' component={ Car208 } />
                  <Route path='/Peugeot-Exterior-208' component={ Exterior208 } />
                  <Route path='/Peugeot-Interior-208' component={ Interior208 } />
               </Switch>
               <Header />
               <Form />
            </div>
         </Router>
      );
   }
}
export default App;