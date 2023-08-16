import React from "react";
import { MdOutlineEdit } from "react-icons/md";
import { TbMailOpenedFilled } from "react-icons/tb";
import { FaPhoneVolume } from "react-icons/fa";
import { BiSolidUser } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";

export default function UserDetail() {
  const editImage = document.querySelector(".file");
  return (
   <Sidebar>
         <main className={`flex items-center h-screen`}>
      <section className={`w-[70%] h-[70%] p-1 bg-blue-50 border`}>
        <div className={`w-full relative p-8`}>
          <div
            className={`w-40 h-40 absolute -top-16 rounded-full border p-1 flex justify-center items-center`}
          >
            <img
              className={`w-full`}
              src={`https://img.icons8.com/?size=512&id=108652&format=png`}
              alt=""
            />
            <div
              onClick={() => editImage.click()}
              className={`flex justify-center cursor-pointer absolute bg-white right-3  bottom-1 items-center text-xs gap-1 border-2 rounded-full w-8 h-8 px-1 py-0.5`}
            >
              <MdOutlineEdit />
              <input className="file hidden" type="file" name="" id="" />
            </div>
          </div>
          <div className={`flex items-center justify-between mx-10 ml-52`}>
            <div className={``}>
              <h2>Ethan James</h2>
              <p>Sale Executive</p>
            </div>
            <div className="flex items-center gap-5">
              <TbMailOpenedFilled className="text-3xl bg-gray-50 text-gray-500 rounded-full hover:bg-gray-500 hover:text-gray-50 p-1.5 cursor-pointer transition-all duration-200 ease-in" />
              <FaPhoneVolume className="text-3xl bg-gray-50 text-gray-500 rounded-full hover:bg-gray-500 hover:text-gray-50 p-1.5 cursor-pointer transition-all duration-200 ease-in" />
            </div>
          </div>
        </div>
        <div>
          <div className={`flex items-center gap-10 px-8 border-b pb-5`}>
            <NavLink>
              <div className="flex items-center gap-2">
                <BiSolidUser />
                <h4>Personal</h4>
              </div>
            </NavLink>
            
            <NavLink>
              <div className="flex items-center gap-2">
                <BiSolidUser />
                <h4>Login Information</h4>
              </div>
            </NavLink>
            <NavLink>
              <div className="flex items-center gap-2">
                <BiSolidUser />
                <h4>Password</h4>
              </div>
            </NavLink>
          </div>
          <div className="mx-10 mt-5 flex flex-col gap-5">
              <div className="flex">
                <p className="w-[30%]">Phone</p>
                <p className="w-[70%]">: 0987654321</p>
              </div>
              <div className="flex">
                <p className="w-[30%]">Email</p>
                <p className="w-[70%]">: ethan@gmail.com</p>
              </div>
              <div className="flex">
                <p className="w-[30%]">Address</p>
                <p className="w-[70%]">: No.2, Baho Street, Bahan, Yangon</p>
              </div>
              <div className="flex">
                <p className="w-[30%]">Gender</p>
                <p className="w-[70%]">: Male</p>
              </div>
              <div className="flex">
                <p className="w-[30%]">Date of Birth</p>
                <p className="w-[70%]">: 11/11/1999</p>
              </div>
            </div>
        </div>
      </section>
    </main>
   </Sidebar>
  );
}
