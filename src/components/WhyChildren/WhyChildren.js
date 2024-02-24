import React from 'react'
import "./whyChildren.css"

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";

function WhyChildren() {
  return (
    <React.Fragment>
    <div className="childrenContent">
    <div className="img"></div>
    
    <div className="section1">
    <h1>Why Children</h1>
      <p>
      Children are the building blocks of our nation's future. Let's invest in their potential today, so that they can become our scientists, politicians, sportspeople, journalists and teachers of tomorrow!</p>
     
      </div>
    
      <div className="section2">
      <h1>Some of the Unheard <span className='facts'>Facts</span> about Indian Children</h1>
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
                        <div className="testContent singleDo">
                        <p>2 out of 3 child death, below the age of 5 are caused by malnutrition </p>
                          <h4 className="doTitle">UNICEF 2019</h4>
                        </div>
                      </div>
              
                      {/* Testimonial 2 */}
                      <div className="singleDo">
                        <div className="testContent singleDo">
                        <p>33 million child labours go to work instead of school </p>
                          <h4 className="doTitle">CENSUS 2011</h4>
                        </div>
                      </div>
              
                      {/* Testimonial 3 */}
                      <div className="singleDo">
                        <div className="testContent singleDo">
                        <p>2 out of 5 children do not recieve complete immunication </p>
                          <h4 className="doTitle">NFHS 4 2016</h4>
                        </div>
                      </div>
                      {/* Testimonial 4 */}
                      <div className="singleDo">
                        <div className="testContent singleDo">
                        <p>23 million girls drop out of school annualy after they start their period</p>
                          <h4 className="doTitle">India.com</h4>
                        </div>
                      </div>
                    </OwlCarousel>
      </div>

      <div className="section3">
      
      <a href='/home'><i className="fas fa-heart"></i>  Yes I Want To Help </a>
      
      </div>

      <div className="section4">
      
      <h1>Why Children</h1>

      <div className="whyItems">
          <div className="whyItem">
          <div className="whyItemImage"><img src="./assets/images/volunteer/our-core-values.webp" alt="Children Image" /></div>
            <div className="whyItemTexts">
              <div className="whyItemTitle">Education</div>
              <div className="whyItemDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, iste accusantium repella
               dignissimos nulla quibusdam magnam debitis consectetur! Magni ipsa voluptatem nam voluptate illum quo
                distinctio non rem veniam cupiditate.
              </div>
            </div>
          </div>

          <div className="whyItem">
          <div className="whyItemImage"><img src="./assets/images/volunteer/our-core-values.webp" alt="Children Image" /></div>
            <div className="whyItemTexts">
              <div className="whyItemTitle">Health and Nutrition</div>
              <div className="whyItemDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, iste accusantium repella
               dignissimos nulla quibusdam magnam debitis consectetur! Magni ipsa voluptatem nam voluptate illum quo
                distinctio non rem veniam cupiditate.
              </div>
            </div>
          </div>

          <div className="whyItem">
          <div className="whyItemImage"><img src="./assets/images/volunteer/our-core-values.webp" alt="Children Image" /></div>
            <div className="whyItemTexts">
              <div className="whyItemTitle">Menstrual Hygine Management</div>
              <div className="whyItemDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, iste accusantium repella
               dignissimos nulla quibusdam magnam debitis consectetur! Magni ipsa voluptatem nam voluptate illum quo
                distinctio non rem veniam cupiditate.
              </div>
            </div>
          </div>
      </div>
      
      </div>

      {/* ############################ Section 5*/}

      <div className="section5">
      
      <p>Your Smallest Contribution makes a big difference to Childrens's lives. We do count
      on the generosity of people like you to be able to create real change for India's Children</p>
      
      </div>
    
    </div>
     
      </React.Fragment>
  )
}

export default WhyChildren
