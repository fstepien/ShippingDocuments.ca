import React from 'react';
import PropTypes from 'prop-types';


const LoginOptions = (props) => {
    return (
      <div className="container mt50">
        <div className="box">
            <h2>Product Login</h2>
            <p>Sign in to create your custom bill of lading and manage your account.</p>
            {/* <button className="email" onClick={() => props.authenticate('Email')}>Login with Email</button> */}
            <button className="gmail" onClick={() => props.authenticate('Google')}>Login with Gmail</button>
        </div>
      </div>
    );
}

LoginOptions.propTypes = {
    authenticate: PropTypes.func.isRequired
    };

export default LoginOptions;