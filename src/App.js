import Greeting from "./components/pages/Greeting";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import UeberMich from "./components/pages/UeberMich";
import Skills from "./components/pages/Skills";
import Awards from "./components/pages/Awards";
import Contact from "./components/pages/Contact";
import Socials from "./components/pages/Socials";
import Projekte from "./components/pages/Projekte";
import Footer from "./components/inc/Footer";
import Spinner from "./components/inc/Spinner";
import { useEffect, useState } from "react";
import Navbar from "./components/inc/Navigation/NavLinks";
import TimeLine from "./components/pages/TimeLine/TimeLine";

function App() {


  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner loading={loading}></Spinner>
      ) : (
        <>
          <Greeting></Greeting>
          <Navbar></Navbar>
          <UeberMich></UeberMich>
          <Awards></Awards>
          <TimeLine></TimeLine>
          <Projekte></Projekte>
          <Skills></Skills>
          <Socials></Socials>
          <Contact></Contact>
          <Footer></Footer>
        </>
      )}
    </div>
  );
}

export default App;
