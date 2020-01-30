import './style/style.scss';

import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";

import NavBar from './components/NavBar';
import Foot from './components/Foot';

import modules from './modules';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="container">
          <NavBar />
          <Switch>
            {modules.map(module => (
              <Route key={module.path} path={module.path} component={module.component} />
            ))}
          </Switch>
        </div>

        <Foot />
      </BrowserRouter>
    </div>
  );
}

export default App;
