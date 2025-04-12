import React, { useEffect, useState } from "react";
import "./Contact.css";

import Navbar from "../../components/navbar/Navbar";
import ThemeMenu from "../../components/themechange/ThemeMenu";
import Hero from "../../components/hero/Hero";

import HeroImage from "../../assets/images/contact-hero.jpg";

import PageSection from "../../components/pagesection/PageSection";

import WebFooter from "../../components/webfooter/WebFooter";

import { ReactComponent as PagodaLogo } from "../../assets/icons/pagoda.svg";

function Contact() {
  return (
    <div className="contact">
      <ThemeMenu />
      <header className="header">
        <Navbar
          links={[
            <a href="/articles" rel="noopener noreferrer">Articles</a>,
            <a href="/about" rel="noopener noreferrer">About</a>,
            <a href="/contact" rel="noopener noreferrer">Contact</a>,
            // <div className="dropdown div-button" tabIndex={0}>Options <span className="dropdown-caret"></span>
            //   <ul className="dropdown-menu">
            //     <li><ThemeChange className="dropdown-option"/></li>
            //     <li><button className="dropdown-option">Language</button></li>
            //   </ul>
            // </div>
          ]}
          name={
            <span>
              <span>
                <PagodaLogo />
              </span>
              <span>Ellie's Blog</span>
            </span>
          }
        />
      </header>
      <main className="main">
        {/* https://openverse.org/image/48e4074b-3e24-48af-b9f7-ea4702b74385?q=east+asian+history&p=54 */}
        <Hero img={HeroImage} alt="Hue City, Vietnam" attribution="Gnilenkov Aleksey" objectPos="45%">
          <h1>Contact</h1>
          <h2>Get in Touch With Smelly Ellie</h2>
        </Hero>
        <PageSection>
          <h2>Let's Chat!</h2>
          <h3>Have something you want to talk about? Here's how to reach out:</h3>
          <p>Coming Soon!</p>
        </PageSection>
      </main>
      <footer className="footer">
        <WebFooter 
           children={[
            [<a className="site-name" href="/" rel="noopener noreferrer"><span>
              <span>
                <PagodaLogo />
              </span>
              <span>Ellie's Blog</span>
            </span></a>],
            [<h4>Explore</h4>, <a href="/about" rel="noopener noreferrer">About</a>, <a href="/articles" rel="noopener noreferrer">Articles</a>, <a href="/contact" rel="noopener noreferrer">Contact</a>]
          ]}
        />
      </footer>
    </div>
  );
}

export default Contact;