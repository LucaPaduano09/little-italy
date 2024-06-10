"use client";
import { Button, Image, Input } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Newsletter = (props: any) => {
  const [timer, setTimer] = useState(false);
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = async () => {
    // const existingUser = await User.findOne({ email: email });
    // if (existingUser) {
    //   existingUser.newsletter = true;
    //   await existingUser.save();
    //   setTimer(false);
    // }
  };

  useEffect(() => {
    setTimeout(() => {
      setTimer(true);
    }, 3000);
  }, []);

  return (
    <>
      {(!props.session || props?.session?.user?.newsletter !== true) &&
        timer && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 2 }}
              className="fixed t-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center "
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 1.3 }}
              className="h-[580px] fixed z-50 w-[95vw] bg-white flex items-center justify-center flex-col bottom-2"
            >
              <div className="flex w-full flex-1">
                <Image
                  src="./food-newsletter.jpg"
                  alt="image"
                  style={{ width: "100%", height: "80%" }}
                  radius="none"
                />
              </div>
              <div className="flex flex-1 w-[90%] flex-col justify-start">
                <h1 className="text-lg m-0 p-0">Iscriviti alla newsletter</h1>
                <h3>e ricevi subito il 15% di sconto sul tuo primo ordine</h3>
                <div className="w-full flex-col flex items-center justify-center">
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-[100%] my-4"
                  />
                  <Button
                    variant="shadow"
                    className="w-[100%]"
                    color="primary"
                    onClick={() => {
                      handleNewsletterSubmit();
                    }}
                  >
                    Iscriviti
                  </Button>
                </div>
              </div>
              <button
                className="absolute top-2 right-2 w-6 h-6 rounded bg-red-300 z-50 flex items-center justify-center"
                onClick={() => {
                  setTimer(false);
                }}
              >
                x
              </button>
            </motion.div>
          </>
        )}
    </>
  );
};

export default Newsletter;
