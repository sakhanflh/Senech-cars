import { Swiper, SwiperSlide } from "swiper/react";
import { HomeCar, HomeCar2, HomeCar3 } from "./HomeCar";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { SiHonda, SiNissan, SiToyota } from "react-icons/si";
import { FaArrowRightLong } from "react-icons/fa6";


export default function HomeFour() {
    return (
        <>
            <div className="w-full h-auto flex flex-col xl:flex-row-reverse  xl:px-10 xl:justify-center">
                <div className="w-full xl:w-[30%] px-10 mt-10 mb-10 xl:mt-0 xl:mb-0 flex flex-col items-center gap-5 xl:justify-center">
                    <h1 className="text-2xl font-bold xl:text-3xl text-dark">A thorough car inspection - CarAudit&trade;</h1>
                    <p>A qualified mechanic will thoroughly inspect your chosen car. You will receive a detailed report about the technical condition of the car, photo documentation, and our advice. You just take your time and decide.</p>
                    <button className="bg-gradient-to-r gap-3 from-secondary to-primary flex items-center justify-center px-5 py-2 xl:py-4 text-white rounded-md font-semibold xl:-translate-x-8">More about CarAudit <FaArrowRightLong /></button>
                    <div className="border-t-2 pt-5 hidden xl:flex xl:flex-col gap-3">
                        <p>“I've never experienced knowing so much about a car in advance.”</p>
                        <div class="w-full flex gap-2 ">
                            <div class="w-8 h-8 relative overflow-hidden rounded-full">
                                <img src="/img/profile-pic-2.jpg" alt="" class="absolute w-full"/>
                            </div>
                            <div>
                                <h1 class="text-sm font-semibold">Tokio Yee</h1>
                                <p class="text-xs">Customer</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full xl:w-[60%]">
                    <div className="w-full h-96 -z-30 absolute profil-triangle profil-triangle-desktop">
                    </div>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        className="h-[37rem]"
                    >
                        <SwiperSlide className="pb-5"><HomeCar /></SwiperSlide>
                        <SwiperSlide className="pb-5"><HomeCar2 /></SwiperSlide>
                        <SwiperSlide className="pb-5"><HomeCar3 /></SwiperSlide>
                    </Swiper>

                    <div className="flex flex-col items-center gap-2">
                        <h1 className="text-xs font-montserat">IN COOPERATION WITH</h1>
                        <div className="flex gap-5 text-xl">
                            <SiToyota />
                            <SiHonda />
                            <SiNissan />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}