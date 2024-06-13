import React from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../features/cart/cartSlice";

const AdminBar = ({ id, contents }) => {
  const dispatch = useDispatch();

  const addHnadler = (id) => {
    const drugToAdd = contents.filter((drug) => drug._id === id);
    const cartProduct = {
      // cartID: _id + Math.random(),
      productID: drugToAdd[0]._id,
      description: drugToAdd[0].description,
      scientificName: drugToAdd[0].scientificName,
      marketingCompany: drugToAdd[0].marketingCompany,
      publicPrice: drugToAdd[0].publicPrice,
    };
    dispatch(addItem({ drug: cartProduct }));
  };

  const removeItemFromTheCart = () => {
    let productID = id
    dispatch(removeItem({ productID }));
  };

  return (
    <div className=" row justify-content-md-center m-1">
      <button
        type="button"
        className="btn btn-primary mb-1"
        onClick={() => addHnadler(id)}
      >
        Cart +
      </button>
      <button className="btn btn-dark m-1" onClick={removeItemFromTheCart}>
        Cart -
      </button>
      <Link
        to={`/updateProduct/${id}`}
        type="button"
        className="btn btn-info text-capitalize"
      >
        edit
      </Link>
    </div>
  );
};

export default AdminBar;
