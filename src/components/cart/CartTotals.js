import React from "react";
import { Link } from "react-router-dom";
import Paypal from "../Paypal";

export default function CartTotals({ value, history }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mt-2 ml-sm-5  ml-md-auto col-md-12 text-capitalize  text-md-end">
            <Link to="/">
              <button
                type="button"
                onClick={() => {
                  clearCart();
                }}
                className="btn btn-outline-danger mb-3 px-5"
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className="text-title">subtotal:</span>
              <strong>$ {cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">tax:</span>
              <strong>$ {cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">cart total:</span>
              <strong>$ {cartTotal}</strong>
            </h5>
            <Paypal total={cartTotal} clearCart={clearCart} history={history} />
          </div>
        </div>
      </div>
    </>
  );
}
