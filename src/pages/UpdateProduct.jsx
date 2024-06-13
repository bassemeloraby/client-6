import React from "react";
import { customFetch } from "../utils";
import { Form, redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import {
  FormCheckInput,
  FormInput,
  MainPageTitle,
  SubmitBtn,
} from "../components";

const url = "/allProducts";

export const loader = async ({ params }) => {
  const response = await customFetch(`${url}/${params.id}`);
  const product = response.data;
  return product;
};

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // return null;
  try {
    const response = await customFetch.patch(`${url}/${params.id}`, data);
    toast.success("item is updated successfully");

    return redirect(`/products/${params.id}`);
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      "please double check your credentials";
    console.log(errorMessage);
    toast.error(errorMessage);

    return null;
  }
};

const UpdateProduct = () => {
  const product = useLoaderData();
  const {
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
  } = product;

  return (
    <div>
      <MainPageTitle
        mainPage="Product Edit"
        headPageName="Products"
        headPageUrl="/products"
      />{" "}
      <Form method="POST">
        <header>
          <h4>{description}</h4>
        </header>
        <section
          className="updateBody  p-3 rounded mb-1"
          style={{ backgroundColor: "brown" }}
        >
          <FormInput
            type="text"
            label="description"
            name="description"
            defaultValue={description}
          />
          <FormInput
            type="text"
            label="productType"
            name="productType"
            defaultValue={productType}
          />
          <FormInput
            type="text"
            label="scientificName"
            name="scientificName"
            defaultValue={scientificName}
          />
          <FormInput
            type="text"
            label="marketingCompany"
            name="marketingCompany"
            defaultValue={marketingCompany}
          />
          <FormInput
            type="text"
            label="publicPrice"
            name="publicPrice"
            defaultValue={publicPrice}
          />
          <FormInput type="text" label="use" name="use" defaultValue={use} />
          <FormInput type="text" label="use" name="use1" defaultValue={use1} />
          <FormInput
            type="text"
            label="picLink"
            name="picLink"
            defaultValue={picLink}
          />
          <FormInput
            type="text"
            label="strength"
            name="strength"
            defaultValue={strength}
          />
          <FormInput
            type="text"
            label="strengthUnit"
            name="strengthUnit"
            defaultValue={strengthUnit}
          />
          <FormInput
            type="text"
            label="parts"
            name="parts"
            defaultValue={parts}
          />
          <FormInput type="text" label="size" name="size" defaultValue={size} />
          <FormInput
            type="text"
            label="sizeUnit"
            name="sizeUnit"
            defaultValue={sizeUnit}
          />
          <FormInput
            type="text"
            label="companyCategory1"
            name="companyCategory1"
            defaultValue={companyCategory1}
          />
          <FormInput
            type="text"
            label="companyCategory2"
            name="companyCategory2"
            defaultValue={companyCategory2}
          />
          <FormInput
            type="text"
            label="compProType"
            name="compProType"
            defaultValue={compProType}
          />
          <FormInput
            type="text"
            label="usedArea1"
            name="usedArea1"
            defaultValue={usedArea1}
          />
          <FormInput
            type="text"
            label="usedArea2"
            name="usedArea2"
            defaultValue={usedArea2}
          />
          <FormInput
            type="text"
            label="intBarcode"
            name="intBarcode"
            defaultValue={intBarcode}
          />
          <FormInput
            type="text"
            label="intBarcode"
            name="intBarcode1"
            defaultValue={intBarcode1}
          />
          {/*bolean */}
          <li
            className="list-group-item d-flex "
            style={{ backgroundColor: "mediumseagreen" }}
          >
            {wasfaty ? (
              // if wasfaty
              <div className="d-flex">
                <FormCheckInput
                  // name="wasfaty"
                  defaultChecked="checked"
                  disabled="disabled"
                  name1="wasfaty item"
                />{" "}
                <FormCheckInput
                  name="wasfaty"
                  name1="delete from wasfaty items"
                  value="false"
                />
              </div>
            ) : (
              // if not wasfaty
              <FormCheckInput name="wasfaty" name1="wasfaty" value="true" />
            )}
          </li>
          <li
            className="list-group-item d-flex "
            style={{ backgroundColor: "mediumseagreen" }}
          >
            {list ? (
              // if list
              <div className="d-flex">
                <FormCheckInput
                  // name="wasfaty"
                  defaultChecked="checked"
                  disabled="disabled"
                  name1="list item"
                />{" "}
                <FormCheckInput
                  name="list"
                  name1="delete from list items"
                  value="false"
                />
              </div>
            ) : (
              // if not wasfaty
              <FormCheckInput name="list" name1="list" value="true" />
            )}
          </li>
          <li
            className="list-group-item d-flex "
            style={{ backgroundColor: "mediumseagreen" }}
          >
            {vitamine ? (
              // if vitamine
              <div className="d-flex">
                <FormCheckInput
                  // name="vitamine"
                  defaultChecked="checked"
                  disabled="disabled"
                  name1="vitamine item"
                />{" "}
                <FormCheckInput
                  name="vitamine"
                  name1="delete from vitamine items"
                  value="false"
                />
              </div>
            ) : (
              // if not vitamine
              <FormCheckInput name="vitamine" name1="vitamine" value="true" />
            )}
          </li>
          {/*skinkind */}
          <li
            className="list-group-item d-flex "
            style={{ backgroundColor: "mediumseagreen" }}
          >
            {drySkin ? (
              // if drySkin
              <div className="d-flex">
                <FormCheckInput
                  // name="drySkin"
                  defaultChecked="checked"
                  disabled="disabled"
                  name1="drySkin item"
                />{" "}
                <FormCheckInput
                  name="drySkin"
                  name1="delete from drySkin items"
                  value="false"
                />
              </div>
            ) : (
              // if not drySkin
              <FormCheckInput name="drySkin" name1="drySkin" value="true" />
            )}
          </li>
          <li
            className="list-group-item d-flex "
            style={{ backgroundColor: "mediumseagreen" }}
          >
            {sensitiveSkin ? (
              // if sensitiveSkin
              <div className="d-flex">
                <FormCheckInput
                  // name="sensitiveSkin"
                  defaultChecked="checked"
                  disabled="disabled"
                  name1="sensitiveSkin item"
                />{" "}
                <FormCheckInput
                  name="sensitiveSkin"
                  name1="delete from sensitiveSkin items"
                  value="false"
                />
              </div>
            ) : (
              // if not sensitiveSkin
              <FormCheckInput
                name="sensitiveSkin"
                name1="sensitiveSkin"
                value="true"
              />
            )}
          </li>
          <li
            className="list-group-item d-flex "
            style={{ backgroundColor: "mediumseagreen" }}
          >
            {normalSkin ? (
              // if normalSkin
              <div className="d-flex">
                <FormCheckInput
                  // name="normalSkin"
                  defaultChecked="checked"
                  disabled="disabled"
                  name1="normalSkin item"
                />{" "}
                <FormCheckInput
                  name="normalSkin"
                  name1="delete from normalSkin items"
                  value="false"
                />
              </div>
            ) : (
              // if not normalSkin
              <FormCheckInput
                name="normalSkin"
                name1="normalSkin"
                value="true"
              />
            )}
          </li>
          <li
            className="list-group-item d-flex "
            style={{ backgroundColor: "mediumseagreen" }}
          >
            {oilySkin ? (
              // if oilySkin
              <div className="d-flex">
                <FormCheckInput
                  // name="oilySkin"
                  defaultChecked="checked"
                  disabled="disabled"
                  name1="oilySkin item"
                />{" "}
                <FormCheckInput
                  name="oilySkin"
                  name1="delete from oilySkin items"
                  value="false"
                />
              </div>
            ) : (
              // if not oilySkin
              <FormCheckInput name="oilySkin" name1="oilySkin" value="true" />
            )}
          </li>
          <li
            className="list-group-item d-flex "
            style={{ backgroundColor: "mediumseagreen" }}
          >
            {combinationSkin ? (
              // if combinationSkin
              <div className="d-flex">
                <FormCheckInput
                  // name="combinationSkin"
                  defaultChecked="checked"
                  disabled="disabled"
                  name1="combinationSkin item"
                />{" "}
                <FormCheckInput
                  name="combinationSkin"
                  name1="delete from combinationSkin items"
                  value="false"
                />
              </div>
            ) : (
              // if not combinationSkin
              <FormCheckInput
                name="combinationSkin"
                name1="combinationSkin"
                value="true"
              />
            )}
          </li>
          <li
            className="list-group-item d-flex "
            style={{ backgroundColor: "mediumseagreen" }}
          >
            {atopicSkin ? (
              // if atopicSkin
              <div className="d-flex">
                <FormCheckInput
                  // name="atopicSkin"
                  defaultChecked="checked"
                  disabled="disabled"
                  name1="atopicSkin item"
                />{" "}
                <FormCheckInput
                  name="atopicSkin"
                  name1="delete from atopicSkin items"
                  value="false"
                />
              </div>
            ) : (
              // if not wasfaty
              <FormCheckInput
                name="atopicSkin"
                name1="atopicSkin"
                value="true"
              />
            )}
          </li>
          <li
            className="list-group-item d-flex "
            style={{ backgroundColor: "mediumseagreen" }}
          >
            {aknePoreSkin ? (
              // if aknePoreSkin
              <div className="d-flex">
                <FormCheckInput
                  // name="aknePoreSkin"
                  defaultChecked="checked"
                  disabled="disabled"
                  name1="aknePoreSkin item"
                />{" "}
                <FormCheckInput
                  name="aknePoreSkin"
                  name1="delete from aknePoreSkin items"
                  value="false"
                />
              </div>
            ) : (
              // if not aknePoreSkin
              <FormCheckInput
                name="aknePoreSkin"
                name1="aknePoreSkin"
                value="true"
              />
            )}
          </li>
          <li
            className="list-group-item d-flex "
            style={{ backgroundColor: "mediumseagreen" }}
          >
            {hyperpigmentedSkin ? (
              // if hyperpigmentedSkin
              <div className="d-flex">
                <FormCheckInput
                  // name="hyperpigmentedSkin"
                  defaultChecked="checked"
                  disabled="disabled"
                  name1="hyperpigmentedSkin item"
                />{" "}
                <FormCheckInput
                  name="hyperpigmentedSkin"
                  name1="delete from hyperpigmentedSkin items"
                  value="false"
                />
              </div>
            ) : (
              // if not wasfaty
              <FormCheckInput
                name="hyperpigmentedSkin"
                name1="hyperpigmentedSkin"
                value="true"
              />
            )}
          </li>
          <li
            className="list-group-item d-flex "
            style={{ backgroundColor: "mediumseagreen" }}
          >
            {flushedSkin ? (
              // if flushedSkin
              <div className="d-flex">
                <FormCheckInput
                  // name="flushedSkin"
                  defaultChecked="checked"
                  disabled="disabled"
                  name1="flushedSkin item"
                />{" "}
                <FormCheckInput
                  name="flushedSkin"
                  name1="delete from flushedSkin items"
                  value="false"
                />
              </div>
            ) : (
              // if not flushedSkin
              <FormCheckInput
                name="flushedSkin"
                name1="flushedSkin"
                value="true"
              />
            )}
          </li>
          <li
            className="list-group-item d-flex "
            style={{ backgroundColor: "mediumseagreen" }}
          >
            {irritatedSkin ? (
              // if irritatedSkin
              <div className="d-flex">
                <FormCheckInput
                  // name="irritatedSkin"
                  defaultChecked="checked"
                  disabled="disabled"
                  name1="irritatedSkin item"
                />{" "}
                <FormCheckInput
                  name="irritatedSkin"
                  name1="delete from irritatedSkin items"
                  value="false"
                />
              </div>
            ) : (
              // if not irritatedSkin
              <FormCheckInput
                name="irritatedSkin"
                name1="irritatedSkin"
                value="true"
              />
            )}
          </li>
          <li
            className="list-group-item d-flex "
            style={{ backgroundColor: "mediumseagreen" }}
          >
            {damagedSkin ? (
              // if damagedSkin
              <div className="d-flex">
                <FormCheckInput
                  // name="damagedSkin"
                  defaultChecked="checked"
                  disabled="disabled"
                  name1="damagedSkin item"
                />{" "}
                <FormCheckInput
                  name="damagedSkin"
                  name1="delete from damagedSkin items"
                  value="false"
                />
              </div>
            ) : (
              // if not damagedSkin
              <FormCheckInput
                name="damagedSkin"
                name1="damagedSkin"
                value="true"
              />
            )}
          </li>
        </section>
        <section className="optioms">
          <SubmitBtn text="Update" />
        </section>
      </Form>
    </div>
  );
};

export default UpdateProduct;
