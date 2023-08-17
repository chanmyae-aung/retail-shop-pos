import { Group } from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { AiOutlineCloudUpload, AiOutlineOrderedList } from "react-icons/ai";
import { FcCancel } from "react-icons/fc";
import { BsImages, BsFillGridFill } from "react-icons/bs";
import React from "react";
import Sidebar from "../Components/Sidebar";
const images = [
  {
    id: 1,
    link: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGljfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    link: "https://plus.unsplash.com/premium_photo-1666273190872-1ad5f89e39f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGljfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    link: "https://plus.unsplash.com/premium_photo-1661476072172-359e53eb83d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGljfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    link: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGljfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 5,
    link: "https://plus.unsplash.com/premium_photo-1666273190872-1ad5f89e39f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGljfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 6,
    link: "https://plus.unsplash.com/premium_photo-1661476072172-359e53eb83d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGljfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
];

const Mediapgwpic = (props) => {
  return (
    <div className=" flex ">
        <div>
            <Sidebar/>
        </div>
      <div className=" p-10">
        <p className=" text-2xl text-white font-bold tracking-wide ">Media</p>
        <p className="  pt-1 text-gray-300">Media/Uploader</p>
        <Dropzone
          className=" mt-6 mb-10 bg-softblack  hover:bg-softblack border border-solid"
          onDrop={(files) => console.log("accepted files", files)}
          onReject={(files) => console.log("rejected files", files)}
          maxSize={3 * 1024 ** 2}
          accept={IMAGE_MIME_TYPE}
          {...props}
        >
          <Group
            className=" rounded-lg w-[200px] mx-auto "
            position="center"
            spacing="xl"
            style={{ minHeight: "220px", pointerEvents: "none" }}
          >
            <Dropzone.Accept>
              <AiOutlineCloudUpload />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <FcCancel />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <BsImages className="   text-blue-700  text-5xl " />
            </Dropzone.Idle>

            <div className="  ">
              <p className=" text-white text-lg ">
                <span className=" text-blue-600 underline">Browse</span> or drag
                an image
              </p>
            </div>
          </Group>
        </Dropzone>
        <div className=" flex justify-between items-center">
          <p className="pt-1 text-gray-300">
            Media <span className=" text-blue-600">/</span> Uploaded photo
          </p>
          <div className="">
            <AiOutlineOrderedList className=" text-gray-300 border cursor-pointer border-solid border-gray-300 mx-2 inline" />
            <BsFillGridFill className=" text-gray-300  cursor-pointer border border-solid border-gray-300 inline" />
          </div>
        </div>
        <div className=" my-6 overflow-y-auto flex flex-wrap  justify-center gap-10 items-center">
          {images.map((i) => {
            return <img className=" rounded-2xl w-[400px] h-[300px]" src={i.link} alt="" />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Mediapgwpic;
