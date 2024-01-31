import React from "react";
import "./SingleMember.css";

const image = (props) => {
    const path = props.path;
    let img = null;
    if(path !== null) {
        img = <img className="personImage" src={ props.path } alt={ props.name } />
    }

    const contact = parseInt(props.contact, 10);
    let cta = null;
    if(contact > 0) {
        cta =
            <a href={ "tel:+91" + props.contact } className="cta">
               <i className="fas fa-phone-alt"></i>&nbsp;&nbsp;Call Now
            </a>;
    }

    const post = props.post;
    let text = null;
    if(post !== null) {
        text = 
            <div>
                <span className="personPost">{ props.post }</span>
            </div>;
    }

    return(
        <div className="personCard">
            { img }
            <div className="personDetails">
                <h4>{ props.name }</h4>
                <div>
                    { text }
                </div>
            </div>
            <div className="personHover">
                <div>
                    { cta }
                    <div className="social">
                        <a href={ "https://instagram.com/" + props.instagram } target="_blank"><i className="fab fa-instagram"></i></a>
                        <a href={ props.linkedin } target="_blank"><i className="fab fa-linkedin"></i></a>
                        <a href={ props.facebook } target="_blank"><i className="fab fa-facebook"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default image;