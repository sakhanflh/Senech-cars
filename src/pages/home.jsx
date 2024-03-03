import Header from "../components/header";
import Headerm from "../components/headerm";
export default function HomePage(){
    return(
        <>
            <div className="">
                <Header />
                <Headerm />
                <div className="absolute w-full -z-20 h-full">
                    <img src="/img/Shake-hand.jpg" alt="" className="object-fill xl:w-full xl:h-full"/>
                </div>
            </div>
        </>
    )
}