import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './views/Home';
import Header from './components/Header';
import Form from './components/Form';
import Car208 from './views/Car208';
import Exterior208 from './views/Exterior208';
import Interior208 from './views/Interior208';
import Seguridad208 from './views/Seguridad208';
import PeCumple from './views/PeCumple';

class App extends Component {
   render() {
       const rutaBase = '/'; /*Para prod debe ir /*/
      return (
         <Router>
            <div>
               <Switch>
                  <Route path={ rutaBase } exact component={ Home } />
                  <Route path={ '/Peugeot208'} component={ Car208 } />
                  <Route path={ '/Peugeot-Exterior-208'} component={ Exterior208 } />
                  <Route path={ '/Peugeot-Interior-208'} component={ Interior208 } />
                  <Route path={ '/Peugeot-Seguridad-208'} component={ Seguridad208 } />
                  <Route path={ '/Peugeot-Cumple'} component={ PeCumple } />
               </Switch>
               <Header />
               <Form />
            </div>
         </Router>
      );
   }
}
export default App;