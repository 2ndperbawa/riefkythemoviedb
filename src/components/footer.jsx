import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        {" "}
        <div className="subFooter foot1">
          <a className="subFooterHead">THE BASICS</a> <br />
          <a href="#">About TMDb</a> <br />
          <a href="#">Contact Us</a> <br />
          <a href="#">Support Forums</a> <br />
          <a href="#">API</a> <br />
          <a href="#">System Status</a>
        </div>
        <div className="subFooter foot2">
          <a className="subFooterHead">LEGAL</a> <br />
          <a href="#">Terms of Use</a> <br />
          <a href="#">API Terms of Use</a> <br />
          <a href="#">Privacy Policy</a> <br />
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
