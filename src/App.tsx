import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Header from "./components/Header";
import Supporters from "./components/Supporters";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({ disable: "mobile" });
  }, []);
  return (
    <div>
      <Header />
      <Supporters />
      <Footer />
    </div>
  );
}

export default App;
