"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Image,
  Avatar,
} from "@nextui-org/react";
import { signOut } from "next-auth/react";

const Navbaro = (props: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className=" mb-2 fixed top-0 shadow-sm left-0 z-[1000000]"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
        <NavbarBrand>
          <Image width={200} alt="logo" src="./little-italy-logo.png" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          {props.session ? (
            <Avatar
              src={props.session?.user?.image!}
              isBordered
              as="button"
              className="transition-transform"
              color="primary"
            />
          ) : (
            <Button as={Link} color="primary" href="/login" variant="flat">
              Sign Up
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              // color={
              //   index === 2
              //     ? "primary"
              //     : index === menuItems.length - 1
              //     ? "danger"
              //     : "foreground"
              // }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
        <Button
          className="w-[50%] mt-5"
          color="danger"
          variant="ghost"
          onClick={() => signOut({ callbackUrl: "/", redirect: false })}
        >
          Log Out
        </Button>
      </NavbarMenu>
    </Navbar>
  );
};

export default Navbaro;
