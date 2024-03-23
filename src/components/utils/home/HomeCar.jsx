export function HomeCar(){
    return(
        <>
        <div class="w-full h-full flex flex-col items-center justify-center z-10 px-4 pt-10">
                    {/* <!-- PROFILE --> */}
                    <div class="w-[80%] shadow-xl h-[25%] bg-slate-50 rounded-t-md  flex flex-col gap-2 md:w-[60%]">
                        <div class="w-full flex px-4 py-2 gap-2">
                            <div class="w-8 h-8 relative overflow-hidden rounded-full">
                                <img src="/img/profile-pic-2.jpg" alt="" class="absolute w-full"/>
                            </div>
                            <div>
                                <h1 class="text-sm font-semibold">Ming Kheems</h1>
                                <p class="text-xs">Senech Mechanic</p>
                            </div>
                        </div>
                        <div class="w-full text-xs px-4 text-balance">
                            <q><i> Car in the striking Depok Town Center. Very good condition, technically in perfect order </i></q>
                        </div>
                    </div>
                    {/* <!-- PROFILE --> */}

                    {/* <!-- RESULT --> */}
                    <div class="w-[90%] h-[70%] bg-white shadow-xl rounded-md overflow-hidden md:w-[70%] md:shadow-md">
                        <div class="w-full h-[25%] border-b-2 flex gap-2 items-center md:h-30%">
                            <div class="w-32 h-full overflow-hidden md:w-44">
                                <img src="/img/civic-1.jpg" alt=""/>
                            </div>
                            <h1 class="font-semibold md:text-lg">Honda Civic i-VTEC 228kW</h1>
                        </div>

                        {/* <!-- PERFORMANCE --> */}
                        <div class="flex flex-col w-full gap-3 p-4 h-[60%] border-b-2">

                            <div class="flex justify-between w-full items-center md:px-4">
                                <div class="flex items-center gap-2 text-dark md:text-base md:gap-3">
                                    <div class="w-3 h-3 xl:w-4 xl:h-4">
                                        <img src="/img/icons8-car-50.png" alt=""/>
                                    </div>
                                    <p class="text-sm md:text-base">Exterior</p>
                                </div>
                                <div class="w-32 h-3 bg-neutral-100 rounded-3xl border-2 ">
                                    <div class="w-[87%] bg-gradient-to-r from-primary to-tertiary h-full rounded-md"></div>
                                </div>
                            </div>

                            <div class="flex justify-between w-full items-center md:px-4">
                                <div class="flex items-center gap-2 text-dark md:text-base md:gap-3">
                                    <div class="w-3 h-3 xl:w-4 xl:h-4">
                                        <img src="/img/icons8-car-seat-50.png" alt=""/>
                                    </div>
                                    <p class="text-sm md:text-base">Interior</p>
                                </div>
                                <div class="w-32 h-3 bg-neutral-100 rounded-3xl border-2 ">
                                    <div class="w-[78%] bg-gradient-to-r from-primary to-tertiary h-full rounded-md"></div>
                                </div>
                            </div>

                            <div class="flex justify-between w-full items-center md:px-4">
                                <div class="flex items-center gap-2 text-dark md:text-base md:gap-3">
                                    <div class="w-3 h-3 xl:w-4 xl:h-4">
                                        <img src="/img/icons8-engine-50.png" alt=""/>
                                    </div>
                                    <p class="text-sm md:text-base">Engine</p>
                                </div>
                                <div class="w-32 h-3 bg-neutral-100 rounded-3xl border-2 ">
                                    <div class="w-[92%] bg-gradient-to-r from-primary to-tertiary h-full rounded-md"></div>
                                </div>
                            </div>

                            <div class="flex justify-between w-full items-center md:px-4">
                                <div class="flex items-center gap-2 text-dark md:text-base md:gap-3">
                                    <div class="w-3 h-3 xl:w-4 xl:h-4">
                                        <img src="/img/icons8-wheel-50.png" alt=""/>
                                    </div>
                                    <p class="text-sm md:text-base">Wheel</p>
                                </div>
                                <div class="w-32 h-3 bg-neutral-100 rounded-3xl border-2 ">
                                    <div class="w-[100%] bg-gradient-to-r from-primary to-tertiary h-full rounded-md"></div>
                                </div>
                            </div>

                            <div class="flex justify-between w-full items-center md:px-4">
                                <div class="flex items-center gap-2 text-dark md:text-base md:gap-3">
                                    <div class="w-3 h-3 xl:w-4 xl:h-4">
                                        <img src="/img/icons8-road-50.png" alt=""/>
                                    </div>
                                    <p class="text-sm md:text-base">Testdrive</p>
                                </div>
                                <div class="w-32 h-3 bg-neutral-100 rounded-3xl border-2 ">
                                    <div class="w-[95%] bg-gradient-to-r from-primary to-tertiary h-full rounded-md"></div>
                                </div>
                            </div>

                        </div>
                        {/* <!-- PERFORMANCE --> */}

                        {/* <!-- POINT --> */}
                        <div class="w-full flex justify-center h-[15%]  items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-dark">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                            </svg>
                            <p class="text-sm text-dark">Checked all <b class="text-tertiary"> 270 points</b></p>
                        </div>
                        {/* <!-- POINT --> */}

                    </div>
                    {/* <!-- RESULT --> */}

                </div>
                {/* <!-- 1 --> */}
        </>
    )
}

