import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Nav/>
      <Hero/>
      <Experience />
      <Services />
      <Portfolio />
      <Footer />
    </>
  );
};

export default App;
