import Image from "next/image"
import SVG from 'react-inlinesvg';


const toolbarItems = [
    { id: 1, title: 'داشبورد', image: 'material_symbols_dashboard_rounded.svg', },
    { id: 2, title: 'شبکه دانش', image: 'healthicons_group_discussion_meeting.svg' },
    { id: 3, title: 'ایجاد دانش', image: 'material_symbols_add_ad.svg' },
    { id: 5, title: 'مسیرهای آموزشی', image: 'material_symbols_flowsheet_outline.svg' },
    { id: 6, title: 'درخواست های دانشی (تصمیم یاری)', image: 'material_symbols_list_alt_outline.svg' },
    { id: 7, title: 'پاسخ های دانشی', image: 'material_symbols_quick_reference_all_outline.svg' },
    { id: 8, title: 'کارتابل دانش های من', image: 'bx_user.svg' },
    { id: 9, title: 'کارتابل مدیریت بهره وری', image: 'material_symbols_admin_panel_settings_outline.svg' },
    { id: 10, title: 'کارتابل مدیریت دانش ها', image: 'icon_park_outline_transaction_order.svg' },
    { id: 11, title: 'کارتابل ارزیابی', image: 'material_symbols_add_chart_outline.svg' },
    { id: 12, title: 'کارتابل کارشناسی', image: 'material-symbols_manage-search.svg' },
    { id: 13, title: 'کارتابل اجرایی', image: 'material-symbols_open-run.svg' },
    { id: 14, title: 'کارتابل پیگیری', image: 'icon-park-outline_follow-up-date-sort.svg' },
    { id: 15, title: 'پیگیری', image: 'lucide_settings-2.svg' },
]


const toolbarItem = ({ title, image }) => (
    <>
        <div className="  items-center mb-3 py-1 text-secondaryText hover:text-hover cursor-pointer transition-colors duration-300">
            <div className="flex flex-col md:flex-row  items-center ">
                <SVG src={`/images/${image}`} />

                <span className=" mr-0 md:mr-6 text-balance text-center md:text-right text-sm md:text-[18px] ">
                    {title}
                </span>
            </div>
        </div>
    </>)



export default function Toolbar() {
    return (<>
        <div className="xl:w-[300px] h-full border m-6 md:m-0 border-black bg-white">
            <div className="m-3 ">
                <div className="flex justify-center w-full ">
                    <Image src={'/images/logo.svg'} width={128} height={48} alt="logo" />
                </div>
                <div className="mt-3 md:mt-16 grid grid-cols-4 gap-1 xl:grid-cols-1">
                    {toolbarItems.map((item) => (<div className="cursor-pointer" key={item.id}> {toolbarItem(item)} </div>))}
                </div>
            </div>
        </div>
    </>)
}







