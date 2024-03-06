import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function HomeSwiperMobile(){
    return(
        <Swiper
            spaceBetween={10}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide><img src="/image/CityCar.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/image/EstateCar.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/image/FamilyCar.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/image/SuvCar.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/image/SportCar.jpg" alt="" /></SwiperSlide>
        </Swiper>
    )
}