import { useEffect, useState } from "react"

import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
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
                console.log(user);

            }).catch((error) => {
                const email = error.email;
                console.log(email);
                //setUser(error);
            });
        console.log("Signing In soon");

    }
    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth)
        .then(() => {
           console.log("sign Out");
        })
        .catch((error) => {
           
        });
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    }, []);


    //return [user, setUser];
    return { user, signInWithgoogle , handleSignOut}
}
export default useFirebase;