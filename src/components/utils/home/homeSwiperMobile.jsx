import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function HomeSwiperMobile() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={100}
            slidesPerView={3}
            loop={true}
            // navigation
            // pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className='flex w-full h-44 text-dark font-semibold'
        >
            <SwiperSlide>
                <div className='w-44 h-40 rounded-lg items-center flex flex-col justify-around border-2'>
                    <p>City Car</p>
                    <img src="/image/CityCar.png" alt="" className='w-32' />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='w-44 h-40 rounded-lg items-center flex flex-col justify-around border-2'>
                    <p>Estate Car</p>
                    <img src="/image/EstateCar.png" alt="" className='w-28' />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='w-44 h-40 rounded-lg items-center flex flex-col justify-around border-2'>
                    <p>Family Car</p>
                    <img src="/image/FamilyCar.png" alt="" className='w-32' />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='w-44 h-40 rounded-lg items-center flex flex-col justify-around border-2'>
                    <p>Suv Car</p>
                    <img src="/image/SuvCar.png" alt="" className='w-28' />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='w-44 h-40 rounded-lg items-center flex flex-col justify-around border-2'>
                    <p>Sport Car</p>
                    <img src="/image/SportCar.png" alt="" className='w-32' />
                </div>
            </SwiperSlide>
        </Swiper>
    )
}