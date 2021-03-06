import React from "react";
import Image from "next/image";
import Footerlogo from "../images/butter.svg";
import Sms from "../images/sms.svg";
import Gps from "../images/location.svg";
import { GrFacebookOption, GrTwitter, GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="bg-[#EEEEEE] w-full h-[380px]   pt-12">
      <cont className="container mx-auto w-full flex md:justify-between">
        <logosection className="">
          <div className="hidden md:flex gap-x-6 items-center ">
            <Image className="" layout="fixed" src={Footerlogo}></Image>
            <h1 className="font-semibold text-[40px]">Rhythm</h1>
          </div>
          <div className="gap-y-5 flex flex-col pt-7">
            <p className=" items-center gap-x-5 hidden md:flex">
              <Image src={Sms}></Image>example@example.com
            </p>
            <p className=" items-center gap-x-5 hidden md:flex">
              <Image src={Gps}></Image>Turkey
            </p>
          </div>
        </logosection>
        <navsection className="flex gap-x-[30px] xl:gap-x-[156px] justify-center w-full md:w-max md:- ">
          <div>
            <h1>
              <a className="text-[18px] font-semibold" href="#">
                PAGES
              </a>
            </h1>
            <div className="gap-y-4 flex flex-col mt-5">
              <p>
                <a className="text-[16px] text-[#12121299]" href="#">
                  Store
                </a>
              </p>
              <p>
                <a className="text-[16px] text-[#12121299]" href="#">
                  Collections
                </a>
              </p>
              <p>
                <a className="text-[16px] text-[#12121299]" href="#">
                  Support
                </a>
              </p>
            </div>
          </div>
          <div>
            <h1>
              <a className="text-[18px] font-semibold" href="#">
                PRODUCT
              </a>
            </h1>
            <div className="flex flex-col gap-y-4 mt-5">
              <p>
                <a className="text-[16px] text-[#12121299]" href="#">
                  Terms
                </a>
              </p>
              <p>
                <a className="text-[16px] text-[#12121299]" href="#">
                  Privacy Policy
                </a>
              </p>
              <p>
                <a className="text-[16px] text-[#12121299]" href="#">
                  Copyright
                </a>
              </p>
            </div>
          </div>
          <div>
            <h1>
              <a className="text-[18px] font-semibold" href="#">
                FOLLOW US
              </a>
            </h1>
            <socials className="flex text-[#12121299] gap-x-8 pt-3">
              <GrFacebookOption></GrFacebookOption>
              <GrTwitter></GrTwitter>
              <GrInstagram></GrInstagram>
            </socials>
          </div>
        </navsection>
      </cont>
      <div className="flex md:hidden items-center gap-x-3 justify-center pt-12 ">
        <Image className="" width={30} layout="fixed" src={Footerlogo}></Image>
        <h1 className="font-semibold text-[28px]">Rhythm</h1>
      </div>
      <copyright className="container mx-auto grid gap-y-1 md:justify-between text-center md:flex justify-center pt-3 md:pt-24">
        <div>
          <h1>?? 2022 Copyright Rhythm</h1>
        </div>
        <div>
          <p>Codded with ???? by Can Altun.</p>
        </div>
      </copyright>
    </div>
  );
};

export default Footer;
