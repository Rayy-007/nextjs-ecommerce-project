"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import Link from "next/link";

interface Item {
  imageUrl: string;
  id: string;
  name: string;
}

export default function ProgressSlider({ items }: { items: Item[] }) {
  const duration: number = 5000;
  const itemsRef = useRef<HTMLDivElement>(null);
  const frame = useRef<number>(0);
  const firstFrameTime = useRef(performance.now());
  const [active, setActive] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    firstFrameTime.current = performance.now();
    frame.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frame.current);
    };
  }, [active]);

  const animate = (now: number) => {
    let timeFraction = (now - firstFrameTime.current) / duration;
    if (timeFraction <= 1) {
      setProgress(timeFraction * 100);
      frame.current = requestAnimationFrame(animate);
    } else {
      timeFraction = 1;
      setProgress(0);
      setActive((active + 1) % items.length);
    }
  };

  const heightFix = () => {
    if (itemsRef.current && itemsRef.current.parentElement)
      itemsRef.current.parentElement.style.height = `${itemsRef.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <div className=" flex w-fit max-w-5xl flex-col items-center rounded-lg  p-10 text-center">
      {/* Item image */}
      <div className="transition-all delay-300 duration-150 ease-in-out">
        <div className="relative flex flex-col" ref={itemsRef}>
          {items.map((item, index) => (
            <Transition
              key={index}
              show={active === index}
              enter="transition ease-in-out duration-500 delay-200 order-first"
              enterFrom="opacity-0 scale-105"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in-out duration-300 absolute"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
              beforeEnter={() => heightFix()}
            >
              <Link href={`/products/${item.id}`}>
                <Image
                  className="h-96 max-w-2xl rounded-xl object-cover"
                  src={item.imageUrl}
                  width={1024}
                  height={576}
                  alt={item.name}
                />
              </Link>
            </Transition>
          ))}
        </div>
      </div>
      {/* Buttons */}
      <div className="mx-auto mt-8 flex   max-w-xs  gap-4 overflow-x-scroll sm:max-w-sm md:max-w-3xl ">
        {items.map((item, index) => (
          <button
            key={index}
            className="group w-96  min-w-[120px] rounded p-2 focus:outline-none focus-visible:ring focus-visible:ring-indigo-300"
            onClick={() => {
              setActive(index);
              setProgress(0);
            }}
          >
            <span
              className={`flex flex-col items-center text-center ${
                active === index
                  ? ""
                  : "opacity-50 transition-opacity group-hover:opacity-100 group-focus:opacity-100"
              }`}
            >
              {/* <span className="relative mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100">
                
                One
              </span> */}
              <span className="mb-2 block text-sm font-medium text-slate-900">
                {item.name}
              </span>
              <span
                className="relative block h-1 w-full rounded-full bg-slate-200"
                role="progressbar"
                aria-valuenow={active === index ? progress : 0}
              >
                <span
                  className="absolute inset-0 rounded-[inherit] bg-indigo-500"
                  style={{ width: active === index ? `${progress}%` : "0%" }}
                ></span>
              </span>
            </span>
          </button>
        ))}
        <input type="range" min={4} max="100" value="40" className="range" />
      </div>
    </div>
  );
}
