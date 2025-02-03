import Image from "next/image";



export default function GroupItem({ props }) {
    const { groupName, groupTitle, image, isSubscripted } = props;
    
    return (<>
        <div className=" flex flex-row items-center  m-2 ">
            <div>
                <Image src={`/images/${image}`} width={56} height={56} alt="" />
            </div>
            <div className="mr-2 flex-grow">
                <div className="text-sm my-1">{groupName}</div>
                <div className="text-[11px] my-1 text-secondaryText ">{groupTitle}</div>
            </div>

            <div>
                {isSubscripted ? (<div className="text-[10px] px-2 py-1 rounded-full text-white bg-gray-400">خروج از گروه</div>) : (<div className="text-[10px] px-2 py-1 bg-primary rounded-full text-white ">عضویت گروه</div>)}

            </div>
        </div>
    </>)
}