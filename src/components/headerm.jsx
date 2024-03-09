import { Leftbar } from "./utils/navbar/Leftbar";
import { Logo } from "./utils/navbar/Logo";
import { IoMdMenu } from "react-icons/io";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";
import LoginMobilePage from "./utils/login/LoginMobile";

export default function Headerm(){
    const [showLeftbar, setShowLeftbar] = useState(false)

    function handleShowLeftbar(){
        setShowLeftbar(!showLeftbar)
    }
    // SideBar End

    // Login & Register
    const [showLogin, setShowLogin] = useState(false)
    
    function handleShowLogin(){
        setShowLogin(!showLogin)
    }
    // Login & Register End


    return(
        <>
        <div className="bg-white fixed z-50 flex w-full h-16 xl:hidden px-3 justify-between items-center">
            <div className="w-[25%]">
                <IoMdMenu className="text-2xl text-dark" onClick={handleShowLeftbar} />
            </div>
            
            <div className=" w-[50%] items-center flex justify-center">
                <Logo/>
            </div>
            
            <div className="w-[25%] flex text-3xl gap-5 justify-center text-dark">
                <CiHeart onClick={handleShowLogin}/>  
                <HiOutlineUserCircle />
            </div>
            <Leftbar onShowLeftbar={showLeftbar}/>
            <LoginMobilePage onShowLogin={showLogin}/>
        </div>
        </>
    )
}