import { Swiper, SwiperSlide } from "swiper/react";
import { HomeCar, HomeCar2, HomeCar3 } from "./HomeCar";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

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
            </div>
        </>
    )
}