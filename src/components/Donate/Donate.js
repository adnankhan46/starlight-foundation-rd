import React, { useEffect, useState } from "react";
import "./Donate.css";
import { Fade } from "react-reveal";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import Testimonial from "../Testimonial/Testimonial";
import FormToDonate from "../FormToDonate/FormToDonate";


const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px',
  marginTop:"16px",
  borderRadius: "16px"
}
const slideImages = [
  {
    url: './assets/images/donate/deepawali.png',
    caption: 'Slide 1'
  },
  {
    url: './assets/images/donate/tarang.png',
    caption: 'Slide 2'
  },
  {
    url: './assets/images/donate/immunization.webp',
    caption: 'Slide 3'
  },
];
const Donate = () => {
  const bottomDonate = () => {
    const donateBox = document.querySelector(".bottomDonate");
    const section2 = document.querySelector(".section2");
  
    console.log("donateBox:", donateBox);
    console.log("section2:", section2);
  
    if (!donateBox || !section2) {
      console.error("One or both elements not found in the DOM.");
      return;
    }
  
    const topPosition = section2.offsetTop + section2.offsetHeight;
  
    window.addEventListener("scroll", (e) => {
      if (window.scrollY >= topPosition) donateBox.classList.add("show");
      else donateBox.classList.remove("show");
    });
  };
  

  useEffect(() => {
    bottomDonate();
  }, []);

{/**###################################################### Scrolling and Decreasing height Feature */}
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const [maxHeight, setMaxHeight] = useState(511);
  // const [lastScrollTop, setLastScrollTop] = useState(0);
  // const [scrollDirection, setScrollDirection] = useState('');
  

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollTop = window.scrollY;

  //     setScrollDirection(currentScrollTop > lastScrollTop ? 'down' : 'up');
  //     setScrollPosition(currentScrollTop);
  //     setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [lastScrollTop]);

  // useEffect(() => {
  //   if (scrollPosition > 2511 && scrollDirection === 'down') {
  //     const decrement = 2; 
  //     const newHeight = maxHeight - decrement;
  //     setMaxHeight(Math.max(0, newHeight));
  //   } else if (scrollDirection === 'up') {
  //     // Return to normal height when scrolling back up
  //     setMaxHeight(356);
  //   }
  // }, [scrollPosition, scrollDirection, maxHeight]);

  {/**#################################################  FORM */}
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    dob: '',
    mobile: '',
    address: '',
    pincode: '',
    city: '',
    state: '',
    country: '',
    pan: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <React.Fragment>
      <div className="donateCont">
        <div className="section section1">
          <div className="left">
            <div className="text">
              <Fade left>
                <h1>YOURS SUPPORT MATTERS</h1>
                <p>Your Small Contribution Can Make a Big Difference in their lives</p>
                <a
                  href="upi://pay?pa=starlightfo@upi&pn=StarlightFoundation&cu=INR"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Fade left>
                    <button type="button">DONATE NOW</button>
                  </Fade>
                </a>
              </Fade>
            </div>
          </div>
          <div className="right"></div>
        </div>
        <div className="section section2">
         <div>
                <FormToDonate />
            </div>
        <FormToDonate/>
        {/*<div className="two-form-container"></div>*/}
        {/*<div className="left-form">
        <Fade up>
        <h2 className="sectionHeading">
         Details
        </h2>
        <form onSubmit={handleSubmit}>
        <div className="user-details">
        <div className="form-group">
          <label className="details">Full Name</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter your Full Name"/>
        </div>
        <div className="form-group">
          <label className="details">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your Email"/>
        </div>
        <div className="form-group">
          <label className="details">Date of Birth</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label className="details">Mobile Number</label>
          <input type="number" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Enter your Mobile Number"/>
        </div>
        <div className="form-group">
          <label className="details">Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Enter your Address"/>
        </div>
        <div className="form-group">
          <label className="details">Pincode</label>
          <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Enter your Pincode"/>
        </div>
        <div className="form-group">
          <label className="details">City</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Enter your State"/>
        </div>
        <div className="form-group">
          <label className="details">State</label>
          <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="Enter your State" />
        </div>
        <div className="form-group">
          <label className="details">Country</label>
          <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Enter your Country"/>
        </div>
        <div className="form-group">
          <label className="details">PAN Number</label>
          <input type="text" name="pan" value={formData.pan} onChange={handleChange} placeholder="Enter your PAN Number"/>
        </div>
        <button type="submit" className="submutButton">Submit</button>
        </div>
      </form>
        
      </Fade>
  </div>*/}
      

        {/*<div className={`right-form ${scrollPosition > 120 && 'fixed'}`} style={{ maxHeight: `${maxHeight}px` }}><Fade up>
        
        <h2 className="sectionHeading">
         Choose an Amount to Donate
        </h2>
        
        <div className="payment-buttons-container">

        <div className="amount-list">
        <FormToDonate/>
        <a
        className="payment-button"
        href="upi://pay?pa=starlightfo@upi&pn=StarlightFoundation&cu=INR&am="
        target="_blank"
        rel="noopener noreferrer"
        >
        Other Amount
        </a>
        </div>
        </div>
          
        
      </Fade>
</div>*/}

       

         
        </div>

        
        
       
       
        <Fade up>
          <h1 className="heading-long">How Will Your Donate Help?</h1>
        </Fade>

        {/** Img Carousel */}
        <div className="car-container">
       
        
        <Fade up>
        
        <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                {/*<span style={spanStyle}>{slideImage.caption}</span>*/}
              </div>
            </div>
          ))} 
        </Slide>
      </div>
      </Fade>
      
       {/** Img Carousel Ends */}
          <ul>
          <li>Help Prematured and Malnurished babies Survive and Thrive</li>
          <li>Help to raise awareness regarding the Social Taboos related to Menstrual Hygine</li>
          <li>Help Children from marginalised communities get Quality Education</li>
          <li>Help those who are worst effected during emergencies</li>
          <li>Help to Install Sanitary Pad Disperser Machine in Government School & Colleges Based in Rural Areas</li>
          <li>Help underprivileged children to secure their future and help them shine</li>
          </ul>
          </div>
        {/** Img Carousel */}

        {/** Section 3 */}
        {/*<div className="section section3">
          <Fade up>
            <div className="left" style={{ textAlign: "center" }}>
              <img
                src="./assets/images/donate/deepawali.png"
                class="smallImage"
                alt="Tarang"
              />
            </div>
            <div className="right">
              <h2 className="sectionHeading">DIVYA DEEPAWALI 2021</h2>
              <p>
                Diwali is just around the corner! On this auspicious day of
                light, love, and celebration, let's take a step and celebrate
                this day with those who can't for themselves! <span>✨</span>
                <br />
                <br />
                Starlight Foundation brings to you, an opportunity to make this
                day remarkable by bringing a change through your small act of
                compassion.
                <br />
                <br />
                <span>💫</span>Be a part of दिव्य दीपावली 2021. <span>💫</span>
                <br />
                <br />
                Contribute and donate to this purpose and join us for music,
                dance, games, awards, and much more that awaits you! ✨
              </p>
            </div>
          </Fade>
        </div>
        <div className="section section3">
          <Fade up>
            <div className="left" style={{ textAlign: "center" }}>
              <img
                src="./assets/images/donate/tarang.png"
                class="smallImage"
                alt="Tarang"
              />
            </div>
            <div className="right">
              <h2 className="sectionHeading">TARANG</h2>
              <p>
                Support to a worthy cause! On the eve of Starlight Foundation
                Day TARANG 2021. We are planning to distribute Nutrition Kits to
                the malnourished children following the 'Vajan Tyohar'
                initiative. We oblige you to donate these Nutrition Kits ,School
                Bag & Other Gift Items to the Underprivileged and Malnourished
                children.
                <br />
                <br />
                Do give a helping hand to us to fulfill our goal, join hands
                with us in giving these children a better and healthy life to
                prosper. <span>✨</span>
                <br />
                <br />
                Smallest contribution goes a long way. Your support matters.
                <span>🌸✨</span>
              </p>
            </div>
          </Fade>
        </div>
        <div className="section section3">
          <Fade up>
            <div className="left">
              <img
                src="./assets/images/donate/immunization.webp"
                alt="Immunization"
              />
            </div>
            <div className="right">
              <h2 className="sectionHeading">IMMUNIZATION</h2>
              <p>
                While the world has all its face towards the vaccine against
                COVID-19, the unprivileged children in India are at a high risk
                of facing contracting deadly diseases as they missed their vital
                childhood vaccinations disrupted by this pandemic.
                <br />
                <br />
                In April 2020, 2.9 million infants missed their first dose of
                the measles vaccine due to this pandemic. Many other vaccines
                are there having a serious illness that infects and even many
                children die.
                <br />
                <br />
                About more than 5 lakhs of children under-fives die every year
                due to lack of vaccine, preventable and treatable infections
                such as pneumonia, diarrhea, and sepsis. If all children are
                vaccinated after birth, more than half of these lives could be
                saved. Since the declaration of lockdown in March, over 13.7
                lakh Anganwadis shut down. As each rural child care center
                ensures that 18 children under six in their care are up to date
                with vaccinations, it affected 2.43 crore children's in the
                first year of their lives and almost all Anganwadis remain
                closed.
                <br />
                <br />
                The longer immunization is delayed for a child, the more prone
                they become to these deadly diseases including Polio, Diptheria,
                Tetanus, and many more.
                <br />
                <br />
                "It is not only dangerous for our children but for the health of
                the whole country, already under siege with the Coronavirus"
                <br />
                <br />
                According to WHO Director, "while the world strives to develop a
                new vaccine for COVID-19 at record speed, we must not risk
                losing the fight to protect everyone, everywhere, against
                vaccine-preventable diseases."
                <br />
                <br />
                These diseases will come roaring back if we do not vaccinate.
                <br />
                <br />
                With such an initiative, we aim to provide all missed
                vaccination to more than 1000+ unprivileged children. Our main
                goal is to focus that each and every unprivileged child get
                vaccinated for preventable diseases such as Polio, Measles,
                mump, rubella, BCG, RV. At 2,000/- per child we will provide a
                cycle of vaccine and will provide a complete 2-year schedule of
                the vaccine.
                <br />
                <br />
                ENSURING TIMELY IMMUNISATION IN DEADLY TIMES
              </p>
            </div>
          </Fade>
  </div>*/}
        {/** Section 3 End*/}


       {/* <div className="section section4">
          <Fade up>
            <div className="left">
              <img
                src="./assets/images/donate/covid-19-relief-fund.webp"
                alt="Covid-19 Relief Fund"
              />
            </div>
            <div className="right">
              <h2 className="sectionHeading">COVID-19 RELIEF FUND</h2>
              <p>
                With most urban areas still on a lockdown and businesses
                resuming operations slowly, multiple backward communities are
                yet to find a stable means to provide nutritious food and other
                necessities for their families. Many Migrant laborers have been
                forced to move back to their hometown while a large number of
                Daily Wage Worker continue to live in their Home town with no
                job in hand. To help them Starlight Foundation came forward and
                started its new project under Its Humanitarian Relief Program.
                Under this Covid-19 Relief Fund, you can pay to help such
                Families facing Corona Crisis.
                <br />
                <br />
                Till now we have Distributed 15000+ Meals, 500+ Ration Kits,
                3000+ Mask, 1500+ Hand Sanitizer, and under Basic Necessities to
                those in need.
              </p>
            </div>
          </Fade>
</div>*/}

