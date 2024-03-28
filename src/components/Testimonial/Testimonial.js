import React from 'react'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import "./testimonial.css"

function Testimonial() {
  return (
    <div>
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
                        <div className="test-img">
                        {/** Edit Image as per required */}
                        <img src="./assets/images/team/agney.jpg" alt="Team Photo" />
                        </div>
                        <p>I've always wanted to donate towards the betterment of the society and i think STARLIGHT FOUNDATION is the best. Platform to start with.
                        Within a week of lockdown thousands of families have no food in their plates & are still struggling It is almost like our moral duty to help such needfull one's.
                        The best part is working with so many like minded people for the noble cause & being able to something about the problem I fell we share hope among those who need it the most. </p>
                          <h4 className="doTitle">~Megha Urkude (Volunteer)</h4>
                        </div>
                      </div>
              
                      {/* Testimonial 2 */}
                      <div className="singleDo">
                        <div className="testContent singleDo orange">
                        <div className="test-img">
                        {/** Edit Image as per required */}
                        <img src="./assets/images/team/agney.jpg" alt="Team Photo" />
                        </div>
                        <p>In my journey with STARLIGHT FOUNDATION, I learnt the importance of the little things we take for granted and from these children, I learnt what the exact meaning. of being happy is. Sometimes little things can make a huge difference. Most importantly, I understood that one should never circumstance is. stop dreaming, no matter what the STARLIGHT FOUNDATION made me a more humble
                        and empathizing person. Proud to be a part of this by which I made a clear mindset of not complaining about the setbacks and to face all the challenges no matter what!! </p>
                          <h4 className="doTitle">~Shaswat Pandey(Volunteer)</h4>
                        </div>
                      </div>
              
                      {/* Testimonial 3 */}
                      <div className="singleDo">
                        <div className="testContent singleDo blue">
                        <div className="test-img">
                        {/** Edit Image as per required */}
                        <img src="./assets/images/team/agney.jpg" alt="Team Photo" />
                        </div>
                        <p>I had no idea where to place mine focus and create a positive change in my community. Had various ideas for brainstorming but had no actual direction. However one thing was certain, that I wanted to work with children in foster care. Mostly I wanted to create a "Bright spot" and show the children at the centre that they were important part of the community.
                        an STARLIGHT FOUNDATION was the only platform what I was dreaming for.
                        I felt delighted working with such co-operative volunteers having such good mind set of helping nation to complete the journey of so called a "Developed Nation." </p>
                          <h4 className="doTitle">~Sukriti Tiwari (Volunteer)</h4>
                        </div>
                      </div>
                    </OwlCarousel>
                  
                </div>
    </div>
  )
}

export default Testimonial