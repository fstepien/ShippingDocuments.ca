import React from 'react';
import PropTypes from 'prop-types';


const LoginOptions = (props) => {
    return (
      <div className="container mt50">
        <div className="box">
            <h2>User Login</h2>
            <p>Sign in to create your custom bill of lading and manage your account.</p>
            <button className="emailBtn" onClick={() => props.authenticate('Email')}>Login with Email</button> <br/>
            <button className="gmailBtn" onClick={() => props.authenticate('Google')}>Login with Gmail</button><br />
            <button className="githubBtn" onClick={() => props.authenticate('Github')}>Login with Github</button>
        </div>
      </div>
    );
}

LoginOptions.propTypes = {
    authenticate: PropTypes.func.isRequired
    };

export default LoginOptions;