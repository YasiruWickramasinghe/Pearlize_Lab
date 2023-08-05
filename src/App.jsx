import Home from "./components/Home"
import About from "./components/About";
import Hireus from "./components/Hireus";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Bot from "./components/Bot";
import Service from "./components/Service";
import Testimonials from "./components/Testimonials";
import Technologies from "./components/Technologies";
import Portfolio from "./components/Portfolio";
import Expertise from "./components/Expertise";
import Careers from "./components/Career";

function App() {

  return (
    <>
      <Navbar />
      <Bot />
      <Home/>
      <About />
      <Service/>
      <Technologies/>
      <Hireus/>
      <Portfolio/>
      <Expertise/>
      <Testimonials/>
      <Careers/>
      <Contact />
      <Footer />
    </>
  )
}

export default App
