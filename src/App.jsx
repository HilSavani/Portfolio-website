import Topbar from "./components/topbar/Topbar.jsx";
import Contacts from "./components/contact/Contact.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Intro from "./components/intro/Intro.jsx";
import Testimonials from "./components/testimonials/Testimonials.jsx"; 
import Works from "./components/works/Works.jsx";
import Menu from "./components/menu/Menu.jsx";
import "./app.scss";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
