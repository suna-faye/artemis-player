import Image from "next/image";
import Haibara from "artemis/public/images/haibara.jpg";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center p-6 md:flex-row">
        <Image src={Haibara} className="h-12 w-12 rounded-xl" alt={"baibara"} />
        <h1 className="pt-4 text-3xl font-bold leading-none text-primary md:pt-0 md:pl-4 md:align-middle">
          Haibara Ai
        </h1>
        {/* <div className="mx-auto flex max-w-sm items-center space-x-4 rounded-xl bg-white p-6 shadow-md">
        </div> */}
        {/* <div className="shrink-0"></div> */}
      </main>
      {/* <footer>footer</footer> */}
    </>
  );
}
