import React, { useRef } from "react";
import { Container } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";
import logoImg from "../../assets/all-images/Logo/logo.png";

const navLinks = [
  {
    path: "/consulta",
    display: "Consulta",
  },
  {
    path: "/vacinas",
    display: "Vacinas",
  },

  {
    path: "/acupuntura",
    display: "Acupuntura",
  },

  {
    path: "/especialidades",
    display: "Especialidades",
  },
  {
    path: "/contato",
    display: "Contato",
  },
  {
    path: "/sobre",
    display: "Sobre",
  },
];

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu_active");

  return (
    /* ======== naveção principal =========*/
    <header>
      <div className="main_navbar">
        <Container>
          <div className="navigation_wrapper d-flex align-items-center justify-content-between">
            <span className="mobile_menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <Link to="/home" className="logo-link">
              <img src={logoImg} className="logo" alt="Logo" />
            </Link>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav_active nav_item" : "nav_item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
