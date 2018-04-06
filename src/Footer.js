import React from 'react';
import Terms from './Terms';

class Footer extends React.Component {

state = {
    termsDisplay: false,
    bottomDisplay: true
  }

toggleTerms = () => {
  this.setState({termsDisplay: !this.state.termsDisplay})
  let bottomDisplay = {...this.state.bottomDisplay};
  bottomDisplay = true;
  this.setState({bottomDisplay});
}  
showTermsOnly = () => {
  
  let bottomDisplay = {...this.state.bottomDisplay};
  bottomDisplay = false;
  this.setState({bottomDisplay});
  this.setState({termsDisplay: !this.state.termsDisplay})
}  

render() {     

return (


    <footer>
        <div className="footer container mt50">
          <ul>
            <li></li><a href="mailto:contact@shippingdocuments.ca" target="_blank" rel="noopener noreferrer">Contact Us</a>
            {/* <li><a href="#">TDG Training</a></li> */}
            <li><a href="https://www.tc.gc.ca/eng/tdg/page-1288.html" rel="noopener noreferrer" target="_blank">TDG Regulations</a></li>
            <li><a onClick={this.showTermsOnly}>Terms</a> and <a href="#">Privacy Policy</a></li>

            <li>&#169; ShippingDocuments.ca 2018</li>
          </ul>
        </div>
        <Terms termsDisplay={this.state.termsDisplay} toggleTerms={this.toggleTerms} bottomDisplay={this.state.bottomDisplay}/>
  </footer>
      )   
    }
}

export default Footer;