export function HomeCar2(){
    return(
        <>
        <div class="w-full h-full flex flex-col items-center justify-center z-10 px-4 pt-10">
                    {/* <!-- PROFILE --> */}
                    <div class="w-[80%] shadow-xl h-[25%] bg-slate-50 rounded-t-md  flex flex-col gap-2 md:w-[60%]">
                        <div class="w-full flex px-4 py-2 gap-2">
                            <div class="w-8 h-8 relative overflow-hidden rounded-full">
                                <img src="https://www.wikihow.com/images/9/90/What_type_of_person_are_you_quiz_pic.png" alt="" class="absolute w-full h-full"/>
                            </div>
                            <div>
                                <h1 class="text-sm font-semibold">Ming Kheems</h1>
                                <p class="text-xs">Senech Mechanic</p>
                            </div>
                        </div>
                        <div class="w-full text-xs px-4 text-balance">
                            <q><i> Car in the striking Depok Town Center. Very good condition, technically in perfect order </i></q>
                        </div>
                    </div>
                    {/* <!-- PROFILE --> */}

                    {/* <!-- RESULT --> */}
                    <div class="w-[90%] h-[70%] bg-white shadow-xl rounded-md overflow-hidden md:w-[70%] md:shadow-md">
                        <div class="w-full h-[25%] border-b-2 flex gap-2 items-center md:h-30%">
                            <div class="w-32 h-full overflow-hidden md:w-44">
                                <img src="https://seiboncarbon.com/seicontent/wp-content/uploads/2020/05/49834311221_6c43778f49_o.jpeg" alt=""/>
                            </div>
                            <h1 class="font-semibold md:text-lg">Supra MK4 2JzGTE 280Hp</h1>
                        </div>

                        {/* <!-- PERFORMANCE --> */}
                        <div class="flex flex-col w-full gap-3 p-4 h-[60%] border-b-2">

                            <div class="flex justify-between w-full items-center md:px-4">
                                <div class="flex items-center gap-2 text-dark md:text-base md:gap-3">
                                    <div class="w-3 h-3 xl:w-4 xl:h-4">
                                        <img src="/img/icons8-car-50.png" alt=""/>
                                    </div>
                                    <p class="text-sm md:text-base">Exterior</p>
                                </div>
                                <div class="w-32 h-3 bg-neutral-100 rounded-3xl border-2 ">
                                    <div class="w-[70%] bg-gradient-to-r from-primary to-tertiary h-full rounded-md"></div>
                                </div>
                            </div>

                            <div class="flex justify-between w-full items-center md:px-4">
                                <div class="flex items-center gap-2 text-dark md:text-base md:gap-3">
                                    <div class="w-3 h-3 xl:w-4 xl:h-4">
                                        <img src="/img/icons8-car-seat-50.png" alt=""/>
                                    </div>
                                    <p class="text-sm md:text-base">Interior</p>
                                </div>
                                <div class="w-32 h-3 bg-neutral-100 rounded-3xl border-2 ">
                                    <div class="w-[85%] bg-gradient-to-r from-primary to-tertiary h-full rounded-md"></div>
                                </div>
                            </div>

                            <div class="flex justify-between w-full items-center md:px-4">
                                <div class="flex items-center gap-2 text-dark md:text-base md:gap-3">
                                    <div class="w-3 h-3 xl:w-4 xl:h-4">
                                        <img src="/img/icons8-engine-50.png" alt=""/>
                                    </div>
                                    <p class="text-sm md:text-base">Engine</p>
                                </div>
                                <div class="w-32 h-3 bg-neutral-100 rounded-3xl border-2 ">
                                    <div class="w-[98%] bg-gradient-to-r from-primary to-tertiary h-full rounded-md"></div>
                                </div>
                            </div>

                            <div class="flex justify-between w-full items-center md:px-4">
                                <div class="flex items-center gap-2 text-dark md:text-base md:gap-3">
                                    <div class="w-3 h-3 xl:w-4 xl:h-4">
                                        <img src="/img/icons8-wheel-50.png" alt=""/>
                                    </div>
                                    <p class="text-sm md:text-base">Wheel</p>
                                </div>
                                <div class="w-32 h-3 bg-neutral-100 rounded-3xl border-2 ">
                                    <div class="w-[90%] bg-gradient-to-r from-primary to-tertiary h-full rounded-md"></div>
                                </div>
                            </div>

                            <div class="flex justify-between w-full items-center md:px-4">
                                <div class="flex items-center gap-2 text-dark md:text-base md:gap-3">
                                    <div class="w-3 h-3 xl:w-4 xl:h-4">
                                        <img src="/img/icons8-road-50.png" alt=""/>
                                    </div>
                                    <p class="text-sm md:text-base">Testdrive</p>
                                </div>
                                <div class="w-32 h-3 bg-neutral-100 rounded-3xl border-2 ">
                                    <div class="w-[80%] bg-gradient-to-r from-primary to-tertiary h-full rounded-md"></div>
                                </div>
                            </div>

                        </div>
                        {/* <!-- PERFORMANCE --> */}

                        {/* <!-- POINT --> */}
                        <div class="w-full flex justify-center h-[15%]  items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-dark">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                            </svg>
                            <p class="text-sm text-dark">Checked all <b class="text-tertiary"> 270 points</b></p>
                        </div>
                        {/* <!-- POINT --> */}

                    </div>
                    {/* <!-- RESULT --> */}

                </div>
                {/* <!-- 1 --> */}
        </>
    )
}

