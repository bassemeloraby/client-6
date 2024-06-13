import React, { Fragment, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { customFetch } from "../utils";
import { MainPageTitle, SectionTitle } from "../components";
import ListsList from "../components/ListsList";
const url = "/specialArrays";

export const loader = async () => {
  const response = await customFetch(url);
  const lists = response.data;
  // const listsDescriptions = lists.map((li) => li.Description);
  // console.log(lists);
  // console.log(listsDescriptions);
  return { lists };
};

const Lists = () => {
  const { lists } = useLoaderData();
  const [listsCount, setlistsCount] = useState(lists.length);
  

  return (
    <Fragment>
      <MainPageTitle
        mainPage="Lists"
        headPageName="Products"
        headPageUrl="/products"
      />
      {listsCount ? (
        <ListsList
          listsCount={listsCount}
          setlistsCount={setlistsCount}
        />
      ) : (
        "no lists found"
      )}
    </Fragment>
  );
};

export default Lists;
