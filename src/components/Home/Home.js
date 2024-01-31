import React, { useState } from "react";
import "./Home.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import FAQ from "./FAQ";
import { Fade } from "react-reveal";
import Typing from "react-typing-animation";

const Home = () => {
  const [faqs, setfaqs] = useState([
    {
      question: "Where will my Donations be used?",
      answer:
        "All Donations are used for The Underprivileged Children under various projects of Starlight Foundation & in Humanitarian Relief during Pandemic & Emergencies.",
      open: true,
    },
    {
      question: "How can I start my journey as a Volunteer?",
      answer:
        "To volunteer with Starlight Foundation, fill up the Registration Form from <a href='/volunteer'>here</a>. After filling out the Registration Form, our Volunteer Management Team will get in touch with you.",
      open: false,
    },
    {
      question: "Will I get any acknowledgement for my Volunteering work?",
      answer:
        "Believing in gratitude, we acknowledge all the contributers for their endless efforts by providing them with Certificate of Appreciation.",
      open: false,
    },
    {
      question:
        "What are the ways in which my organization can partner with Starlight Foundation?",
      answer:
        "By Funding and Creating awarenes about our various programs. Simultaneously can do so through Promotions or Volunteer's engagement activities. Please do fill the form <a href='/volunteer'>here</a> and at the very next moment our team will get in touch with you.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) faq.open = !faq.open;
        else faq.open = false;

        return faq;
      })
    );
  };

  return (
    <React.Fragment>
      <div className="homeCont">
        <div className="section section1">
          <div className="left">
            <div className="text">
              <Fade up>
                <h1>
                  <Typing hideCursor={true} speed={50}>
                    <span>"Let's Ensure Happy & Safe <br /> Childhood for Our Children"</span>
                  </Typing>
                </h1>
                <p>
                It's not how much we give but how much love we put together in giving.
                Do Gift a child with the opportunity for a better future as the Power for creating a better future is contained in the present moment.
                We, at Starlight Foundation trying to create a long term impact on the lives of thousands of unprivileged childrens by focusing the causes at grass root level. 
                Donate today and present a Happy & Healthy life to those nourishing buds as it's our responsibility towards the society.
                </p>
                <button className="donate-btn">I WANT TO HELP</button>
                </Fade>
            </div>
          </div>
          <div className="right">
          </div>
        </div>
        <div className="section whatWeDo">
          <h2 className="title">What We Do</h2>
          <OwlCarousel
            className="owl-theme"
            nav={true}
            items={4}
            margin={40}
            autoplay={true}
            autoplayTimeout={2000}
            autoplayHoverPause={true}
            loop={true}
            dots={false}
            responsive={{
              0: {
                items: 1,
                margin: 50,
                nav: true
              },
              600: {
                items: 2,
                nav: true
              },
              768: {
                items: 3,
                margin: 40,
                nav: true
              },
              1400: {
                items: 4,
                nav: true
              },
            }}
          >
            <div className="singleDo pink">
              <div className="image">
                 <img src="./assets/images/home/education.gif" /> 
              </div>
              <h4 className="doTitle">Education</h4>
            </div>
            <div className="singleDo orange">
              <div className="image">
                <img src="./assets/images/home/health-and-nutrition.gif" />
              </div>
              <h4 className="doTitle">Nutrition & Healthcare</h4>
            </div>
            <div className="singleDo blue">
              <div className="image">
                <img src="./assets/images/home/child-participation.gif" />
              </div>
              <h4 className="doTitle">Menstural Hygine Management</h4>
            </div>
            <div className="singleDo purple">
              <div className="image">
                <img src="./assets/images/home/safety-and-protection.gif" />
              </div>
              <h4 className="doTitle">Safety & Protection</h4>
            </div>
          </OwlCarousel>
          
        </div>
        {/*############################## IMPACT  */}
        <div className="section section5">
          <Fade up>
            <h2 className="sectionTitle">STARLIGHT's IMPACT</h2>
          </Fade>
          <div className="impactsList">
            <Fade up>
              <div className="singleImpact">
                <h4 className="impactTitle">OVERALL</h4>
                <div className="impactCircle">
                  <div className="impactIcon">
                    <i className="fas fa-users"></i>
                  </div>
                  <div className="impactNumber">4500+</div>
                  <div className="impactText">Children impacted overall</div>
                </div>
              </div>
              <div className="singleImpact">
                <h4 className="impactTitle">EDUCATION</h4>
                <div className="impactCircle">
                  <div className="impactIcon">
                    <i className="fas fa-award"></i>
                  </div>
                  <div className="impactNumber">208+</div>
                  <div className="impactText">
                    Hours of Teaching
                  </div>
                </div>
              </div>
              <div className="singleImpact">
                <h4 className="impactTitle">NUTRITION & HEAlTH</h4>
                <div className="impactCircle">
                  <div className="impactIcon">
                    <i className="fas fa-users"></i>
                  </div>
                  <div className="impactNumber">1600+</div>
                  <div className="impactText">
                    Packs of Nutritious Supplements Distrubuted to Anganwadi Children
                  </div>
                </div>
              </div>
              <div className="singleImpact">
                <h4 className="impactTitle">MENSTRUAL HYGIENE <br /> MANAGEMENT</h4>
                <div className="impactCircle">
                  <div className="impactIcon">
                    <i className="fas fa-utensils"></i>
                  </div>
                  <div className="impactNumber">900+</div>
                  <div className="impactText">
                    Girls provided with awareness on Menstrual Hygiene Management
                  </div>
                </div>
              </div>
              <div className="singleImpact">
                <h4 className="impactTitle">VACCINATION</h4>
                <div className="impactCircle">
                  <div className="impactIcon">
                    <i className="fas fa-syringe"></i>
                  </div>
                  <div className="impactNumber">1300+</div>
                  <div className="impactText">
                  Children Vaccinated with Covid-19 Vaccination
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
        <div className="section section6">
          <Fade up>
            <h2 className="sectionTitle">Featured In</h2>
          </Fade>
          <Fade up>
            <OwlCarousel
              className="owl-theme"
              items={4}
              margin={100}
              autoplay={true}
              autoplayTimeout={2000}
              autoplayHoverPause={true}
              loop={true}
              dots={false}
              responsive={{
                0: {
                  items: 2,
                  margin: 50,
                },
                600: {
                  items: 2,
                },
                768: {
                  items: 3,
                },
                1200: {
                  items: 4,
                },
              }}
            >
              <div className="logo">
                <img
                  src="./assets/images/home/media/dainik-bhaskar.png"
                  alt="Dainik Bhaskar"
                />
              </div>
              <div className="logo">
                <img
                  src="./assets/images/home/media/times-of-india.png"
                  alt="Times of India"
                />
              </div>
              <div className="logo">
                <img
                  src="./assets/images/home/media/haribhoomi.png"
                  alt="Haribhoomi"
                />
              </div>
              <div className="logo">
                <img
                  src="./assets/images/home/media/patrika.png"
                  alt="Patrika"
                />
              </div>
              <div className="logo">
                <img
                  src="./assets/images/home/media/prabhat-tv.png"
                  alt="Prabhat TV"
                />
              </div>
              <div className="logo">
                <img src="./assets/images/home/media/ibc-24.png" alt="IBC 24" />
              </div>
              <div className="logo">
                <img
                  src="./assets/images/home/media/navbharat.png"
                  alt="Navbharat"
                />
              </div>
              <div className="logo">
                <img
                  src="./assets/images/home/media/grand-acn-news.png"
                  alt="Grand ACN News"
                />
              </div>
              <div className="logo">
                <img
                  src="./assets/images/home/media/nayi-duniya.png"
                  alt="Nayi Duniya"
                />
              </div>
            </OwlCarousel>
          </Fade>
        </div>
        {/* <div className="section section7">
                    <Fade up>
                        <h2 className="sectionTitle">Frequently Asked Questions</h2>
                    </Fade>
                    <section className="faq_part">
                        <div className="container-fluid">
                            <div className="faqs">
                                <Fade up>
                                    {faqs.map((faq, i) => (
                                        <FAQ faq={faq} key={i} index={i} toggleFAQ={toggleFAQ} />
                                    ))}
                                </Fade>
                            </div>
                        </div>
                    </section>
                </div> */}
      </div>
    </React.Fragment>
  );
};

export default Home;
