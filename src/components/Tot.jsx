import React, { useState, useRef } from "react";
import Table from "react-bootstrap/Table";
import { takeScreenShot } from "../utils/TakeScreenShot";
import { useReactToPrint } from "react-to-print";

const Tot = () => {
  const [master, setMaster] = useState(0);
  const [master1, setMaster1] = useState(0);
  const [master2, setMaster2] = useState(0);
  const [master3, setMaster3] = useState(0);
  const [span, setSpan] = useState(0);
  const [visa, setVisa] = useState(0);
  const [insurance, setInsurance] = useState(0);
  const [tot, setTot] = useState(0);
  const bank =
    parseInt(master) +
    parseInt(master1) +
    parseInt(master2) +
    parseInt(master3) +
    parseInt(span) +
    parseInt(visa);
  const [vat, setVat] = useState(0);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const clear = () => {
    setMaster(0);
    setMaster1(0);
    setMaster2(0);
    setMaster3(0);
    setSpan(0);
    setVisa(0);
    setInsurance(0);
    setTot(0);
    setVat(0);
  };

  const captureScreenShot = () => {
    takeScreenShot("capDiv", "MyImage", "image/jpeg", "#f5f5f5");
  };

  return (
    <div className="mt-2">
      <section className="1 col-3 me-2">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Master</td>
              <td>
                <input
                  value={master}
                  onChange={(e) => setMaster(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Master1</td>
              <td>
                <input
                  value={master1}
                  onChange={(e) => setMaster1(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Master2</td>
              <td>
                <input
                  value={master2}
                  onChange={(e) => setMaster2(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Master3</td>
              <td>
                <input
                  value={master3}
                  onChange={(e) => setMaster3(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Span</td>
              <td>
                {" "}
                <input value={span} onChange={(e) => setSpan(e.target.value)} />
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Visa</td>
              <td>
                <input value={visa} onChange={(e) => setVisa(e.target.value)} />
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Bank</td>
              <td className="text-center">
                <h3 className="border bg-warning"> {bank}</h3>
              </td>
            </tr>
          </tbody>
        </table>{" "}
      </section>

      <section
        className="2  col-6 rounded border border-5 border-primary text-center"
        id="capDiv"
      >
        {" "}
        <Table striped hover ref={componentRef}>
          <thead className="">
            <tr className="border border-dark">
              <th>Kind</th>
              <th>
                <input aria-label="Date" type="date" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border border-dark">
              <td>Cash :</td>
              <td><h5>{tot - (parseInt(bank) + parseInt(insurance))}</h5></td>
            </tr>
            <tr className="border border-dark">
              <td>Span :</td>
              <td>
                <h5 className="border">{bank}</h5>
              </td>
            </tr>
            <tr className="border border-dark">
              <td>Insurance </td>
              <td>
                <input
                  value={insurance}
                  onChange={(e) => setInsurance(e.target.value)}
                  className="text-center fs-5"
                />
              </td>
            </tr>
            <tr className="border border-dark">
              <td>Tot </td>
              <td>
                <input
                  value={tot}
                  onChange={(e) => setTot(e.target.value)}
                  className="text-center fs-5"
                />
              </td>
            </tr>
            <tr className="border border-dark">
              <td>Vat </td>
              <td>
                <input
                  value={vat}
                  onChange={(e) => setVat(e.target.value)}
                  className="text-center fs-5 "
                />
              </td>
            </tr>
            <tr className="border border-dark">
              <td>Tot - Vat :</td>
              <td>
                <h5>{tot - vat} </h5>
              </td>
            </tr>
          </tbody>
        </Table>
        <button onClick={clear} className="bg-danger">
          clear
        </button>
        <button onClick={captureScreenShot}>screenshot</button>
        <button onClick={handlePrint}>Print this out!</button>
      </section>
    </div>
  );
};

export default Tot;
