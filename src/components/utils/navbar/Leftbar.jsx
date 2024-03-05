import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export function Leftbar({onShowLeftbar}){
    const [showScroll, setShowScroll] = useState(false)

    function handleShowScroll(){
        setShowScroll(!showScroll)
    }

    return(
        <>
        <div className={onShowLeftbar ? "absolute bg-white w-60 h-[38rem] translate-y-[335px] -translate-x-3 transition-all duration-500" : "absolute bg-red-50 w-60 h-[38rem] translate-y-[335px] -translate-x-96 transition-all duration-500"}>
            <ul className="py-5 text-primary text-xl">
                <div className="border-l-8 border-dark w-full h-10 items-center flex ">
                    <li className="px-5 text-xl font-semibold">Home</li>
                </div>

                <div className="border-l-4 w-full h-10 items-center flex">
                    <li className="px-5">Buy</li>
                </div>

                <div className="border-l-4 w-full h-10 items-center flex">
                    <li className="px-5">How it works</li>
                </div>

                <div className="border-l-4 w-full h-10 items-center flex">
                    <li className="px-5 ">Review</li>
                </div>

                <div className="border-l-4 w-full h-10 items-center flex ">
                    <li className="flex items-center px-5" onClick={handleShowScroll}>Services <MdKeyboardArrowDown/></li>
                </div>
            </ul>
                <div className="w-full h-48 px-5">
                    <div className={showScroll ? "w-full h-full transition-all duration-500 p-5 bg-slate-100 rounded-lg" : "w-full overflow-hidden opacity-0 h-0 p-5 transition-all duration-500 bg-slate-100 rounded-lg"}>
                        <ul className={showScroll ? "flex flex-col justify-between h-full text-primary text-lg transition-all duration-75" : " flex-col hidden justify-between h-full text-primary text-lg"}>
                            <li>CarAudit</li>
                            <li>Delivery</li>
                            <li>Financing</li>
                            <li>Warranty</li>
                        </ul>
                    </div>
                </div>
        </div>
        </>
    )
}