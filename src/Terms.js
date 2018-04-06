import React from 'react';
import TermsText from './TermsText';

class Terms extends React.Component {
render() {

let termsDisplay;
if(this.props.termsDisplay){
    termsDisplay = 'block'
} else {
    termsDisplay = `none`
}    
console.log(termsDisplay)


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
        display: termsDisplay}}>
        <div style={modalContent}>
            <div className="top">
                <h1>Terms and Conditions</h1><button className="closeTermsBtn" onClick={this.props.toggleTerms}>X</button>
            </div>
            <TermsText />
            <div className="bottom">
                <form >
                    <div>
                        
                    <input type="checkbox" required/>
                    <span> I agree to the terms and conditions</span>
                    </div>
                    <button className="termsSubmitBtn">Print</button>
                </form>
            </div>
        </div>
    </div>      
</React.Fragment>
        
      );
    }
  }

export default Terms;