import React, { useEffect, useRef } from "react";
import Helmet from "../components/Helmet/Helmet";

import lottie from "lottie-web";
import "../styles/consulta.css";

const Consulta = () => {
  const animationContainerRef = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "https://assets3.lottiefiles.com/packages/lf20_0nnf0are/data.json",
    });

    return () => anim.destroy();
  }, []);

  return (
    <div className="consulta-container">
      <div className="text-container">
        <h1>Nos chame via WHATSAPP</h1>
      </div>
      <div className="animation-container" ref={animationContainerRef}></div>
    </div>
  );
};

export default Consulta;
