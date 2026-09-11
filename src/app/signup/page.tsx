"use client";
import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";
import axios from "axios";

export default function signup(){

    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })

    const onSignup = async()=>{

    }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>SignUp</h1>

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
      className="border border-gray-400 p-2 rounded">Signup here</button>

      <Link href="/login" >Visit login page~</Link>

    </div>
  );
}