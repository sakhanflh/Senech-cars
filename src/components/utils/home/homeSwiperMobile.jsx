import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function HomeSwiperMobile(){
    return(
        <Swiper
            spaceBetween={150}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className='flex w-full h-40'
        >
            <SwiperSlide>
                <div className='w-40 h-full items-center flex justify-center'>
                    <img src="/image/CityCar.jpg" alt="" className='border-2 rounded-lg'/>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='w-40 h-full items-center flex justify-center'>
                    <img src="/image/EstateCar.jpg" alt="" className='border-2 rounded-lg'/>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='w-40 h-full items-center flex justify-center'>
                    <img src="/image/FamilyCar.jpg" alt="" className='border-2 rounded-lg'/>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='w-40 h-full items-center flex justify-center'>
                    <img src="/image/SuvCar.jpg" alt="" className='border-2 rounded-lg'/>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='w-40 h-full items-center flex justify-center'>
                    <img src="/image/SportCar.jpg" alt="" className='border-2 rounded-lg'/>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}