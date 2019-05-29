import React from "react";

export default function EmptyCart() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-10 mx-auto text-center- text-title" />
        <h1>
          <u>Your Cart is currently Empty</u>
        </h1>
        <span className="mr-6">
          <i className="fas fa-cart-plus fa-6x text-warning" />
        </span>
      </div>
    </div>
  );
}
