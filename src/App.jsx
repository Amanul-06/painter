import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import About from "./sections/About";
import Work from "./sections/Work";
import Areas from "./sections/Areas";
import Contact from "./sections/Contact";

export default function App() {
  return <>
    <Header />
    <main>
      <Hero />
      <Services />
      <About />
      <Work />
      <Areas />
      <Contact />
    </main>
    <Footer />
  </>;
}
