import React from "react";
import Navbar from "../components/Navbar";
import Sidenav from "../components/Sidenav";
import Banner from "../components/Banner";
import Projects from "../components/Projects";
import Awards from "../components/Awards";
import Testimonials from "../components/Testimonials";
import Experience from "../components/Experience";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import useScrollSpy from "../hooks/useScrollSpy";

const sectionIds = [
  "banner",
  "projects",
  "awards",
  "testimonials",
  "experience",
  "blog",
  "contact",
];

const Home = () => {
  const activeSection = useScrollSpy(sectionIds);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-[url(src/assets/Rectangle.png)] overflow-x-hidden pt-23.25"
    >
      <Navbar activeSection={activeSection} />
      <Sidenav />
      <div className="max-w-screen-2xl">
        <Banner />
        <Projects />
        <Awards />
        <Testimonials />
        <Experience />
        <Blog />
        <Contact />
      </div>
    </section>
  );
};

export default Home;
