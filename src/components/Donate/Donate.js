import React, { useEffect, useState } from "react";
import "./Donate.css";
import { Fade } from "react-reveal";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import Testimonial from "../Testimonial/Testimonial";

const divStyle = {
  display: 'flex',
  backgroundSize: 'cover',
  height: '400px',
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
  
    // console.log("donateBox:", donateBox);
    // console.log("section2:", section2);
  
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

{/**###################################################### Scrolling Feature */}
const [scrollPosition, setScrollPosition] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);
  

  {/**######################################################################  FORM LEFT */}
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
  
  
  {/**######################################################################  FORM RIGHT */}
  const [isLogin, setIsLogin] = useState(true);
  const [showTnC, setShowTnC] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [btnStyle, setBtnStyle] = useState({
      left: '0',
      background: 'linear-gradient(to right, #ff9800, #ff9800)'
    });
  const [formPositions, setFormPositions] = useState({
    login: { left: '50px', top: '140px' },
    register: { left: '450px', top: '100px' }
  });

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setFormPositions({
      login: { left: isLogin ? '-400px' : '50px', top: '140px' },
      register: { left: isLogin ? '50px' : '450px', top: '139px' }
    });
    if (isLogin) {
      setBtnStyle({
        left: '110px',
        background: 'linear-gradient(to left, #ff9800, #ff9800)'
      });
    } else {
      setBtnStyle({
        left: '0',
        background: 'linear-gradient(to right, #ff9800, #ff9800)'
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
    if (isLogin) {
      console.log('Logging in...');
    } else {
      console.log('Registering...');
     
      setIsRegistered(true);
      setTimeout(() => {
        setIsRegistered(false);
      }, 3000);
    }
  };

  const handleTnCClick = () => {
    setShowTnC(true);
  };

  const handleTnCMouseUp = (event) => {
    if (
      event.target.id === 'TnC' ||
      event.target.parentNode.id === 'TnC'
    ) {
      setShowTnC(false);
    }
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
        {/* ##################################################################################### Form RIGHT*/}
         
        <div className={`${window.innerWidth <= 992 ? 'bg-for-mobile-res': ""}`}>
        
                <div className={`${window.innerWidth >= 992? 'hero': ''} ${scrollPosition > 700 && scrollPosition <  1900 &&  window.innerWidth >= 992 ? 'right-form-fix': ""}`}>
                  <div className="form-box">
                    <div className="button-box">
                      <div id="btn" style={btnStyle}></div>
                      <button
                        type="button"
                        className="toggle-btn"
                        onClick={handleToggle}
                        style={{ marginRight: '10px' }}
                      >
                      Monthly
                      </button>
                      <button
                        type="button"
                        className="toggle-btn"
                        onClick={handleToggle}
                      >
                        One-Time
                      </button>
                    </div>
  
          <form
                    id="login"
                    className="input-group"
                    style={{ left: formPositions.login.left, top: formPositions.login.top }}
                    onSubmit={handleSubmit}
                  >
                  <a
                className="payment-button"
                href="upi://pay?pa=starlightfo@upi&pn=StarlightFoundation&cu=INR&am=500"
                target="_blank"
                rel="noopener noreferrer"
                >
                ₹500
                </a>
                <a
                className="payment-button"
                href="upi://pay?pa=starlightfo@upi&pn=StarlightFoundation&cu=INR&am=1500"
                target="_blank"
                rel="noopener noreferrer"
                >
                ₹1500
                </a>
                <a
                className="payment-button"
                href="upi://pay?pa=starlightfo@upi&pn=StarlightFoundation&cu=INR&am=2000"
                target="_blank"
                rel="noopener noreferrer"
                >
                ₹2000
                </a>
                <a
                className="payment-button"
                href="upi://pay?pa=starlightfo@upi&pn=StarlightFoundation&cu=INR&am="
                target="_blank"
                rel="noopener noreferrer"
                >
                Enter Other Amount
                </a>
                  </form>
          
                  <form
                    id="register"
                    className="input-group"
                    style={{ left: formPositions.register.left, top: formPositions.register.top }}
                    onSubmit={handleSubmit}
                  >
                  <a
                  className="payment-button"
                  href="upi://pay?pa=starlightfo@upi&pn=StarlightFoundation&cu=INR&am=5000"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  ₹5,000
                  </a>
                  <a
                  className="payment-button"
                  href="upi://pay?pa=starlightfo@upi&pn=StarlightFoundation&cu=INR&am=15000"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  ₹15,000
                  </a>
                  <a
                  className="payment-button"
                  href="upi://pay?pa=starlightfo@upi&pn=StarlightFoundation&cu=INR&am=20000"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  ₹20,000
                  </a>
                  <a
                  className="payment-button"
                  href="upi://pay?pa=starlightfo@upi&pn=StarlightFoundation&cu=INR&am="
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  Enter Other Amount
                  </a>
          </form>
  
          {/* {showTnC && (
            <div
              id="TnC"
              onMouseUp={handleTnCMouseUp}
              onTouchEnd={handleTnCMouseUp}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat,
                quisquam odio. Corrupti voluptate debitis error, soluta dolor ratione
                eos, ab nulla, voluptatum cumque adipisci illum odit labore ea nam
                eligendi.
              </p>
            </div>
          )} */}
  
          {isRegistered && <p>Registered!</p>}
        </div>
      </div>

                </div>
  

         
        </div>
        
        <div className="donatePage">
          {/* write in designer way */}
          {/* <div className=""> */}
          {/* </div> */}
          
        <div className="slider-div">
              <div class="six">
        
<div >
  <h1 class = "donate" >Why Donate ?</h1>
</div>
      </div>
        <Slide easing="ease">
          {slideImages.map((each, index) => (
            <div key={index} className="each-slide">
              <div style={{...divStyle, backgroundImage: `url(${each.url})`}}>
              </div>
            </div>
          ))}
        </Slide>
      </div>
        <div className="list-div">
          <br />
          <ul>
            <li>Help Prematured and Malnurished babies Survive and Thrive</li>
            <li>Help to raise awareness regarding the Social
            Taboos related to Menstrual Hygine</li>
            <li>Help Children from marginalised communities get Quality Education</li>
            <li>Help those who are worst effected during emergencies</li>
            <li>Help to Install Sanitary Pad Disperser Machine in Government School & Colleges Based in Rural Areas</li>
            <li>Help underprivileged children to secure their future and help them shine</li>
          </ul>
        </div>
        </div>

          
       

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
