import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper>
        <h3> hello from product</h3>
      </ProductWrapper>
    );
  }
}

const ProductWrapper = styled.div``;
