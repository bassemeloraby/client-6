import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { editList } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import Modal from "react-modal";

const url = "/specialArrays";

const ListsList = ({ listsCount, setlistsCount }) => {
  const { lists } = useLoaderData();
  const dispatch = useDispatch();

  // const [descriptionFilter, setDescriptionFilter] = useState("");
  const [items, setItems] = useState(lists);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  console.log(items);

  const deleteSpecialAr = async () => {
    console.log(deleteId);
    const response = await customFetch.delete(`${url}/${deleteId}`);
    setItems(items.filter((list) => list._id !== deleteId));
    console.log(items);
    setlistsCount(listsCount - 1);
    setModalIsOpen(!modalIsOpen);
    toast.success("Successfully deleted");
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const openModalHandler = (id) => {
    console.log(id);
    setModalIsOpen(!modalIsOpen);
    setDeleteId(id);
  };

  return (
    <div className="mt-8">
      <h4 className="mb-4 capitalize">total lists : {listsCount}</h4>
      <Modal isOpen={modalIsOpen} style={customStyles}>
        <h2> Are you want to delete ?</h2>
        <section className="options d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark btn-sm"
            onClick={() => setModalIsOpen(!modalIsOpen)}
          >
            No
          </button>
          <button
            onClick={() => deleteSpecialAr()}
            className="btn btn-danger btn-sm"
          >
            yes
          </button>
        </section>
      </Modal>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>createdAt</th>
              <th>updatedAt</th>
              <th>options</th>
            </tr>
          </thead>
          <tbody>
            {items.map((li, i) => {
              const { _id, Description, updatedAt, createdAt } = li;
              return (
                <tr key={i}>
                  <td>
                    <Link to={`${_id}`}>{Description}</Link>
                  </td>
                  <td>{createdAt}</td>
                  <td>{updatedAt}</td>
                  <td>
                    {" "}
                    <button
                      type="button"
                      className="btn  btn-outline-danger btn-sm me-2"
                      onClick={() => openModalHandler(li._id)}
                    >
                      Delete
                    </button>
                    <Link
                      to="/Cart"
                      onClick={() => dispatch(editList(li))}
                      className="btn btn-outline-dark btn-sm"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListsList;
