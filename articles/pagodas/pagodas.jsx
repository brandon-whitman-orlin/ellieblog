import React, { useEffect, useState } from "react";
import "./article.css";

import Navbar from "../../components/navbar/Navbar";
import ThemeMenu from "../../components/themechange/ThemeMenu";
import Hero from "../../components/hero/Hero";

import PageSection from "../../components/pagesection/PageSection";
import ArticleImage from "../../components/article/ArticleImage";
import WebFooter from "../../components/webfooter/WebFooter";


// IMAGES GO HERE
import HeroImage from "./assets/pagoda.jpg"; // HERO IMAGE
import ArticleImage1 from "./assets/pagoda-1.jpg";
// IMAGES END HERE


import { ReactComponent as PagodaLogo } from "../../assets/icons/pagoda.svg";

function Pagodas() {
  return (
    <div className="home">
      <ThemeMenu />
      <header className="header">
        <Navbar
          links={[
            <a href="/articles" rel="noopener noreferrer">
              Articles
            </a>,
            <a href="/about" rel="noopener noreferrer">
              About
            </a>,
            <a href="/contact" rel="noopener noreferrer">
              Contact
            </a>,
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





      <main className="main"> {/* All your changes go here: */}
        <Hero
          img={HeroImage}
          alt="Some alt text for pagodas"
          attribution="Franco Folini"
          objectPos="100%"
        >
          <h1>Pagodas</h1>
          <h2>Tagline here I guess?</h2>
        </Hero>
        <PageSection>
          <h2>Cool Article About Pagodas</h2>
          <h3>Pagoda? More like POG-oda :D</h3>
        </PageSection>
        <PageSection>
          <h2>Introduction</h2>
          <h3>Pagoda Pagoda Pagoda Pagoda Pagoda </h3>
          <p>Poop Poop Poop Poop Poop Poop Poop Poop Poop Poop Poop </p>
          <ArticleImage
            image={ArticleImage1}
            description="A Pagoda"
            source="roger4336"
          />
        </PageSection>
      </main> {/* All your changes stop here: */}





      <footer className="footer">
        <WebFooter
          children={[
            [
              <a className="site-name" href="/" rel="noopener noreferrer">
                <span>
                  <span>
                    <PagodaLogo />
                  </span>
                  <span>Ellie's Blog</span>
                </span>
              </a>,
            ],
            [
              <h4>Explore</h4>,
              <a href="/about" rel="noopener noreferrer">
                About
              </a>,
              <a href="/articles" rel="noopener noreferrer">
                Articles
              </a>,
              <a href="/contact" rel="noopener noreferrer">
                Contact
              </a>,
            ],
          ]}
        />
      </footer>
    </div>
  );
}

export default Pagodas;
