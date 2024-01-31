import React from "react";
import "./OurTeam.css";
import SingleMember from "./SingleMember/SingleMember";
import { Fade } from "react-reveal";

const OurTeam = () => {
    return(
        <React.Fragment>
            <div className="ourTeamCont">
                <Fade up>
                    <h2 className="lineTitle"><span><strong>Our</strong> Team</span></h2>
                    <div className="teamList">
                        <Fade up>
                            <SingleMember path="./assets/images/team/shubharangshu.jpg" name="Shubharangshu Chakraborty" post="Organizer" contact="9407762880" instagram="shubharangshu" linkedin="https://www.linkedin.com/in/shubharangshu-chakraborty-bb722516a/" facebook="https://www.facebook.com/shubharangshu.chakraborty.5/" />

                            <SingleMember path="./assets/images/team/agney.jpg" name="Agney Deshkar" post="Co-Organizer" contact="6261731565" instagram="agney_d__1505" linkedin="https://www.linkedin.com/in/agney-deshkar/" facebook="https://www.facebook.com/agney.deshkar" />

                            <SingleMember path="./assets/images/team/navya.jpg" name="Navya Singh" post="Curator" contact="6264365144" instagram="navyasingh1110" linkedin="https://www.linkedin.com/in/navya-singh-91931116b" facebook="https://www.facebook.com/profile.php?id=100026107240791" />
                        </Fade>
                    </div>
                </Fade>
            </div>
        </React.Fragment>
    );
};

export default OurTeam;