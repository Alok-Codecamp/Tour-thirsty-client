import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {user,setUser,googleSignIn,setLoading}=useAuth();
    const location=useLocation();
    const history=useHistory();
    const redirect_url=location.state?.from||'/home';
    const handleSignIn=()=>{
        setLoading(true);
        googleSignIn()
        .then(result=>{
            setUser(result.user);
            history.push(redirect_url);
        })
        setLoading(false);
    }
    return (
        <div className="login">
            <button onClick={handleSignIn}>Sign in with google</button>
            
        </div>
    );
};

export default Login;