import React from "react";
import { Left } from "./Navbar";
import styled from "styled-components";
import guitar from "../images/guitar_1.png";
import guitar2 from "../images/guitar_2.png";
import guitar3 from "../images/guitar_3.png";
import guitar4 from "../images/bass_1.png";
import guitar5 from "../images/accoustic_1.png";
import guitar6 from "../images/strat_1.png";
import Image from "next/image";

const CheckOut = () => {
  return (
    <div className="container mx-auto">
      <top className="flex justify-center pt-40">
        <h1 className="font-[600] text-[44px] text-4xl md:text-[44px] text-white">
          Check out the <span className="text-[#ff6428]">Store</span>
        </h1>
      </top>
      <bot className="flex justify-between mt-24 items-center">
        <h2 className=" text-xl font-[600] text-white">NEW ON THE BOARD</h2>
        <p className="text-white">view all</p>
      </bot>
      <div className=" mt-8 justify-center gap-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:flex xl:justify-between">
        <div className=" m-auto md:m-0">
          <Image className="bg-white rounded" src={guitar}></Image>
        </div>
        <div className=" m-auto md:m-0">
          <Image className="bg-white rounded" src={guitar2}></Image>
        </div>
        <div className=" m-auto md:m-0">
          {" "}
          <Image className="bg-white rounded" src={guitar3}></Image>
        </div>
      </div>
      <bot2 className="flex items-center mt-24 justify-between">
        <h2 className="  text-xl font-[600] text-white">TOP SELLING</h2>
        <p className="text-white">view all</p>
      </bot2>
      <div className=" mt-8 justify-center gap-5 grid grid-cols-1 md:grid-cols-2  xl:flex xl:justify-between self-auto">
        <div className="m-auto md:m-0">
          <Image className="bg-white rounded " src={guitar4}></Image>
        </div>
        <div className="m-auto md:m-0">
          <Image className="bg-white rounded" src={guitar5}></Image>
        </div>
        <div className="m-auto md:m-0">
          {" "}
          <Image className="bg-white rounded" src={guitar6}></Image>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
