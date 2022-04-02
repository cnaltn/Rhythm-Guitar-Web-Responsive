import React from "react";
import { Left } from "./Navbar";
import styled from "styled-components";
import Image from "next/image";
import mainGuitar from "../images/guitar.png";
import { RiGooglePlayFill, RiAppleFill } from "react-icons/ri";

const Socials = styled.div``;

const Right = styled.div``;
const Img2 = styled(Image)``;

const LeftHero = styled(Left)`
  flex-direction: column;
  display: flex;
  align-items: flex-start;
  margin: 0;
  padding: 0;
  gap: 16px;
  padding-top: 147px;
  width: max-content;
  & h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 56px;
    line-height: 67px;

    color: white;

    & span {
      color: #ff6428;
    }
  }
`;

const Button = styled.div``;

const Hero = () => {
  return (
    <div className="flex container mx-auto">
      <LeftHero className="">
        <h1>
          Browse top quality<br></br>
          <span>Guitars</span> online
        </h1>
        <p className="text-white">
          Explore 50k+ latest collections of branded guitars<br></br>online with
          Rhythm
        </p>

        <div className="flex items-center mt-4 gap-x-10">
          <Button className=" ">
            <a
              className="pl-12 pr-12 pt-4 pb-4  block hover:bg-[#ff4800] transition-all text-white bg-[#ff6428] rounded-full"
              href="#"
            >
              Get the App
            </a>
          </Button>
          <Socials className="text-3xl text-white flex gap-x-5">
            <a className="hover:scale-125 transition-all" href="#">
              <RiGooglePlayFill></RiGooglePlayFill>
            </a>
            <a className="hover:scale-125 transition-all" href="#">
              <RiAppleFill></RiAppleFill>
            </a>
          </Socials>
        </div>
      </LeftHero>
      <Right className="absolute top-0 right-0">
        <div className="hidden xl:flex">
          <Img2
            className="hidden"
            width={610}
            height={500}
            layout=""
            src={mainGuitar}
          ></Img2>
        </div>
      </Right>
    </div>
  );
};

export default Hero;
