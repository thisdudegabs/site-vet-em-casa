import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "../../styles/galeria.css";

import Img1 from "../../assets/all-images/Galeria/foto1.png";
import Img2 from "../../assets/all-images/Galeria/foto2.png";
import Img3 from "../../assets/all-images/Galeria/foto3.png";
import Img4 from "../../assets/all-images/Galeria/foto4.png";
import Img5 from "../../assets/all-images/Galeria/foto5.png";
import Img6 from "../../assets/all-images/Galeria/foto6.png";
import Img7 from "../../assets/all-images/Galeria/foto7.png";
import Img8 from "../../assets/all-images/Galeria/foto8.jpeg";
import Img9 from "../../assets/all-images/Galeria/foto9.jpeg";
import Img10 from "../../assets/all-images/Galeria/foto10.png";

const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10];

const Galeria = () => {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <div className="Galeria">
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="inner"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {images.map((image) => (
            <motion.div className="item" key={image}>
              <img src={image} alt="Fotos da Galeria" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Galeria;
