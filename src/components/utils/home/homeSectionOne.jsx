import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";


export default function Homeone(){
    return(
        <>
            <div className="w-full h-dvh pt-16">
                    <div className="w-full h-64 reviewImgMobile xl:reviewImg xl:w-full xl:h-60">
                        {/* Img Include bg */}
                    </div>

                <div className="w-full px-5 xl:px-0 ">
                    <div className="bg-red-50 rounded-lg -translate-y-10 w-full h-[27rem] p-5 flex flex-col justify-around">
                        <h1 className="text-xl font-semibold text-dark">You choose your car online. We inspect it and deliver it.</h1>
                        <div className="w-full h-[45%] bg-red-500 flex justify-between">
                            <div className="w-[48%] h-full bg-yellow-500 flex flex-col justify-around">
                                {/* 1 */}
                                <div className="w-full h-10 flex rounded-lg border">
                                    <button className=" w-full flex items-center justify-between px-2"><p>Make</p><MdKeyboardArrowDown/></button>
                                </div>
                                {/* 2 */}
                                <div className="w-full h-10 flex rounded-lg border">
                                    <button className=" w-full flex items-center justify-between px-2"><p>Mileage</p><MdKeyboardArrowDown/></button>
                                </div>
                                {/* 3 */}
                                <div className="w-full h-10 flex rounded-lg border">
                                    <button className=" w-full flex items-center justify-between px-2"><p>Price up to</p><MdKeyboardArrowDown/></button>
                                </div>
                            </div>
                            {/* left End */}
                            {/* Right side */}
                            <div className="w-[48%] h-full flex flex-col justify-around">
                                {/* 1 */}
                                <div className="w-full h-10 flex rounded-lg border">
                                    <button className=" w-full flex items-center justify-between px-2"><p>Make</p><MdKeyboardArrowDown/></button>
                                </div>
                                {/* 2 */}
                                <div className="w-full h-10 flex rounded-lg border">
                                    <button className=" w-full flex items-center justify-between px-2"><p>Mileage</p><MdKeyboardArrowDown/></button>
                                </div>
                                {/* 3 */}
                                <div className="w-full h-10 flex items-center gap-2">
                                    <input type="checkbox"/>
                                    <p>VAT deduction</p>
                                </div>
                            </div>
                            {/* Right side End */}
                        </div>

                        <div className="w-full h-[25%] bg-green-500">
                            <div className="w-full h-12 bg-secondary rounded-lg flex items-center justify-center text-white text-lg">
                                <p>143.593 Offers</p>
                            </div>

                            <div className="w-full h-12 items-center flex justify-center">
                                <p>Advanced search</p><MdKeyboardArrowRight/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}