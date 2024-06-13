import React, { useState } from "react";
import { customFetch } from "../utils";
import { useLoaderData } from "react-router-dom";
import { FilterSection, VirtuosoList } from "../components";

const url = "/allProducts";

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  console.log(params);
  const response = await customFetch(url, { params });
  const products = response.data;
  //   console.log(products);
  const mCompany = [...new Set(products.map((drug) => drug.marketingCompany))];
  const pType = [...new Set(products.map((drug) => drug.productType))];
  const sName = [...new Set(products.map((drug) => drug.scientificName))];
  console.log(pType);
  return { products, mCompany, sName, params, pType };
};

const FilterProducts = () => {
  const { products, params } = useLoaderData();
  const [openFilter, setOpenFilter] = useState(false);
  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-success btn-sm m-1"
        onClick={() => setOpenFilter(!openFilter)}
      >
        {openFilter ? "close filter" : "open filter"}
      </button>
      {openFilter && <FilterSection params={params} />}
      {products.length === 0 ? (
        "No products"
      ) : (
        <VirtuosoList items={products} />
      )}
    </div>
  );
};

export default FilterProducts;
