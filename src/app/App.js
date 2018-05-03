import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './views/Home';
import Header from './components/Header';
import Form from './components/Form';
import Car208 from './views/Car208';
import Car301 from './views/Car301';
import Exterior208 from './views/Exterior208';
import Interior208 from './views/Interior208';
import Seguridad208 from './views/Seguridad208';
import PeCumple from './views/PeCumple';
/*Componentes301 */
import Exterior301 from './views/Exterior301';
import Interior301 from './views/Interior301';
import Seguridad301 from './views/Seguridad301';
import PeCumple301 from './views/PeCumple301';
import ThanksPage from './views/TanksPage';
import NotFound from './views/NotFound';


class App extends Component {
   render() {
       const rutaBase = '/'; /*Para prod debe ir /*/
       /*basename={'/peugeot/208'} para liberar en pruebas*/
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

                  <Route path={ '/Peugeot301'} component={ Car301 } />
                  <Route path={ '/Peugeot-Exterior-301'} component={ Exterior301 } />
                  <Route path={ '/Peugeot-Interior-301'} component={ Interior301 } />
                  <Route path={ '/Peugeot-Seguridad-301'} component={ Seguridad301 } />
                  <Route path={ '/Peugeot-Cumple-301'} component={ PeCumple301 } />

                  <Route path={ '/Gracias-por-Registrarte'} component={ ThanksPage } />
                  <Route path={ '/404'} component={ NotFound } />
               </Switch>
               <Header />
               <Form />
            </div>
         </Router>
      );
   }
}
export default App;