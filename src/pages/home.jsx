import Header from "../components/header";
import Headerm from "../components/headerm";
import Homeone from "../components/utils/home/homeSectionOne";
export default function HomePage(){
    return(
        <>
            <div className="w-full">
                <Header />
                <Headerm />
                <Homeone/>
            </div>
        </>
    )
}