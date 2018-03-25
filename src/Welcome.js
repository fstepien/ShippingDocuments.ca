import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Welcome extends Component {
  render() {
    return (
    <React.Fragment>
      <div className="container login mt50">
        <Link to={`/Login`}>
            <button type="submit" className="loginBtn">START NEW BOL →</button>
        </Link>
      </div>
      <section className="container hello mt50">
        <div className="box">First Box</div>
        <div className="box">Second Box</div>
      </section>
    </React.Fragment>
    );
  }
}

export default Welcome;
