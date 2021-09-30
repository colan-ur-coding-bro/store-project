import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../context.js";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            if (!value.cart.length) {
              return <EmptyCart />;
            } else {
              return (
                <>
                  <Title name="your" title="cart" />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} history={this.props.history} />
                </>
              );
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
