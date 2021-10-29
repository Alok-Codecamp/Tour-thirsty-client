import { getAuth,signOut,onAuthStateChanged,
    signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialized from "../firebase/firebase.init";


firebaseInitialized();

const useFirebase=()=>{
    const [user, setUser]=useState({});
    const [isLoading,setLoading]=useState(true);
    const auth=getAuth();

    const googleSignIn=()=>{
        setLoading(true);
        const googleProvider=new GoogleAuthProvider();
        return signInWithPopup(auth,googleProvider);
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user);
            }
            else{
                setUser({})
            }
            setLoading(false);
        })
    },[])

    const LogOut=()=>{
        setLoading(true);
        signOut(auth)
        .then(()=>{
            setUser({});
        })
        setLoading(false);
    }
    return{
        user,
        isLoading,
        setUser,
        setLoading,
        googleSignIn,
        LogOut,

    }

}

export default useFirebase;