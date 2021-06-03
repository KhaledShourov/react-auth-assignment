import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebase.Config';
import { Form } from 'react-bootstrap';
import { Button } from 'bootstrap';

if (!firebase.apps.length) {
firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}
const Login = () => {
  const [user, setUser] = useState({})
    var provider = new firebase.auth.GoogleAuthProvider();
    var fbProvider = new firebase.auth.FacebookAuthProvider();
  const handleGoogleSignIn = () =>{
  
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
        console.log(user)
        setUser(user)
      }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorCode, errorMessage, email, credential)
      });
  }
  const handleFbSignIn =() =>{
    firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then((result) => {
        var credential = result.credential;
        var user = result.user;
        var accessToken = credential.accessToken;
        console.log(user)
        setUser(user)
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorCode, errorMessage, email, credential)
      });
  }
  return (
    <div className="sign-in-from w-50 m-auto border rounded p-2">
    <h3 className="text-center py-2">Sign In Form</h3>
    <div className="rounded bg-primary text-center text-white"><button onClick={handleGoogleSignIn} className="btn btn">Sign in With Google</button></div> <br />
    <div className=" rounded bg-primary text-center text-white"><button onClick={handleFbSignIn} className="btn btn">Sign in With facebook</button></div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <button className="btn btn-success">Submit</button>
      </Form>
      <div className="text-primary">
        <h3>Name: {user.displayName}</h3>
      <h3>Email: {user.email}</h3>
      <img src={user.photoURL} alt="" />
      </div>
    </div>
  );
};

export default Login;