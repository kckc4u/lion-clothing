import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../customButton/custombutton.component';
import {signinWithGoogle} from '../../firebase/firebase.utils';

import './signIn.style.scss';

class SignIn extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    submitHandler = event => {
        event.preventDefault();

        this.setState({
            email: '',
            password: ''
        });
    }

    changeHandler = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    render () {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span className="title">Sign in with your email and password</span>
                <form onSubmit={this.submitHandler}>
                    <FormInput 
                        name="email" 
                        value={this.state.email} 
                        type="email" 
                        handleChange={this.changeHandler}
                        label="Email"
                        required />
                    <FormInput 
                        name="password" 
                        value={this.state.password} 
                        type="password" 
                        handleChange={this.changeHandler}
                        required 
                        label="Password" />
                    <div className="buttons">
                        <CustomButton type="submit" name="submit">Sign in</CustomButton>
                        <CustomButton onClick={ signinWithGoogle } isGoogleSignIn={true} >Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
    
}

export default SignIn;