import Wrapper from "@/components/Wrapper";
import hero from "../../assets/imgs/kolawole-hero.png";
import { services } from "../about/constants";
import Image from "next/image";
import Link from "next/link";

type Service = {
  name: string;
  desc: string;
};

const about = () => {
  return (
    <div>
      <Wrapper>
        <div className="my-10 mx-20 space-y-16 font-inter">
          <div className="text-9xl font-bold">
            WEB, ANIME <br />& NETWORKING
          </div>
          <div className="text-5xl font-medium">
            Enter my domain, where I embrace <br /> the realms of emerging web
            technologies. <br />
            Discover my services, approach, <br />
            and what captivates me.
          </div>
        </div>

        {/* Hero */}
        <div className="mt-40 mb-10 mx-20">
          <div className="w-full">
            <Image
              className="object-cover h-[500px] rounded-xl w-full"
              src={hero}
              alt="hero"
            />
          </div>
        </div>

        {/* Services */}
        <div className="my-40 mb-10 mx-20 font-inter">
          <div className="flex justify-between items-center">
            <div className="text-9xl font-bold">SERVICES</div>
            <div>
              <button className="relative font-medium py-5 px-10 border-black border rounded-full text-xl overflow-hidden group">
                kjosh344@gmail.com
                <span className="absolute bottom-0 left-0 w-full flex flex-col justify-center h-full bg-black text-white text-center transition-all duration-500 transform translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                  <Link
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:kjosh344@gmail.com"
                  >
                    Let's Connect
                  </Link>
                </span>
              </button>
            </div>
          </div>
          <hr className="border mt-20" />
          <div className="mt-20">
            {services?.map((data: Service, index: number) => (
              <>
                <div key={index} className="grid grid-cols-3 font-inter">
                  <div className="font-semibold text-xl">0{index + 1}.</div>
                  <div className="text-4xl font-inter font-semibold">{data?.name}</div>
                  <div className="text-[#868788] font-medium text-2xl">{data?.desc}</div>
                </div>
                <hr className="my-20" />
              </>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default about;
