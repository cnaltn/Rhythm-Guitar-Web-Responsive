import React from "react";
import Categories from "../components/Categories";
import CheckOut from "../components/CheckOut";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Why from "../components/Why";

const index = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <CheckOut></CheckOut>
      <Categories></Categories>
      <Why></Why>
      <Footer></Footer>
    </div>
  );
};

export default index;
