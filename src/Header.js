import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <header>
          <div className="container">
          <Link to={`/`}>
            <h1 className="logo">
                <span className="tdg">TDG</span>
                <span className="bol">BOL</span>
            </h1>
            </Link>
            <ul>    
                {props.authenticated ? 
                (<li>logout</li>) :
                ("")
                }
                <li><button>TDG Training</button></li>
            </ul>
          </div>
        </header>
        
    );
}

export default Header;