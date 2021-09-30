import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ProductConsumer } from "../context";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.pproduct;
    return (
      <ProductWrapper className="col-sm-9 col-md-6 col-lg-3 my-3 ">
        <div className="card">
          <ProductConsumer>
            {(value) => {
              return (
                <div
                  className="img-container py-2"
                  onClick={() => console.log("YOU DID THIS THIS!")}
                >
                  <Link to="/details">
                    <img
                      src={img}
                      alt="Product"
                      className="card-img-top mx-5"
                      onClick={() => value.handleDetail(id)}
                    />
                  </Link>
                  <button
                    className="card-btn"
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);

                      value.openModal(id);
                    }}
                  >
                    {inCart ? (
                      <p className="text-capitalize mb-0" disabled>
                        in cart
                      </p>
                    ) : (
                      <i className="fas fa-cart-plus"></i>
                    )}
                  </button>
                </div>
              );
            }}
          </ProductConsumer>

          {/* card footer */}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="mb-0 text-blue font-italic">${price}</h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  pproduct: PropTypes.shape({
    price: PropTypes.number,
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    info: PropTypes.string,
    inCart: PropTypes.bool,
  }).isRequired,
};

const ProductWrapper = styled.section`
  .card {
    border-color: transparent;
    transition: all 0.3s linear;
  }
  .card-footer {
    border: none;
  }

  .card-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: var(--light_blue);
    border: none;
    padding: 0.2rem 0.4rem;
    border-radius: 0.5rem 0 0 0;
    color: var(--main_white);
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    width: 75%;
  }

  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
      box-sizing: border-box;
    }

    .card-footer {
      background-color: rgba(247, 247, 247);
    }
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
    transition: all 0.3s linear;
  }
  .card-btn {
    transform: translate(100%, 100%);
    transition: all 0.3s linear;
  }
  .card:hover .card-btn {
    transform: translate(0, 0);
  }
  .card-btn:hover {
    background-color: var(--main_blue);
  }
`;
