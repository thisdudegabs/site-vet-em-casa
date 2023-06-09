import React from "react";
import Slider from "react-slick";
import "../../styles/testimonials-sliders.css";

import ava01 from "../../assets/all-images/Avatares/ava-1.jpg";
import ava02 from "../../assets/all-images/Avatares/ava-2.jpg";
import ava03 from "../../assets/all-images/Avatares/ava-3.jpg";
import ava04 from "../../assets/all-images/Avatares/ava-4.jpg";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 3000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonialsDescription py-4 px-3">
        <p className="section_description">
          Ótimo atendimento e cuidado excepcional com o meu pet. Recomendo!
        </p>

        <div className="mt-3 d-flex align-content-center gap-4">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Victor Ferreira</h6>
            <p className="section_description"></p>
          </div>
        </div>
      </div>

      <div className="testimonialsDescription py-4 px-3">
        <p className="section_description">
          Profissionais competentes e ambiente acolhedor. Meu pet sempre é bem
          tratado aqui!
        </p>

        <div className="mt-3 d-flex align-content-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Cintia Rocha</h6>
            <p className="section_description"></p>
          </div>
        </div>
      </div>

      <div className="testimonialsDescription py-4 px-3">
        <p className="section_description">
          Atendimento rápido e eficiente, além de preços acessíveis. Minha
          clínica veterinária de confiança!
        </p>

        <div className="mt-3 d-flex align-content-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Michael Dias</h6>
            <p className="section_description"></p>
          </div>
        </div>
      </div>

      <div className="testimonialsDescription py-4 px-3">
        <p className="section_description">
          Equipe simpática e atenciosa, sempre pronta para esclarecer minhas
          dúvidas. Recomendo a todos os donos de animais!
        </p>

        <div className="mt-3 d-flex align-content-center gap-4">
          <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Victoria Luana</h6>
            <p className="section_description"></p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
