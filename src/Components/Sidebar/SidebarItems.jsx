import React from "react";
import { Accordion } from "@mantine/core";
import { BiHome } from "react-icons/bi";
import { TbClipboardText } from "react-icons/tb";
import { PiUserCirclePlusBold, PiUserSquareFill } from "react-icons/pi";
import { TfiGallery } from "react-icons/tfi";
import { HiOutlineLogout } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const SidebarItems = () => {
  return (
    <>
      <a className=" px-5  text-[#f5f5f5] text-[1.3rem]  pt-2 pb-3" href="#">
        <NavLink to={"/"} >
        <span className="inline-flex gap-3 my-0 py-0">
          <i>
            <BiHome className="mt-1" />
          </i>{" "}
          Overview
        </span>
        </NavLink>
      </a>
      <Accordion
        transitionDuration={1000}
        styles={{
          item: {
            border: "0",
          },

          control: {
            fontSize: "1.3rem",
            color: "#f5f5f5",
            ":hover": {
              backgroundColor: "transparent",
            },

            "&[data-active]": {
              backgroundColor: "transparent",
            },
          },
          chevron: {
            color: "#f5f5f5",
          },
        }}
        defaultValue="Sale"
      >
        <Accordion.Item value="Sale">
          <Accordion.Control>
            <span className=" inline-flex gap-3 my-0 py-0">
              <i className="">
                <BiHome className="mt-1" />
              </i>
              Sale{" "}
            </span>
          </Accordion.Control>
          <Accordion.Panel>
            <ul className=" px-2 py-0 border-s-2 border-[#3f4245] text-[1.1rem] ">
              <li className="pt-1 pb-2 hover:text-blue-400 cursor-pointer text-[#f5f5f5]  px-2">
                <a href="#">Cashier</a>
              </li>
              <li className="py-2 hover:text-blue-400 cursor-pointer text-[#f5f5f5]  px-2">
                Recent
              </li>
            </ul>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Inventory">
          <Accordion.Control>
            <span className="inline-flex gap-3 my-0 py-0">
              <i>
                <TbClipboardText className="mt-1" />
              </i>{" "}
              Inventory
            </span>
          </Accordion.Control>
          <Accordion.Panel>
            <ul className=" px-2 py-0 border-s-2 border-[#3f4245] text-[1.1rem] ">
              <li className="pt-1 pb-2 hover:text-blue-400 cursor-pointer text-[#f5f5f5]  px-2">
                <a href="#">Products</a>
              </li>
              <li className="py-2 hover:text-blue-400 cursor-pointer text-[#f5f5f5]  px-2">
                Add Products
              </li>
              <li className="py-2 hover:text-blue-400 cursor-pointer text-[#f5f5f5]  px-2">
                Stock Control
              </li>
              <li className="py-2 hover:text-blue-400 cursor-pointer text-[#f5f5f5]  px-2">
                Manage Brands
              </li>
            </ul>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="User">
          <Accordion.Control>
            <span className="inline-flex gap-3 my-0 py-0">
              <i>
                <PiUserCirclePlusBold className="mt-1" />
              </i>{" "}
              User
            </span>
          </Accordion.Control>
          <Accordion.Panel>
            <ul className=" px-2 py-0 border-s-2 border-[#3f4245] text-[1.1rem] ">
              <li className="pt-1 pb-2 hover:text-blue-400 cursor-pointer text-[#f5f5f5]  px-2">
                <NavLink to={"/user-overview"}>Overview</NavLink>
              </li>
              <li className="py-2 hover:text-blue-400 cursor-pointer text-[#f5f5f5]  px-2">
                <NavLink to={"/create-user"}>Create User</NavLink>
                
              </li>
            </ul>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>

      <a className="px-5  text-[#f5f5f5] text-[1.3rem]  py-3" href="#">
        <span className="inline-flex gap-3 my-0 py-0">
          <i>
            <TfiGallery className="mt-1" />
          </i>{" "}
          Media
        </span>
      </a>
      <Accordion
        transitionDuration={1000}
        styles={{
          item: {
            border: "0",
          },

          control: {
            fontSize: "1.3rem",
            color: "#f5f5f5",
            ":hover": {
              backgroundColor: "transparent",
            },

            "&[data-active]": {
              backgroundColor: "transparent",
            },
          },
          chevron: {
            color: "#f5f5f5",
          },
        }}
        defaultValue="let"
      >
        <Accordion.Item value="Profile">
          <Accordion.Control>
            <span className="inline-flex gap-3 my-0 py-0">
              <i>
                <PiUserSquareFill className="mt-1" />
              </i>{" "}
              Profile
            </span>
          </Accordion.Control>
          <Accordion.Panel>
            <ul className=" px-2 py-0 border-s-2 border-[#3f4245] text-[1.1rem] ">
              <li className="pt-1 pb-2 hover:text-blue-400 cursor-pointer text-[#f5f5f5]  px-2 ">
                <a className="" href="#">
                  My account
                </a>
              </li>
              <li className="py-2 hover:text-blue-400 cursor-pointer text-[#f5f5f5]  px-2">
                Edit
              </li>
            </ul>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
      <a className="px-5 text-[#f5f5f5] text-[1.3rem] py-3" href="#">
        <span className="inline-flex gap-3 my-0 py-0">
          <i>
            <HiOutlineLogout className="mt-1" />
          </i>{" "}
          logout
        </span>
      </a>
    </>
  );
};

export default SidebarItems;
