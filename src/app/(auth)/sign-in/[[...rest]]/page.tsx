"use client";

import { SignIn } from "@clerk/nextjs";


const page = () => {
    return (
        <div className="w-full flex flex-1 items-center justify-center">
        <SignIn/>
        </div>
    );
}

export default page;