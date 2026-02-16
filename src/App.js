import Header from "./components/Header";
import About from "./components/About";
import "./App.css";
import Statistics from "./components/Staticstic";
import Gallery from "./components/Gallery";
import Beliefs from "./components/Beliefs"
import Card from "./components/Card";
import Fitness from "./components/Fitness";
import Footer from "./components/Footer";

function App() {
  return (
  <div className="container">
      <Header />
      <About />
      <Statistics/>
      <Gallery/>
      <Beliefs/>
      <Card/>
      <Fitness/>
      <Footer/>
  </div>
  );
}

export default App;
