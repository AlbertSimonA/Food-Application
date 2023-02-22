import React from "react";
import HeaderComponent from "./HeaderComponent";
import Body from "./Body";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <div>
      <HeaderComponent />
      <Body />
      <Footer />
    </div>
  );
};

export default AppLayout;
