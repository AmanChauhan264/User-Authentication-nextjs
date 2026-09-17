"use client";
import Link from "next/link";
import React, {useEffect} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { error } from "console";
import toast from "react-hot-toast";

export default function signupPage(){

  const router = useRouter();

    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })

    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    useEffect(()=>{
      if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0){
        setButtonDisabled(false);
      }else{
        setButtonDisabled(true);
      }
    }, [user]);

   const onSignup = async () => {
  try {
    setLoading(true);

    const response = await axios.post("/api/users/signup", user);

    console.log("Signup success", response.data);

    router.push("/login");
  } catch (error: any) {
    console.log("Signup failed", error.message);
    toast.error(error.message);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>{loading ? "processing" : "signup"}</h1>

      <hr />

      <label htmlFor="username">Username</label>

      <input
        id="username"
        type="text"
        value={user.username}
        onChange={(e) =>
          setUser({ ...user, username: e.target.value })
        }
        placeholder="username"
        className="border border-gray-400 p-2 rounded"
      />
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
      onClick={onSignup}
      className="border border-gray-400 p-2 rounded">{buttonDisabled ? "no signup" : "signup"}</button>

      <Link href="/login" >Visit login page~</Link>

    </div>
  );
}