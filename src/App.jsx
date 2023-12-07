/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Ambrose Alanda",
  title: "Software Developer",
  email: "alandaambrose@students.mak.ac.ug",
  gitHub: "https://github.com/Aurits",
  instagram: "",
  linkedIn: "https://www.linkedin.com/in/ambrose-alanda-b938b0243/",
  medium: "",
  twitter: "https://twitter.com/aurits10",
  youTube: "https://www.youtube.com/channel/UC85E9I06VVkL_e3LxfxGCmw",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
