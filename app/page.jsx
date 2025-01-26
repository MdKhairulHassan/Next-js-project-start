import About from "./(components)/About";
import Banner from "./(components)/Banner";
import Contact from "./(components)/Contact";
import Portfolio from "./(components)/Portfolio";
import Service from "./(components)/Service";


// HOME PAGE=======================================================
export default function Home() {
  return (
    <>
      <Banner />
      <Service />
      <About />
      <Portfolio />
      <Contact/>
    </>
  );
}
