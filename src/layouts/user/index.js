import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const UserLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default UserLayout;
