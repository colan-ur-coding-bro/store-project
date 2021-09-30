import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { Stylebtn } from "./buttons";
import styledComponent from "styled-components";

export default class navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-dark px-3">
        <div className="row">
          <div className="col-6 text-center align-self-center">
            <Link to="/">
              <img src={logo} alt="store" />
            </Link>
          </div>
          <div className="col-6">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <span className="mr-5">
                    {" "}
                    <h1>products</h1>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Link to="/cart" className="ml-auto">
          <Stylebtn>
            <span className="mx-2">
              <i className="fas fa-cart-plus"></i>
            </span>
            my cart
          </Stylebtn>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styledComponent.nav`
 
  background-color:var(--main_blue);
  .nav-link{
    color:white !important;
    font-size:1.3rem;
    text-transform:capitalize;
  }
  
`;
