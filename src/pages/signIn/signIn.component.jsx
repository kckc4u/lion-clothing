import React, { Component } from 'react';
import './signIn.style.scss';

import SignIn from '../../components/signIn/signIn.component';
import Signup from '../../components/signup/signup.component';

export class SignInSignOut extends Component {
    render() {
        return (
            <div className="signInSignOut">
                <SignIn />
                <Signup />
            </div>
        )
    }
}

export default SignInSignOut;
