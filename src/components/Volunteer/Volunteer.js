import React from "react";
import "./Volunteer.css";
import { Fade } from "react-reveal";
import emailjs from 'emailjs-com';
import ImageCarousel from "../ImageCarousel/ImageCarousel";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";

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
            
         <div className="section1">
               <h1>Volunteer</h1>
               <p>Volunteer Your Time And Make a True Change</p>
           
               {/** */}
            <ImageCarousel/>
            {/** */}

            <p className="longp">This is one of the Simplest way to help out Our Cause. We believe the best way for Our Initiatives to be successful is for community to get involved.
             This is an easy and effcient way to Contribution to the Great Work we do at Starlight Foundation</p>
             </div>  
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

      <div className="section3">
      <h1>What Our Volunteers have to say</h1>
                    
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