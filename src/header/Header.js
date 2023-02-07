import "./Header.css";


const Header = () => {
  return (
    <div className="header">
    <div className="hero_bg">
        <img src={require("./assets/hero-bg.png")} alt="hero_bg" />
    </div>
      <div className="header_text">
        <h1>TRAVNIK 2035</h1>
        <p>Gradimo Travnik zajedno! 150 djece iz cijele Bosne i Hercegovine će se okupiti kako bi izgradili budućnost ovog grada korištenjem lego kockica. Do 2035. godine, Travnik će postati ponosno mjesto s nevjerojatnom kreativnošću i maštom. Budite dio ove nevjerojatne priče i zajedno gradimo Travnik koji nas čeka u budućnosti.</p>
      </div>
      <div className="header_image">
        <img src={require("./assets/lego_img1.png")} alt="header_image" />
        </div>
    </div>
  );
}

export default Header;