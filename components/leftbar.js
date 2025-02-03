import { data1, groups } from "@/helper/data";
import { AgCharts } from "ag-charts-react";
import Image from "next/image";
import { useState } from "react";
import GroupItem from "./groups/groups-item";
import CircularProgressBar from "./circular-progress";

export default function LeftBar() {


    const myTheme = {
        palette: {
            fills: ["#FF5722", "#FFB74D"],
        },

    };

    const [options, setOptions] = useState({
        theme: myTheme,
        background: {
            fill: "#FFF3E0",
        },
        data: data1,
        series: [
            {
                type: "bar",
                xKey: "quarter",
                yKey: "item1",
                cornerRadius: 6,
            },
            {
                type: "bar",
                xKey: "quarter",
                yKey: "item2",
                cornerRadius: 6,
            },
        ],
        legend: {
            enabled: false,
        },
        axes: [
            {
                type: 'category',
                position: 'bottom',
                reverse: true,
                label: {
                    rotation: 0,
                },
            },
            {
                type: 'number',
                position: 'right',
                ticks: {
                    values: [0, 25, 50, 75, 100],
                },

            },
        ],
        padding: {
            top: 20,
            right: 0,
            bottom: 10,
            left: 10,
        },
    });


    const progressValue = 10;
    return (<>

        <div className="mt-6 flex flex-col items-center ">
            <div className="relative "> {/* اندازه والد برابر با اندازه CircularProgressBar */}
                <CircularProgressBar value={progressValue} className="w-full h-full" />
                <Image
                    src={'/images/frame19.jpg'}
                    width={90}
                    height={90}
                    alt=""
                    className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
                />
                <span

                    className="absolute p-1  top-6 -right-7 text-xs text-white  bg-primary w-8 text-center transform -translate-x-1/2 -translate-y-1/2 rounded-r-md rounded-tl-md"
                >
                    {progressValue}
                </span>
            </div>
        </div>

        <div className="text-center">

            <h1 className="text-xl"> مهرداد قادرمرزی</h1>
            <h3 className="text-xs text-secondaryText">
                کارشناس کنترل کیفی
            </h3>
        </div>

        <div className="bg-tintPrimary  m-6 rounded-xl border border-border h-52 flex flex-col items-center justify-center overflow-hidden" >




            <AgCharts options={options} theme={myTheme}
                style={{ width: "292px", height: "200px" }}
            />
        </div>





        <div className=" px-6 my-1 text-xl  w-full">
            گروه ها

        </div>
        <div className="bg-tintPrimary  mb-3  mx-6 rounded-xl border border-none  p-3 flex flex-col items-center" >
            <div className="text-primary mb-3 text-sm">گروه های عضو</div>

            <div className="w-full">
                {groups.map((item) => (item.isSubscripted ? <GroupItem key={item.id} props={item} /> : ""))}


            </div>


            <div className="flex items-center justify-center my-4 w-full">
                <div className="flex items-center w-full max-w-md">
                    <div className="flex-grow border-t  border-primary"></div>
                    <span className="px-2 text-primary text-sm whitespace-nowrap">
                        گروه های پیشنهادی
                    </span>
                    <div className="flex-grow   border-t border-primary"></div>
                </div>
            </div>

            <div className="w-full">
                {groups.map((item) => (!item.isSubscripted ? <GroupItem key={item.id} props={item} /> : ""))}


            </div>


        </div>
    </>)
}
