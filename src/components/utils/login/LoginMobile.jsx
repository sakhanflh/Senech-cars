import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";


export default function LoginMobilePage({onShowLogin}){
    return(
        <>
        <div className={onShowLogin ? "w-full h-[28rem] translate-y-0 opacity-100 flex items-end absolute text-dark left-0 top-[23rem] transition-all duration-500" : "left-0 top-[23rem] opacity-0 w-full h-[28rem] translate-y-full transition-all duration-500 items-end bg-green-500 absolute text-dark"}>
            <div className=" w-full bg-white overflow-hidden rounded-t-2xl h-[28rem] justify-between flex flex-col">
                <div className="bg-slate-200 px-5 pt-5 h-[40%] flex flex-col gap-4">
                    <h1 className="text-xl font-semibold">Welcome</h1>
                    <p>Don't have an account yet? <span className="text-secondary">Register here</span></p>
                    <div className="flex w-full h-12 justify-around">
                        <button className="rounded-lg border w-[45%] bg-white flex items-center justify-center gap-2 text-lg"><FcGoogle className="text-2xl"/> Google</button>
                        <button className="rounded-lg border w-[45%] bg-white flex items-center justify-center gap-2 text-lg"><FaFacebook className="text-2xl"/> Facebook</button>
                    </div>
                </div>
                {/* Top End */}
                {/* Bottom */}
                <div className=" px-5 pb-5 h-[60%] border-t flex flex-col justify-around">
                    <h1 className="justify-center w-full flex text-gray-600">Or via e-mail</h1>
                    <h1 className="text-lg font-semibold">Login</h1>
                    <div className="flex flex-col w-full h-20 justify-around">
                        <input type="email" placeholder="Email" className="py-1 px-2 rounded-md border  border-black"/>
                        <input type="password" placeholder="Password" className="py-1 px-2 rounded-md border border-black"/>
                    </div>
                    <p className="w-full justify-end flex text-secondary">Forgot your password?</p>
                    <button className="bg-tertiary text-white p-3 rounded-md">Login</button>
                </div>
            </div>
        </div>
        </>
    )
}