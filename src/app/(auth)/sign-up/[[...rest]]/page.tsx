"use client";

import { SignUp } from "@clerk/nextjs";


const page = () => {
    return (
        <div className="w-full flex flex-1 items-center justify-center">
        <SignUp />
        </div>
    );
}

export default page;