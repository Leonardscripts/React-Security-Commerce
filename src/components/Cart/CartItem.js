import React from "react";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="row my-1 text-capitalize text-center">
      <div className="col-10 mx-fixed col-lg-2">
        <img src={img} style={{ width: "5rem", height: "5rem" }} />

        <div className="img-fluid" alt="product" />
      </div>
      <div className="col-10 mx-fixed col-lg-2" />
      <span className="d-lg-none">product : </span>
      {title}
      <div className="col-10 mx-fixed col-lg-2" />
    </div>
  );
}
