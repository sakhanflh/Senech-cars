import { FaArrowRightLong, FaStar } from "react-icons/fa6";
import { SiToyota } from "react-icons/si";

export function CardCustomers({name, review, mobil, image}) {
    return (
        <>
            <div className="w-full bg-white rounded-lg text-dark overflow-hidden gap-5 flex flex-col font-montserat xl:w-96 xl:rounded-xl">
                <div>
                    <img src={image} alt=""/>
                </div>

                <div className="flex flex-col gap-5 px-5">
                    <div className="gap-1 flex flex-col">
                        <p className="font-semibold text-sm">{name}</p>
                        <span className="flex text-extra">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </span>
                    </div>
                    <div className="text-sm">
                        <p>{review}</p>
                    </div>
                </div>
                
                <div className="flex items-center gap-5 border-t-2 px-5 py-3">
                    <div className="text-4xl">
                        <SiToyota />
                    </div>
                    <div className="text-sm">
                        <p className="font-semibold">{mobil}</p>
                        <p className="flex items-center gap-1">Similiar cars <FaArrowRightLong/></p>
                    </div>
                </div>
            </div>
        </>
    )
}