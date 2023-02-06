import "./cards.css";
import { ReactComponent as Truck } from "../assets/truck.svg";
import { ReactComponent as Medal } from "../assets/medal.svg";
import { ReactComponent as Free } from "../assets/free.svg";

const Cards = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mt-3 mt-lg-0">
            <div className="cards_box d-flex align-items-center flex-column text-light">
              <div className="cards_image_box">
                <div className="cards_image">
                  <Truck />
                </div>
              </div>
              <h5 className="fw-bold mt-2">FAST DELIVERY</h5>
              <p className="cards_text_width">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
                ratione eum iusto dolor expedita exercitationem!
              </p>
            </div>
          </div>
          <div className="col-lg-4 mt-3 mt-lg-0">
            <div className="cards_box d-flex align-items-center flex-column text-light">
              <div className="cards_image_box">
                <div className="cards_image">
                  <Medal />
                </div>
              </div>
              <h5 className="fw-bold mt-2">FAST DELIVERY</h5>
              <p className="cards_text_width">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
                ratione eum iusto dolor expedita exercitationem!
              </p>
            </div>
          </div>
          <div className="col-lg-4 mt-3 mt-lg-0">
            <div className="cards_box d-flex align-items-center flex-column text-light">
              <div className="cards_image_box">
                <div className="cards_image">
                  <Free />
                </div>
              </div>
              <h5 className="fw-bold mt-2">FAST DELIVERY</h5>
              <p className="cards_text_width">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
                ratione eum iusto dolor expedita exercitationem!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
