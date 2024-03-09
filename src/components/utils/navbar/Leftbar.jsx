import { useState } from "react";
import { MdHome, MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineToggleOff } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaPenToSquare, FaUserGear } from "react-icons/fa6";
import { PiShieldStarFill } from "react-icons/pi";

export function Leftbar({onShowLeftbar}){
    const [showScroll, setShowScroll] = useState(false)

    function handleShowScroll(){
        setShowScroll(!showScroll)
    }

    return(
        <>
        <div className={onShowLeftbar ? "font-montserat z-50 absolute bg-white  w-60 h-[47rem] translate-y-[407px] -translate-x-3 transition-all duration-500" : "absolute bg-white w-60 h-[47rem] translate-y-[407px] -translate-x-96 transition-all duration-500 z-50"}>
            <ul className="py-5 text-primary text-lg  flex flex-col gap-5">
                <div className="border-l-4 border-dark w-full h-10 items-center flex ">
                    <li className="px-5 font-semibold flex items-center gap-2"><MdHome/> Home</li>
                </div>

                <div className="w-full h-10 items-center flex">
                    <li className="px-5 items-center flex gap-2"><GiTakeMyMoney/> Buy</li>
                </div>

                <div className="w-full h-10 items-center flex">
                    <li className="px-5 items-center flex gap-2"><FaUserGear/> How it works</li>
                </div>

                <div className="w-full h-10 items-center flex">
                    <li className="px-5 items-center flex gap-2"><PiShieldStarFill/> Review</li>
                </div>

                <div className="w-full h-10 items-center flex ">
                    <li className="flex items-center px-5 gap-2" onClick={handleShowScroll}><FaPenToSquare/> Services <MdKeyboardArrowDown className={showScroll ? "rotate-180 transition-all duration-500" : "rotate-0 transition-all duration-500"}/></li>
                </div>
            </ul>
                <div className="w-full h-48 px-5">
                    <div className={showScroll ? "w-full h-full transition-all duration-500 p-5 bg-slate-100 rounded-lg" : "w-full overflow-hidden opacity-0 h-0 p-5 transition-all duration-500 bg-slate-100 rounded-lg "}>
                        <ul className={showScroll ? "delay-500  flex flex-col justify-between h-full text-primary transition-all duration-75" : " flex-col hidden justify-between h-full text-primary delay-500 "}>
                            <li>CarAudit</li>
                            <li>Delivery</li>
                            <li>Financing</li>
                            <li>Warranty</li>
                        </ul>
                    </div>
                </div>
                
            <div className=" border-t-2 mt-5 gap-5 w-full h-full p-5 text-lg text-primary flex flex-col bg-slate-100 ">
                <div className="flex items-center py-4 justify-around w-full ">
                    <p>Dark mode</p>
                    <MdOutlineToggleOff className="text-primary text-3xl"/>
                </div>

                <button className="bg-secondary border text-white py-3 w-full justify-center rounded-lg flex items-center">Login</button>
            </div>
        </div>
        </>
    )
}