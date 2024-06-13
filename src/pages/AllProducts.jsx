import React from "react";
import { MainPageTitle, ProductsList } from "../components";
import { customFetch } from "../utils";
import { WhatsappShareButton, WhatsappIcon } from "react-share";
const url = "/allProducts";

export const loader = async () => {
  const response = await customFetch(url);
  const products = response.data;
  return { products };
};

const AllProducts = () => {
  const shareUrl = "https://mederma.website/Products";
  return (
    <div>
      <header className="d-flex justify-content-between mb-1">
        <MainPageTitle
          mainPage="products"
          addUrl="/addProduct"
          linkText="Add"
        />
        <WhatsappShareButton url={shareUrl}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </header>

      <ProductsList />
    </div>
  );
};

export default AllProducts;
