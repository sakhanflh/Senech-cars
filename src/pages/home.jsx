import Header from "../components/header";
import Headerm from "../components/headerm";
import Homeone from "../components/utils/home/homeSectionOne";
import Hometwo from "../components/utils/home/homeSectionTwo";
export default function HomePage(){
    return(
        <>
            <div className="w-full">
                <Header />
                <Headerm />
                <Homeone/>
                <Hometwo/>

                
            </div>
        </>
    )
}