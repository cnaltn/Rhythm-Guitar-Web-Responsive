import React from "react";
import cate1 from "../images/cate_1.png";
import cate2 from "../images/cate_2.png";
import cate3 from "../images/cate_3.png";
import cate4 from "../images/cate_4.png";
import brands from "../images/brands.png";
import Image from "next/image";

const Categories = () => {
  return (
    <div className="container mx-auto pt-[180px]">
      <top className=" ">
        <h1 className="text-white text-4xl md:text-[44px] font-semibold text-center">
          Choose based on <span className="text-[#ff6428]">Categories</span>
        </h1>
      </top>
      <bottom className="justify-center grid grid-cols-1 m-auto gap-5 md:gap-10 md:grid-cols-3 w-max xl:w-full xl:flex xl:gap-x-[69px] mt-10 md:mt-20">
        <Image className="" src={cate1}></Image>
        <Image src={cate2}></Image>
        <Image src={cate3}></Image>
        <Image src={cate4}></Image>
      </bottom>
      <brands className="flex justify-center pt-40">
        <top>
          <h1 className="text-center mb-20 text-4xl md:text-[44px] text-white font-semibold text-[44px]">
            Featuring the <span className="text-[#ff6428]">Best Brands</span>
          </h1>
          <Image className="" src={brands}></Image>
        </top>
      </brands>
    </div>
  );
};

export default Categories;
