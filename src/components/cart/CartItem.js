import React from "react";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="row text-center my-1 textcapitalize mr-0">
      <div className="col-10 mx-auto col-lg-2 ">
        <img
          style={{ width: " 5rem", height: "5rem" }}
          className="img-fluid"
          src={img}
          alt=""
        />
      </div>
      <div className="col-10 col-lg-2 mx-auto">
        <span className="d-lg-none">product: {title}</span>
        {title}
      </div>
      <div className="col-10 col-lg-2 mx-auto">
        <span className="d-lg-none">price: </span>
        {price}
      </div>
      <div className="col-10 mx-auto col-lg-2  my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <span
            className="btn btn-black mx-1"
            onClick={() => {
              decrement(id);
            }}
          >
            -1
          </span>
          <span className="btn btn-black mx-1">{count}</span>
          <span
            className="btn btn-black mx-1"
            onClick={() => {
              increment(id);
            }}
          >
            +1
          </span>
        </div>
      </div>
      <div className="col-10 col-lg-2 mx-auto">
        <i
          onClick={() => removeItem(id)}
          className="fas fa-trash cart-icon"
        ></i>
      </div>
      <div className="col-10 col-lg-2 mx-auto">
        <strong className="d-lg-none">item total: </strong>${total}
      </div>
    </div>
  );
}
