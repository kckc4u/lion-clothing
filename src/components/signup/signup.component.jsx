import React, { Component } from 'react';
import './signup.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../customButton/custombutton.component';
import { auth, createUserProfileDoc } from '../../firebase/firebase.utils';

export class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    submitHandler = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("Passwords don't match.");
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            createUserProfileDoc(user, {displayName});

            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            });
        } catch (error) {
            console.log(error);
        }
    } 

    changeHandler = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="sign-up">
                <h2>I do not have an account</h2>
                <span className="title">Sign up with your email and password</span>
                <form onSubmit={this.submitHandler}>
                    <FormInput 
                        name="displayName"
                        value={this.state.displayName} 
                        type="text" 
                        handleChange={this.changeHandler}
                        label="Display Name"
                        required
                    />
                    <FormInput 
                        name="email"
                        value={this.state.email} 
                        type="email" 
                        handleChange={this.changeHandler}
                        label="Email"
                        required
                    />
                    <FormInput 
                        name="password"
                        value={this.state.password} 
                        type="password" 
                        handleChange={this.changeHandler}
                        label="Password"
                        required
                    />
                    <FormInput 
                        name="confirmPassword"
                        value={this.state.confirmPassword} 
                        type="password" 
                        handleChange={this.changeHandler}
                        label="Confirm Password"
                        required
                    />
                    <CustomButton type="submit" name="submit">Sign  up</CustomButton>
                </form>
            </div>
        )
    }
}

export default Signup
