import React, { Component } from 'react';
import './signIn.style.scss';

import SignIn from '../../components/signIn/signIn.component';

export class SignInSignOut extends Component {
    render() {
        return (
            <div className="signInSignOut">
                <SignIn />
            </div>
        )
    }
}

export default SignInSignOut;
