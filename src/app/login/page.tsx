"use client";
import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";
import axios from "axios";

export default function loginPage(){

    const [user, setUser] = React.useState({
        email: "",
        password: "",
 
    })

    const onLogin = async()=>{

    }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Login</h1>

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