import { IoFilterOutline } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import CardVerified from "../../../assets/CardCarsVerified";
import { useEffect, useState } from "react";
import { VerifiedCarsData } from "../../../data/VerifiedCarsData";
import { FaArrowUpLong } from "react-icons/fa6";
import { Footer } from "../../Footer";
import { Utilityhome } from "../util/Utilityhome";


export function MainSection() {
    const [verified, setVerified] = useState([])
    useEffect(() => {
        setVerified(VerifiedCarsData)
    }, [])

    const [prevScrollPos, setPrevScrollPos] = useState(0); 
    const [visible, setVisible] = useState(true); 

    // Back to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    // Back to top End

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos); 
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <>
            <div className={visible ? "pt-20 w-full border-b-2 py-4 px-5 fixed bg-white z-20 transition-all duration-300" : "pt-1 w-full border-b-2 py-4 px-5 fixed bg-white z-20 transition-all duration-300"}>
                <button className="flex items-center bg-gradient-to-r from-tertiary to bg-secondary py-2 px-6 gap-1 rounded-md text-white"><IoFilterOutline /> Filter</button>
            </div>
            {/* Main Section */}
            <div className="pt-40 w-full px-5 bg-blue-50">
                <div className="pb-3">
                    <p className="text-xl font-bold">Verified Cars</p>
                    <div className="flex w-full justify-between">
                        <p>50 results</p>
                        <p className="flex items-center gap-2">Newest add <IoIosArrowDown /> </p>
                    </div>
                </div>

                <div className="w-full flex flex-col gap-5">
                    {verified.map(ver => (
                        <div key={ver.id}>
                            <CardVerified
                                image={ver.image}
                                name={ver.name}
                                horsepower={ver.horsepower}
                                manufacture_date={ver.manufacture_date}
                                kilometers={ver.kilometers}
                                transmission={ver.transmission}
                                fuel_type={ver.fuel_type}
                                location={ver.location}
                                price={ver.price}
                            />
                        </div>
                    ))}
                </div>
                <div className=" py-10 flex items-center justify-between">
                    <div className="flex items-center gap-2 hover:underline" onClick={scrollToTop}>
                        <FaArrowUpLong />
                        <p>Back to top</p>
                    </div>

                    <div className="flex text-3xl">
                        <IoIosArrowDropleft />
                        <IoIosArrowDropright />
                    </div>
                </div>

                <Utilityhome />
            </div>

            <Footer />
        </>
    )
}