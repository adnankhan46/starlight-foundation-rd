import React from "react";
import "./AboutUs.css";
import { Fade } from "react-reveal";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import Typing from "react-typing-animation";


const AboutUs = () => {
    return (
        <React.Fragment>
            <div className="aboutUsCont">
            <div className="img"></div>
            <div className="section-main">
            <Fade up>
            <h1> <Typing hideCursor={true} speed={50}>About Us</Typing></h1>
            <p> STARLIGHT is a non-profitable organisation established in 2019 with a clear goal to change the
             lives of unprivileged children in our nation. To strengthen the foundation of a progressive nation
             by looking forward Illiteracy, Poor health condition due to lack of Proper Nutrition & Social Taboos
             on Menstrual Hygiene. The main objective is to provide a Happy, Healthy & Safe Live to the
             underserved children from marginalised geographies and moulding them into a better mobile reformer
             of the community.
            </p>
            </Fade>
            </div>
                <div className="section1">
                    <h1 className="teamphoto">Team Photo</h1>
                    <div className="teamPhoto">
                        <img className="teamImg" src="./assets/images/team/agney.jpg" alt="Team Photo" />
                        <img className="teamImg" src="./assets/images/team/navya.jpg" alt="Team Photo" />
                        <img className="teamImg" src="./assets/images/team/shubharangshu.jpg" alt="Team Photo" />
                    </div>
                </div>


                <div className="section2-a">
                    <h1>Our Vision</h1>
                    <p>
                        We are enacted to gear up every child who is deprived of Quality Education , Nutrition & Healthcare.
                        So that they can in turn assist others in the community with their own human potential and well being.
                    </p>
                </div>
                <div className="section2-a">
                    <h1>Our MISSION</h1>
                    <p>
                        Our Mission is to empower Underprivileged children from Marginalised Geographies Of India to achieve their own
                        potential and well being and make better version of a themselves as they are the future of our Nation.
                    </p>
                </div>
                <div className="section2-a">
                    <h1>Our GOAL</h1>
                    <p>
                        Our goal is to reach 0.5 Million Children By the end Of the year 2025.
                    </p>
                </div>
                <hr className="divider-line" />

                <div className="section2-b">
                    <h1>Starlight Core Values</h1>
                    <div className="coreValuesItems">

                        <div className="coreValuesItem">
                            <i className="fas fa-star"></i>
                            <h1>Social Equality</h1>
                            <p>We are a political, we give respect to all religion and we do not discriminant on caste, oolour, orientation or age
                            . We consider all our team members equal</p>
                        </div>
                        <div className="coreValuesItem">
                            <i className="fas fa-star"></i>
                            <h1>Collaboration</h1>
                            <p>We achieve more when we collaborate and all work together.
                             Starlight always try to collaborate within the organisation and are always open for outside collaboration</p>
                        </div>
                        <div className="coreValuesItem">
                            <i className="fas fa-star"></i>
                            <h1>Integrity</h1>
                            <p>We build trust of our partners, donors and volunteers through responsible action and Our honest relationship</p>
                        </div>


                    </div>

                </div>

                <hr className="divider-line" />


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

                

            </div>
        </React.Fragment>
    );
};

export default AboutUs;