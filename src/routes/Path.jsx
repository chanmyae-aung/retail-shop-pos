import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'

export default function Path() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Dashboard/>}>
                <Route index element={<Dashboard/>}/>
                <Route path='/' element={""}/>
            </Route>

        </Routes>
    </div>
  )
}
