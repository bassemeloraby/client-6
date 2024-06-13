import React, { Fragment, useState } from "react";
import { customFetch } from "../utils";
import { Form, Link, redirect, useLoaderData } from "react-router-dom";
import { FormCheckInput, MainPageTitle, SubmitBtn } from "../components";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const url = "/allProducts";

export const loader = async ({ params }) => {
  const response = await customFetch(`${url}/${params.id}`);
  const product = response.data;
  return product;
};

export const action = async ({ params }) => {
  try {
    const response = await customFetch.delete(`${url}/${params.id}`);
    toast.success("product was deleted successfully");

    return redirect(`/products`);
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      "please double check your credentials";
    toast.error(errorMessage);

    return null;
  }
};

const SingleProduct = () => {
  const { user } = useSelector((state) => state.auth);

  const {
    _id,
    description,
    productType,
    scientificName,
    marketingCompany,
    publicPrice,
    use,
    use1,
    picLink,
    strength,
    strengthUnit,
    parts,
    size,
    sizeUnit,
    companyCategory1,
    companyCategory2,
    compProType,
    usedArea1,
    usedArea2,
    intBarcode,
    intBarcode1,
    //boleanType
    wasfaty,
    list,
    vitamine,
    //skinkind
    drySkin,
    sensitiveSkin,
    normalSkin,
    oilySkin,
    combinationSkin,
    atopicSkin,
    aknePoreSkin,
    hyperpigmentedSkin,
    flushedSkin,
    irritatedSkin,
    damagedSkin,
  } = useLoaderData();

  return (
    <div>
      <MainPageTitle
        mainPage="Product Card"
        headPageName="Products"
        headPageUrl="/products"
      />
      {user && (
        <section className="options m-1 d-flex justify-content-between">
          <Link
            to={`/updateProduct/${_id}`}
            type="button"
            className="btn btn-info text-capitalize"
          >
            edit
          </Link>
          <Form method="POST">
            {" "}
            <SubmitBtn text="delete" />
          </Form>
        </section>
      )}
      <div>
        {" "}
        <header>
          <h4>{description}</h4>
        </header>
        <section
          className="cardBody p-3 d-lg-flex justify-content-around rounded"
          style={{ backgroundColor: "brown" }}
        >
          <div className="pic col-lg-5">
            <img
              src={picLink ? picLink : "/src/assets/images/noPhoto.jpg"}
              className="card-img-top rounded"
              alt={description}
            />
          </div>
          <div className="deltails col-lg-6">
            <ul className="list-group">
              <li className="list-group-item d-flex flex-wrap">
                <h6 className="pe-1">productType :</h6>
                {productType}
              </li>
              <li className="list-group-item d-flex flex-wrap">
                <h6 className="pe-1">scientificName :</h6>
                {scientificName}
              </li>
              <li className="list-group-item d-flex flex-wrap">
                <h6 className="pe-1">marketingCompany :</h6>
                {marketingCompany}
              </li>
              <li className="list-group-item d-flex flex-wrap">
                <h6 className="pe-1">publicPrice :</h6>
                {publicPrice} SR
              </li>
              <li className="list-group-item d-flex flex-wrap">
                <h6 className="pe-1">use :</h6>
                {use}
              </li>
              <li className="list-group-item d-flex flex-wrap">
                <h6 className="pe-1">use :</h6>
                {use1}
              </li>
              <li className="list-group-item d-flex flex-wrap">
                <h6 className="pe-1">strength :</h6>
                {strength}
              </li>
              <li className="list-group-item d-flex flex-wrap">
                <h6 className="pe-1">strengthUnit :</h6>
                {strengthUnit}
              </li>
              <li className="list-group-item d-flex flex-wrap">
                <h6 className="pe-1">parts :</h6>
                {parts}
              </li>
              <li className="list-group-item d-flex flex-wrap">
                <h6 className="pe-1">size :</h6>
                {size}
              </li>
              <li className="list-group-item d-flex flex-wrap">
                <h6 className="pe-1">sizeUnit :</h6>
                {sizeUnit}
              </li>
              <li className="list-group-item d-flex flex-wrap">
                <h6 className="pe-1">companyCategory1 :</h6>
                {companyCategory1}
              </li>
              <li className="list-group-item d-flex flex-wrap">
                <h6 className="pe-1">companyCategory2 :</h6>
                {companyCategory2}
              </li>
              <li className="list-group-item d-flex flex-wrap">
                <h6 className="pe-1">compProType :</h6>
                {compProType}
              </li>
              <li className="list-group-item d-flex flex-wrap">
                <h6 className="pe-1">usedArea1 :</h6>
                {usedArea1}
              </li>
              <li className="list-group-item d-flex flex-wrap">
                <h6 className="pe-1">usedArea2 :</h6>
                {usedArea2}
              </li>
              <li className="list-group-item d-flex flex-wrap">
                <h6 className="pe-1">intBarcode :</h6>
                {intBarcode}
              </li>
              <li className="list-group-item d-flex flex-wrap">
                <h6 className="pe-1">intBarcode1 :</h6>
                {intBarcode1}
              </li>
              {user && (
                <Fragment>
                  <li className="list-group-item d-flex">
                    <FormCheckInput
                      name="wasfaty"
                      defaultChecked={wasfaty}
                      name1="wasfaty"
                      disabled="disabled"
                    />
                  </li>
                  <li className="list-group-item d-flex">
                    <FormCheckInput
                      name="list"
                      defaultChecked={list}
                      name1="list"
                      disabled="disabled"
                    />
                  </li>
                </Fragment>
              )}
              <li className="list-group-item d-flex">
                <FormCheckInput
                  name="vitamine"
                  defaultChecked={vitamine}
                  name1="vitamine"
                  disabled="disabled"
                />
              </li>
              <li className="list-group-item d-flex">
                <FormCheckInput
                  name="drySkin"
                  defaultChecked={drySkin}
                  name1="drySkin"
                  disabled="disabled"
                />
              </li>
              <li className="list-group-item d-flex">
                <FormCheckInput
                  name="sensitiveSkin"
                  defaultChecked={sensitiveSkin}
                  name1="sensitiveSkin"
                  disabled="disabled"
                />
              </li>
              <li className="list-group-item d-flex">
                <FormCheckInput
                  name="normalSkin"
                  defaultChecked={normalSkin}
                  name1="normalSkin"
                  disabled="disabled"
                />
              </li>
              <li className="list-group-item d-flex">
                <FormCheckInput
                  name="oilySkin"
                  defaultChecked={oilySkin}
                  name1="oilySkin"
                  disabled="disabled"
                />
              </li>
              <li className="list-group-item d-flex">
                <FormCheckInput
                  name="combinationSkin"
                  defaultChecked={combinationSkin}
                  name1="combinationSkin"
                  disabled="disabled"
                />
              </li>
              <li className="list-group-item d-flex">
                <FormCheckInput
                  name="atopicSkin"
                  defaultChecked={atopicSkin}
                  name1="atopicSkin"
                  disabled="disabled"
                />
              </li>
              <li className="list-group-item d-flex">
                <FormCheckInput
                  name="aknePoreSkin"
                  defaultChecked={aknePoreSkin}
                  name1="aknePoreSkin"
                  disabled="disabled"
                />
              </li>
              <li className="list-group-item d-flex">
                <FormCheckInput
                  name="hyperpigmentedSkin"
                  defaultChecked={hyperpigmentedSkin}
                  name1="hyperpigmentedSkin"
                  disabled="disabled"
                />
              </li>
              <li className="list-group-item d-flex">
                <FormCheckInput
                  name="flushedSkin"
                  defaultChecked={flushedSkin}
                  name1="flushedSkin"
                  disabled="disabled"
                />
              </li>
              <li className="list-group-item d-flex">
                <FormCheckInput
                  name="irritatedSkin"
                  defaultChecked={irritatedSkin}
                  name1="irritatedSkin"
                  disabled="disabled"
                />
              </li>
              <li className="list-group-item d-flex">
                <FormCheckInput
                  name="damagedSkin"
                  defaultChecked={damagedSkin}
                  name1="damagedSkin"
                  disabled="disabled"
                />
              </li>
            </ul>
          </div>
        </section>
        <section className="optioms">optioms</section>
      </div>
    </div>
  );
};

export default SingleProduct;
