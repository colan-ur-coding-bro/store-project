import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { Stylebtn } from "./buttons.js";
export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, title, info, img, company, inCart, price } = value.detail;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end title */}

              {/* product informations */}
              <div className="row">
                <div className="col-10 mx-auto col-mid-6 my-3">
                  <img
                    src={img}
                    alt="product"
                    className="img-fuild text-center"
                  />
                </div>
                {/* product text */}
                <div className="col-10 mx-auto col-mid-6 my-3 text-capitalize">
                  <h1>model: {title}</h1>
                  <h4 className="text-title text-muted mb-2 mt3 text-uppercase">
                    made by: {company}
                  </h4>
                  <h4 className="text-blue">
                    <strong>price: ${price}</strong>
                  </h4>
                  <p className="text-capitalize font-wieght-bold mt-3 mb-0">
                    some info about the product:
                  </p>
                  <p className="text-lead text-muted">{info}</p>
                  {/* buttons */}
                  <div>
                    <Link to="/">
                      <Stylebtn>back to products</Stylebtn>
                    </Link>
                    <Stylebtn
                      yellow
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "in cart" : "add to cart"}
                    </Stylebtn>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
