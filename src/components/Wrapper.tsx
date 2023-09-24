import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface IWrapperProps {
  children: any;
}

const Wrapper = ({ children }: IWrapperProps) => {
  return (
    <div>
      <div id="navbar">
        <Navbar />
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default Wrapper;
