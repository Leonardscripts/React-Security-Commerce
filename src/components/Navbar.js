import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm bg-secondary navbar-dark px-sm-5">
        {/*
        https://www.iconfinder.com/icons/2538691/camera_cctv_record_security_icon
        Creative Commons (Attribution 3.0 Unported);
        https://www.iconfinder.com/Makoto_msk 
        */}
        <Link to="/">
          <img
            src="./img/iconfinder.png"
            alt="store"
            className="navbar-brand"
          />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li class="nav-item ml-6">
            <Link to="/" className="nav-link">
              PRODUCTS
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus fa-2x" />
            </span>
            MY CART
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainWhite);
  .nav-link {
    color: var(--lightBlue) !important;
    font-size: 1.1rem;
    text-transform: capitalize !important;
    border: 0.2rem solid var(--mainWhite);
    border-radius: 60px;
    transition: all 0.5 ease-in-out;
    &:hover {
      background: var(--mainDark);
    }
  }
`;
