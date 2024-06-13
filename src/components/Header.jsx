import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logout, reset } from "../features/auth/authReducer";
import { HiOutlineLogin, HiOutlineLogout } from "react-icons/hi";
import { BsCart3 } from "react-icons/bs";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const { numItemsInCart, oldListName } = useSelector(
    (state) => state.cartState
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <header className="d-flex justify-content-between">
      {/*------start Cart ---------- */}
      {user && (
        <NavLink
          to="/cart"
          className="btn me-2 border bg-warning p-2 rounded-1"
        >
          <div className=" d-flex">
            <section>
              <BsCart3 className="" />
              <span className="badge badge-sm badge-primary indicator-item">
                {numItemsInCart}
              </span>
            </section>
            <span>{oldListName}</span>
          </div>
        </NavLink>
      )}
      {/*------end Cart ---------- */}

      {/**------start sign--------- */}
      <div className="bg-warning rounded p-1">
        <span className="fs-5 me-1">
          {user ? "Hello Bassem" : "Hello Guest"}
        </span>
        {user ? (
          <HiOutlineLogout
            onClick={onLogout}
            style={{ cursor: "pointer" }}
            className="fs-5"
          />
        ) : (
          <HiOutlineLogin
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/login")}
          />
        )}
      </div>
      {/**------end sign--------- */}
    </header>
  );
};

export default Header;
