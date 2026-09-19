"use client";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";

export default function ProfilePage(){
    const router = useRouter()
    const logout = async ()=>{
        try {
            await axios.get('/api/users/logout')
            toast.success('logout successfull')
            router.push('/login')
        } catch (error: any) {
            console.log(error.message)
            toast.error(error.message)
        }
    }

    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <p>profile page</p>
            <hr />
           <button
            onClick={logout}
            className="bg-blue-500 mt-4 text-white font-bold px-4 py-2 rounded">
            Logout</button>
        </div>
    )
}