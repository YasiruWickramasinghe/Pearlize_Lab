import Home from "./components/Home"
import About from "./components/About";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Bot from "./components/Bot";
import Service from "./components/Service";
import Testimonials from "./components/Testimonials";
import Technologies from "./components/Technologies";
import Portfolio from "./components/Portfolio";
import Expertise from "./components/Expertise";

function App() {

  return (
    <>
      <Navbar />
      <Bot />
      <Home/>
      <About />
      <Service/>
      <Technologies/>
      <Hireme/>
      <Portfolio/>
      <Expertise/>
      <Testimonials/>
      <Contact />
      <Footer />
    </>
  )
}

export default App
