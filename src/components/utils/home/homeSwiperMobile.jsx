import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function HomeSwiperMobile(){
    return(
        <Swiper
            spaceBetween={5}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide><img src="/image/CityCar.jpg" alt="" style={{width: 'auto', height: '120px'}}/></SwiperSlide>
            <SwiperSlide><img src="/image/EstateCar.jpg" alt="" style={{width: 'auto', height: '120px'}}/></SwiperSlide>
            <SwiperSlide><img src="/image/FamilyCar.jpg" alt="" style={{width: 'auto', height: '120px'}}/></SwiperSlide>
            <SwiperSlide><img src="/image/SuvCar.jpg" alt="" style={{width: 'auto', height: '120px'}}/></SwiperSlide>
            <SwiperSlide><img src="/image/SportCar.jpg" alt="" style={{width: 'auto', height: '120px'}}/></SwiperSlide>
        </Swiper>
    )
}