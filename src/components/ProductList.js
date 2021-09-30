import React, { Component } from "react";
import Title from "./Title";
import { storeProducts } from "../data";
import { ProductConsumer } from "../context";
import Product from "./Product";
export default class ProductList extends Component {
  state = {
    store: storeProducts,
  };
  render() {
    return (
      <React.Fragment>
        <div className="py5">
          <div className="container">
            <Title name="our" title="product"></Title>
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return value.store.map((item) => {
                    return <Product key={item.id} pproduct={item} />;
                  });
                }}
              </ProductConsumer>
            </div>
            <div className="row"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
