import Image from "next/image";

export default function StatusReport() {
    return (
        <>
            <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4   gap-6 text-center">
                <div className="   bg-white rounded-xl">
                    <div className="flex flex-col items-center justify-evenly h-36">
                        <Image src={"/images/frame280.svg"} width={48} height={48} alt="" />
                        <div className="">ثبت شده ها</div>
                        <div className="text-2xl">8</div>
                    </div>
                </div>

                <div className="   bg-white rounded-xl  ">
                    <div className="flex flex-col items-center justify-evenly h-36">
                        <Image src={"/images/frame282.svg"} width={48} height={48} alt="" />
                        <div className="">درحال ارزیابی</div>
                        <div className="text-2xl text-review">8</div>
                    </div>
                </div>

                <div className=" w-full  bg-white rounded-xl  ">
                    <div className="flex flex-col items-center justify-evenly h-36">
                        <Image src={"/images/frame281.svg"} width={48} height={48} alt="" />
                        <div className="">دانش های موفق</div>
                        <div className="text-2xl text-done">8</div>
                    </div>
                </div>

                <div className=" w-full  bg-white rounded-xl ">
                    <div className="flex flex-col items-center justify-evenly h-36">
                        <Image src={"/images/frame283.svg"} width={48} height={48} alt="" />
                        <div className="text-black text-[18px]">دانش های ناموفق</div>
                        <div className="text-error text-2xl">8</div>
                    </div>
                </div>
            </div>
        </>
    )
}