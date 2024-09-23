"use client";
import { Button, Spacer } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import React, { useState } from "react";

const Page = () => {
  const [loginSelected, setLoginSelected] = useState<boolean>(true);
  const googleLogin = () => {
    signIn("google", { callbackUrl: "/checkout" });
  };
  const toggleSelected = () => {
    setLoginSelected(!loginSelected);
  };
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex justify-center items-center w-[80vw] h-[60vh] bg-slate-300  flex-col">
        <div className="flex w-full h-20">
          <div
            className={`flex flex-1 items-center justify-center`}
            style={loginSelected ? { backgroundColor: "rgb(148 163 184)" } : {}}
            onClick={() => {
              toggleSelected();
            }}
          >
            Login
          </div>
          <div
            className="flex flex-1 items-center justify-center"
            style={
              !loginSelected ? { backgroundColor: "rgb(148 163 184)" } : {}
            }
            onClick={() => {
              toggleSelected();
            }}
          >
            Register
          </div>
        </div>
        {loginSelected && (
          <>
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
          </>
        )}
        {!loginSelected && (
          <>
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
                  Register
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
