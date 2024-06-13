import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { takeScreenShot } from "../utils/TakeScreenShot";

const Calc5 = () => {
  const [bank, setBank] = useState([]);
  
  const [addNumber, setAddNumber] = useState(0);
  const [totalBank, setTotalBank] = useState(0);
  const [total1, setTotal1] = useState(0);
  const [total2, setTotal2] = useState(0);
  // const [total, setTotal] = useState(total1 + total2);
  const total = parseInt(total1) + parseInt(total2);
  const [insurance1, setInsurance1] = useState(0);
  const [insurance2, setInsurance2] = useState(0);
  const insurance = parseInt(insurance1) + parseInt(insurance2);
  const [vat1, setVat1] = useState(0);
  const [vat2, setVat2] = useState(0);
  const vat = parseInt(vat1) + parseInt(vat2);

  const DelNumber = ({ i, b }) => {
    console.log(i);
    console.log(b.id);
    bank.splice(i, 1);
    console.log(bank);
    setBank(bank.filter((m) => m.id !== b.id));
    setTotalBank(totalBank - b.number);
  };

  const addHandlers = () => {
    console.log("add");
    // const addbank = parseInt(addNumber);
    bank.push({ id: Math.random(), number: parseInt(addNumber) });
    // const sum = bank.reduce((accumulator, current) => accumulator + current);

    console.log(bank);
    // console.log(sum);
    setTotalBank(totalBank + parseInt(addNumber));
  };

  const clear = () => {
    setBank([]);
    setInsurance1(0);
    setInsurance2(0);
    setTotal1(0);
    setTotal2(0);
    setVat1(0);
    setVat2(0);
  };
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const captureScreenShot = () => {
    takeScreenShot("capDiv", "MyImage", "image/jpeg", "#f5f5f5");
  };

  return (
    <section className="container">
      <div>
        <input
          type="number"
          onChange={(e) => setAddNumber(e.target.value)}
          defaultValue={addNumber}
        />
        <button className="btn btn-primary btn-sm m-1" onClick={addHandlers}>
          +
        </button>
        <h2 style={{ backgroundColor: "yellow" }}> Bank :{totalBank}</h2>
      </div>
      <div className="">
        {bank.map((b, i) => {
          return (
            <h4 key={i}>
              {b.number}{" "}
              <button
                className="btn btn-danger btn-sm"
                onClick={() => DelNumber({ i, b })}
              >
                -
              </button>
            </h4>
          );
        })}
      </div>
      {/*  */}

      <table className="table table-hover table-bordered">
        <thead className="">
          <tr className="">
            <th>Kind</th>
            <th>Comp 1</th>
            <th>Comp 2</th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <td>Insurance </td>
            <td>
              <input
                value={insurance1}
                onChange={(e) => setInsurance1(e.target.value)}
                className="text-center fs-5"
              />
            </td>
            <td>
              <input
                value={insurance2}
                onChange={(e) => setInsurance2(e.target.value)}
                className="text-center fs-5"
              />
            </td>
          </tr>
          <tr className="">
            <td>Tot </td>
            <td>
              <input
                value={total1}
                onChange={(e) => setTotal1(e.target.value)}
                className="text-center fs-5"
              />
            </td>
            <td>
              <input
                value={total2}
                onChange={(e) => setTotal2(e.target.value)}
                className="text-center fs-5"
              />
            </td>
          </tr>
          <tr className="">
            <td>Vat </td>
            <td>
              <input
                value={vat1}
                onChange={(e) => setVat1(e.target.value)}
                className="text-center fs-5 "
              />
            </td>
            <td>
              <input
                value={vat2}
                onChange={(e) => setVat2(e.target.value)}
                className="text-center fs-5 "
              />
            </td>
          </tr>
        </tbody>
      </table>
      {/* -------------------start table to print ---------------*/}
      <table
        className="table table-hover border-primary table-bordered"
        ref={componentRef}
        id="capDiv"
      >
        <thead className="">
          <tr className="">
            <th className="text-center">Kind</th>
            <th className="text-center">
              <input aria-label="Date" type="date" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <td className="text-center fs-5">Cash</td>
            <td className="text-center fs-5">
              {total - (parseInt(insurance) + parseInt(totalBank))}
            </td>
          </tr>
          <tr className="">
            <td className="text-center fs-5">Span</td>
            <td className="text-center fs-5">{totalBank}</td>
          </tr>
          <tr className="">
            <td className="text-center fs-5">Insurance</td>
            <td className="text-center fs-5">{insurance} </td>
          </tr>
          <tr className="">
            <td className="text-center fs-5">total </td>
            <td className="text-center fs-5">{total} </td>
          </tr>
          <tr className="">
            <td className="text-center fs-5">Vat </td>
            <td className="text-center fs-5">{vat} </td>
          </tr>
          <tr className="">
            <td className="text-center fs-5">total - vat </td>
            <td className="text-center fs-5">{total - vat} </td>
          </tr>
        </tbody>
      </table>
      <div className="option mb-2">
        <button onClick={clear} className="btn btn-sm btn-outline-danger ">
          clear
        </button>
        <button
          className="btn btn-sm btn-outline-success m-1"
          onClick={captureScreenShot}
        >
          screenshot
        </button>
        <button
          className="btn btn-sm btn-outline-warning "
          onClick={handlePrint}
        >
          Print this out!
        </button>
      </div>
    </section>
  );
};

export default Calc5;
