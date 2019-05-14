import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { ModalOpen, closeModal } = value;
          const { img, title, price } = value.ModalProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container" />
                <div className="row" />
                <div
                  id="modal"
                  className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize"
                />
                <h5> item added to the cart </h5>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
right0;
bottom:0;
background:(0,0,0,0,3);
display: flex;
algn-items:center;
justify-content:center;
`;
