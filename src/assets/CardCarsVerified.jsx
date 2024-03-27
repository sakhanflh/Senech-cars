import { PiEngineLight, PiGasPump } from "react-icons/pi";
import { CiCalendarDate } from "react-icons/ci";
import { TbRoad } from "react-icons/tb";
import { GiGearStickPattern } from "react-icons/gi";
import { GrMapLocation } from "react-icons/gr";


export default function CardVerified({image, name, horsepower, manufacture_date, kilometers, transmission, fuel_type, location, price}) {
    return(
        <>
            <div className="w-full rounded-lg overflow-hidden flex flex-col gap-2 bg-white">
                <div>
                    <img src={image} alt="" />
                </div>
                {/* Desc */}
                <div className="w-full px-5 flex flex-col gap-5">
                    <h1 className="font-bold">{name}</h1>
                    <div className="w-full flex flex-wrap  gap-3">
                        {/* 1 */}
                        <div className="flex items-center gap-2 font-semibold w-[30%] text-sm">
                            <PiEngineLight className="text-lg"/>
                            <p>{horsepower}</p>
                        </div>
                        {/* 2 */}
                        <div className="flex items-center gap-2 font-semibold w-[30%] text-sm">
                            <CiCalendarDate className="text-lg"/>
                            <p>{manufacture_date}</p>
                        </div>
                        {/* 3 */}
                        <div className="flex items-center gap-2 font-semibold w-[30%] text-sm">
                            <TbRoad className="text-lg"/>
                            <p>{kilometers}</p>
                        </div>
                        {/* 4 */}
                        <div className="flex items-center gap-2 font-semibold w-[30%] text-sm">
                            <GiGearStickPattern className="text-lg"/>
                            <p>{transmission}</p>
                        </div>
                        {/* 5 */}
                        <div className="flex items-center gap-2 font-semibold w-[%] text-sm">
                            <PiGasPump className="text-lg"/>
                            <p>{fuel_type}</p>
                        </div>
                    </div>
                    {/* Addreas */}
                    <div className="flex items-center gap-2">
                        <GrMapLocation className="text-lg"/>
                        <p>{location}</p>
                    </div>
                    {/* Addreas End */}

                    <div className="flex items-center justify-between w-full py-5 border-t-2">
                        <div className="flex flex-col gap-1">
                            <div className="flex gap-2">
                                <div className="bg-dark w-3 h-2 rounded-lg"></div>
                                <div className="bg-primary w-3 h-2 rounded-lg"></div>
                                <div className="bg-secondary w-3 h-2 rounded-lg"></div>
                                <div className="bg-tertiary w-3 h-2 rounded-lg"></div>
                                <div className="bg-blue-50 w-3 h-2 rounded-lg"></div>
                            </div>
                            <p>Top offers</p>
                        </div>
                        
                        <div>
                            <p>{price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}