import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function HomeThree() {
    return (
        <>
            <div className="w-full h-52 px-5 mt-16 flex flex-col">
                <div className="w-full h-auto flex items-center flex-col">
                    <h1 className="text-2xl font-bold text-dark">How does it work?</h1>
                </div>

                <div>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        // navigation
                        pagination={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        className="w-full h-96"
                    >
                        <SwiperSlide>
                            <div className="flex flex-col items-center justify-center w-full h-full px-5">
                                <img src="/img/how-it-works-mobile-1-2x.webp" alt="" />
                                <div className="flex gap-5 justify-center w-full px-5">
                                    <p className="text-secondary font-medium">01.</p>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-dark font-medium">Choose anywhere in Europe</p>
                                        <p>No more compromises! With us, you have an unrivaled selection of cars in one place.</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="flex flex-col items-center justify-center w-full h-full px-5">
                                <img src="/img/how-it-works-mobile-2-2x.webp" alt="" />
                                <div className="flex gap-5 justify-center w-full px-5">
                                    <p className="text-secondary font-medium">02.</p>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-dark font-medium">We'll inspect the car closely</p>
                                        <p>A certified mechanic will thoroughly inspect yout car. You will decide according to the result after.</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="flex flex-col items-center justify-center w-full h-full px-5">
                                <img src="/img/how-it-works-mobile-3-2x.webp" alt="" />
                                <div className="flex gap-5 justify-center w-full px-5">
                                    <p className="text-secondary font-medium">03.</p>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-dark font-medium">We'll deliver it to your home</p>
                                        <p>We arrange all the paperwork, registration and delivery. All you need to do is enjoy your new car.</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                </div>
                <div className="w-full flex justify-center">
                    <button className="py-2 px-6 bg-gradient-to-r to-primary from-tertiary rounded-md font-semibold text-white">Want to know more?</button>
                </div>
            </div>
        </>
    )
}