<div className="car-container">
        <div className="section section5">
          <h1>Why Donate?</h1>
          <br />
          Your contributions help us serve India's most marginalized children and ensure that they are able to go to school, get proper nutrition and healthcare and stay protected from abuse and exploitation.
              We cannot do the work that we do without. your support and it'll need each and every one of us to come together to ensure happier
           childhoods for children everywhere!
          
        </div>
        <div className="section section5">
          <h1>Refund & Cancellations-</h1>
          <br />
          <ul>
            <li>We don't have any refund or cancellations policy.</li>
          </ul>
        </div>
        </div>
        {/* <Fade up>
          <div className="upiFloat">UPI Id: starlightfo@upi</div>
        </Fade> */}
       {/* <div className="bottomDonate">
          <h4>Help us serve the needy</h4>
          <div className="amountsList">
            <a
              className="singleAmount"
              href="upi://pay?pa=starlightfo@upi&pn=StarlightFoundation&cu=INR&am=500"
              target="_blank"
              rel="noopener noreferrer"
            >
              ₹500
            </a>
            <a
              className="singleAmount"
              href="upi://pay?pa=starlightfo@upi&pn=StarlightFoundation&cu=INR&am=1000"
              target="_blank"
              rel="noopener noreferrer"
            >
              ₹1,000
            </a>
            <a
              className="singleAmount"
              href="upi://pay?pa=starlightfo@upi&pn=StarlightFoundation&cu=INR&am=1500"
              target="_blank"
              rel="noopener noreferrer"
            >
              ₹1,500
            </a>
          </div>
      </div>*/}
         {/**Section 3 */}
      <div className="car-container">
      <Testimonial/>
      </div> {/** 3rd Car Container Ends */}


      </div>
      
    </React.Fragment>
  );
};

export default Donate;
