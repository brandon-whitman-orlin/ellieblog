import React, { useEffect, useState } from "react";
import "./About.css";

import Navbar from "../../components/navbar/Navbar";
import ThemeMenu from "../../components/themechange/ThemeMenu";
import Hero from "../../components/hero/Hero";

import HeroImage from "C:\Users\ellie\OneDrive\Documents\GitHub\ellieblog\assets\images\banner.jpg";

import PageSection from "../../components/pagesection/PageSection";
import DisplayGrid from "../../components/displaygrid/DisplayGrid";
import Biography from "../../components/biography/Biography";

import Brandon from "../../assets/images/brandon.jpg";
import Ellie from "../../assets/images/ellie.jpg";

import WebFooter from "../../components/webfooter/WebFooter";

import { ReactComponent as PagodaLogo } from "../../assets/icons/pagoda.svg";

function About() {
  return (
    <div className="about">
      <ThemeMenu />
      <header className="header">
        <Navbar
          links={[
            <a href="/articles" rel="noopener noreferrer">Articles</a>,
            <a href="/about" rel="noopener noreferrer">About</a>,
            <a href="/contact" rel="noopener noreferrer">Contact</a>,
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
        {/* https://openverse.org/image/c1e8d389-02f2-4afa-af08-639f796593a5?q=east+asian+history&p=115 */}
        <Hero img={HeroImage} alt="Hue City, Vietnam" attribution="Gnilenkov Aleksey" objectPos="54%">
          <h1>About Us</h1>
          <h2>Your Ultimate Hub for All Things East Asian History</h2>
        </Hero>
        <PageSection>
          <h2>About Ellie's Blog</h2>
          <h3>Your Ultimate Resource for IDK I'm out of flavor text ideas</h3>
          <p>You get the idea</p>
        </PageSection>
        <PageSection>
          <h2>About me :D</h2>
          <h3>The wonderful me who make this all possible</h3>
          <DisplayGrid>
            {/* <Biography
              img={Brandon}
              name="Brandon"
              title="Lead Developer"
              desc="Brandon has had a fascination with Isopods his whole life. Coincidentally, he also has a fascination with Web-Development. These two interested combined have been used to bring you Ellie's Blog!"
              link="https://www.linkedin.com/in/brandon-whitman-orlin/"
              linkType={"LinkedIn"}
            /> */}
            <Biography
              img={Ellie}
              name="Ellie"
              title="Super awesome and intelligent and also sexy person"
              desc="Ellie is super cool and i am not biased in the slightest."
              link="https://www.linkedin.com/in/e-murray02/"
              linkType={"LinkedIn"}
            />
          </DisplayGrid>
        </PageSection>
        {/* <PageSection>
          <h2>Want to Contribute?</h2>
          <h3>Help Us Help Others</h3>
          <p>Check out ways to <a href="/collaborate" rel="noopener noreferrer">work with us</a>!</p>
        </PageSection> */}
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

export default About;
