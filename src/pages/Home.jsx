import React from "react";
import Navbar from "../components/Navbar";
import Sidenav from "../components/Sidenav";
import Banner from "../components/Banner";
import Projects from "../components/Projects";
import Awards from "../components/Awards";
import Testimonials from "../components/Testimonials";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import useScrollSpy from "../hooks/useScrollSpy";

const sectionIds = [
  "banner",
  "projects",
  "awards",
  "testimonials",
  "blog",
  "contact",
];

const Home = () => {
  const activeSection = useScrollSpy(sectionIds);

  return (
    <section
      id="home"
      className="relative w-full bg-[url(src/assets/Rectangle.png)]"
    >
      <Navbar activeSection={activeSection} />
      <Sidenav />
      <div className="ml-30">
        <Banner />
        <Projects />
        <Awards />
        <Testimonials />
        <Blog />
        <Contact />
      </div>
    </section>
  );
};

export default Home;
