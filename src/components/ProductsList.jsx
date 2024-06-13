import React, { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import { Virtuoso } from "react-virtuoso";
import { Link, redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { customFetch } from "../utils";
import VirtuosoList from "./VirtuosoList";
const url = "/allProducts";

const ProductsList = () => {
  const { products } = useLoaderData();

  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!query) setItems(products);
    setItems((_) =>
      products.filter(
        (x) =>
          x.scientificName?.toLowerCase().includes(query?.toLowerCase()) ||
          x.description.toLowerCase().includes(query?.toLowerCase())
      )
    );
  }, [query, products]);

  useEffect(() => {
    setItems(products);
  }, [products]);

  const deletehandler = async (id) => {
    console.log(" deleting");
    try {
      const response = await customFetch.delete(`${url}/${id}`);
      console.log(response.data);
      toast.success("product is deleted successfully");

      return redirect(`/products`);
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "please double check your credentials";
      console.log(errorMessage);
      toast.error(errorMessage);

      return null;
    }
  };

  return (
    <div>
      {" "}
      <section className="d-flex justify-content-between">
        <SearchInput
          setQuery={setQuery}
          placeholder="enter Trade name or Scientific name"
          cl="col-md-5"
        />
      </section>
      {items.length === 0 ? "no records found" : <VirtuosoList items={items} />}
    </div>
  );
};

export default ProductsList;
