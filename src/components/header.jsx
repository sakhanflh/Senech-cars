import { Logo } from "./utils/navbar/Logo";
import Nav from "./utils/navbar/Navul";

export default function Header(){
    return(
        <>
            <div className="bg-white z-50 fixed border-b w-full lg:px-5 xl:px-5 lg:gap-5 xl:gap-5 h-[70px] lg:h-16 xl:h-16 hidden lg:flex items-center font-montserat xl:flex xl:justify-between">
                <Logo />
                <Nav />
            </div>
        </>
    )
}