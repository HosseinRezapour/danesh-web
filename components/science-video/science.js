import { evaluationList, sienceList } from "@/helper/data"
import Image from "next/image"
import SVG from 'react-inlinesvg';

export default function ScienceVideoToolbar() {





    return (<>

        <div className="flex flex-row w-1 gap-6">
            {sienceList.map((item) => (<div key={item.id} className="w-auto"> {card(item)}</div>))}
        </div>
    </>)
}






const label = (image, value) => (

    <>


        <div className="flex flex-row gap-2 px-3 py-1 items-center h-auto bg-border rounded-full ">

            <SVG src={`/images/${image}`} />

            {value}

        </div>


    </>

)

const card = ({ image, title, description, readTime, writerName, viewCount }) => (
    <div className="w-[360px] bg-background border h-full border-border rounded-xl overflow-hidden flex flex-col">
        <div className="overflow-hidden h-48">
            <Image src={`/images/${image}`} height={600} width={600} alt="ev" />
        </div>

        <div className="p-3 flex flex-col flex-1  gap-3 ">
            <p className="text-mainText text-xl font-bold">{title}</p>
            <p className="text-secondaryText text-sm flex-grow">{description}</p>

            <div className="flex justify-between text-[10px] font-bold">
                {label('material_symbols_timer_outline.svg', readTime)}
                {label('material_symbols_person_check_outline_rounded.svg', writerName)}
                {label('material_symbols_eyeglasses_rounded.svg', viewCount)}
            </div>
        </div>
    </div>
);




