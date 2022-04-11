import React from 'react';
import useFirebase from '../../Hooks/Firebase';

const Home = () => {
    const {user} = useFirebase({});
    return (
        <div>
            <h1>This is Home</h1>
            <h3>Name: {user?.displayName}</h3>
            <p> Email: {user?.email}</p>
            <img src= {user?.photoURL} alt="" />
        </div>
    );
};

export default Home;