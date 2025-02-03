import { evaluationList } from "@/helper/data"
import Image from "next/image"
import Status from "../status/status"

export default function Evaluation() {





    return (<>

        <div className="flex flex-row w-1">
            {evaluationList.map((item) => (<div key={item.id} className="w-auto"> {evaluationCard(item)}</div>))}
        </div>
    </>)
}







const evaluationCard = ({ image, title, status, sendDate }) => (

    <>
        <div className="flex flex-row w-80">
            <div className="px-3">
                <Image src={`/images/${image}`} height={90} width={90} alt="ev" />
            </div>

            <div className="text-secondaryText   flex flex-col justify-between mx-2">
                <p className="text-mainText text-[18px] flex-grow ">{title}</p>
                <p className="text-[12px]">وضعیت ارزیابی : {<Status status={status} />}</p>
                <p className="text-[12px]">تاریخ ارسال : {sendDate}</p>
            </div>
        </div>
    </>

)

