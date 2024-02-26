import React from "react";
import "./Partner.css";
import { Fade } from "react-reveal";
import emailjs from 'emailjs-com';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";

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
                <div className="section1">
                    <h1>Partner With Us</h1>
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

      <div className="section3">
      <h1>Testimonials</h1>
                    
                    <OwlCarousel
                      className="owl-theme"
                      nav={false}
                      items={1} 
                      margin={40}
                      autoplay={true}
                      autoplayTimeout={2000}
                      autoplayHoverPause={true}
                      loop={true}
                      dots={true}
                    >
                      {/* Testimonial 1 */}
                      <div className="singleDo">
                        <div className="testContent singleDo pink">
                        <p>I've always wanted to donate towards the betterment of the society and i think STARLIGHT FOUNDATION is the best. Platform to start with.
                        Within a week of lockdown thousands of families have no food in their plates & are still struggling It is almost like our moral duty to help such needfull one's.
                        The best part is working with so many like minded people for the noble cause & being able to something about the problem I fell we share hope among those who need it the most. </p>
                          <h4 className="doTitle">~Megha Urkude (Volunteer)</h4>
                        </div>
                      </div>
              
                      {/* Testimonial 2 */}
                      <div className="singleDo">
                        <div className="testContent singleDo orange">
                        <p>In my journey with STARLIGHT FOUNDATION, I learnt the importance of the little things we take for granted and from these children, I learnt what the exact meaning. of being happy is. Sometimes little things can make a huge difference. Most importantly, I understood that one should never circumstance is. stop dreaming, no matter what the STARLIGHT FOUNDATION made me a more humble
                        and empathizing person. Proud to be a part of this by which I made a clear mindset of not complaining about the setbacks and to face all the challenges no matter what!! </p>
                          <h4 className="doTitle">~Shaswat Pandey(Volunteer)</h4>
                        </div>
                      </div>
              
                      {/* Testimonial 3 */}
                      <div className="singleDo">
                        <div className="testContent singleDo blue">
                        <p>I had no idea where to place mine focus and create a positive change in my community. Had various ideas for brainstorming but had no actual direction. However one thing was certain, that I wanted to work with children in foster care. Mostly I wanted to create a "Bright spot" and show the children at the centre that they were important part of the community.
                        an STARLIGHT FOUNDATION was the only platform what I was dreaming for.
                        I felt delighted working with such co-operative volunteers having such good mind set of helping nation to complete the journey of so called a "Developed Nation." </p>
                          <h4 className="doTitle">~Sukriti Tiwari (Volunteer)</h4>
                        </div>
                      </div>
                    </OwlCarousel>
                    </div>

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