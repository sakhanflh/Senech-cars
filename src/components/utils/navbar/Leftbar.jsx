import { MdKeyboardArrowDown } from "react-icons/md";

export function Leftbar({onShowLeftbar}){
    return(
        <>
        <div className={onShowLeftbar ? "absolute bg-white w-60 h-[38rem] translate-y-[335px] -translate-x-3 transition-all duration-500" : "absolute bg-red-50 w-60 h-[38rem] translate-y-[335px] -translate-x-96 transition-all duration-500"}>
            <ul className="py-5">
                <div className="border-l-8 border-dark w-full h-10 items-center flex">
                    <li className="px-5 text-lg">Home</li>
                </div>

                <div className="border-l-4 w-full h-10 items-center flex">
                    <li className="px-5 text-lg">Buy</li>
                </div>

                <div className="border-l-4 w-full h-10 items-center flex">
                    <li className="px-5 text-lg">How it works</li>
                </div>

                <div className="border-l-4 w-full h-10 items-center flex">
                    <li className="px-5 text-lg">Review</li>
                </div>

                <div className="border-l-4 w-full h-10 items-center flex">
                    <li className="flex items-center px-5 text-lg">Services <MdKeyboardArrowDown/></li>
                </div>
                
            </ul>
        </div>
        </>
    )
}