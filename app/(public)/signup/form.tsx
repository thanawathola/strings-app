"use client";
import React, { FormEvent, useState} from "react";

function Form () {

    const [username ,setUserName] = useState <undefined | string>("");
    const [password ,setPassword] = useState <undefined | string>("");
    const [confirmPassword ,setConfirmPassword ] = useState <undefined | string>("");

    const [errors, setErrors] =useState<string[]>([]);

    async function handleSubmit (e: FormEvent) {
        e.preventDefault();
        setErrors([]);

        if (password != confirmPassword) {
            errors.push("Passwords do not match.");
            return;
        }

        const res = await fetch("/api/signup",{
            method : "post",
            body : JSON.stringify({ username: username , password: password }),
        });
        if (res.ok) {
           window.location.href="/signin";
        } else {
            alert ("Sign up failed");
        }
    }

    return (
        <form onSubmit={handleSubmit}
            className="flex flex-col gap-2 p-5 max-w-xs w-full bg-slate-800 rounded-lg"
        >
            <div className="text-center">
                <h3 className="font-semibold">Sign Up</h3>
            </div>
            <div className="my-3">
                <hr />
            </div>
            <div>
                <div className="flex flex-col gap-2">
                    <label className="text-center">Username</label>
                    <input
                    className="text-black p-2 border border-slate-700 rounded-lg"
                    type = "text"
                    onChange = {(e) => setUserName(e.target.value)}
                    value={username}
                    id ="username"
                    placeholder="Username"
                    required
                    />
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-center">Password</label>
                <input
                className="text-black p-2 border border-slate-700 rounded-lg"
                type = "password"
                onChange = {(e) => setPassword(e.target.value)}
                value={password}
                id= "password"
                placeholder="Password"
                required
                />
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-center">Confirm Password</label>
                <input
                className="text-black p-2 border border-slate-700 rounded-lg"
                type = "password"
                onChange = {(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                id= "confirm-password"
                placeholder="Confirm Password"
                required
                />
            </div>
            <button type = "submit" className="mt-4 bg-slate-900 text-white p-3 rounded-lg">Sign Up</button>
        </form>
    );
}

export default Form;