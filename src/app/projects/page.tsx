import Wrapper from "@/components/Wrapper";
import anime from "../../assets/imgs/anime-log-new.jpeg";
import { works } from "../projects/constants";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const projects = () => {
  return (
    <div>
      <Wrapper>
        <div className="my-10 mx-20 space-y-16 font-inter">
          <div className="text-9xl font-bold">
            SELECTED WORK <br />
            (2021 - 2023)
          </div>
          <div className="text-5xl font-medium">
            Preview some of the Web2.0
            <br />
            and Web3.0 projects i have
            <br />
            worked on.
          </div>
        </div>

        {/* works */}
        {works?.map((item, index) => (
          <div className="mt-40 mx-20">
            <div className="w-full relative">
              <Image
                className="object-cover h-[500px] rounded-xl w-full"
                src={item?.img}
                alt="hero"
              />
              <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-60 text-white rounded-xl">
                <div className="text-6xl font-bold">{item?.name}</div>
                <div className="text-xl font-normal">{item?.desc}</div>
                <div className="px-5 py-3 rounded-full border border-white">
                  <Link target="_blank" rel="noreferrer" href={item?.url}>
                    Visit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Wrapper>
    </div>
  );
};

export default projects;
