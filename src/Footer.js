import React from 'react';

const Footer = (props) => {
    return (
        <footer>
            <div className="footer container mt50">
              <ul>
                <li></li><a href="mailto:contact@shippingdocuments.ca" target="_blank" rel="noopener noreferrer">Contact Us</a>
                {/* <li><a href="#">TDG Training</a></li> */}
                <li><a href="https://www.tc.gc.ca/eng/tdg/page-1288.html" rel="noopener noreferrer" target="_blank">TDG Regulations</a></li>
                <li><a href="#">Terms</a> and <a href="#">Privacy Policy</a></li>

                <li>&#169; ShippingDocuments.ca 2018</li>
              </ul>
            </div>
      </footer>
        
    );
}

export default Footer;