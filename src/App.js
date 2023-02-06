import "./App.css";
import Cards from "./cards/Cards";
import Gallery from "./gallery/Gallery";
import AboutUs from './aboutUs/AboutUs';
import Header from './header/Header';

function App() {
  return (
    <div className="App">
      <Cards />
      <Gallery />
      <Header />
      <AboutUs />
    </div>
  );
}

export default App;
