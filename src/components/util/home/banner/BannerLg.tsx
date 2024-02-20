import DiscountCounter from "@/components/DiscountCounter";
import { Speaker } from "@/components/ImageImport";
import Image from "next/image";
import Link from "next/link";

const BannerLg = () => {
  return (
    <div className="hero h-96 bg-black">
      <div className="her hero-content">
        <div className="flex w-[45%] flex-col items-start gap-7">
          <div>
            <p className="pb-5 font-semibold text-secondary">Categories</p>
            <h1 className="text-5xl font-semibold text-white">
              Enhance Your Music Experience
            </h1>
          </div>
          <div>
            <DiscountCounter endDate={new Date("2024-02-18T23:59:59")} />
          </div>
          <Link href="#" className="btn-secondary btn-lg btn">
            But Now!
          </Link>
        </div>

        <div className="relative ">
          <span className="absolute inset-0  -z-10 bg-gray-400 p-16 opacity-50 blur-3xl" />

          <Image
            className=" z-1 w-[600px] max-w-lg"
            src={Speaker}
            alt="Speaker"
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default BannerLg;
