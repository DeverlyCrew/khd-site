import "./gallery.css";

const Gallery = () => {
  return (
    <section className="gallery_section mt-5">
      <div className="container">
        <h1 className="text-light">Primjeri građevina na maketi Travnik 2034</h1>
        <div className="row mt-4 g-4 container_inner">
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="gallery_card text-center">
              <div className="gallery_card_image_box">
                <img
                  src={require("../assets/building1.png")}
                  className="gallery_card_image"
                  alt=""
                />
              </div>
            </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="gallery_card text-center">
              <div className="gallery_card_image_box">
                <img
                  src={require("../assets/building2.png")}
                  className="gallery_card_image"
                  alt=""
                />
              </div>
            </div>
          </div><div className="col-sm-6 col-md-4 col-lg-3">
            <div className="gallery_card text-center">
              <div className="gallery_card_image_box">
                <img
                  src={require("../assets/building3.png")}
                  className="gallery_card_image"
                  alt=""
                />
              </div>
            </div>
          </div><div className="col-sm-6 col-md-4 col-lg-3">
            <div className="gallery_card text-center">
              <div className="gallery_card_image_box">
                <img
                  src={require("../assets/building4.png")}
                  className="gallery_card_image"
                  alt=""
                />
              </div>
            </div>
          </div><div className="col-sm-6 col-md-4 col-lg-3">
            <div className="gallery_card text-center">
              <div className="gallery_card_image_box">
                <img
                  src={require("../assets/building5.png")}
                  className="gallery_card_image"
                  alt=""
                />
              </div>
            </div>
          </div><div className="col-sm-6 col-md-4 col-lg-3">
            <div className="gallery_card text-center">
              <div className="gallery_card_image_box">
                <img
                  src={require("../assets/building6.png")}
                  className="gallery_card_image"
                  alt=""
                />
              </div>
            </div>
          </div><div className="col-sm-6 col-md-4 col-lg-3">
            <div className="gallery_card text-center">
              <div className="gallery_card_image_box">
                <img
                  src={require("../assets/building7.png")}
                  className="gallery_card_image"
                  alt=""
                />
              </div>
            </div>
          </div><div className="col-sm-6 col-md-4 col-lg-3">
            <div className="gallery_card text-center">
              <div className="gallery_card_image_box">
                <img
                  src={require("../assets/building8.png")}
                  className="gallery_card_image"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
