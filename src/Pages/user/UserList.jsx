import React from 'react'
import { Breadcrumbs, Table } from '@mantine/core';
import {BsArrowRight, BsDash} from 'react-icons/bs'
import {MdOutlineEdit} from 'react-icons/md'
import Sidebar from '../../Components/Sidebar/Sidebar';
import { Link, Typography } from '@mui/material';

export default function UserList() {
  const elements = [
    { id: 1, name: "MMS", position: "Admin", email: "mms@gmial.com" },
    { id: 2, name: "MMS", position: "Admin", email: "mms@gmial.com" },
    { id: 3, name: "MMS", position: "Admin", email: "mms@gmial.com" },
    { id: 4, name: "MMS", position: "Admin", email: "mms@gmial.com" },
    { id: 5, name: "MMS", position: "Admin", email: "mms@gmial.com" },
  ];
  const rows = elements.map((element) => (
    <tr key={element.id}>
      <td>{element.id}</td>
      <td>{element.name}</td>
      <td>{element.position}</td>
      <td>{element.email}</td>
      <td className="flex gap-5">
        <BsDash className="text-3xl hover:bg-gray-50 hover:text-gray-500 rounded-full bg-gray-500 text-gray-50 p-1.5 cursor-pointer transition-all duration-200 ease-in" />
        <MdOutlineEdit className="text-3xl hover:bg-gray-50 hover:text-gray-500 rounded-full bg-gray-500 text-gray-50 p-1.5 cursor-pointer transition-all duration-200 ease-in" />
        <BsArrowRight className="text-3xl hover:bg-gray-50 hover:text-gray-500 rounded-full bg-gray-500 text-gray-50 p-1.5 cursor-pointer transition-all duration-200 ease-in" />
      </td>
    </tr>
  ));

  return (
    <>
    {/* path breadcrumbs */}
    <div className="flex justify-between">
      <div>
      <Typography variant="h4" gutterBottom>
        User
      </Typography>
      <Breadcrumbs  aria-label="breadcrumb" style={{
       
      }}>
        <Link href='user-overview'  underline="hover"  color="#f5f5f5" >
          User Overview
        </Link>
        
        <Link
          underline="always"
          color="#f5f5f5"
          href="#"
        >
          Create User
        </Link>
      </Breadcrumbs>
      </div>
      <div
      className="w-fit px-6 py-2 flex items-center gap-2 rounded  text-sm font-semibold"
    >
      <button className='bg-blue-500 text-white w-fit px-6 py-2 flex items-center gap-2 rounded  text-sm font-semibold'>Create</button>
      
    </div>
    </div>
    {/* path breadcrumbs */}
    <main className='border mt-7'>
      <Table verticalSpacing={"md"}>
      <thead>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>Position</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
    </main>
    </>
  );
}
