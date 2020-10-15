import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import Shoppage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignInSignOut from './pages/signIn/signIn.component';
import { auth } from './firebase/firebase.utils';

class App  extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeAuth = null;

  componentDidMount() {
    this.unsubscribeAuth = auth.onAuthStateChanged(
      user => {
        this.setState({currentUser: user});
        console.log(user);
      }
    );
  }

  componentWillUnmount () {
    this.unsubscribeAuth();
  }


  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shoppage} />
          <Route exact path="/signin" component={SignInSignOut} />
        </Switch>
      </>
    );
  }
}

export default App;
