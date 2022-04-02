import React from "react";
import { GrAppsRounded } from "react-icons/gr";
import Image from "next/image";
import icon1 from "../images/icon_1.svg";
import icon2 from "../images/icon_2.svg";
import icon3 from "../images/icon_3.svg";
import customer_1 from "../images/customer_1.svg";
import app from "../images/app.svg";
import app_store from "../images/app_store.svg";
import apple_app from "../images/apple_app.svg";

const Why = () => {
  return (
    <section className="  h-max mt-44">
      <div className=" bg-white h-[508px] ">
        <h1 className="text-black bg-transparent text-4xl container mx-auto font-semibold text-center justify-center md:text-[44px] pt-24">
          Why try<span className="bg-transparent text-[#ff6428]"> Rhythm?</span>
        </h1>
        <bottombig className="flex bg-transparent pt-12 md:pt-[75px] container mx-auto justify-between">
          <bottom className="bg-transparent">
            {/* <GrAppsRounded className=" m-auto text-5xl p-2 rounded-xl bg-[#A4A4A4]"></GrAppsRounded> */}
            <div className="bg-transparent flex justify-center mb-5 md:mb-10">
              <Image className="bg-transparent flex" src={icon1}></Image>
            </div>
            <h2 className="bg-transparent mb-3 font-semibold text-[18px] text-center">
              SMOOTH BROWSING
            </h2>
            <p className="bg-transparent text-[14px] text-center text-[#666666]">
              Lorem ipsum Dolar Sit Amet,<br></br>Consectetur Adipiscing Elit.
            </p>
          </bottom>
          <bottom className="bg-transparent">
            {/* <GrAppsRounded className=" m-auto text-5xl p-2 rounded-xl bg-[#A4A4A4]"></GrAppsRounded> */}
            <div className="bg-transparent flex justify-center mb-5 md:mb-10">
              <Image className="bg-transparent flex" src={icon2}></Image>
            </div>
            <h2 className="bg-transparent mb-3 font-semibold text-[18px] text-center">
              EASY DELIVERY
            </h2>
            <p className="bg-transparent text-[14px] text-center text-[#666666]">
              Lorem ipsum Dolar Sit Amet,<br></br>Consectetur Adipiscing Elit.
            </p>
          </bottom>
          <bottom className="bg-transparent">
            {/* <GrAppsRounded className=" m-auto text-5xl p-2 rounded-xl bg-[#A4A4A4]"></GrAppsRounded> */}
            <div className="bg-transparent flex justify-center mb-5 md:mb-10">
              <Image className="bg-transparent flex" src={icon3}></Image>
            </div>
            <h2 className="bg-transparent mb-3 font-semibold text-[18px] text-center">
              SWIFT PAYMENTS
            </h2>
            <p className="bg-transparent text-[14px] text-center text-[#666666]">
              Lorem ipsum Dolar Sit Amet,<br></br>Consectetur Adipiscing Elit.
            </p>
          </bottom>
        </bottombig>{" "}
      </div>
      <customer className="flex flex-col pt-28 container mx-auto gap-y-24 ">
        <top>
          <h1 className="text-white text-[44px] text-center font-semibold">
            What our <span className=" text-[#ff6428]">customer's</span> say
          </h1>
        </top>
        <bottom className="xl:flex justify-evenly text-center xl:text-left">
          <div className="flex m-auto md:m-0 justify-center xl:justify-start w-full xl:w-max">
            <Image className="" src={customer_1}></Image>
          </div>
          <div className="flex flex-col  xl:items-start">
            <h1 className="text-[21px]  md:text-[24px] text-white mb-14 mt-10 xl:mt-0  ">
              “The Quality and Delivery is always on time,<br></br> being a
              professional guitarist myself I love<br></br> the customer service
              the brand provides,<br></br> highly recommend Rhythm anytime.”
            </h1>
            <h2 className="text-white mb-2 font-semibold text-2xl">
              Can Altun
            </h2>
            <p className="text-white text-lg">PROFESSIONAL GUITARIST</p>
          </div>
        </bottom>
      </customer>
      <appline className="container mx-auto grid md:flex items-center justify-between pt-40 ">
        <div className="flex flex-col items-center">
          <h1 className="text-white text-center sm:text-left font-semibold text-4xl md:text-5xl">
            Browse and buy your<br></br>
            <span className="text-[#ff6428]">favorite guitars</span> with
            <br></br>
            Rhythm.
          </h1>
          <socials className="flex mt-16 gap-x-5 md:mr-auto">
            <a className="" href="#">
              <Image className="" src={app_store}></Image>
            </a>
            <a href="#">
              <Image className="" src={apple_app}></Image>
            </a>
          </socials>
        </div>
        <div>
          <Image src={app}></Image>
        </div>
      </appline>
    </section>
  );
};

export default Why;
