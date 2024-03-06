import HomeSwiperMobile from "./homeSwiperMobile";

export default function Hometwo(){
    return(
        <>
        <div className="w-full h-dvh pt-80 bg-red-500">
            <div>
                <h1 className="text-2xl font-bold px-5">Popular at Senech Cars</h1>
            </div>
            <div className="bg-green-500 w-full h-32">
                <HomeSwiperMobile/>
            </div>
        </div>
        </>
    )
}