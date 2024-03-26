import { FaArrowRight, FaHandHoldingDollar } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { CardCustomers } from "../../../data/CardCustomers";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { useEffect, useState } from "react";
import { CustomerData } from "../../../data/CustomerData";
import UtilityHomeXL, { Utilityhome } from "../util/Utilityhome";
import { Footer } from "../../Footer";




export default function HomeFive() {
    const [customers, setCustomers] = useState([])
    useEffect(() => {
        setCustomers(CustomerData)
    }, [])

    const swiper = useSwiper()

    console.log(customers)
    return (
        <>
            <div className="w-full py-20 gap-5 px-5 flex flex-col items-center xl:w-full xl:px-5 text-dark">
                <div className="text-center flex flex-col gap-3">
                    <h1 className="text-xl font-semibold xl:text-4xl">Comprehensive services just a few clicks away</h1>
                    <p className="text-sm px-10 xl:text-base">One-stop solution for all your needs, from the comfort of your home.</p>
                </div>

                <div className="flex flex-col gap-5 xl:w-full flex-wrap xl:flex-row xl:justify-center ">
                    {/* 1 */}
                    <div className="w-full xl:w-[30%] xl:h-80 border-2 px-5 py-5 rounded-lg flex flex-col items-center gap-2 hover:shadow-xl transition-all duration-500 xl:gap-5 xl:justify-center">
                        <div className="flex w-full font-bold items-center gap-5 text-lg text-tertiary xl:flex-col xl:gap-10">
                            <FaHandHoldingDollar className="xl:text-4xl"/>
                            <h1 className="xl:text-2xl xl:text-dark">Financing</h1>
                            <FaArrowRight className="xl:hidden"/>
                        </div>
                        <div className="text-dark">
                            <p className="flex items-center gap-2"><CiCircleCheck /> Completely online within few hours</p>
                            <p className="flex items-center gap-2"><CiCircleCheck /> Transparent, no fine print</p>
                        </div>
                    </div>
                    {/* 1 End */}
                    <div className="w-full xl:w-[30%] xl:h-80 border-2 px-5 py-5 rounded-lg flex flex-col items-center gap-2 hover:shadow-xl transition-all duration-500 xl:gap-5 xl:justify-center">
                        <div className="flex w-full font-bold items-center gap-5 text-lg text-tertiary xl:flex-col xl:gap-10">
                            <FaHandHoldingDollar className="xl:text-4xl"/>
                            <h1 className="xl:text-2xl xl:text-dark">CarAudit inspection</h1>
                            <FaArrowRight className="xl:hidden"/>
                        </div>
                        <div>
                            <p className="flex items-center gap-2"><CiCircleCheck /> Thorought vehicle check</p>
                            <p className="flex items-center gap-2"><CiCircleCheck /> Qualified mechanics and technicians</p>
                        </div>
                    </div>
                    {/* 2 End */}
                    {/* 3 */}
                    <div className="w-full xl:w-[30%] xl:h-80 border-2 px-5 py-5 rounded-lg flex flex-col items-center gap-2 hover:shadow-xl transition-all duration-500 xl:gap-5 xl:justify-center">
                        <div className="flex items-center font-bold  w-full gap-5 text-lg text-tertiary xl:flex-col xl:gap-10">
                            <FaHandHoldingDollar className="xl:text-4xl"/>
                            <h1 className="xl:text-2xl xl:text-dark">Delivery</h1>
                            <FaArrowRight className="xl:hidden"/>
                        </div>
                        <div>
                            <p className="flex items-center gap-2"><CiCircleCheck /> To your doorstep or a Pick-up Point</p>
                            <p className="flex items-center gap-2"><CiCircleCheck /> Unbeatable price</p>
                        </div>
                    </div>
                    {/* 3 End */}
                    <div className="w-full xl:w-[30%] xl:h-80 border-2 px-5 py-5 rounded-lg flex flex-col items-center gap-2 hover:shadow-xl transition-all duration-500 xl:gap-5 xl:justify-center">
                        <div className="flex w-full font-bold items-center gap-5 text-lg text-tertiary xl:flex-col xl:gap-10">
                            <FaHandHoldingDollar className="xl:text-4xl"/>
                            <h1 className="xl:text-2xl xl:text-dark">Financing</h1>
                            <FaArrowRight className="xl:hidden"/>
                        </div>
                        <div>
                            <p className="flex items-center gap-2"><CiCircleCheck /> Completely online within few hours</p>
                            <p className="flex items-center gap-2"><CiCircleCheck /> Transparent, no fine print</p>
                        </div>
                    </div>
                    {/* 1 End */}
                    <div className="w-full xl:w-[30%] xl:h-80 border-2 px-5 py-5 rounded-lg flex flex-col items-center gap-2 hover:shadow-xl transition-all duration-500 xl:gap-5 xl:justify-center">
                        <div className="flex w-full font-bold items-center gap-5 text-lg text-tertiary xl:flex-col xl:gap-10">
                            <FaHandHoldingDollar className="xl:text-4xl"/>
                            <h1 className="xl:text-2xl xl:text-dark">CarAudit inspection</h1>
                            <FaArrowRight className="xl:hidden"/>
                        </div>
                        <div>
                            <p className="flex items-center gap-2"><CiCircleCheck /> Thorought vehicle check</p>
                            <p className="flex items-center gap-2"><CiCircleCheck /> Qualified mechanics and technicians</p>
                        </div>
                    </div>
                    {/* 2 End */}
                    {/* 3 */}
                    <div className="w-full xl:w-[30%] xl:h-80 border-2 px-5 py-5 rounded-lg flex flex-col items-center gap-2 hover:shadow-xl transition-all duration-500 xl:gap-5 xl:justify-center">
                        <div className="flex items-center font-bold  w-full gap-5 text-lg text-tertiary xl:flex-col xl:gap-10">
                            <FaHandHoldingDollar className="xl:text-4xl"/>
                            <h1 className="xl:text-2xl xl:text-dark">Delivery</h1>
                            <FaArrowRight className="xl:hidden"/>
                        </div>
                        <div>
                            <p className="flex items-center gap-2"><CiCircleCheck /> To your doorstep or a Pick-up Point</p>
                            <p className="flex items-center gap-2"><CiCircleCheck /> Unbeatable price</p>
                        </div>
                    </div>
                    {/* 3 End */}
                </div>
                </div>
                {/* 1 End */}
            <div className="absolute -z-10 w-full clip-triangle-right">

            </div>

            <div className="px-5 py-10 items-center flex w-full flex-col gap-10 relative xl:flex-wrap xl:flex-row xl:flex xl:items-start">
                <div className="flex flex-col w-full items-center xl:w-[30%] xl:pt-10">
                    <div className="flex flex-col gap-5 xl:pl-10">
                        <h1 className="text-2xl font-semibold xl:text-4xl xl:font-bold text-dark">What do our customers think?</h1>
                        <div className="gap-3 text-dark hidden xl:flex">
                            <p className="text-3xl font-semibold">4.8</p>
                            <div>
                                <span className="flex text-2xl text-extra"> 
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStarHalf/>
                                </span>
                                <p className="font-semibold">1780 Reviews</p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-button-next" onClick={() => swiper.slideNext()}></div>
                    <div className="swiper-button-prev" onClick={() => swiper.slidePrev()}></div>
                </div>

                <div className="w-full items-center flex flex-col xl:w-[65%]">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        breakpoints= {{
                            360: {
                                slidesPerView: 1,
                                navigation: false,
                            },
                            1280: {
                                slidesPerView: 2,
                                spaceBetween: 0,
                            }
                        }}
                        navigation={{
                            prevEl: '.swiper-button-prev',
                            nextEl: '.swiper-button-next'
                        }}
                        pagination={{ clickable: true }}
                        className="w-full h-[40rem]"
                    >
                        {customers.map(cus => (
                            <SwiperSlide key={cus.id}>
                                <CardCustomers
                                    name={cus.nama}
                                    image={cus.image}
                                    review={cus.review}
                                    mobil={cus.mobil}
                                />
                            </SwiperSlide>

                        ))}
                    </Swiper>
                </div>
            </div>
                <div className="w-full xl:hidden pt-10">
                    <Utilityhome />
                </div>
                <div className="w-full hidden xl:block px-10 py-20">
                    <UtilityHomeXL />
                </div>
            <Footer />
        </>
    )
}