import { Swiper, SwiperSlide } from "swiper/react";
import { HomeCar, HomeCar2, HomeCar3 } from "./HomeCar";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { SiHonda, SiNissan, SiToyota } from "react-icons/si";


export default function HomeFour() {
    return (
        <>
            <div className="w-full h-auto">
                <div className="w-full h-96 -z-30 absolute profil-triangle">
                </div>
                <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true}}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className="h-[37rem]"
                >
                    <SwiperSlide className="pb-5"><HomeCar /></SwiperSlide>
                    <SwiperSlide className="pb-5"><HomeCar2/></SwiperSlide>
                    <SwiperSlide className="pb-5"><HomeCar3/></SwiperSlide>
                </Swiper>

                <div className="flex flex-col items-center gap-2">
                    <h1 className="text-xs font-montserat">IN COOPERATION WITH</h1>
                    <div className="flex gap-5 text-xl">
                        <SiToyota/>
                        <SiHonda/>
                        <SiNissan/>
                    </div>
                </div>
            </div>
        </>
    )
}