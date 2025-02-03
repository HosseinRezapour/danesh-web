import Image from "next/image";
import SVG from 'react-inlinesvg';

export default function TopBar() {
    return (<>

        <div className="w-full flex flex-col md:flex-row  items-center p-6 bg-white  gap-3">
            <div className="flex flex-row border w-full rounded-full overflow-hidden   ">
                <Image src={"/images/material_symbols_search.svg"} width={24} height={24} alt="" className="mx-5 " />
                <div className="flex flex-grow items-center  bg-white ">
                    <input
                        type="text"
                        placeholder="جستجو"
                        className=" border-0 focus:outline-none px-4 py-3  w-full"
                    />
                </div>
            </div>
            <div className="flex  justify-between">
                <di className="flex gap-3">
                    <div className="p-3 border rounded-full ">
                        <SVG src={"/images/streamline_module_puzzle_1.svg"} />
                    </div>

                    <div className="p-3 border rounded-full">
                        <SVG src={"/images/ic_outline_support_agent.svg"} />
                    </div>

                    <div className="p-3 border rounded-full">
                        <SVG src={"/images/mingcute_notification_line.svg"} />
                    </div>
                </di>
                <div className="border-r border-black h-12 mx-4 px-6 flex flex-row items-center ">
                    <Image src={'/images/frame19.png'} width={48} height={48} alt="" />
                    <div className="p-3 text-nowrap">
                        مهرداد قادرمرزی
                    </div>
                </div>
            </div>
        </div>
    </>
    );
} 
