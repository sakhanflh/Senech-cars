import { CiHeart } from "react-icons/ci";
import Navlogin from "./Navlogin";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
    const [isHover, setIsHover] = useState(false)
    const handleHover = () => {
        setIsHover(!isHover)
    }

    return (
        <>
            <div className="flex justify-between  lg:h-16 lg:w-full xl:w-full xl:h-16 items-center border-b">
                <ul className="flex gap-6 text-dark xl:text-base xl:h-full">
                    <li className=" items-center flex hover:border-b font-semibold hover:border-secondary hover:text-secondary">
                        <Link to={'/'}>Home</Link>
                    </li>

                    <li className=" items-center flex hover:border-b font-semibold hover:border-secondary hover:text-secondary">
                        <Link to={'/buy'}>Buy</Link>
                    </li>

                    <li className=" items-center flex hover:border-b font-semibold hover:border-secondary hover:text-secondary">How it works</li>
                    <li className=" items-center flex hover:border-b font-semibold hover:border-secondary hover:text-secondary">Review</li>

                    <div className="xl:h-full flex items-center hover:text-dark" onMouseEnter={handleHover} onMouseLeave={handleHover}>
                        <li className="flex items-center font-semibold">
                            Service <MdKeyboardArrowDown />
                        </li>

                        <div className={`absolute border rounded-md flex bg-white p-3 w-36 h-48 translate-y-32 flex-col justify-between ${isHover ? 'flex' : 'hidden'}`}>
                            <div className="w-full hover:bg-slate-50 hover:font-medium xl:h-[22%] items-center flex rounded-md">
                                <p className="pl-3">CarAudit</p>
                            </div>
                            <div className="w-full hover:bg-slate-50 hover:font-medium xl:h-[22%] items-center flex rounded-md">
                                <p className="pl-3">Delivery</p>
                            </div>
                            <div className="w-full hover:bg-slate-50 hover:font-medium xl:h-[22%] items-center flex rounded-md">
                                <p className="pl-3">Financing</p>
                            </div>
                            <div className="w-full hover:bg-slate-50 hover:font-medium xl:h-[22%] items-center flex rounded-md">
                                <p className="pl-3">Warranty</p>
                            </div>
                        </div>
                    </div>
                </ul>

                <div className="flex items-center gap-3">
                    <div className="xl:w-7 xl:h-6 flex justify-center items-center">
                        <CiHeart className="text-primary text-3xl" />
                    </div>
                    <Navlogin />
                </div>
            </div>
        </>
    )
}