export function HomeCar3(){
    return(
        <>
        <div class="w-full h-full flex flex-col items-center justify-center z-10 px-4 pt-10">
                    {/* <!-- PROFILE --> */}
                    <div class="w-[80%] shadow-xl h-[25%] bg-slate-50 rounded-t-md  flex flex-col gap-2 md:w-[60%]">
                        <div class="w-full flex px-4 py-2 gap-2">
                            <div class="w-8 h-8 relative overflow-hidden rounded-full">
                                <img src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg" alt="" class="absolute object-cover w-full h-full"/>
                            </div>
                            <div>
                                <h1 class="text-sm font-semibold">Robert Danuarta</h1>
                                <p class="text-xs">Senech Mechanic</p>
                            </div>
                        </div>
                        <div class="w-full text-xs px-4 text-balance">
                            <q><i> Car in the striking Depok Town Center. Very good condition, technically in perfect order </i></q>
                        </div>
                    </div>
                    {/* <!-- PROFILE --> */}

                    {/* <!-- RESULT --> */}
                    <div class="w-[90%] h-[70%] bg-white shadow-xl rounded-md overflow-hidden md:w-[70%] md:shadow-md">
                        <div class="w-full h-[25%] border-b-2 flex gap-2 items-center md:h-30%">
                            <div class="w-32 h-full overflow-hidden md:w-44">
                                <img src="https://static1.topspeedimages.com/wordpress/wp-content/uploads/2022/11/Nissan-Skyline-R34-GT-R.jpg" alt=""/>
                            </div>
                            <h1 class="font-semibold md:text-lg">Nissan R34 2.0 SOHC 120kW</h1>
                        </div>

                        {/* <!-- PERFORMANCE --> */}
                        <div class="flex flex-col w-full gap-3 p-4 h-[60%] border-b-2">

                            <div class="flex justify-between w-full items-center md:px-4">
                                <div class="flex items-center gap-2 text-dark md:text-base md:gap-3">
                                    <div class="w-3 h-3 xl:w-4 xl:h-4">
                                        <img src="/img/icons8-car-50.png" alt=""/>
                                    </div>
                                    <p class="text-sm md:text-base">Exterior</p>
                                </div>
                                <div class="w-32 h-3 bg-neutral-100 rounded-3xl border-2 ">
                                    <div class="w-[90%] bg-gradient-to-r from-primary to-tertiary h-full rounded-md"></div>
                                </div>
                            </div>

                            <div class="flex justify-between w-full items-center md:px-4">
                                <div class="flex items-center gap-2 text-dark md:text-base md:gap-3">
                                    <div class="w-3 h-3 xl:w-4 xl:h-4">
                                        <img src="/img/icons8-car-seat-50.png" alt=""/>
                                    </div>
                                    <p class="text-sm md:text-base">Interior</p>
                                </div>
                                <div class="w-32 h-3 bg-neutral-100 rounded-3xl border-2 ">
                                    <div class="w-[70%] bg-gradient-to-r from-primary to-tertiary h-full rounded-md"></div>
                                </div>
                            </div>

                            <div class="flex justify-between w-full items-center md:px-4">
                                <div class="flex items-center gap-2 text-dark md:text-base md:gap-3">
                                    <div class="w-3 h-3 xl:w-4 xl:h-4">
                                        <img src="/img/icons8-engine-50.png" alt=""/>
                                    </div>
                                    <p class="text-sm md:text-base">Engine</p>
                                </div>
                                <div class="w-32 h-3 bg-neutral-100 rounded-3xl border-2 ">
                                    <div class="w-[100%] bg-gradient-to-r from-primary to-tertiary h-full rounded-md"></div>
                                </div>
                            </div>

                            <div class="flex justify-between w-full items-center md:px-4">
                                <div class="flex items-center gap-2 text-dark md:text-base md:gap-3">
                                    <div class="w-3 h-3 xl:w-4 xl:h-4">
                                        <img src="/img/icons8-wheel-50.png" alt=""/>
                                    </div>
                                    <p class="text-sm md:text-base">Wheel</p>
                                </div>
                                <div class="w-32 h-3 bg-neutral-100 rounded-3xl border-2 ">
                                    <div class="w-[100%] bg-gradient-to-r from-primary to-tertiary h-full rounded-md"></div>
                                </div>
                            </div>

                            <div class="flex justify-between w-full items-center md:px-4">
                                <div class="flex items-center gap-2 text-dark md:text-base md:gap-3">
                                    <div class="w-3 h-3 xl:w-4 xl:h-4">
                                        <img src="/img/icons8-road-50.png" alt=""/>
                                    </div>
                                    <p class="text-sm md:text-base">Testdrive</p>
                                </div>
                                <div class="w-32 h-3 bg-neutral-100 rounded-3xl border-2 ">
                                    <div class="w-[100%] bg-gradient-to-r from-primary to-tertiary h-full rounded-md"></div>
                                </div>
                            </div>

                        </div>
                        {/* <!-- PERFORMANCE --> */}

                        {/* <!-- POINT --> */}
                        <div class="w-full flex justify-center h-[15%]  items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-dark">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                            </svg>
                            <p class="text-sm text-dark">Checked all <b class="text-tertiary"> 270 points</b></p>
                        </div>
                        {/* <!-- POINT --> */}

                    </div>
                    {/* <!-- RESULT --> */}

                </div>
                {/* <!-- 1 --> */}
        </>
    )
}