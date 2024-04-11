import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { AiOutlineSafety } from "react-icons/ai";
import { useState } from "react";
import { BsClockHistory } from "react-icons/bs";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";



export function UtilityHow() {
    const [showHidden, setShowHidden] = useState(true)
    const [showHidden2, setShowHidden2] = useState(true)
    const [showHidden3, setShowHidden3] = useState(true)

    function handleShowHidden() {
        setShowHidden(!showHidden)
    }
    function handleShowHidden2() {
        setShowHidden2(!showHidden2)
    }
    function handleShowHidden3() {
        setShowHidden3(!showHidden3)
    }

    return (
        <>
            <div className=" w-full select-none">
                <div className="flex flex-col">
                    <div className="flex items-center py-4 border-b-2 px-5 flex-col gap-5 text-dark" onClick={handleShowHidden}>
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-2 font-medium">
                                <p>Why do you not show cars from all of the dealers?</p>
                            </div>
                            <MdKeyboardArrowDown className={showHidden ? 'text-secondary block text-2xl' : 'hidden'} />
                            <MdKeyboardArrowUp className={showHidden ? 'hidden' : 'text-secondary block text-2xl'} />
                        </div>

                        <div className={showHidden ? 'hidden' : 'flex flex-col'}>
                            <p>We only work with tried and tested dealers and only select cars which meet strict criteria. From 7 million adverts, we only recommend 1 000 000 cars for purchase, which is however still 10x more than the number of cars on offer in the Czech Republic. In addition to that, each vehicle must pass a thorough technical inspection consisting of more than 270 parameters before it can be sold. You will receive the result of the entire inspection and photo documentation together with our recommendation in advance.</p>
                        </div>
                    </div>

                    <div className="flex items-center py-4 px-5 flex-col gap-5 text-dark" onClick={handleShowHidden2}>
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-2">
                                <p>Do you sell only vetted cars?</p>
                            </div>
                            <MdKeyboardArrowDown className={showHidden ? 'text-secondary block text-2xl' : 'hidden'} />
                            <MdKeyboardArrowUp className={showHidden ? 'hidden' : 'text-secondary block text-2xl'} />
                        </div>

                        <div className={showHidden2 ? 'hidden' : 'flex'}>
                            <p>Each vehicle must pass a thorough technical inspection consisting of more than 270 parameters before it can be sold. In addition to this, Carvago becomes the owner of the car before it is delivered to the customer and assumes all risks associated with the vehicle. And if there is any problem, you can return the car to us at any time within 14 days of purchase.</p>
                        </div>
                    </div>

                    <div className="flex items-center py-4 border-t-2 px-5 flex-col gap-5 text-dark border-b-2" onClick={handleShowHidden3}>
                        <div className="flex items-center justify-between w-full">
                            <div>
                                <p>Where do the cars in your offer come from?</p>
                            </div>
                            <MdKeyboardArrowDown className={showHidden ? 'text-secondary block text-2xl' : 'hidden'} />
                            <MdKeyboardArrowUp className={showHidden ? 'hidden' : 'text-secondary block text-2xl'} />
                        </div>

                        <div className={showHidden3 ? 'hidden' : 'flex'}>
                            <p>The size of the offer often determines whether or not you find the car you are looking for. So far, customers in the Czech Republic have been able to choose from 70,000 cars. However, Carvago offers more than 1 000 000. And each car is just as close as the next - one click away. And since you are buying the car from us, communication is always only in Czech, regardless where the car is located. We will take care of any language and legal issues. If you're looking for a 2017 Volkswagen Golf with a diesel engine and a mileage of at most 50,000 kilometers, you will find about 10 of them for sale in the Czech Republic. You will find at least 153 cars with these parameters at Carvago. And a lot of them at a better price, with better equipment or better looking.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

// Mobile End

// Desktop
export default function UtilityHowXL() {
    const [isHovered, setIsHovered] = useState(null)

    return (
        <>
            <div className="hidden xl:text-dark xl:justify-between xl:items-center xl:flex xl:w-full xl:h-44 bg-blue-50 xl:px-5 xl:rounded-lg">
                <div className="xl:flex xl:gap-5 xl:w-full xl:px-5 xl:h-full xl:items-center xl:border-r"  onMouseEnter={() => setIsHovered(1)} onMouseLeave={() => setIsHovered(null)}>
                    <div className="h-full py-9" >
                        <GiTakeMyMoney className="xl:text-4xl" />
                    </div>
                    <div className="xl:flex xl:gap-2 xl:flex-col">
                        <p className="xl:text-xl xl:font-semibold">Money back guarantee</p>
                        <p>If you don't fall in love with the vehicle, simply return it to us.</p>
                        {/* Hidden Paragh */}
                        <div className={isHovered === 1 ? 'w-full flex justify-end items-center gap-3 text-lg' : 'w-full hidden justify-end items-center gap-3 text-lg'}>
                            <p>More</p>
                            <FaCirclePlus/>
                        </div>
                        {/* Hidden Paragh End */}
                    </div>
                </div>
                {/* 2 */}
                <div className="xl:flex xl:gap-5 xl:w-full xl:px-5 xl:h-full xl:items-center"  onMouseEnter={() => setIsHovered(2)} onMouseLeave={() => setIsHovered(null)}>
                    <div className="h-full py-9">
                        <AiOutlineSafety className="xl:text-4xl" />
                    </div>
                    <div className="xl:flex xl:gap-2 xl:flex-col">
                        <p className="xl:text-xl xl:font-semibold">Safe purchase</p>
                        <p>We guarantee the technical condition of every vehicle sold.</p>
                        {/* Hidden Paragh */}
                        <div className={isHovered === 2 ? 'w-full flex justify-end items-center gap-3 text-lg' : 'w-full hidden justify-end items-center gap-3 text-lg'}>
                            <p>More</p>
                            <FaCirclePlus/>
                        </div>
                        {/* Hidden Paragh End */}
                    </div>
                </div>
                {/* 3 */}
                <div className="xl:flex xl:gap-5 xl:w-full xl:px-5 xl:h-full xl:border-l  xl:items-center" onMouseEnter={() => setIsHovered(3)} onMouseLeave={() => setIsHovered(null)}>
                    <div className="h-full py-9">
                        <BsClockHistory className="xl:text-4xl" />
                    </div>
                    <div className="xl:flex xl:gap-2 xl:flex-col">
                        <p className="xl:text-xl xl:font-semibold">6-month warranty</p>
                        <p>In addition, with every car you receive an extended warranty.</p>
                        {/* Hidden Paragh */}
                        <div className={isHovered === 3 ? 'w-full flex justify-end items-center gap-3 text-lg' : 'w-full hidden justify-end items-center gap-3 text-lg'}>
                            <p>More</p>
                            <FaCirclePlus/>
                        </div>
                        {/* Hidden Paragh End */}
                    </div>
                </div>
            </div>
        </>
    )
}
