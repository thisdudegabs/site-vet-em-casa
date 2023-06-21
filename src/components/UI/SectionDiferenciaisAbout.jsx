import React from "react";
import { Col, Row } from "reactstrap";
import diferenciaisLista from "../../assets/data/diferenciaisLista";
import "../../styles/section-diferenciais.css";

const SectionDiferenciaisAbout = () => {
  const groupeddiferenciaisLista = chunkArray(diferenciaisLista, 2);

  return (
    <>
      {groupeddiferenciaisLista.map((group, index) => (
        <Row key={index} className="justify-content-center">
          {group.map((item) => (
            <ServiceItem item={item} key={item.id} />
          ))}
        </Row>
      ))}
    </>
  );
};

const ServiceItem = ({ item }) => (
  <Col lg="6" md="6" sm="12" className="mb-3">
    <div className="services_item items_costum-about">
      <span className="mb-3 d-inline-block text-center">
        <i className={item.icon} />
      </span>

      <div className="service_content content_costum-about">
        <h6 className="text-center">{item.title}</h6>
        <p className="section_description description_costum-about compact">
          {item.desc}
        </p>
      </div>
    </div>
  </Col>
);

const chunkArray = (array, size) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};

export default SectionDiferenciaisAbout;
