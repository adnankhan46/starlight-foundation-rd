import React, { useState } from "react";
import "./ContactUs.css";
import { Fade } from "react-reveal";
import emailjs from 'emailjs-com';
import FAQ from "./FAQ";

const ContactUs = () => {
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
            question: "What are the ways in which my organization can partner with Starlight Foundation?",
            answer:
                "By Funding and Creating awarenes about our various programs. Simultaneously can do so through Promotions or Volunteer's engagement activities. Please do fill the form <a href='/volunteer'>here</a> and at the very next moment our team will get in touch with you.",
            open: false,
        },
    ]);

    const toggleFAQ = (index) => {
        setfaqs(
            faqs.map((faq, i) => {
                if (i === index)
                    faq.open = !faq.open;
                else
                    faq.open = false;
                
                return faq;
            })
        );
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_r5a16x6', 'template_nzb55ef', e.target, 'user_nhEjqoUguTnbIVAWrLc1s')
        .then(() => {
            alert("Message Sent!");
        }, () => {
            alert("Message couldn't be sent");
        });
    };

    return(
        <React.Fragment>
            <div className="contactUsCont">
                <div className="section section1">
                    <Fade up>
                        <div className="left">
                            <div className="text">
                                <h1>GET IN TOUCH</h1>
                                <h2>We are always happy to hear from you!</h2>
                            </div>
                        </div>
                        <div className="right">
                            <form onSubmit={ sendEmail }>
                                <h3 className="formHeading">Fill in the Details</h3>
                                <div className="inputGroup items2">
                                    <input type="text" name="name" placeholder="Name*" required />
                                    <input type="email" name="email" placeholder="Email*" required />
                                </div>
                                <div className="inputGroup items2">
                                    <input type="text" name="contactno" placeholder="Contact No.*" required />
                                    <input type="text" name="address" placeholder="Address" />
                                </div>
                                <div className="inputGroup">
                                    <input type="text" name="subject" placeholder="Subject*" required />
                                </div>
                                <div className="inputGroup">
                                    <textarea name="message" cols="30" rows="5" placeholder="Your Message*" required></textarea>
                                </div>
                                <div className="inputGroup">
                                    <button type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </Fade>
                </div>
                <div className="section section2">
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
                </div>
                <div className="section section3">
                <Fade up>
                    <h2 className="sectionTitle">Contact With Us</h2>
                    <div className="address">
                    <h1>Reg. Address</h1>
                    <p>Lorem ipsum dolor sit</p>
                    </div>
                    <div className="address">
                    <h1>Communication Address</h1>
                    <p>Lorem ipsum dolor sit</p>
                    </div>
                </Fade>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ContactUs;