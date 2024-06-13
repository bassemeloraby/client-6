import { removeItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import noPhoto from "../assets/images/noPhoto.jpg";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const removeItemFromTheCart = () => {
    dispatch(removeItem({ productID }));
    console.log(productID);
  };

  const {
    productID,
    description,
    publicPrice,
    scientificName,
    marketingCompany,
  } = cartItem;

  return (
    <article key={productID} className="d-lg-flex mb-1 rounded justify-content-between" style={{backgroundColor:"brown"}}>
      {/* IMAGE */}
      <div className="pic d-flex justify-content-center d-lg-block  col-lg-2 p-2">
        <img src={noPhoto} alt={description} className="col-11  rounded" />
      </div>

      {/* INFO */}
      <div className="text-light p-2 p-lg-0">
        {/* TITLE */}
        <h3 className="">{description}</h3>
        {/* COMPANY */}
        <h4 className="">{marketingCompany}</h4>
        <h4 className="">{scientificName}</h4>
        <h4 className="">{publicPrice} SR</h4>
      </div>
      <div className="">
        {/* REMOVE */}
        <button className="btn btn-dark m-1" onClick={removeItemFromTheCart}>
          remove
        </button>
      </div>
    </article>
  );
};
export default CartItem;
