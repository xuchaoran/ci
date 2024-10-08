import WordRotate from "@/components/fancy/word-rotate";
import SvgGenerator from "@/components/svg-generator";

// import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="p-6 md:p-8">
      {/* flex flex-col items-center justify-center min-h-[85vh] px-8 font-sans */}
      <main className="w-full max-w-6xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold text-center">词语新解</h1>
        <h2 className="text-3xl text-center font-sans font-semibold flex flex-col sm:flex-row gap-2 items-center justify-center mx-auto w-full">
       
          <WordRotate
            className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-sky-500"
            words={["社畜", "程序员", "边界感", "打工人", "内卷", "天选之子", "996", "躺平", "单身", "公务员", "国足"]}
          />

        </h2>

        <SvgGenerator />
      </main>
    </div>
  );
}
