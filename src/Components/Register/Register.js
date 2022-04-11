import React from 'react';
import './Register.css'
const Register = () => {
    return (
        <div className='div'>
            <h3>Register Here</h3>
            <form>
                <input type="text" placeholder='Your Name' /><br />
                <input type="email" placeholder='Your Email' /><br />
                <input type="password"  name="" id="" placeholder='Your Password' /><br />
              <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;