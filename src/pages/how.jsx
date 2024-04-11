import Header from "../components/header";
import Headerm from "../components/headerm";
import { FaArrowDownLong } from "react-icons/fa6";
import { Utilityhome } from "../components/utils/util/Utilityhome";
import { UtilityHow } from "../components/utils/util/UtilityHow";
import { UtilityCard } from "../components/utils/util/UtilityCard";

export default function HowPage(){
    return(
        <>
        <div>
            <Header />
            <Headerm />
            
            <div className="pt-24 text-dark w-full flex flex-col gap-10">
                <div className="flex flex-col gap-5 px-5">
                    <h1 className="text-2xl font-bold">How does Senech.cars work?</h1>
                    <p className="font-bold text-sm">Simply. Choose a car. We will arrange a detailed inspection. Based on that you can decide whether you want the car. We then buy it, arrange an extended warranty, register it and deliver it to you.</p>
                    <button className="bg-gradient-to-r from-tertiary to-primary p-5 w-56 rounded-lg text-white flex items-center gap-1 font-semibold"><FaArrowDownLong /> I want to know more</button>
                </div>

                <div className="h-72 how-triangle pl-5">
                    <img src="https://media.istockphoto.com/id/1171572791/photo/young-man-with-blue-shirt-and-tie-getting-out-of-car-in-town.jpg?s=612x612&w=0&k=20&c=8LLyCr-grBRpxu2wVXS5O__6BPew8HKt7A6TKLj9ol4=" alt="" className="h-full object-cover"/>
                </div>
                <div className="-translate-y-20">
                    <Utilityhome />
                </div>
                
                <div className="triangle-how -z-20">
                <div className=" w-full h-72 px-5 relative">
                    <div className="bg-slate-100 w-full h-full flex items-center flex-col justify-center">
                        <i>*Untuk Vidio</i>
                    </div>
                </div>
                </div>

                <div className="w-full px-5 flex flex-col items-center gap-3">
                    <h1 className="text-3xl font-bold text-tertiary">01.</h1>
                    <p className="text-2xl font-bold">1 000 000 cars per click</p>
                    <p>We process over 7 million ads every day, but we recommend only 10% of them for purchase. With the remaining cars, something often "doesn't fit" us.</p>
                </div>
                <div>
                    <UtilityHow />
                </div>
                
                <div>
                    <UtilityCard />
                </div>
            </div>
        </div>
        </>
    )
}