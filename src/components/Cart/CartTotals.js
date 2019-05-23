import React from "react";
import { Link } from "react-router-dom";
export default function CartTotals({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className=".container">
        <div className="row">
          <div ClassName="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button
                className="btn bg-success btn-outline-warning text-uppercase mb-3 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                clear Cart
              </button>
            </Link>
            <h5>
              <span className="text-title">Subtotal :</span>
              <strong>$ {cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">Tax :</span>
              <strong>$ {cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">Total :</span>
              <strong>$ {cartTotal}</strong>
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
