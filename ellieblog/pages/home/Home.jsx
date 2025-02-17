import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

import Header from "../../components/header/Header";
import HeaderActions from "../../components/headeractions/HeaderActions";
import CenterDisplay from "../../components/centerdisplay/CenterDisplay";
import RecentPosts from "../../components/recentposts/RecentPosts";
import Intro from "../../components/intro/Intro";
import Footer from "../../components/footer/Footer";
import Copyright from "../../components/copyright/Copyright";

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  },);

  return (
    <div className="home">
      <Header
        spacing="Between"
        content={[
          <Link to="/">Ellie's Blog</Link>,
        ]}
        additional={[
          <Link to="/">Home</Link>,
          <Link to="/about">About</Link>,
          <HeaderActions></HeaderActions>
        ]}
      />
      <main className="main">
        <CenterDisplay>
          <RecentPosts></RecentPosts>
          <Intro></Intro>
        </CenterDisplay>
      </main>
      <Footer
        spacing="Center"
        content={[
          <Link to="/">Ellie's Blog</Link>,
          <Copyright />
        ]}
      />
    </div>
  );
}

export default Home;
