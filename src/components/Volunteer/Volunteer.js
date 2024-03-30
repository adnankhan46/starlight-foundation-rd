import React from "react";
import "./Volunteer.css";
import { Fade } from "react-reveal";
import emailjs from 'emailjs-com';
import ImageCarousel from "../ImageCarousel/ImageCarousel";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import Typing from "react-typing-animation";
import Testimonial from "../Testimonial/Testimonial";

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
            <div className="img"></div>
            
         <div className="section1">
              <Fade up><Typing hideCursor={true} speed={50}> <h1> Volunteer your Time and Make a True Change</h1></Typing>
               <p>This is one of the simplest way to help out our cause. We believe the best way for our initiatives to be successful is for the community to get involved.
               This is an easy and efficient way of contributing to the great work we do at Starlight Foundation.</p>
               </Fade>
           </div>
           
               {/** */}
            <ImageCarousel/>
            {/** */}

            <p className="longp">This is one of the Simplest way to help out Our Cause. We believe the best way for Our Initiatives to be successful is for community to get involved.
             This is an easy and effcient way to Contribution to the Great Work we do at Starlight Foundation</p>
           

        <div className="volunteerImage">
        {/* ####### Developer Message: Put Your desired Image and Style in CSS */}
            <img alt="Volunteer-image" src="./assets/images/volunteer/our-core-values.webp"/>
        </div>     
                        <Fade right>
                            {/*<form onSubmit={ sendEmail }>
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
                            </form>*/}
                        </Fade>
                            {/**Section 2 */}
        <div className="section2">      
        <h1 className="">Why Volunteer With <span style={{color:"#ff8900"}}> Starlight </span></h1>
        <p className="longp">This is one of the Simplest way to help out Our Cause. We believe the best way for Our Initiatives to be successful is for community to get involved.
        This is an easy and effcient way to Contribution to the Great Work we do at Starlight Foundation</p>
        
        <li>Volunteering is such a simple, yet rewarding, way to support a cause you care
        about. While there are a million reasons why you should volunteer with STARLIGHT</li>
        <li>Your work, whether on the field or behind the scenes, will help us make India a better place for our children.</li>
        <li>Your volunteering experience will help you develop invaluable professional skills and build your leadership capabilities.</li>
        <li>During the volunteering program with Starlight Foundation, volunteers work for the betterment of government schools Infrastructure, community engagement activities and awareness campaigns on MHM throughout the session.</li>
        </div>
        <div className="volunteerImage">
        {/* ####### Developer Message: Put Your desired Image and Style in CSS */}
            <img alt="Volunteer-image" src="./assets/images/volunteer/our-core-values.webp"/>
        </div>

      {/**Section 3 */}

       <Testimonial/>

                    {/** ############# CTA */}
                    <div className="cta">
                    <h1>Join the Team</h1>
                    <h1 className="second">Register as a Volunteer</h1>
                    <a href='/donate'><i className="fas fa-heart"></i>  Apply Now </a>
                    </div>
            </div>
        </React.Fragment>
    );
};

export default Volunteer;