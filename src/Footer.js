import React from 'react';
import Terms from './Terms';
import Privacy from './Privacy';

class Footer extends React.Component {

state = {
    termsDisplay: false,
    privacyDisplay: false,
    bottomDisplay: true
  }

toggleTerms = () => {
  this.setState({termsDisplay: !this.state.termsDisplay})
  let bottomDisplay = {...this.state.bottomDisplay};
  bottomDisplay = true;
  this.setState({bottomDisplay});
}  
togglePrivacy = () => {
  this.setState({privacyDisplay: !this.state.privacyDisplay})
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
            <li><a onClick={this.showTermsOnly}>Terms</a> and <a onClick={this.togglePrivacy}>Privacy Policy</a></li>

            <li>&#169; ShippingDocuments.ca 2018</li>
          </ul>
        </div>
        <Terms termsDisplay={this.state.termsDisplay} toggleTerms={this.toggleTerms} bottomDisplay={this.state.bottomDisplay}/>
        {this.state.privacyDisplay ?
        <Privacy privacyDisplay={this.state.privacyDisplay} togglePrivacy={this.togglePrivacy}/> : ""}
  </footer>
      )   
    }
}

export default Footer;