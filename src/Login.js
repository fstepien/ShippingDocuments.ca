import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import firebase from 'firebase';
import base, { firebaseApp } from "./base";
import LoginOptions from './LoginOptions';
import Form from './Form';


class Login extends Component {

state = {
  id: null,
  owner: null,
  email: null
}

authHandler = async (authData) => {
  const id = authData.additionalUserInfo.profile.id;
  const email = authData.additionalUserInfo.profile.email;
  const owner = authData.additionalUserInfo.profile.name;
  const userData = await base.fetch(id, {context: this});
  if(!userData.id){
    await base.post(`${id}/id`, {
      data: id});
  }
  this.setState(
    {id, 
    email, 
    owner}
  );
  this.props.history.push(`/Form/${id}`)
} 

authenticate = (provider) => {
    console.log(`${provider}AuthProvider`);
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
}

  render() { 
    if(!this.state.id){
      return <LoginOptions authenticate={this.authenticate}/> }
      return <Form userId={this.state.id}/>
  }
}

export default Login;