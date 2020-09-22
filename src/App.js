import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import Shoppage from './pages/shoppage/shoppage.component';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/shop" component={Shoppage} />
    </Switch>
  );
}

export default App;
