import React from "react";
import { customFetch } from "../utils";
import { useLoaderData } from "react-router-dom";
import VirtuosoList from "../components/VirtuosoList";
import { MainPageTitle } from "../components";

const url = "/allProducts";

export const loader = async ({ params }) => {
  const response = await customFetch(
    `${url}?scientificName=${params.scientificName}`
  );
  console.log(params.scientificName);
  const productAlternative = response.data;
  console.log(productAlternative);
  return { productAlternative, scientificName: params.scientificName };
};

const Scientific = () => {
  const { productAlternative, scientificName } = useLoaderData();
  return (
    <div>
      <header>
      <MainPageTitle mainPage="Scientific Name"/>

        <h3>{scientificName}</h3>
      </header>
      <section>
      <VirtuosoList items={productAlternative} />
      </section>
    </div>
  );
};

export default Scientific;
