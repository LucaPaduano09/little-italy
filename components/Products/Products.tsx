"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
import React from "react";

const Products = () => {
  return (
    <>
      <div className="mt-[5rem] mb-4 text-2xl w-full text-left p-2">New's</div>
      <Card
        isFooterBlurred
        className="w-[97%] h-[300px] col-span-12 p-1 lg:h-[600px]"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-black/60 uppercase font-bold">New</p>
          <h4 className="text-black font-medium text-2xl">Beer</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src="./prova-birra.png"
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">Available soon.</p>
            <p className="text-black text-tiny">Get notified.</p>
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            Notify Me
          </Button>
        </CardFooter>
      </Card>
      <div className="w-[100vw] flex justify-center items-center p-1 mt-6 mb-6 overflow:hidden">
        <div className="flex overflow-x-auto">
          <div className="flex space-x-4">
            <Card
              className="flex-shrink-0 h-[300px]  w-[300px] m-1"
              isPressable
            >
              <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-tiny text-gray/60 uppercase font-bold">
                  Best Seller pasta
                </p>
                <h4 className="text-gray font-medium text-large">
                  Little Italy
                </h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="./pasta1.webp"
              />
              <CardFooter className="text-small justify-between">
                <b>{"item.title"}</b>
                <p className="text-default-500">{"7.99"}</p>
              </CardFooter>
            </Card>
            <Card
              className="flex-shrink-0  h-[300px] w-[300px] m-1"
              isPressable
            >
              <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-tiny text-gray/60 uppercase font-bold">
                  Enjoy our
                </p>
                <h4 className="text-gray font-medium text-large">Mozzarella</h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="./mozzarella.jpg"
              />
              <CardFooter className="text-small justify-between">
                <b>{"item.title"}</b>
                <p className="text-default-500">{"7.99"}</p>
              </CardFooter>
            </Card>
            <Card
              className="flex-shrink-0  h-[300px] w-[300px] m-1"
              isPressable
            >
              <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-tiny text-gray/60 uppercase font-bold">
                  Enjoy our
                </p>
                <h4 className="text-gray font-medium text-large">Birra</h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="./prova-birra.png"
              />
              <CardFooter className="text-small justify-between">
                <b>{"item.title"}</b>
                <p className="text-default-500">{"7.99"}</p>
              </CardFooter>
            </Card>
            <Card
              className="flex-shrink-0 h-[300px]  w-[300px] m-1"
              isPressable
            >
              <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-tiny text-gray/60 uppercase font-bold">
                  Best Seller pasta
                </p>
                <h4 className="text-gray font-medium text-large">
                  Little Italy
                </h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="./pasta1.webp"
              />
              <CardFooter className="text-small justify-between">
                <b>{"item.title"}</b>
                <p className="text-default-500">{"7.99"}</p>
              </CardFooter>
            </Card>
            <Card
              className="flex-shrink-0  h-[300px] w-[300px] m-1"
              isPressable
            >
              <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-tiny text-gray/60 uppercase font-bold">
                  Enjoy our
                </p>
                <h4 className="text-gray font-medium text-large">Mozzarella</h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="./mozzarella.jpg"
              />
              <CardFooter className="text-small justify-between">
                <b>{"item.title"}</b>
                <p className="text-default-500">{"7.99"}</p>
              </CardFooter>
            </Card>
            <Card
              className="flex-shrink-0 h-[300px]  w-[300px] m-1"
              isPressable
            >
              <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-tiny text-gray/60 uppercase font-bold">
                  Best Seller pasta
                </p>
                <h4 className="text-gray font-medium text-large">
                  Little Italy
                </h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="./pasta1.webp"
              />
              <CardFooter className="text-small justify-between">
                <b>{"item.title"}</b>
                <p className="text-default-500">{"7.99"}</p>
              </CardFooter>
            </Card>
            <Card
              className="flex-shrink-0  h-[300px] w-[300px] m-1"
              isPressable
            >
              <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-tiny text-gray/60 uppercase font-bold">
                  Enjoy our
                </p>
                <h4 className="text-gray font-medium text-large">Mozzarella</h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="./mozzarella.jpg"
              />
              <CardFooter className="text-small justify-between">
                <b>{"item.title"}</b>
                <p className="text-default-500">{"7.99"}</p>
              </CardFooter>
            </Card>
            <Card
              className="flex-shrink-0 h-[300px]  w-[300px] m-1"
              isPressable
            >
              <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-tiny text-gray/60 uppercase font-bold">
                  Best Seller pasta
                </p>
                <h4 className="text-gray font-medium text-large">
                  Little Italy
                </h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="./pasta1.webp"
              />
              <CardFooter className="text-small justify-between">
                <b>{"item.title"}</b>
                <p className="text-default-500">{"7.99"}</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      <div className="w-[100vw] flex items-center justify-center flex-col">
        <Card className="flex-1 h-[300px] m-2 w-[95vw]" isPressable>
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-gray/60 uppercase font-bold">
              Best Seller pasta
            </p>
            <h4 className="text-gray font-medium text-large">Little Italy</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="./pasta.jpg"
          />
          <CardFooter className="text-small justify-between">
            <b>{"item.title"}</b>
            <p className="text-default-500">{"7.99"}</p>
          </CardFooter>
        </Card>
        <Card className="flex-1 h-[300px] m-2 w-[95vw]" isPressable>
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-gray/60 uppercase font-bold">
              Enjoy our
            </p>
            <h4 className="text-gray font-medium text-large">Mozzarella</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="./mozzarella.jpg"
          />
          <CardFooter className="text-small justify-between">
            <b>{"item.title"}</b>
            <p className="text-default-500">{"7.99"}</p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Products;
