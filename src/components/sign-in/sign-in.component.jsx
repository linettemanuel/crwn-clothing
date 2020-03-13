import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './sign-in.style.scss'
import { auth, singInWithGoogle }  from '../../firebase/firebase.utils';

class SingIn extends Component {
    constructor(props){
        super(props)

        this.state = {
            email:'',
            password:''
        }

    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email:' ', password: ''})
        } catch (error) {
            console.log(error)
        }
    }

    handleChange = event => {
        const { value, name } = event.target

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2  className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit} >
                    <FormInput 
                        name='email' 
                        value={this.state.email} 
                        type='email' 
                        onChange={this.handleChange}
                        label='email'
                    />
                    <FormInput 
                        name='password' 
                        value={this.state.password} 
                        type='password'
                        onChange={this.handleChange}
                        label='password'
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={singInWithGoogle} isGoogleSignIn>{' '}Sign in with Google{' '}</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SingIn;
