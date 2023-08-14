import React from "react";
import Navbar from "./Navbar";

interface IWrapperProps {
  children: any;
}

const Wrapper = ({ children }: IWrapperProps) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Wrapper;
