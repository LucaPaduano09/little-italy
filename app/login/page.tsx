"use client";
import { Button, Spacer } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import React from "react";

const page = () => {
  const googleLogin = () => {
    signIn("google", { callbackUrl: "/" });
  };
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex justify-center items-center w-[80vw] h-[50vh] bg-slate-300 rounded-md flex-col">
        <div className=" flex-1 w-full flex flex-col justify-center items-center">
          <div className=" flex m-3 justify-center flex-col w-[70%]">
            <p className="mb-1">Email</p>
            <input type="email" className="h-[30px] rounded-md" />
          </div>
          <div className=" flex m-3 justify-center flex-col w-[70%]">
            <p className="mb-1">Password</p>
            <input type="email" className="h-[30px] rounded-md" />
          </div>
          <div className=" flex m-3 justify-center flex-col w-[70%]">
            <Button color="primary" variant="solid">
              Sing In
            </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center flex-row">
          <span className="w-[100px] h-[1px] bg-black"></span>
          <span className="ml-2 mr-2">or</span>
          <span className=" w-[100px] h-[1px] bg-black"></span>
        </div>
        <div className=" flex-1 w-full flex flex-col justify-center items-center">
          <div className=" flex justify-center flex-col w-[70%]">
            <Button color="primary" variant="solid" onClick={googleLogin}>
              Sing In with Google
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
