import React from "react";
import { Form, redirect } from "react-router-dom";
import {
  FormCheckInput,
  FormDtalistInput,
  FormInput,
  MainPageTitle,
  SubmitBtn,
} from "../components";
import { customFetch } from "../utils";
import { toast } from "react-toastify";

const url = "/allProducts";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // return null;
  try {
    const response = await customFetch.post(url, data);
    toast.success("the product is added successfully");

    return redirect(`/products`);
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      "please double check your credentials";
    toast.error(errorMessage);

    return null;
  }
};

const AddProduct = () => {
  const formCheckItems = [
    "wasfaty",
    "list",
    "vitamine",
    "drySkin",
    "sensitiveSkin",
    "normalSkin",
    "oilySkin",
    "combinationSkin",
    "atopicSkin",
    "aknePoreSkin",
    "hyperpigmentedSkin",
    "flushedSkin",
    "irritatedSkin",
    "damagedSkin",
  ];
  return (
    <div>
    <MainPageTitle
        mainPage="New Product"
        headPageName="Products"
        headPageUrl="/products"
      />{" "}
      {" "}
      <Form method="POST">
        <section
          className="updateBody  p-3 rounded mb-1"
          style={{ backgroundColor: "brown" }}
        >
          <FormInput
            type="text"
            label="description"
            name="description"
            // defaultValue={description}
          />
          <FormDtalistInput
            listDB={["drug", "equipment","beauty"]}
            type="text"
            name="productType"
            list="productTypeList"
            label="productType"
          />
          {/* <FormInput
            type="text"
            label="productType"
            name="productType"
            // defaultValue={productType}
          />*/}
          <FormInput
            type="text"
            label="scientificName"
            name="scientificName"
            // defaultValue={scientificName}
          />
          <FormInput
            type="text"
            label="marketingCompany"
            name="marketingCompany"
            // defaultValue={marketingCompany}
          />
          <FormInput
            type="text"
            label="publicPrice"
            name="publicPrice"
            // defaultValue={publicPrice}
          />
          <FormInput type="text" label="use" name="use" />
          <FormInput type="text" label="use" name="use1" />
          <FormInput
            type="text"
            label="picLink"
            name="picLink"
            // defaultValue={picLink}
          />
          <FormInput
            type="text"
            label="strength"
            name="strength"
            // defaultValue={strength}
          />
          <FormInput
            type="text"
            label="strengthUnit"
            name="strengthUnit"
            // defaultValue={strengthUnit}
          />
          <FormInput
            type="text"
            label="parts"
            name="parts"
            // defaultValue={parts}
          />
          <FormInput type="text" label="size" name="size" />
          <FormInput
            type="text"
            label="sizeUnit"
            name="sizeUnit"
            // defaultValue={sizeUnit}
          />
          <FormInput
            type="text"
            label="companyCategory1"
            name="companyCategory1"
            // defaultValue={companyCategory1}
          />
          <FormInput
            type="text"
            label="companyCategory2"
            name="companyCategory2"
            // defaultValue={companyCategory2}
          />
          <FormInput
            type="text"
            label="compProType"
            name="compProType"
            // defaultValue={compProType}
          />
          <FormInput
            type="text"
            label="usedArea1"
            name="usedArea1"
            // defaultValue={usedArea1}
          />
          <FormInput
            type="text"
            label="usedArea2"
            name="usedArea2"
            // defaultValue={usedArea2}
          />
          <FormInput
            type="text"
            label="intBarcode"
            name="intBarcode"
            // defaultValue={intBarcode}
          />
          <FormInput
            type="text"
            label="intBarcode"
            name="intBarcode1"
            // defaultValue={intBarcode1}
          />
          {formCheckItems.map((f, i) => (
            <FormCheckInput name={f} value="true" name1={f} />
          ))}
        </section>
        <section className="optioms">
          <SubmitBtn text="Add" />
        </section>
      </Form>
    </div>
  );
};

export default AddProduct;
