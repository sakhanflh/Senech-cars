import { Logo } from "./utils/navbar/Logo";
import Nav from "./utils/navbar/Navul";

export default function Header(){
    return(
        <>
            <div className="bg-white z-50 hidden fixed border-b w-full h-[70px] xl:flex items-center px-10 gap-10  font-montserat">
                <Logo />
                <Nav />
            </div>
        </>
    )
}