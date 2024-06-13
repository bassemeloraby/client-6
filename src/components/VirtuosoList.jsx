import React from "react";
import { Link } from "react-router-dom";
import { Virtuoso } from "react-virtuoso";
import AdminBar from "./AdminBar";
import { useSelector } from "react-redux";

const VirtuosoList = ({ items }) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <section className="">
        {items.length} product{items.length > 1 && "s"}
      </section>

      <Virtuoso
        style={{ height: "600px", background: "#f8f8f8" }}
        data={items}
        totalCount={13000}
        itemContent={(index, drug) => (
          <div
            style={{
              background: index % 2 === 0 ? "#ffbb00" : "#ffcc99",
              color: "#333",
              padding: "10px",
              fontSize: "16px",
              fontFamily: "Arial, sans-serif",
              border: "1px solid #ccc",
              borderRadius: "5px",
              margin: "5px 0",
            }}
            className="d-flex justify-content-between"
          >
            <div>
              <Link to={`/products/${drug._id}`}>
                <h6 className="text-danger">
                  {drug.description} {drug.strength} {drug.strengthUnit}
                </h6>
              </Link>
              <Link to={`/scientific/${drug.scientificName}`}>
                {" "}
                <h6>{drug.scientificName} </h6>
              </Link>

              <h6>{drug.publicPrice} SR </h6>
              <Link
                className="text-success"
                to={`/icd10/${drug.scientificName}`}
              >
                Indicaions (icd 10)
              </Link>
            </div>
            {user && (
              <div>
                <AdminBar id={drug._id} contents={items} />
              </div>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default VirtuosoList;
