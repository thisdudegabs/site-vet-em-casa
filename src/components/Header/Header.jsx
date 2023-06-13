import React, { useRef } from "react";
import { Container } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";
import logoImg from "../../assets/all-images/Logo/logo.png";

const navLinks_left = [
  {
    path: "/consulta",
    display: "Consulta",
  },
  {
    path: "/vacinas",
    display: "Vacinas",
  },

  {
    path: "/exames",
    display: "Exames",
  },
];

const navLinks_right = [
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
              <i className="ri-menu-fill" onClick={toggleMenu}></i>
            </span>

            <div className="navigation_left">
              <div className="menu_left">
                {navLinks_left.map((item, index) => (
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

            <Link to="/home" className="logo-link">
              <img src={logoImg} className="logo" alt="Logo" />
            </Link>

            <div className="navigation_right">
              <div className="menu_right">
                {navLinks_right.map((item, index) => (
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
