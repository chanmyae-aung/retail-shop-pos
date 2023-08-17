import React, { useState } from "react";
import Button from "../../Components/Button";
import {BiChevronDown} from 'react-icons/bi'
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Breadcrumbs,Typography,Link } from "@mui/material";


export default function CreateUser() {
  const [select, setSelect] = useState(false)
  const [display, setDisplay] = useState("Admin")
  const toggleSelect = () => {
    setSelect(!select)
  }
  return (
    <Sidebar>
       <Typography variant="h4" gutterBottom>
        User
      </Typography>
      <Breadcrumbs aria-label="breadcrumb" style={{
       
      }}>
        <Link href='user-overview'  underline="hover"  color="inherit" >
          User Overview
        </Link>
        
        <Link
          underline="always"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Create User
        </Link>
      </Breadcrumbs>
    <main>
      <form action="" className={`flex p-10 gap-10`}>
        {/* Personal Info */}
        <section className={`hidden flex-col gap-5 w-[70%]`}>
          <div className="flex">
            <label className="w-[30%]">Name</label>
            <input placeholder="Enter your name" className={`w-[70%] outline-none border rounded px-5 py-2`} type="text" name="" id="" />
          </div>
          <div className="flex">
            <label className="w-[30%]">Phone</label>
            <input placeholder="Enter your phone number" className={`w-[70%] outline-none border rounded px-5 py-2`} type="phone" name="" id="" />
          </div>
          <div className="flex">
            <label className="w-[30%]">Date of Birth</label>
            <input placeholder="Enter your birth date" className={`w-[70%] outline-none border rounded px-5 py-2`} type="phone" name="" id="" />
          </div>
          <div className="flex">
            <label className="w-[30%]">Gender</label>
            <div className={`w-[70%] flex items-center gap-10`}>
            <div className={`flex items-center gap-2`}>
              <input className={``} type="radio" name="gender" id="male" />
              <label htmlFor="male">Male</label>
            </div>
            <div className={`flex items-center gap-2`}>
              <input className={``} type="radio" name="gender" id="female" />
              <label htmlFor="female">Female</label>
            </div>
            </div>
          </div>
          <div className="flex">
            <label className="w-[30%]">Address</label>
            <textarea rows={3} placeholder="Enter your address" className={`w-[70%] outline-none border rounded px-5 py-2`} type="phone" name="" id="" />
          </div>
        </section>
        {/* Login Info  */}
        <section className={` flex flex-col gap-5 w-[70%]`}>
          <div className={`flex`}>
              <label className="block mb-2 w-[30%]" htmlFor="">
                Position
              </label>
              <div
                onClick={toggleSelect}
                className="w-[70%] border outline-none py-2.5 bg-white relative rounded cursor-pointer"
              >
                <div className="px-5 flex items-center justify-between">
                  <p className="">{display}</p>
                  <BiChevronDown
                    className={`text-xl ${
                      select && "rotate-180"
                    } transition-all duration-150`}
                  />
                </div>
                <div
                  className={`${
                    select ? "scale-y-1" : "scale-y-0"
                  } transition-all duration-150 origin-top z-40 border rounded absolute w-full top-14`}
                >
                  <div
                    onClick={(e) => {
                      setDisplay(e.target.textContent)}}
                    className="w-full outline-none py-3 bg-white px-5 rounded-t border-b cursor-pointer"
                  >
                    Admin
                  </div>
                  <div
                    onClick={(e) => {
                      setDisplay(e.target.textContent)}}
                    className="w-full outline-none py-3 bg-white px-5 rounded-b cursor-pointer"
                  >
                    Staff
                  </div>
                </div>
              </div>
            </div>
          <div className="flex">
            <label className="w-[30%]">Email</label>
            <input placeholder="Enter your email" className={`w-[70%] outline-none border rounded px-5 py-2`} type="phone" name="" id="" />
          </div>
          <div className="flex">
            <label className="w-[30%]">Password</label>
            <input placeholder="......." className={`w-[70%] outline-none border rounded px-5 py-2`} type="phone" name="" id="" />
          </div>
          <div className="flex">
            <label className="w-[30%]">Confirm Password</label>
            <input placeholder="........" className={`w-[70%] outline-none border rounded px-5 py-2`} type="phone" name="" id="" />
          </div>
        </section>
        {/* Photo Upload  */}
        <section>
            
        </section>
        {/* Step Indicator  */}
        <section className={`w-[30%]`}>
          <div className="flex items-center gap-3 my-3">
            <div className={`w-10 h-10 border rounded-full p-1 flex items-center justify-center`}>
              <p>1</p>
            </div>
            <p>Personal</p>
          </div>
          <div className="border-l py-5 ml-5"></div>
          <div className="flex items-center gap-3 my-3">
            <div className={`w-10 h-10 border rounded-full p-1 flex items-center justify-center`}>
              <p>2</p>
            </div>
            <p>Login Info</p>
          </div>
          <div className="border-l py-5 ml-5"></div>
          <div className="flex items-center gap-3 my-3">
            <div className={`w-10 h-10 border rounded-full p-1 flex items-center justify-center`}>
              <p>3</p>
            </div>
            <p>Photo</p>
          </div>
          <div className="my-5">
          <Button text={"Next"}/>
          </div>
        </section>
      </form>
    </main>
    </Sidebar>
  );
}
