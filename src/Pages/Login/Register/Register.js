import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {

    const handleRegister = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password)
    }

    return (
        <div>
            <h2 className='text-center text-primary'>Please Register</h2>
            <form onSubmit={handleRegister} className='register-form'>
                <input type="text" name='name' placeholder='Your Name' />

                <input type="email" name="email" placeholder='Email Address' required />

                <input type="password" name="password" placeholder='Password' />

                <input type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-danger text-center text-decoration-none'>Please Register</Link></p>
        </div>
    );
};

export default Register;