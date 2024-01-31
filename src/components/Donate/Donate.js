import React, { useEffect } from "react";
import "./Donate.css";
import { Fade } from "react-reveal";

const Donate = () => {
  const bottomDonate = () => {
    const donateBox = document.querySelector(".bottomDonate");
    const section2 = document.querySelector(".section2");

    const topPosition = section2.offsetTop + section2.offsetHeight;

    window.addEventListener("scroll", (e) => {
      if (window.scrollY >= topPosition) donateBox.classList.add("show");
      else donateBox.classList.remove("show");
    });
  };

  useEffect(() => {
    bottomDonate();
  }, []);

  return (
    <React.Fragment>
      <div className="donateCont">
        <div className="section section1">
          <div className="left">
            <div className="text">
              <Fade left>
                <h1>EDUCATION, NUTRITION & GOOD HEALTH</h1>
                <p>Brings out the best in a child.</p>
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
          <Fade up>
            <h2 className="sectionHeading">
              3,000+ meals served in the last 30 days
            </h2>
            <h4>34,000+ meals served by Starlight Foundation till date</h4>
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
          </Fade>
        </div>
        {/* <Fade up>
          <h1 className="heading">Ongoing Campaigns</h1>
        </Fade> */}
        <Fade up>
          <h1 className="heading">Our Past Campaigns</h1>
        </Fade>
        <div className="section section3">
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
                💫Be a part of दिव्य दीपावली 2021. 💫
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
                prosper. ✨
                <br />
                <br />
                Smallest contribution goes a long way. Your support matters.
                🌸✨
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
        </div>
        <div className="section section4">
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
        </div>
        <div className="section section5">
          <b>Terms & Conditions-</b>
          <br />
          <ul>
            <li>We don't have any refund or cancellations policy.</li>
          </ul>
        </div>
        {/* <Fade up>
          <div className="upiFloat">UPI Id: starlightfo@upi</div>
        </Fade> */}
        <div className="bottomDonate">
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
        </div>
      </div>
    </React.Fragment>
  );
};

export default Donate;