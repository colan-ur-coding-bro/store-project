import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { Stylebtn } from "./buttons";
import { Link } from "react-router-dom";

export default class modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { closeModal, isModalOpen } = value;
          const { img, title, price } = value.modalProduct;
          if (!isModalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 col-mid-6 p-5 col-lg-4 mx-auto text-center text-capitalize"
                    >
                      <h5>Item added to the cart</h5>
                      <img src={img} alt="product" className="img-fluid " />
                      <h5>{title}</h5>
                      <h5 className="text-muted">price: ${price}</h5>
                      <Link to="/" onClick={closeModal}>
                        <Stylebtn className="text-capitalize">
                          continue shopping
                        </Stylebtn>
                      </Link>

                      <Link to="/cart">
                        <Stylebtn
                          className="text-capitalize"
                          onClick={() => {
                            closeModal();
                          }}
                          yellow
                        >
                          go to cart
                        </Stylebtn>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background-color: var(--main_white);
  }
`;
