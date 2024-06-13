import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { Header, Loading, Navbar1 } from "../components";
import { useSelector } from "react-redux";
import IdleTimerContainer from "../components/IdleTimerContainer";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  const { user } = useSelector((state) => state.auth);
  window.onbeforeunload = function () {
    localStorage.removeItem("user");
  };

  return (
    <div>
    <Header/>
      <Navbar1 />
      {isPageLoading ? (
        <Loading />
      ) : (
        <div className="container">
        {user && <IdleTimerContainer></IdleTimerContainer>}
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default HomeLayout;
