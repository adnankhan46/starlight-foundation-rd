import React from "react";
import "./Footer.css";
import WhatsAppLogo from "../../images/logos/whatsapp.png";
import Certificate from "../../Registration Certificate.pdf";
import Policy from "../../Privacy Policy.pdf";
import TnC from "../../Terms & Conditions.pdf";
import Logo from "../../images/logos/logo-theme.png";

const Footer = () => {
  return (
    <React.Fragment>
      <a
        href="https://wa.me/+917587074393?text=I%20would%20like%20to%20get%20in%20touch."
        className="whatsappCta"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={WhatsAppLogo} alt="Whatsapp CTA Button" />
      </a>
      <footer className="footer">
        <div className="footerTop">
          <section className="section1">
            {/* <img src={Logo} alt="Starlight Foundation Logo" /> */}
            <h5 className="sectionHeading"> STARLIGHT FOUNDATION</h5>
            <p><a href="./Registration Certificate.pdf" target="_blank"> Registered under Chhattisgarh Society Registration Act 1973 (Serial No. 44, Year 1973)</a></p>
            <p>All donations are tax-exempted as eligible under section 80G of the Income Tax Act, 1961.</p>
          </section>
          {/* <section className="section2">
            <h5 className="sectionHeading">Legal</h5>
            <ul className="sectionLinks">
              <li>
                
              </li>
              <li>
                <a href={Policy} target="_blank">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href={TnC} target="_blank">
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </section> */}
          <section className="section2">
            <h5 className="sectionHeading">Contact</h5>
            <p>
              <ul className="sectionLinks">
                <li>
                  <a href="https://maps.app.goo.gl/kKvMKH9wXS3E9wyD9" target="_blank">
                    Plot : 11, Street : 4, Shakti Vihar, Risali, Chhattisgarh- 490006
                  </a>
                </li>
                <li>
                  <a href="mailto:teamstfo@gmail.com" target="_blank">
                    teamstfo@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+917587074393" target="_blank">
                    +91-7587074393
                  </a>
                </li>
              </ul>
            </p>
          </section>
          <section className="section3">
          <h5 className="sectionHeading">Social</h5>
          <div className="sectionSocial">
              <a
                href="https://www.instagram.com/starlight.foundation/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://twitter.com/Starlightfo_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.facebook.com/foundation.starlight"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/starlightfoundation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </section>
        </div>
        <div className="footerBottom">
          &copy; 2023 Starlight Foundation. All rights reserved. &emsp;|&emsp;
          <a href="./Privacy Policy.pdf">Privacy Policy</a>&emsp;|&emsp;
          <a href="./Terms & Conditions.pdf">Terms and Conditions</a>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
