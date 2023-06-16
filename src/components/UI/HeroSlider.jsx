import React from "react";

import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import "../../styles/hero-slider.css";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <Slider {...settings} className="hero_slider">
      {/* slider 1 */}
      <div
        className={`slider_item slider_item-01 mt0 ${
          currentSlide === 0 ? "active-slide" : ""
        }`}
      >
        <Container>
          <div className="slider_content">
            <h2 className="custom-h2 custom-h2-1">
              Fazemos consulta na sua casa!
            </h2>

            <Link to="/contato">
              <button className="btn reserve_btn mt-4">
                <div className="btn1">Marcar consulta agora!</div>
              </button>
            </Link>
          </div>
        </Container>
      </div>
      {/* slider 2 */}
      <div
        className={`slider_item slider_item-02 mt0 ${
          currentSlide === 1 ? "active-slide" : ""
        }`}
      >
        <Container>
          <div className="slider_content">
            <h2 className="custom-h2 custom-h2-2">
              Seu Pet Precisa de Fisioterapia?
            </h2>

            <Link to="/contato">
              <button className="btn reserve_btn mt-4">
                <div className="btn2">Aliviar a dor do meu Pet </div>
              </button>
            </Link>
          </div>
        </Container>
      </div>
      {/* slider 3 */}
      <div
        className={`slider_item slider_item-03 mt0 ${
          currentSlide === 2 ? "active-slide" : ""
        }`}
      >
        <Container>
          <div className="slider_content">
            <h2 className="custom-h2 custom-h2-3">Já Vacinou Seu Pet?</h2>

            <Link to="/contato">
              <button className="btn reserve_btn mt-4">
                <div className="btn3">Viver mais com meu Pet!</div>
              </button>
            </Link>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;
