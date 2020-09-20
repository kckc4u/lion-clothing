import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';

const Hatspage = () => {
  return (
    <div>Hats Page</div>
  );
}
const App = () => {
  return (
    <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/shop/hats" component={Hatspage} />
    </Switch>
  );
}

export default App;
