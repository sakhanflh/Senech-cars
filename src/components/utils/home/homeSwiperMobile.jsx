import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";


export default function HomeSwiperMobile() {
    const [isHovered, setIsHovered] = useState(null)

    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={180}
            slidesPerView={3}
            loop={true}
            // navigation
            // pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className='flex w-full h-44 xl:w-auto xl:h-[19rem] text-dark font-semibold ' 
        >
            <SwiperSlide>
                <div className={isHovered === 1 ? 'w-44 h-40 xl:w-80 xl:h-72 transition-all duration-500 ease-in-out z-30 rounded-lg items-center flex flex-col justify-around border-2' : 'w-44 h-40 xl:w-80 xl:h-64 rounded-lg items-center flex flex-col justify-around border-2 transition-all duration-500 ease-in-out'} onMouseEnter={() => setIsHovered(1)} onMouseLeave={() => setIsHovered(null)}>
                    <p className={isHovered === 1 ? 'xl:text-2xl text-tertiary' : 'xl:text-2xl'}>City Car</p>
                    <img src="/image/CityCar.png" alt="" className='w-32 xl:w-52' />
                    <p className={isHovered === 1 ? 'hidden w-full justify-end px-5 xl:flex opacity-100 text-xl text-tertiary xl:text-3xl transition-all duration-500' : 'w-full justify-end hidden xl:flex opacity-0 text-xl text-tertiary xl:text-3xl'}><FaArrowRight /></p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className={isHovered === 2 ? 'w-44 h-40 xl:w-80 xl:h-72 transition-all duration-500 ease-in-out z-30 rounded-lg items-center flex flex-col justify-around border-2' : 'w-44 h-40 xl:w-80 xl:h-64 rounded-lg items-center flex flex-col justify-around border-2 transition-all duration-500 ease-in-out'} onMouseEnter={() => setIsHovered(2)} onMouseLeave={() => setIsHovered(null)}>
                    <p className={isHovered === 2 ? 'xl:text-2xl text-tertiary' : 'xl:text-2xl'}>Estate Car</p>
                    <img src="/image/EstateCar.png" alt="" className='w-28 xl:w-52' />
                    <p className={isHovered === 2 ? 'hidden w-full justify-end px-5 xl:flex opacity-100 text-xl text-tertiary xl:text-3xl transition-all duration-500' : 'w-full justify-end hidden xl:flex opacity-0 text-xl text-tertiary xl:text-3xl'}><FaArrowRight /></p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className={isHovered === 3 ? 'w-44 h-40 xl:w-80 xl:h-72 transition-all duration-500 ease-in-out z-30 rounded-lg items-center flex flex-col justify-around border-2' : 'w-44 h-40 xl:w-80 xl:h-64 rounded-lg items-center flex flex-col justify-around border-2 transition-all duration-500 ease-in-out'} onMouseEnter={() => setIsHovered(3)} onMouseLeave={() => setIsHovered(null)}>
                    <p className={isHovered === 3 ? 'xl:text-2xl text-tertiary' : 'xl:text-2xl'}>Family Car</p>
                    <img src="/image/FamilyCar.png" alt="" className='w-32 xl:w-52' />
                    <p className={isHovered === 3 ? 'hidden w-full justify-end px-5 xl:flex opacity-100 text-xl text-tertiary xl:text-3xl transition-all duration-500' : 'w-full justify-end hidden xl:flex opacity-0 text-xl text-tertiary xl:text-3xl'}><FaArrowRight /></p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className={isHovered === 4 ? 'w-44 h-40 xl:w-80 xl:h-72 transition-all duration-500 ease-in-out z-30 rounded-lg items-center flex flex-col justify-around border-2' : 'w-44 h-40 xl:w-80 xl:h-64 rounded-lg items-center flex flex-col justify-around border-2 transition-all duration-500 ease-in-out'} onMouseEnter={() => setIsHovered(4)} onMouseLeave={() => setIsHovered(null)}>
                    <p className={isHovered === 4 ? 'xl:text-2xl text-tertiary' : 'xl:text-2xl'}>Suv Car</p>
                    <img src="/image/SuvCar.png" alt="" className='w-28 xl:w-52' />
                    <p className={isHovered === 4 ? 'hidden w-full justify-end px-5 xl:flex opacity-100 text-xl text-tertiary xl:text-3xl transition-all duration-500' : 'w-full justify-end hidden xl:flex opacity-0 text-xl text-tertiary xl:text-3xl'}><FaArrowRight /></p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className={isHovered === 5 ? 'w-44 h-40 xl:w-80 xl:h-72 transition-all duration-500 ease-in-out z-30 rounded-lg items-center flex flex-col justify-around border-2' : 'w-44 h-40 xl:w-80 xl:h-64 rounded-lg items-center flex flex-col justify-around border-2 transition-all duration-500 ease-in-out'} onMouseEnter={() => setIsHovered(5)} onMouseLeave={() => setIsHovered(null)}>
                    <p className={isHovered === 5 ? 'xl:text-2xl text-tertiary' : 'xl:text-2xl'}>Sport Car</p>
                    <img src="/image/SportCar.png" alt="" className='w-32 xl:w-56' />
                    <p className={isHovered === 5 ? 'hidden w-full justify-end px-5 xl:flex opacity-100 text-xl text-tertiary xl:text-3xl transition-all duration-500' : 'w-full justify-end hidden xl:flex opacity-0 text-xl text-tertiary xl:text-3xl'}><FaArrowRight /></p>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}