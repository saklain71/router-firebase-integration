import { useState } from "react"

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase.init";

const provider = new GoogleAuthProvider();

const auth = getAuth(app);


const useFirebase = () => {
    const [user, setUser] = useState({});

    const signInWithgoogle = () => {
     
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setUser(user);

            }).catch((error) => {
                const email = error.email;
                console.log(email);
                //setUser(error);
            });
        console.log("Signing In soon");

    }


    //return [user, setUser];
    return { user, signInWithgoogle }
}
export default useFirebase;