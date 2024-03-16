import React, { useState } from 'react'
import "./governance.css"
import Typing from 'react-typing-animation'

function Governance() {

  const [accordion, setAccordion] = useState(0)

  const content = [
   
    {
      title: "Annual Report",
      description: "./Work Report 2020-2021.pdf"
  },
    {
      title: "Certification",
      description: "./Work Report 2020-2021.pdf"
  }
]

const accordionToggle = (index)=>{
  if (accordion === index){
    setAccordion(null)
  } else{
    setAccordion(index)
    // alert("sdfdfsdf")
  }
}

  return (
    <div>
    <div className="governanceContent">
    <div className="img"></div>
    <div className="section1">
        <h1> <Typing hideCursor={true} speed={50}>Governance</Typing></h1>
        <p>Starlight Foundation is an NGO Registered under Society Registration Act 1973 (Serial No-44). Starlight is a Youth Run and Youth Based Organisation working for Child Welfare. We are
        administrated by a Advisory Board consisting of Highly Authorised Professionals from different fields.</p>
       
        </div>

        <div className="section1-a">
         <h1>Governance</h1>
        <ul>
        <li>Here you will get the details about the legal Status of Starlight foundation.</li>
        <li>Management Body is responsible for Operations Decisions and Ropes functioning of On Field Programme under the Supervision Board Advisory</li>
        <li>Starlight believes in utmost transparency and
        accountability thus we publish transparency
        report of various Major Projects Time to time</li>
        </ul>
        </div>

        <div className="governanceImg">
        </div>

        <div className="section2">
        <h1>Reports and Certifications</h1>

        <p>You can View Our Annual and Audit Reports and Certifications here</p>

        <div className="accordion">
          {content.map((item, index) => (
            <div className={`first-info ${accordion === index ? 'opentab' : ''}`} key={index}>
              <header onClick={() => accordionToggle(index)}>
                {item.title}
                <span className={`arrow ${accordion === index ? 'open' : ''}`}></span>
              </header>
              {accordion === index && (
                <a className="description" href={item.description} target="_blank" rel="noopener noreferrer">
                <i className="fas fa-arrow-right"></i> {item.title}
                </a>
              )}
            </div>
          ))}
        </div>
                {/** Testing Divs here*/}
      </div>

   
    

    </div>
    
    </div>
  )
}

export default Governance
