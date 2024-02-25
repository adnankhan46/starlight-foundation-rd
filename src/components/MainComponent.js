import React, { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import AboutUs from "./AboutUs/AboutUs";
import WhyChildren from "./WhyChildren/WhyChildren";
import Governance from "./Governance/Governance";
import ContactUs from "./ContactUs/ContactUs";
import Volunteer from "./Volunteer/Volunteer";
import Donate from "./Donate/Donate";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "./Terms&Conditions/TermsConditions";
import OurTeam from "./OurTeam/OurTeam";
import Partner from "./Partner/Partner";
import ScrollToTop from "./ScrollToTop";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Logo from "../images/logos/logo-theme.png";

const Main = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 100);
  }, []);

  return (
    <React.Fragment>
      <div className={"loader " + loader}>
        <img src={Logo} alt="Starlight Foundation logo" />
      </div>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/whychildren" component={WhyChildren} />
        <Route exact path="/governance" component={Governance} />
        <Route exact path="/volunteer" component={Volunteer} />
        <Route exact path="/contactus" component={ContactUs} />
        <Route exact path="/donate" component={Donate} />
        {/* <Route exact path="/team" component={OurTeam} /> */}
        <Route exact path="/partner" component={Partner} />
        <Route exact path="/privacypolicy" component={PrivacyPolicy} />
        <Route exact path="/terms&conditions" component={TermsConditions} />
        <Footer />
      </Router>
    </React.Fragment>
  );
};

export default Main;
