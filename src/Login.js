import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
// import firebase from 'firebase';
// import base, { firebaseApp } from "./base";
// import LoginOptions from './LoginOptions';


class Login extends Component {

state = {
    uid: null,
    owner: null,
    }



// authHandler = async (authData) => {
//     console.log(authData);
//     await base.post()
// }    
// authenticate = (provider) => {
//     console.log(`${provider}AuthProvider`);
//     const authProvider = new firebase.auth[`${provider}AuthProvider`]();
//     firebaseApp
//       .auth()
//       .signInWithPopup(authProvider)
//       .then(this.authHandler);
// }


  goToStore = e => {
    e.preventDefault();
    // This only works because it has been bound in the contsctur
    const tempId = Math.floor(Math.random() * 10000);
    this.props.history.push(`/Form/${tempId}`)
}   

  render() {
    return (
      <div className="container mt50">
        <div className="box">
          <form action="" className="store-selector" onSubmit={this.goToStore}>
            <h2>Please Enter A Store</h2>
            <button type="submit">Login →</button>
          </form>
        </div>
      </div>
    )
     
    // return <LoginOptions authenticate={this.authenticate} />
    
  }
}

export default Login;