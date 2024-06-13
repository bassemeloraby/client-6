import React, { Fragment } from "react";

import dose2 from "../assets/images/medicineImage/dose2.jpeg";
import dose3 from "../assets/images/medicineImage/dose3.jpeg";
import { Tot } from "../components";
import { Link } from "react-router-dom";

const Calc = () => {
  return (
    <Fragment>
      <div className="container">
        <Tot />

        <section className="home">
          <section className="home-header">
            <h2 className="">Welcome to my med-calc</h2>
          </section>
          <h3 className="text-danger">20 drops</h3>
          <p>
            Yes, there are approximately 20 drops in 1 mL (milliliter). One
            milliliter is equal to 0.20 teaspoons or 0.06 fluid ounces and can
            be used to measure small amounts of medical solutions like
            medications. It's important to remember that the exact measurement
            may vary depending on how many drops your dropper contains.
          </p>
          <hr></hr>
          <div>
            {" "}
            <h3 className="text-danger">Weight calc</h3>
            <div>
              <img src={dose2} alt="dose2"></img>
            </div>
            <div>
              <img src={dose3} alt="dose3"></img>
            </div>
          </div>
        </section>
      </div>
      <div>
        <Link
          to="https://sfda.gov.sa/en/paracetamol-calculator"
          target="_blank"
          rel="noopener noreferrer"
        >
          paracetamol
        </Link>
      </div>
    </Fragment>
  );
};

export default Calc;
