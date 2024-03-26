import { FaHistory, FaRegBookmark } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { IoCarOutline, IoCartOutline } from "react-icons/io5";

export function Rightbar({onShowRightBar}){
    return(
        <>
        <div className={onShowRightBar ? 'justify-between flex flex-col text-dark font-montserat z-50 absolute bg-white  w-60 h-[47rem] translate-y-[407px] translate-x-36 transition-all duration-500 py-7' : 'justify-between flex flex-col text-dark font-montserat z-50 absolute bg-white  w-60 h-[47rem] translate-y-[407px] translate-x-96 transition-all duration-500 py-7'}>
            <div className="flex flex-col gap-5 border-b-2 pb-10 px-5">
                <p className="flex items-center gap-2"><FaRegBookmark /> Saved searches</p>
                <p className="flex items-center gap-2"><FaHistory /> Last searches</p>
                <p className="flex items-center gap-2"><FaRegHeart /> Favorite cars</p>
                <p className="flex items-center gap-2"><IoCartOutline /> Orders in progress</p>
                <p className="flex items-center gap-2"><IoCarOutline /> Cars for sale</p>
            </div>
            
            <div className="gap-10 flex flex-col pb-5">
                <div className="gap-5 flex flex-col px-5">
                    <button className="bg-gradient-to-r from-tertiary to-primary py-3 w-full text-white rounded-lg">Login</button>
                    <p>Don't have an account? <span className="text-tertiary underline underline-tertiary">Register</span></p>
                </div>
                <div className="border-t-2 pt-5 px-5">
                    <p>English (EN)</p>
                </div>
            </div>
        </div>
        </>
    )
}