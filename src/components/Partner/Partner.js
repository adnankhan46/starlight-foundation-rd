import React from "react";
import "./Partner.css";
import { Fade } from "react-reveal";
import emailjs from 'emailjs-com';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import Typing from "react-typing-animation";
import Testimonial from "../Testimonial/Testimonial";

const Partner = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_dor1uw7', 'template_hkxdawa', e.target, 'user_r6u4b71Ez6veIpoUlsKDH')
        .then(() => {
            alert("Message Sent!");
        }, () => {
            alert("Message couldn't be sent");
        });
    };
    
    const sendEmailTwo = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_dor1uw7', 'template_e4zcz37', e.target, 'user_r6u4b71Ez6veIpoUlsKDH')
        .then(() => {
            alert("Message Sent!");
        }, () => {
            alert("Message couldn't be sent");
        });
    };

    return(
        <React.Fragment>
            <div className="partnerCont">
            <div className="img"></div>
                <div className="section1">
                    <h1> <Typing hideCursor={true} speed={50}>Partner With Us</Typing></h1>
                    <p>Be a part of Our Various Projects and Help Us to Create a long lasting Impact in lives of Children</p>
                </div>

        <div className="partnerImage">
        {/* ####### Developer Message: Put Your desired Image and Style in CSS */}
            <img alt="partner-image" src="./assets/images/volunteer/our-core-values.webp"/>
        </div>

        <div className="section2">
                    <p>We are in constant need of Support to help us gear up Our various Projects running on ground</p>
                   <ul>
                   <li>Join the Hands to make a difference</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    </ul>
                </div>


       {/**Section 3 */}
      <Testimonial/>

            <div className="old-forms">
               {/* <div className="section section1">
                    <div className="left">
                        <div className="text">
                            <Fade left>
                                <h1><i>#BE_A_CHANGE</i></h1>
                                <p>Raise awareness by starting a new chapter in your city.<br />Here is a checklist for starting a new chapter.</p>
                                <a href="./assets/partner-with-us.pdf" target="_blank">
                                    <Fade left>
                                        <button type="button">VIEW</button>
                                    </Fade>
                                </a>
                            </Fade>
                        </div>
                    </div>
                    <div className="right"></div>
                </div>
                <div className="section section2">
                    <Fade up>
                        <h2 className="sectionHeading">Register to Start a New Chapter</h2>
                        <h4 className="sectionSubheading">Join hands with us to make a difference</h4>
                        <form onSubmit={ sendEmail }>
                            <div className="inputGroup twoInputs">
                                <input type="text" name="fname" placeholder="First Name*" required />
                                <input type="text" name="lname" placeholder="Last Name*" required />
                            </div>
                            <div className="inputGroup twoInputs">
                                <input type="email" name="email" placeholder="Email*" required />
                                <input type="text" name="phoneno" placeholder="Phone No.*" required />
                            </div>
                            <div className="inputGroup">
                                <input type="text" name="city" placeholder="City*" required />
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </Fade>
                </div>
                <div className="section section3">
                    <Fade up>
                        <h2 className="sectionHeading">For Companies and Organizations</h2>
                       
                        <form onSubmit={ sendEmailTwo }>
                            <h3 className="formHeading">Organization Details</h3>
                            <div className="inputGroup">
                                <input type="text" name="rename" placeholder="Registered Entity Name*" required />
                            </div>
                            <div className="inputGroup">
                                <input type="text" name="raddress" placeholder="Registered Address*" required />
                            </div>
                            <div className="inputGroup twoInputs">
                                <input type="text" name="city" placeholder="City*" required />
                                <input type="text" name="pincode" placeholder="Pincode*" required />
                            </div>
                            <h3 className="formHeading">Primary point of contact</h3>
                            <div className="inputGroup twoInputs">
                                <input type="text" name="contactno" placeholder="Contact no.*" required />
                                <input type="email" name="email" placeholder="Email Id*" required />
                            </div>
                            <h3 className="formHeading">Anything you would like for us to know?</h3>
                            <div className="inputGroup">
                                <textarea name="message" cols="30" rows="10" placeholder="Your message"></textarea>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </Fade>
    </div>*/}
    </div>
            </div>
        </React.Fragment>
    );
};

export default Partner;