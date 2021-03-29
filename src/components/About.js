import React from "react";
import './styles/About.scss';
import '../App.scss'


function About() {
    return (
        <div className="about_section" id="about">
            <section className="about_section_wrapper">
                <div>
                    <img src="images/comp1.png" alt="" />
                </div>
                <h1 className="about_section_header">
                    about<span className="dots_title">.</span>
                </h1>
                <p className="about_section_text">
                    front end developer based in London. i am changing my career paths now. from microbiology and health and safety into coding.  

                    <br />
                    since you are here, check out my projects I have been working on. If you would like to collaborate, please drop me a message.
                    <br />
                    ...and lets keep coding.
                </p>
                <div className="about_social_wrapper">
                    <h3 className="about_social_heading">
                        You can find me here
                    </h3>
                    <a href="https://www.instagram.com/lookmummyicancode/" className="about_social">
                        <i class='fab fa-instagram' />
                    </a>
                </div>
            </section>



        </div>
    )
}

export default About;