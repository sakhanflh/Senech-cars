import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";


export default function Homeone(){
    return(
        <>
            <div className="w-full h-dvh pt-16 xl:pt-16">
                    <div className="w-full h-64 reviewImgMobile xl:reviewImg xl:w-full xl:h-dvh">
                        {/* Img Include bg */}
                    </div>

                <div className="w-full px-3 xl:px-0 bgShadowMobile">
                    <div className="bg-white border rounded-lg -translate-y-12 w-full h-[24rem] p-5 flex flex-col justify-around xl:w-[35rem] xl:h-[23rem] xl:-translate-y-[34rem] xl:translate-x-40">
                        <h1 className="text-xl font-semibold text-dark xl:text-4xl xl:font-bold">You choose your car online. We inspect it and deliver it.</h1>
                        <div className="w-full h-[45%] flex justify-between">
                            <div className="w-[48%] h-full  flex flex-col justify-around">
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
                                    <button className=" w-full flex items-center justify-between px-2"><p>Choose model</p><MdKeyboardArrowDown/></button>
                                </div>
                                {/* 2 */}
                                <div className="w-full h-10 flex rounded-lg border">
                                    <button className=" w-full flex items-center justify-between px-2"><p>Registration from</p><MdKeyboardArrowDown/></button>
                                </div>
                                {/* 3 */}
                                <div className="w-full h-10 flex items-center gap-2">
                                    <input type="checkbox"/>
                                    <p>VAT deduction</p>
                                </div>
                            </div>
                            {/* Right side End */}
                        </div>

                        <div className="w-full h-[25%] ">
                            <div className="w-full h-12 bg-secondary rounded-lg flex items-center justify-center text-white text-lg">
                                <p>143.593 Offers</p>
                            </div>

                            <div className="w-full h-12 items-center flex justify-center">
                                <p>Advanced search</p><MdKeyboardArrowRight/>
                            </div>
                        </div>
                    </div>
                    {/* Stars */}
                    <div className=" w-full h-16 xl:text-2xl -translate-y-10 flex items-center justify-center gap-2 text-white xl:w-96 xl:-translate-y-[33rem] xl:translate-x-52">
                        <p>4.8</p>
                        <span className="flex items-center text-extra"><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStarHalfStroke/></span>
                        <p className="flex items-center hover:border-b">1320 reviews <MdKeyboardArrowRight/></p>
                    </div>
                </div>

            </div>
        </>
    )
}