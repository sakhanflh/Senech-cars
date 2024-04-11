export function UtilityCard(){
    return(
        <div className="px-5">
            <div className="w-full bg-red-500 flex flex-col rounded-lg overflow-hidden">
                <div className="flex items-center pl-5 justify-between bg-blue-400">
                    <p className=" font-bold text-dark">We are your trusted advisor</p>
                    <div className="w-24">
                        <img src="/image/how-carvago-works-banner-advice-mobile.webp" alt="" />
                    </div>
                </div>
                <div className="p-5 bg-blue-200 text-sm">
                    <p><span className="font-bold">We offer vehicles from trustworthy sellers, we are not their owners. This is why we are always pleased to advise you objectively.</span> We don't need to get rid of any unsellable vehicles which have been standing in the car lot for half a year.</p>
                </div>
            </div>
        </div>
    )
}