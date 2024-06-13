import React from "react";
import { Form, Link, useLoaderData } from "react-router-dom";
import SubmitBtn from "./formInputs/SubmitBtn";
import FormDtalistInput from "./formInputs/FormDtalistInput";
import FormCheckInput from "./formInputs/FormCheckInput";
import { useSelector } from "react-redux";

const FilterSection = ({ params }) => {
  const { mCompany, sName , pType} = useLoaderData();
  const { marketingCompany, scientificName ,productType} = params;
  const { user } = useSelector((state) => state.auth);
  console.log(params);
  console.log(marketingCompany);
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
    <Form style={{ backgroundColor: "brown" }} className="p-1 m-1 rounded">
      <h6 className="m-1 text-light">Filter</h6>
      <FormDtalistInput
        name="productType"
        label="Product Type "
        type="text"
        size="input-sm"
        listDB={pType}
        defaultValue={productType}
        // onInput={(e) => setMarketingCompanyFilter(e.target.value)}
        list="ProductType"
      />
      <FormDtalistInput
        name="marketingCompany"
        label="Marketing Company"
        type="text"
        size="input-sm"
        listDB={mCompany}
        defaultValue={marketingCompany}
        // onInput={(e) => setMarketingCompanyFilter(e.target.value)}
        list="MarketingCompany"
      />

      <FormDtalistInput
        name="scientificName"
        label="Scientific Name"
        type="text"
        size="input-sm"
        listDB={sName}
        defaultValue={scientificName}
        // onInput={(e) => setMarketingCompanyFilter(e.target.value)}
        list="ScientificName"
      />

      {formCheckItems.map((f, i) => {
        if ((f === "wasfaty" || f === "list") && !user) return null;
        return <FormCheckInput key={i} name={f} value="true" name1={f} />;
      })}

      <SubmitBtn text="Search" size="btn-sm" />
      <Link to="/filterProducts" className="btn btn-primary btn-sm ms-1">
        Reset
      </Link>
    </Form>
  );
};

export default FilterSection;
