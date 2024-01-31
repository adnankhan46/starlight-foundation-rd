import React from "react";
import "./Volunteer.css";
import { Fade } from "react-reveal";
import emailjs from 'emailjs-com';

const Volunteer = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_esx8zqq', 'template_u456t2b', e.target, 'user_G4dB8sO539QzqM7zMx25s')
        .then(() => {
            alert("Message Sent!");
        }, () => {
            alert("Message couldn't be sent");
        });
    };

    return(
        <React.Fragment>
            <div className="volunteerCont">
                <div className="section section1">
                    <div className="left">
                        <div className="text">
                            <Fade up>
                                <h1>Volunteer your Time and Make a True Change</h1>
                                <p>This is one of the simplest way to help out our cause. We believe the best way for our initiatives to be successful is for the community to get involved. This is an easy and efficient way of contributing to the great work we do at Starlight Foundation.</p>
                            </Fade>
                        </div>
                    </div>
                    <div className="right"></div>
                </div>
                <div className="section section2">
                    <div className="left">
                        <div className="text">
                            <Fade up>
                                <h3 className="sectionHeading">Our CORE Values</h3>
                            </Fade>
                            <div className="values">
                                <Fade up>
                                    <div className="singleValue">
                                        <i className="fas fa-star"></i>
                                        <p>We are apolitical. Respect to all religion and we do not discriminate on caste, colour, orientation or age.</p>
                                    </div>
                                    <div className="singleValue">
                                        <i className="fas fa-star"></i>
                                        <p>We act without consideration of personal gain or profits.</p>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                    <div className="right"></div>
                </div>
                <div className="section section3">
                    <div className="left">
                        <Fade left>
                            <img src="./assets/images/volunteer/register-as-a-volunteer.jpg" alt="Register as a Volunteer" />
                        </Fade>
                    </div>
                    <div className="right">
                        <Fade right>
                            <form onSubmit={ sendEmail }>
                                <h5 className="formSubheading">JOIN THE TEAM</h5>
                                <h3 className="formHeading">Register as a Volunteer</h3>
                                <div className="inputGroup">
                                    <input type="text" name="fname" placeholder="Full Name*" required />
                                </div>
                                <div className="inputGroup">
                                    <input type="text" name="email" placeholder="Email*" required />
                                </div>
                                <div className="inputGroup">
                                    <input type="text" name="phone" placeholder="Phone*" required />
                                </div>
                                <div className="inputGroup">
                                    <input type="text" name="city" placeholder="City" />
                                </div>
                                <div className="inputGroup">
                                    <input type="text" name="state" placeholder="State" />
                                </div>
                                <div className="inputGroup">
                                    <button type="submit">Apply Now</button>
                                </div>
                            </form>
                        </Fade>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Volunteer;