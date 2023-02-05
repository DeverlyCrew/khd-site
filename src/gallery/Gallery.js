import "./gallery.css";

const Gallery = () => {
  return (
    <section className="gallery_section mt-5">
      <div className="container">
        <h1 className="text-light">New Arrivals</h1>
        <div className="row mt-4 g-4">
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="gallery_card text-center">
              <div className="gallery_card_image_box">
                <img
                  src={require("../assets/plane.png")}
                  className="gallery_card_image"
                />
              </div>
              <div className="card_text">
                <h4 className="mt-2">Toy for Kids</h4>
                <h5 className="mt-2 fw-normal">Price $50</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="gallery_card text-center">
              <div className="gallery_card_image_box">
                <img
                  src={require("../assets/plane.png")}
                  className="gallery_card_image"
                />
              </div>
              <div className="card_text">
                <h4 className="mt-2">Toy for Kids</h4>
                <h5 className="mt-2 fw-normal">Price $50</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="gallery_card text-center">
              <div className="gallery_card_image_box">
                <img
                  src={require("../assets/plane.png")}
                  className="gallery_card_image"
                />
              </div>
              <div className="card_text">
                <h4 className="mt-2">Toy for Kids</h4>
                <h5 className="mt-2 fw-normal">Price $50</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="gallery_card text-center">
              <div className="gallery_card_image_box">
                <img
                  src={require("../assets/plane.png")}
                  className="gallery_card_image"
                />
              </div>
              <div className="card_text">
                <h4 className="mt-2">Toy for Kids</h4>
                <h5 className="mt-2 fw-normal">Price $50</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="gallery_card text-center">
              <div className="gallery_card_image_box">
                <img
                  src={require("../assets/plane.png")}
                  className="gallery_card_image"
                />
              </div>
              <div className="card_text">
                <h4 className="mt-2">Toy for Kids</h4>
                <h5 className="mt-2 fw-normal">Price $50</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="gallery_card text-center">
              <div className="gallery_card_image_box">
                <img
                  src={require("../assets/plane.png")}
                  className="gallery_card_image"
                />
              </div>
              <div className="card_text">
                <h4 className="mt-2">Toy for Kids</h4>
                <h5 className="mt-2 fw-normal">Price $50</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="gallery_card text-center">
              <div className="gallery_card_image_box">
                <img
                  src={require("../assets/plane.png")}
                  className="gallery_card_image"
                />
              </div>
              <div className="card_text">
                <h4 className="mt-2">Toy for Kids</h4>
                <h5 className="mt-2 fw-normal">Price $50</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="gallery_card text-center">
              <div className="gallery_card_image_box">
                <img
                  src={require("../assets/plane.png")}
                  className="gallery_card_image"
                />
              </div>
              <div className="card_text">
                <h4 className="mt-2">Toy for Kids</h4>
                <h5 className="mt-2 fw-normal">Price $50</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
