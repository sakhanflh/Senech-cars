import Utilityhome from "../util/Utilityhome";
import HomeSwiperMobile from "./homeSwiperMobile";

export default function Hometwo(){
    return(
        <>
        <div className="w-full  bg-white gap-5 flex flex-col">
            <div className="-translate-y-10 my-auto" style={{height: 'calc(100% - 2rem)'}}>
                <Utilityhome/>
            </div>

            <div className="flex flex-col gap-5">
                <h1 className="text-2xl font-bold px-5 text-dark">Popular at Senech Cars</h1>
                <div className="bg-white w-full">
                    <HomeSwiperMobile/>
                </div>
            </div>
        </div>
        </>
    )
}