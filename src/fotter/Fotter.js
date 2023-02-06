import "./Fotter.css";

const Fotter = () => {
  return (
    <div className="fotter_wrapper">
      <div className="fotter_card fotter_card_1">
        <h1>Kontakt</h1>
        <p>Mali Programer</p>
        <p>Mali Trg bb</p>
        <p>72270 Travnik </p>
        <p>061 475 790</p>
      </div>
      <div className="fotter_card fotter_card_2">
        <h1>Info</h1>
        <p>
          necessary, making this the first true generator on the Internet. It
          uses a dictionary of over 200 Latin words, combined with a handful
        </p>
      </div>
      <div className="fotter_card fotter_card_3">
        <h1>Linkovi</h1>
        <div className="fotter_card_3_social_media">
          <a href="https://maliprogramer.ba/">Web stranica</a>
          <a href="https://www.instagram.com/mali.programer/">Instagram</a>
          <a href="https://www.linkedin.com/company/mali-programer/">LinkedIn</a>
          <a href="https://www.facebook.com/maliprogramertravnik/">Facebook</a>
        </div>
      </div>
    </div>
  );
};

export default Fotter;
