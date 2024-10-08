import { SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { IconBrandWechat } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {

  return (
    <div className="border-t border-neutral-100 dark:border-white/[0.1] px-8 py-10 bg-white dark:bg-neutral-950 w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-sm text-neutral-500  justify-between items-start  md:px-8">
        <div className="flex flex-col items-center justify-center w-full relative">
          <div className="mr-0 md:mr-0  md:flex mb-0">
            <Logo />
          </div>

          <GridLineHorizontal className="max-w-7xl mx-auto mt-8" />
        </div>
        <div className="flex sm:flex-row flex-col justify-between mt-8 items-center w-full">
          <p className="text-neutral-500 dark:text-neutral-400 mb-8 sm:mb-0"><a href ="https://www.facto.com.cn" target="_blank">Facto</a> &copy; 2024 / 深圳发途网络科技有限公司</p>
          <div className="flex gap-4">
            <Link href="https://work.weixin.qq.com/ca/cawcde35ec4aed37cc" target="_blank">
              <IconBrandWechat className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const GridLineHorizontal = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "1px",
          "--width": "5px",
          "--fade-stop": "90%",
          "--offset": offset || "0px", //-100px if you want to keep the line inside
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "w-[calc(100%+var(--offset))] h-[var(--height)]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className
      )}
    ></div>
  );
};

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-0  text-black px-2 py-1  relative z-20"
    >
      <Image src="/logo.svg" alt="logo" width={30} height={30} />
      <span className="font-medium text-black dark:text-white">
        {SITE_NAME}
      </span>
    </Link>
  );
};
