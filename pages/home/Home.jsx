import React, { useEffect, useState } from "react";
import "./Home.css";

import Navbar from "../../components/navbar/Navbar";
import ThemeMenu from "../../components/themechange/ThemeMenu";
import Hero from "../../components/hero/Hero";

import HeroImage from "../../assets/images/home-hero.jpg";

import PageSection from "../../components/pagesection/PageSection";

import HorizontalSlider from "../../components/horizontalslider/HorizontalSlider";

import ArticleLink from "../../components/article/ArticleLink";

import WebFooter from "../../components/webfooter/WebFooter";

import { ReactComponent as PagodaLogo } from "../../assets/icons/pagoda.svg";

function Home() {
  return (
    <div className="home">
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
        {/* https://openverse.org/image/71c2d159-afa4-4050-8f14-0f2e5163f188?q=east+asian+history&p=20 */}
        <Hero img={HeroImage} alt="Hue City, Vietnam" attribution="Gnilenkov Aleksey" objectPos="35%">
          <h1>Ellie's Blog</h1>
          <h2>Put some cool text here!</h2>
        </Hero>
        <PageSection>
          <h2>Welcome to Ellie's Blog</h2>
          <h3>Some more text could go here!</h3>
          <p>You could even talk about your <a href="/articles" rel="noopener noreferrer">articles</a> here!</p>
        </PageSection>
        {/* <PageSection>
          <h2>Featured Species</h2>
          <h3>
            These are just a few species, for more, see our <a href="/species" rel="noopener noreferrer">species profiles</a>
          </h3>
          <HorizontalSlider
            articleLinks={[
              <ArticleLink species="porcellionides_pruinosus" compressed={false} />,
              <ArticleLink species="porcellio_scaber" compressed={false} />,
              <ArticleLink species="armadillidium_vulgare" compressed={false} />,
              <ArticleLink species="armadillidium_maculatum" compressed={false} />,
              <ArticleLink species="porcellio_laevis" compressed={false} />
            ]}
            // automatic
            // a
          />
        </PageSection> */}
        <PageSection>
          <h2>New Articles</h2>
          <h3>East Asian History Articles</h3>
          <ArticleLink article="pagodas" compressed={false} />
          <p>Want more? Find more articles <a href="/articles" rel="noopener noreferrer">here</a>!</p>
        </PageSection>
        <PageSection>
          <h2>Why Ellie's Blog?</h2>
          <h3>Because East Asian History is super duper!</h3>
          <p>Talk about your <a href="/articles" rel="noopener noreferrer">articles</a> here also!</p>
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

export default Home;
