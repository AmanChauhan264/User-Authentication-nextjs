"use client";
import Link from "next/link";
import React, {useEffect} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";


export default function loginPage(){
  const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    })

    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onLogin = async()=>{
      try {
        setLoading(true);
       const response = await axios.post("/api/users/login", user);
       console.log("login success", response.data);
       toast.success("login success");
       router.push("/profile");
      } catch (error: any) {
        console.log("login falied", error.message);
        toast.error(error.message);
      }finally{
        setLoading(false);
      }
    }

    useEffect(()=>{
      if(user.email.length > 0 && user.password.length > 0){
        setButtonDisabled(false);
      }else{
        setButtonDisabled(true);
      }
    }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>{loading ? "processing" : "login"}</h1>

      <hr />

      <label htmlFor="email">email</label>
      <input
        id="email"
        type="text"
        value={user.email}
        onChange={(e) =>
          setUser({ ...user, email: e.target.value })
        }
        placeholder="email"
        className="border border-gray-400 p-2 rounded"
      />
      <label htmlFor="password">password</label>
      <input
        id="password"
        type="text"
        value={user.password}
        onChange={(e) =>
          setUser({ ...user, password: e.target.value })
        }
        placeholder="password"
        className="border border-gray-400 p-2 rounded"
      />

      <button
      onClick={onLogin}
      className="border border-gray-400 p-2 rounded">Login here</button>

      <Link href="/signup" >Visit signup page~</Link>

    </div>
  );
}