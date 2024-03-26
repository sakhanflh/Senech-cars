import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaYoutube } from "react-icons/fa";

export function Footer() {
    return (
        <>
            <div className="bg-blue-50 w-full p-5 xl:p-16 mt-10 border-t-2">
                <div className="flex flex-col-reverse flex-wrap w-full gap-10 xl:flex-row xl:justify-between xl:gap-5">
                    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between xl:flex-col xl:justify-normal xl:items-start xl:gap-5">
                        <div className="w-16">
                            <img src="/img/Senech-blue-secondary.png" alt="" />
                        </div>
                        <div className="flex flex-col gap-2 md:items-end text-secondary xl:gap-5 xl:items-baseline">
                            <p className="text-dark opacity-60">Senech 2024 • All rights reserved</p>
                            <div className="flex text-3xl xl:text-3xl gap-2">
                                <FaFacebookSquare />
                                <FaInstagramSquare />
                                <FaLinkedin />
                                <FaYoutube />

                            </div>
                        </div>
                    </div>

                    <div className="flex w-full md:w-[90%] xl:w-[70%] flex-wrap md:flex-nowrap gap-5 text-dark">
                        <div className="w-[45%] md:w-[33%] xl:w-[28%] gap-5 flex flex-col">
                            <h1 className="font-semibold text-xl">Carsell</h1>
                            <span className="flex flex-col gap-3">
                                <p>Buy</p>
                                <p>How it works</p>
                                <p>Reviews</p>
                                <p>Electric & Hybid</p>
                                <p>Site map</p>
                            </span>
                        </div>
                        <div className="w-[45%] md:w-[33%] xl:w-[28%] gap-5 flex flex-col">
                            <h1 className="font-semibold text-xl">Services</h1>
                            <span className="flex flex-col gap-3">
                                <p>CarAudit™</p>
                                <p>Delivery</p>
                                <p>Financing</p>
                                <p>Warranty</p>
                            </span>
                        </div>
                        <div className="w-[45%] md:w-[35%] xl:w-[28%] gap-5 flex flex-col">
                            <h1 className="text-xl font-semibold">Company</h1>
                            <span className="flex flex-col gap-3">
                                <p>About us</p>
                                <p>Contact</p>
                                <p>Term of Use</p>
                                <p>Whistleblowing</p>
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}