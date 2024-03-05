import Header from "../components/header";
import Headerm from "../components/headerm";
export default function HomePage(){
    return(
        <>
            <div className="w-full">
                <Header />
                <Headerm />
                <div className="absolute w-full -z-20 h-full pt-16">
                    <div className="w-full h-60 reviewImgMobile">

                    </div>
                </div>
            </div>
        </>
    )
}