import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-warning navbar-dark px-sm-5">
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
          <li class="nav-item ml-5">
            <Link to="/" className="nav-link">
              products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            My Cart
          </ButtonContainer>
        </Link>
      </nav>
    );
  }
}
const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4 rem;
  background: transparent;
  border: 0.2rem solid var(--mainWhite);
  border-radius: 60px;
  color: var(--lightBlue);
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5 ease-in-out;
`;
