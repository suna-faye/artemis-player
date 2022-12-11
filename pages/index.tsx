import Image from "next/image";
import Haibara from "artemis/public/images/haibara.jpg";
import { useMediaQuery } from "../hooks";
import { LG, MD, SM, XL, XXL } from "../utils/Const";

export default function Home() {
  const isSM = useMediaQuery(SM);
  const isMD = useMediaQuery(MD);
  const isLG = useMediaQuery(LG);
  const isXL = useMediaQuery(XL);
  const isXXL = useMediaQuery(XXL);
  return (
    <>
      <main className="flex flex-col items-center p-6 md:flex-row">
        <Image src={Haibara} className="h-12 w-12 rounded-xl" alt={"baibara"} />
        <h1 className="pt-4 text-3xl font-bold leading-none text-primary sm:pt-0 md:pt-0 md:pl-4 md:align-middle lg:pt-0 xl:pt-0 2xl:pt-0">
          Haibara Ai
        </h1>
        {/* <div className="mx-auto flex max-w-sm items-center space-x-4 rounded-xl bg-white p-6 shadow-md">
        </div> */}
        {/* <div className="shrink-0"></div> */}
      </main>
      <footer className="text-center">
        <span className="text-red-500">{`screen size: ${
          isSM
            ? "small"
            : isMD
            ? "middle"
            : isLG
            ? "large"
            : isXL
            ? "extra large"
            : isXXL
            ? "2extra large"
            : "more than 2extra large"
        }`}</span>
      </footer>
    </>
  );
}
