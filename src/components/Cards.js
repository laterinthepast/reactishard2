import React from 'react';
import CardItem from './CardItem';
import './styles/Cards.scss';

function Cards() {
    return (
        <div className="cards" id="projects">
            <div className="cards__container">
                <div className="divider">
                    <img src="images/comp2.png" alt="" />
                </div>
                <h1>projects<span className="dots_title">.</span></h1>
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="/images/bry.png"
                            text="Bry is a talented tattoo artist based in Chippenham, UK. Follow the links below for source code and live website - React website"
                            label="DESIGN, BUILD AND MANAGEMENT OF MELLERDRAMATIC.COM "
                            path="https://mellerdramatic.netlify.app"
                            pathgithub="https://github.com/laterinthepast/bry-react"
                        />
                        <CardItem
                            src="/images/eu.jpg"
                            text="DESIGN, BUILD - not published yet, awaiting client changes - React website"
                            label="Simple React Website"
                            path="https://cocky-northcutt-9c570f.netlify.app/"
                            pathgithub="https://github.com/laterinthepast/quartz-website"
                        />

                        <CardItem
                            src="/images/bot.png"
                            text="cryptofolio - cryptocurrency portfolio tracker - passwordless and designed for groups of people wanting to track their portfolios - REACT, Node.js ... work in progress"
                            path="https://github.com/laterinthepast/cryptofolio"
                            pathgithub="https://github.com/laterinthepast/cryptofolio"
                        />

                        <CardItem
                            src="/images/welcome.jpg"
                            text="Design, build and management of the website. Na ha ku is a company selling crafts online. Future project development will include setting up online ecommerce platform - React, styled components... work in progress "
                            label="Design, Build and Management"
                            path="https://60c889031eb7b00008a27487--agitated-pare-e17700.netlify.app/"
                            pathgithub="https://github.com/laterinthepast/quartz-website"
                        />

                    </ul>
                    <ul>
                        <h1>More to come...</h1>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
