import React from "react";
import { customFetch } from "../utils";
import { useLoaderData } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { MainPageTitle } from "../components";

const url = "/indications";

export const loader = async ({ params }) => {
  const response = await customFetch(
    `${url}?scientificName=${params.scientificName}`
  );
  console.log(params.scientificName);
  const productIndication = response.data;
  console.log(productIndication);
  return { productIndication, scientificName: params.scientificName };
};

const Icd10 = () => {
  const { productIndication, scientificName } = useLoaderData();
  return (
    <div>
      <header>
      <MainPageTitle mainPage="Icd10"/>
        <h3>{scientificName} ({productIndication.length})</h3>
      </header>
      <section>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className="d-none d-sm-block">#</th>
              <th>INDICATION</th>
              <th>ICD 10 CODE</th>
              <th>PHARMACEUTICAL FORM</th>
            </tr>
          </thead>
          <tbody>
            {productIndication.map((drug, index) => (
              <tr key={index}>
                <td className="d-none d-sm-block">{index + 1}</td>
                <td>{drug.INDICATION}</td>
                <td> {drug.ICD_10_CODE}</td>
                <td> {drug.PHARMACEUTICAL_FORM}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </section>
    </div>
  );
};

export default Icd10;
