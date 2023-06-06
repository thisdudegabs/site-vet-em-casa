import React from "react";
import { Col } from "reactstrap";
import "../../styles/vacinas-lista.css";
import vacinaLista from "../../assets/data/vacinaLista";

const VacinasLista = () => {
  return (
    <>
      {vacinaLista.map((item) => (
        <ServiceItem item={item} key={item.id} />
      ))}
    </>
  );
};

const ServiceItem = ({ item }) => (
  <Col lg="4" md="4" sm="6" className="mb-3">
    <div className="services_item">
      <span className="mb-3 d-inline-block">
        <i class={item.icon} />
      </span>

      <h6>{item.title}</h6>
      <p className="section_description">{item.desc}</p>
    </div>
  </Col>
);

export default VacinasLista;
