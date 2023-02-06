import "./App.css";
import Cards from "./cards/Cards";
import Gallery from "./gallery/Gallery";
import AboutUs from './aboutUs/AboutUs';
import Header from './header/Header';
import Fotter from "./fotter/Fotter";

function App() {
  return (
    <div className="App">
      <Header />
      <Cards />
      <AboutUs />
      <Gallery />
      <Fotter />
    </div>
  );
}

export default App;
