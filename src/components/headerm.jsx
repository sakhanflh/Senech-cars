import { Leftbar } from "./utils/navbar/Leftbar";
import { Logo } from "./utils/navbar/Logo";
import { IoMdMenu } from "react-icons/io";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";

export default function Headerm(){
    const [showLeftbar, setShowLeftbar] = useState(false)

    function handleShowLeftbar(){
        setShowLeftbar(!showLeftbar)
    }


    return(
        <>
        <div className="bg-white flex w-full h-16 xl:hidden px-3 justify-between items-center">
            <div className="w-[25%]">
                <IoMdMenu className="text-2xl text-dark" onClick={handleShowLeftbar} />
            </div>
            
            <div className=" w-[50%] items-center flex justify-center">
                <Logo/>
            </div>
            
            <div className="w-[25%] flex text-3xl gap-5 justify-center text-dark">
                <CiHeart />  
                <HiOutlineUserCircle />
            </div>
            <Leftbar onShowLeftbar={showLeftbar}/>
        </div>
        </>
    )
}