"use client";
import { Button, Image, Input } from "@nextui-org/react";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";
import Cookies from "js-cookie";

const Newsletter = (props: any) => {
  const [timer, setTimer] = useState(false);
  const [email, setEmail] = useState("");
  const checkNewsletterCookie = Cookies.get("newsletter_close");

  const handleNewsletterSubmit = async () => {
    // const existingUser = await User.findOne({ email: email });
    // if (existingUser) {
    //   existingUser.newsletter = true;
    //   await existingUser.save();
    //   setTimer(false);
    // }
  };

  const handleNewsletterClose = () => {
    setTimer(false);
    Cookies.set("newsletter_close", true, { expires: 7 });
  };

  useEffect(() => {
    setTimeout(() => {
      console.log(checkNewsletterCookie);
      setTimer(true);
    }, 3000);
  }, []);

  return (
    <>
      {(!props.session || props?.session?.user?.newsletter !== true) &&
        !checkNewsletterCookie &&
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
              className="h-[580px] fixed z-50 w-[95vw] bg-white flex items-center justify-center flex-col bottom-2 lg:flex-row lg:h-fit lg:bottom-0 lg:top-[20%]"
            >
              <div className="flex w-full flex-1 h-fit">
                <Image
                  src="./food-newsletter.jpg"
                  alt="image"
                  style={
                    isMobile
                      ? { width: "100%", height: "80%" }
                      : { width: "100%", height: "100%" }
                  }
                  radius="none"
                />
              </div>
              <div className="flex flex-1 w-[90%] flex-col justify-start lg: p-4">
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
                  handleNewsletterClose();
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
