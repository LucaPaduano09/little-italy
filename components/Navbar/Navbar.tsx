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
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { signOut } from "next-auth/react";

const Navbaro = (props: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "Products", href: "/prodotti" },
    { title: "Support", href: "/" },
    { title: "Cart", href: "/cart" },
    // "Dashboard",
    // "Activity",
    // "Analytics",
    // "System",
    // "Deployments",
    // "My Settings",
    // "Team Settings",
    // "Help & Feedback",
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
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem> */}
        <NavbarItem>
          {props.session ? (
            // <Link href={`/user/` + props.session?.user?.email}>
            <Dropdown style={{ zIndex: "200000000000" }}>
              <DropdownTrigger>
                <Avatar
                  src={props.session?.user?.image!}
                  isBordered
                  as="button"
                  className="transition-transform"
                  color="primary"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="new">
                  <Link href={`/user/` + props.session?.user?.email}>
                    Profile
                  </Link>
                </DropdownItem>
                <DropdownItem key="copy">Settings</DropdownItem>
                <DropdownItem
                  key="delete"
                  className="text-danger"
                  color="danger"
                  onClick={() => signOut({ callbackUrl: "/", redirect: true })}
                >
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            // </Link>
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
              href={item.href}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
        {/* <Button
          className="w-[50%] mt-5"
          color="danger"
          variant="ghost"
          onClick={() => signOut({ callbackUrl: "/", redirect: false })}
        >
          Log Out
        </Button> */}
        <div className="m-auto w-[90%] flex items-center justify-center absolute bottom-20">
          <Link className="flex items-center flex-1 justify-center">
            <Image src="./instagram.png" height={30} width={30} />
          </Link>
          <Link className="flex items-center flex-1 justify-center">
            <Image src="./facebook.png" height={30} width={30} />
          </Link>
          <Link className="flex items-center flex-1 justify-center">
            <Image src="./tiktok.png" height={30} width={30} />
          </Link>
        </div>
      </NavbarMenu>
    </Navbar>
  );
};

export default Navbaro;
