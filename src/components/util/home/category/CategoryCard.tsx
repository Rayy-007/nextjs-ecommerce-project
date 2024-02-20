import Image from "next/image";
import {
  CategoryCamera,
  CategoryCellPhone,
  CategoryComputer,
  CategoryGamepad,
  CategoryHeadphone,
  CategorySmartWatch,
} from "@/components/ImageImport";
import Link from "next/link";

const CategoryCard = () => {
  return (
    <div className="my-8 flex w-full justify-between">
      <Link
        href="/products/phone"
        className="flex w-44 max-w-sm flex-col items-center gap-4 rounded-sm border border-gray-400 p-6 shadow"
      >
        <Image
          src={CategoryCellPhone}
          alt="CategoryCellPhone"
          width={100}
          height={100}
          className="w-20"
        />

        <p className="text-lg ">Phones</p>
      </Link>
      <Link
        href="/products/phone"
        className="flex w-44 max-w-sm flex-col items-center gap-4 rounded-sm border border-gray-400 p-6 shadow"
      >
        <Image
          src={CategoryComputer}
          alt="CategoryComputer"
          width={100}
          height={100}
          className="w-20"
        />

        <p className="text-lg ">Phones</p>
      </Link>
      <Link
        href="/products/phone"
        className="flex w-44 max-w-sm flex-col items-center gap-4 rounded-sm border border-gray-400 p-6 shadow"
      >
        <Image
          src={CategorySmartWatch}
          alt="CategorySmartWatch"
          width={100}
          height={100}
          className="w-20"
        />

        <p className="text-lg ">Phones</p>
      </Link>
      <Link
        href="/products/phone"
        className="flex w-44 max-w-sm flex-col items-center gap-4 rounded-sm border border-gray-400 p-6 shadow"
      >
        <Image
          src={CategoryCamera}
          alt="CategoryCamera"
          width={100}
          height={100}
          className="w-20"
        />

        <p className="text-lg ">Phones</p>
      </Link>
      <Link
        href="/products/phone"
        className="flex w-44 max-w-sm flex-col items-center gap-4 rounded-sm border border-gray-400 p-6 shadow"
      >
        <Image
          src={CategoryHeadphone}
          alt="CategoryHeadphone"
          width={100}
          height={100}
          className="w-20"
        />

        <p className="text-lg ">Phones</p>
      </Link>
      <Link
        href="/products/phone"
        className="flex w-44 max-w-sm flex-col items-center gap-4 rounded-sm border border-gray-400 p-6 shadow"
      >
        <Image
          src={CategoryGamepad}
          alt="CategoryGamepad"
          width={100}
          height={100}
          className="w-20"
        />

        <p className="text-lg ">Phones</p>
      </Link>
    </div>
  );
};

export default CategoryCard;
