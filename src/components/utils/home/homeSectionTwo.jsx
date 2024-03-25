import Utilityhome from "../util/Utilityhome";
import HomeSwiperMobile from "./homeSwiperMobile";

export default function Hometwo(){
    return(
        <>
        <div className="w-full gap-5 flex flex-col xl:h-auto">
            <div className="-translate-y-10 my-auto lg:hidden xl:hidden">
                <Utilityhome/>
            </div>

            <div className="flex flex-col gap-5 xl:flex-row xl:w-full xl:justify-between xl:gap-20 ">
                <h1 className="text-2xl xl:text-4xl font-bold px-5 xl:px-0 xl:pl-20 xl:pt-10 text-dark">Popular at Senech Cars</h1>
                <div className="bg-white w-full xl:w-[55rem]">
                    <HomeSwiperMobile/>
                </div>
            </div>
        </div>
        </>
    )
}