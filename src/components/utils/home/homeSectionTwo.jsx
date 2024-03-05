import { FaCirclePlus } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { AiOutlineSafety } from "react-icons/ai";


export default function Hometwo(){
    return(
        <>
            <div className="w-full h-dvh px-5  xl:items-center flex flex-col">
                <div className="bg-slate-100 font-semibold text-dark w-full h-60 rounded-lg xl:hidden">
                    <div className="w-full h-[33%] justify-between flex items-center px-5  border-b">
                        <div className="flex items-center gap-1">
                            <GiTakeMyMoney className="text-3xl"/><p>Money back guaranteed</p>
                        </div>
                        <FaCirclePlus className="text-secondary"/>
                    </div>
                    
                    <div className="w-full h-[33%] justify-between flex items-center px-5 border-b">
                        <div className="flex items-center gap-1">
                            <AiOutlineSafety className="text-3xl"/><p>Safe purchase</p>
                        </div>
                        <FaCirclePlus className="text-secondary"/>
                    </div>

                    <div className="w-full h-[33%] justify-between flex items-center px-5 ">
                        <div className="flex items-center gap-1">
                            <GiTakeMyMoney className="text-3xl"/><p>6-month warranty</p>
                        </div>
                        <FaCirclePlus className="text-secondary"/>
                    </div>
                </div>
                {/* Mobile End */}
                {/* Pc */}
                <div className="w-[70rem] h-40  bg-slate-100 rounded-lg hidden xl:flex">
                    <div className="w-[33%] h-full border-r p-5 flex justify-around relative">
                        <GiTakeMyMoney className=" w-[20%] text-4xl "/>
                        <div className="flex flex-col  w-[75%] gap-2 justify-center">
                            <p className="text-lg font-semibold">Money back guaranteed</p>
                            <p>If you don't fall in love with the vehicle, simply return it to us.</p>
                        </div>
                        <div className="flex items-center gap-2 h-[15%]  text-tertiary absolute right-4 bottom-4">
                            <p className="font-semibold">More</p>
                            <FaCirclePlus/>
                        </div>
                    </div>
                    {/* Kesatu End */}
                    {/* Kedua */}
                    <div className="w-[33%] h-full border-r p-5 flex justify-around relative">
                        <GiTakeMyMoney className=" w-[20%] text-4xl"/>
                        <div className="flex flex-col  w-[75%] gap-2 justify-center">
                            <p className="text-lg font-semibold">Money back guaranteed</p>
                            <p>If you don't fall in love with the vehicle, simply return it to us.</p>
                        </div>
                        <div className="flex items-center gap-2 h-[15%]  text-tertiary absolute right-4 bottom-4">
                            <p className="font-semibold">More</p>
                            <FaCirclePlus/>
                        </div>
                    </div>
                    {/* Kedua End */}
                    {/* Ketiga */}
                    <div className="w-[33%] h-full p-5 flex justify-around relative">
                        <GiTakeMyMoney className=" w-[20%] text-4xl"/>
                        <div className="flex flex-col justify-center w-[75%] gap-2">
                            <p className="text-lg font-semibold">Money back guaranteed</p>
                            <p>If you don't fall in love with the vehicle, simply return it to us.</p>
                        </div>
                        <div className="flex items-center gap-2 h-[15%]  text-tertiary absolute right-4 bottom-4">
                            <p className="font-semibold">More</p>
                            <FaCirclePlus/>
                        </div>
                    </div>
                    
                </div>
                {/* Pc End */}
            </div>
        </>
    )
}