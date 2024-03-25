import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { AiOutlineSafety } from "react-icons/ai";
import { useState } from "react";
import { BsClockHistory } from "react-icons/bs";


export function Utilityhome() {
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
            <div className=" w-full px-5 select-none">
                <div className="flex flex-col bg-blue-50 rounded-lg">
                    <div className="flex items-center py-8 border-b-2 px-5 flex-col gap-5 text-dark" onClick={handleShowHidden}>
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-2">
                                <GiTakeMyMoney className="text-2xl" />
                                <p>Money back guarantee</p>
                            </div>
                            <FaCirclePlus className={showHidden ? 'text-secondary block' : 'hidden'} />
                            <FaCircleMinus className={showHidden ? 'hidden' : 'text-secondary block'} />
                        </div>

                        <div className={showHidden ? 'hidden' : 'border-t-2 pt-3 flex flex-col gap-3'}>
                            <h1 className="font-bold">
                                Can I really return the car?
                            </h1>
                            <p>Of course, you can. We trust our service and know that we only sell inspected vehicles in excellent technical condition. Together with our customers we are fighting for better vehicles on roads. Carvago, therefore, always assumes all risks connected with the vehicle. And if you simply don’t like the car, you can return it to us up to 14 days after receiving it.</p>
                        </div>
                    </div>

                    <div className="flex items-center py-8 px-5 flex-col gap-5 text-dark" onClick={handleShowHidden2}>
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-2">
                                <AiOutlineSafety className="text-2xl" />
                                <p>Safe purchase</p>
                            </div>
                            <FaCirclePlus className={showHidden2 ? 'text-secondary block' : 'hidden'} />
                            <FaCircleMinus className={showHidden2 ? 'hidden' : 'text-secondary block'} />
                        </div>

                        <div className={showHidden2 ? 'hidden' : 'border-t-2 flex flex-col gap-3 pt-3'}>
                            <h1 className="font-bold">
                                You don't risk anything buying
                            </h1>
                            <p>Carvago is the safest way of buying a used car. Before each purchase we first of all carefully examine the chosen car and you then decide on the basis of its current condition and our recommendation.
                                You always sign the contract with Carvago, so all guarantees are provided by us - you only need to buy the car, in your native language.
                                Wherever the car is from, you always make the payment to a local account in your local curency.</p>
                        </div>
                    </div>

                    <div className="flex items-center py-8 border-t-2 px-5 flex-col gap-5 text-dark" onClick={handleShowHidden3}>
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-2">
                                <BsClockHistory className="text-2xl" />
                                <p>6 month warranty</p>
                            </div>
                            <FaCirclePlus className={showHidden3 ? 'text-secondary block' : 'hidden'} />
                            <FaCircleMinus className={showHidden3 ? 'hidden' : 'text-secondary block'} />
                        </div>

                        <div className={showHidden3 ? 'hidden' : 'border-t-2 flex flex-col gap-3 pt-3'}>
                            <h1 className="font-bold">
                                You receive an extended warranty on the car
                            </h1>
                            <p>For even greater peace of mind, aside from the warranty for hidden defects, you also have from us an extended 6-month warranty on the essentials - the engine, gearbox and differential. If you want even more, you can choose a longer period of coverage for other parts of the vehicle in the order.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

// Mobile End

// Desktop
export default function UtilityHomeXL() {
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
