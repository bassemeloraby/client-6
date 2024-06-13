import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect, useState } from "react";
import FormInput from "./formInputs/FormInput";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import { clearCart } from "../features/cart/cartSlice";
import CartItem from "./CartItem";
import ExportToExcel from "./ExportToExcel";
import { useNavigate } from "react-router-dom";

const url = "/specialArrays";

const CartItemsList = () => {
  const { cartItems, oldListName, list_id } = useSelector(
    (state) => state.cartState
  );
  const [items, setItems] = useState(cartItems);
  const [listName, setListName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const saveSpecialAr = async () => {
    console.log(listName);
    if (!listName) {
      toast.error("please provide a list name");
    }
    const specialArraysData = { Description: listName, content: cartItems };
    try {
      const response = await customFetch.post(url, specialArraysData);
      const mainRes = response.data;

      toast.success("list is saved successfully");
      console.log(mainRes);
      console.log(response);
      navigate("/lists");
    } catch (error) {
      console.log(error.response.data);
      toast.error(error.response.data);
    }
  };

  const clearHandler = () => {
    dispatch(clearCart());
    setItems([]);
  };

  const updateSpecialAr = async () => {
    try {
       await customFetch.patch(`${url}/${list_id}`, {
        content: cartItems,
      });
      toast.success("list is updated successfully");
    } catch (error) {
      toast.error("list is not updated");
    }
  };

  useEffect(() => {
    setItems(cartItems);
  }, [cartItems]);

  return (
    <Fragment>
      {items.length > 0 && (
        <div className="mb-8 px-8 py-4">
          <FormInput
            label="Name of the list"
            type="text"
            size="input-sm mb-8"
            onChange={(e) => setListName(e.target.value)}
            defaultValue={oldListName}
          />
          <div className="d-flex">
            <button onClick={saveSpecialAr} className="btn btn-warning  me-2">
              save
            </button>
            <button onClick={clearHandler} className="btn btn-primary  me-2">
              clear
            </button>
            <button onClick={updateSpecialAr} className="btn btn-info me-2">
              update
            </button>
            <ExportToExcel apiData={cartItems} fileName="cart" />
          </div>
        </div>
      )}
      {items.length > 0 ? (
        <div className="">
          {items.map((item, i) => {
            return <CartItem key={i} cartItem={item} />;
          })}
        </div>
      ) : (
        "Cart is empty now"
      )}
    </Fragment>
  );
};

export default CartItemsList;
