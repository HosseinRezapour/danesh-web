import CircularProgressBar from "@/components/circular-progress";
import Evaluation from "@/components/evaluation/evaluation";
import LeftBar from "@/components/leftbar";
import ScienceVideoToolbar from "@/components/science-video/science";
import StatusReport from "@/components/status-report";
import Toolbar from "@/components/toolbar/toolbar";
import TopBar from "@/components/topbar";
import { useRef } from "react";
import SVG from 'react-inlinesvg';


export default function Home() {

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -100, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 100, behavior: 'smooth' });
    }
  };


  return (
    <div className="flex flex-col md:flex-row ">
      <div className="order-7 md:-order-1 mx-6 md:m-0">

        <Toolbar />
      </div>

      <div className=" w-full  ">


        <TopBar />


        <div className="flex flex-col my-6 md:my-0 gap-3 md:gap-0 md:flex-row">

          <div className="w-full flex flex-col gap-3 ">


            <div className=" border mx-6 border-border bg-white h-48 p-3 rounded-xl">
              <h1 className="text-xl text-secondaryText">مشاهده وضعیت ارزیابی‌ها</h1>

              <div className="mt-6 h-28 overflow-auto  ">
                <Evaluation />
              </div>
            </div>

            <div className="mx-6">
              <StatusReport />
            </div>

            <div className="border mx-6 bg-white border-border p-3 rounded-xl">
              <div className="flex items-center justify-between h-12 mb-3">
                <h1 className="text-xl">دانش ویدیو ها</h1>
                <div className="flex">
                  <button onClick={scrollRight} className="p-2">
                    <SVG src="/images/ic_twotone-keyboard-arrow-right.svg" />
                  </button>
                  <button onClick={scrollLeft} className="p-2">
                    <SVG src="/images/ic_twotone-keyboard-arrow-left.svg" />
                  </button>
                </div>
              </div>

              <div className="overflow-hidden" ref={scrollRef} >
                <ScienceVideoToolbar />
              </div>
            </div>


          </div>
          <div className="mx-6 md:mx-0 md:w-[340px] border border-border bg-white rounded-xl h-auto flex-row items-center">
            <LeftBar />
          </div>
        </div>





      </div>
    </div>
  );
}
