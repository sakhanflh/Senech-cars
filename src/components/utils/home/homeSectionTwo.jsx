import HomeSwiperMobile from "./homeSwiperMobile";

export default function Hometwo(){
    return(
        <>
        <div className="w-full pt-80 bg-white">
            <div>
                <h1 className="text-2xl font-bold px-5">Popular at Senech Cars</h1>
            </div>
            <div className="bg-white w-full h-32">
                <HomeSwiperMobile/>
            </div>
        </div>
        </>
    )
}