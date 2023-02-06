import "./cards.css";

const Cards = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mt-3 mt-lg-0">
            <div className="cards_box d-flex align-items-center flex-column text-light">
              <h5 className="fw-bold mt-2 cards_title">40 m2</h5>
              <p className="cards_text_width cards_subtitle">
                Veličina makete
              </p>
            </div>
          </div>
          <div className="col-lg-4 mt-3 mt-lg-0">
            <div className="cards_box d-flex align-items-center flex-column text-light">
              <h5 className="fw-bold mt-2 cards_title">300 000+</h5>
              <p className="cards_text_width cards_subtitle">
                Broj Lego kockica
              </p>
            </div>
          </div>
          <div className="col-lg-4 mt-3 mt-lg-0">
            <div className="cards_box d-flex align-items-center flex-column text-light">
              <h5 className="fw-bold mt-2 cards_title">150+</h5>
              <p className="cards_text_width cards_subtitle">
                Broj djece
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
