import React from 'react';
import useFirebase from '../../Hooks/Firebase';

const Login = () => {
    const {signInWithgoogle} = useFirebase({});
    return (
        <div>
            <h1>Please login</h1>
            <div style={{margin: "20px"}}>
                <button onClick={signInWithgoogle}>Google Sign In</button>
            </div>
            <form>
                <input type="email" name="" placeholder="Your Email "/><br />
                <input type="password" name="" id="" placeholder="Your password "/><br />
                <input  type="submit" value="LogIn" />
            </form>
        </div>
    );
};

export default Login;