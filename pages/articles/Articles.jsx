import React, { useEffect, useState } from "react";
import "./Articles.css";

import Navbar from "../../components/navbar/Navbar";
import ThemeMenu from "../../components/themechange/ThemeMenu";
import Hero from "../../components/hero/Hero";

import HeroImage from "../../assets/images/articles-hero.jpg";

import PageSection from "../../components/pagesection/PageSection";
import DisplayGrid from "../../components/displaygrid/DisplayGrid";
import ArticleLink from "../../components/article/ArticleLink";

import WebFooter from "../../components/webfooter/WebFooter";

import { ReactComponent as PagodaLogo } from "../../assets/icons/pagoda.svg";

function Articles() {
  const [articles, setArticles] = useState([]);

  // Function to convert "MM-DD-YYYY" → "YYYY-MM-DD" for correct sorting
  function parseDate(dateStr) {
    const match = dateStr.match(/^(\d{2})-(\d{2})-(\d{4})$/); // Matches "MM-DD-YYYY"
    if (match) {
      const [, month, day, year] = match;
      return `${year}-${month}-${day}`; // Convert to "YYYY-MM-DD"
    }
    return dateStr; // If already formatted correctly, return as is
  }

  useEffect(() => {
    const fetchArticles = async () => {
      const articlesGlob = import.meta.glob("../../articles/*/*.json");
      const articleEntries = Object.entries(articlesGlob);

      console.log("Fetching articles from JSON files...");

      const articleDataPromises = articleEntries.map(async ([path, importFunc]) => {
        const match = path.match(/\/articles\/([^/]+)\//);
        const folderName = match ? match[1] : null;

        if (!folderName) return null;

        try {
          const data = await importFunc();
          const rawDate = data.default.publishDate || "01-01-1970"; // Default if missing
          const publishDate = parseDate(rawDate);

          console.log(`Loaded: ${folderName}, Date: ${rawDate} -> Parsed: ${publishDate}`);

          return { folderName, publishDate };
        } catch (error) {
          console.error(`Error loading ${folderName}:`, error);
          return null;
        }
      });

      const articleData = (await Promise.all(articleDataPromises)).filter(Boolean);

      // Sort articles by date (newest first)
      articleData.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));

      console.log("Sorted articles:", articleData.map(a => `${a.folderName}: ${a.publishDate}`));

      setArticles(articleData.map(({ folderName }) => folderName));
    };

    fetchArticles();
  }, []);

  return (
    <div className="articles">
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
        {/* https://openverse.org/image/18a29b9a-b404-4bdd-8722-83c745895f8e?q=east+asian+history&p=22 */}
        <Hero img={HeroImage} alt="Hue City, Vietnam" attribution="Gnilenkov Aleksey" objectPos="27%">
          <h1>Articles</h1>
          <h2>The Most Interesting East Asian History Articles on the Web</h2>
        </Hero>
        <PageSection>
          <h2>Introduce your section here</h2>
          <h3>And even give it some flavor here</h3>
          <DisplayGrid identical={true}>
            {articles.map((article) => (
              <ArticleLink key={article} article={article} compressed={false} />
            ))}
          </DisplayGrid>
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

export default Articles;
