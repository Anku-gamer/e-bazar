import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App';
import { useHistory, useLocation } from 'react-router';
import { useState } from 'react';



const Login = () => {
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({
      isSignedIn: false,
      name: '',
      email: '',
      password: '',
      image: '',
      error: '',
      success: false
    });

    const handleGoogleSignIn = () => {
        var googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const  {displayName, email} = result.user;
                const  signedInUser = {name: displayName,  email}
                setLoggedInUser(signedInUser);
                history.replace(from);
            }).catch((error) => {     
                var errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    
      const handleSignOut = () => {
        firebase.auth().signOut()
          .then(res => {
            const signedOutUser = {
              isSignedIn: false,
              name: '',
              email: '',
              image: ''
            }
            setUser(signedOutUser);
          })
          .catch(err => {
            console.log(err);
          })
      }
      
    return (
        <div>
            <div style={{textAlign: 'center'}}>
        {
          user.isSignedIn && <div>
            <h3>Welcome, {user.name}</h3>
            <p>Your Email: {user.email}</p>
            <img src={user.image} alt="" />
          </div>
        }
  
        <div className= "border row m-5">
          {
          user.isSignedIn ? 
          <button className="btn btn-dark btn-lg btn-block" onClick={handleSignOut}> Google Sign out</button>:
          <button style={{marginTop:'10px'}} className="btn btn-outline-info btn-lg btn-block" onClick={handleGoogleSignIn}> Google Sign in</button>
          }
        </div>
        <p style={{ color: 'red' }}>{user.error}</p>
        </div>
        </div>
    );
};
export default Login;