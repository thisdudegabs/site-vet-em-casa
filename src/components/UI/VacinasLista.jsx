import React from "react";
import { Col } from "reactstrap";
import "../../styles/vacinas-lista.css";
import vacinaLista from "../../assets/data/vacinaLista";
import Img1 from "../../assets/all-images/Icones/cat.png";
import Img2 from "../../assets/all-images/Icones/dog.png";

const VacinasLista = () => {
  return (
    <>
      {vacinaLista.map((item) => (
        <ServiceItem item={item} key={item.id} />
      ))}
    </>
  );
};

const ServiceItem = ({ item }) => {
  let iconImg;
  let iconClass;

  if (item.id === 2) {
    iconImg = Img1;
    iconClass = "animal_icon cat_icon";
  } else if (item.id === 1) {
    iconImg = Img2;
    iconClass = "animal_icon dog_icon";
  }

  return (
    <Col lg="4" md="4" sm="12" className="mb-3">
      <div className="services_item">
        <span className={iconClass}>
          <img src={iconImg} alt="" className="icon-img" />
        </span>
        <h6 className="vacinas_title-costum">{item.title}</h6>
        <ul className="section_description">
          {item.desc.map((vacina, index) => (
            <li key={index}>{vacina}</li>
          ))}
        </ul>
      </div>
    </Col>
  );
};

export default VacinasLista;
