/* eslint-disable react/react-in-jsx-scope */
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

import "./styles/Style.css";

import Header from "./components/Header";
import Intro from "./components/Intro";
import Themes from "./components/Themes";
import FAQ from "./components/faq/faq";
import Footer from "./components/Footer";

function App() {
  console.log("Developed by Fancy Mao and Helen Liang.");
  return (
    <div className="App">
      <div className="header-section">
        <Header />
      </div>
      <main>
        {/* <section className="home-section" id="home">
          <>
        </section> */}
        <section className="intro-section" id="Intro">
          <Intro />
        </section>
        <section className="themes-section">
          <Themes />
        </section>
        <section className="faq-section" id="FAQ">
          <FAQ />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
      {/* <section className="sidebar-section">sidebar</section> */}
      {/* <section className="announcement-section">announcement</section> */}
    </div>
  );
}

export default App;
