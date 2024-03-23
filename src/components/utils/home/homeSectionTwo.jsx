import Utilityhome from "../util/Utilityhome";
import HomeSwiperMobile from "./homeSwiperMobile";

export default function Hometwo(){
    return(
        <>
        <div className="w-full  bg-white gap-5 flex flex-col">
            <div className="-translate-y-10 my-auto" style={{height: 'calc(100% - 2rem)'}}>
                <Utilityhome/>
            </div>

            <div>
                <h1 className="text-2xl font-bold px-5">Popular at Senech Cars</h1>
                <div className="bg-white w-full h-32">
                    <HomeSwiperMobile/>
                </div>
            </div>
        </div>
        </>
    )
}