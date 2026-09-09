"use client";
import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";
import {axios} from "axios";

export default function signup(){

    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })

    const onSignup = async()=>{

    }

    return(
        <div>
            <h1 className="flex flex-col items-center justify-center min-h-screen py-2">SignUp</h1>
        </div>
    )
}