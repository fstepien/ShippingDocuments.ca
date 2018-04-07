import React from 'react';
import PrivacyText from './PrivacyText';

class Privacy extends React.Component {

togglePrivacy = (e) => {
        e.preventDefault();
        this.props.togglePrivacy();
    }

render() {

let modalContent = {
    margin: '10vh auto',
    height: '80vh',
    width: '75%',
    borderRadius: '5px',
    backgroundColor: 'white',
    padding: '2em',
    display: 'grid',
    gridTemplateRows: '1fr 10fr 1fr',
    justifyContent: 'space-between'
} 


return (     
<React.Fragment>  
    <div style={{
        position: 'fixed',
        zIndex: '10',
        left: '0',
        top: '0',
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        overflowX: 'auto',
        }}>
        <div style={modalContent}>
            <div className="top">
                <h1>Privacy Policy</h1><button className="closeTermsBtn" onClick={this.props.togglePrivacy}>X</button>
            </div>
            <PrivacyText />
            
        </div>
    </div>      
</React.Fragment>
        
      );
    }
  }

export default Privacy;