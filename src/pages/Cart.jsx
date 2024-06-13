import React from "react";
import { CartItemsList, MainPageTitle } from "../components";

const Cart = () => {
  return (
    <div>
      <MainPageTitle
        mainPage="Cart"
        headPageName="Products"
        headPageUrl="/products"
      />
      <section>
        <CartItemsList />
      </section>
    </div>
  );
};

export default Cart;
