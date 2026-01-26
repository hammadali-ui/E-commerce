
import React, { useState } from 'react'
import {Home, User, LogOut,X, Menu} from "lucide-react";
import {Chart as ChartJs} from "chart.js/auto";
import {Bar,Doughnut,Line} from "react-chartjs-2";
import { NavLink, useNavigate} from 'react-router-dom';
import TopBar from './TopBar';


function Dashboard() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="flex flex-col h-screen bg-blue-100">

    <div className="flex flex-1 bg-blue-100">


      <main className="flex-1 p-8">
       
        <h1 className="mb-10 -mt-6 text-3xl font-bold text-blue-900">Welcome Back!</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-xl font-bold text-blue-800 mb-2">Total Users</h3>
          <p className="">600 Total Users</p>
          </div>


          <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-xl font-bold text-blue-800 mb-2">Active Users</h3>
          <p className="">300 Active Users</p>
          </div>


          <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-xl font-bold text-blue-800 mb-2">Notifications</h3>
          <p className="">3 New Alerts</p>
          </div>
      </div>

        <div className='flex justify-center gap-10'>
            <div className='bg-white rounded-2xl w-lg mt-10 px-10 py-10 shadow-md'>
                <Bar
                data={{
                    labels: ["JAN","FEB","MARCH"],
                    datasets: [
                        {
                            label: "Total User",
                            data: [200,300,400]
                        },
                        {
                            label: "Active User",
                            data: [120,230,300]
                        }
                    ],
                }} />
              </div>
                <div className='bg-white rounded-2xl w-lg mt-10 px-10 py-10 shadow-md'>
                  <Line
                  data={{
                      labels: ["JAN","FEB","MARCH","APRIL"],
                      datasets: [
                          {
                              label: "Total User",
                              data: [100,200,100,250]
                          },
                          {
                              label: "Active User",
                              data: [80,130,100,200]
                          }
                      ],
                  }} />
                  </div>

                <div className='w-sm bg-white mt-10 rounded-2xl p-10 shadow-lg transition-transform duration-300 hover:-translate-y-2'>
                      <Doughnut 
                      data={{
                          labels: ["JAN","FEB","MARCH"],
                          datasets: [
                              {
                                  label: "Total User",
                                  data: [200,300,400]
                              }
                          ],
                      }} />
                  </div>
          </div>

          
        

        <div className="bg-white p-10 rounded-2xl mt-10">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Recent Activity</h2>

          <table className="w-full text-left">
            <thead>
            <tr className="border-b ">
              <th className="py-2 text-blue-800">User</th>
              <th className="py-2 text-blue-800">Action</th>
              <th className="py-2 text-blue-800">Date</th>
            </tr>
            </thead>
            <tbody>
            <tr className="border-b hover:bg-blue-50">
              <td className="py-2">Hammad</td>
              <td className="py-2">Logged In</td>
              <td className="py-2">Today</td>
            </tr>
            <tr className="border-b hover:bg-blue-50">
              <td className="py-2">Ali</td>
              <td className="py-2">Profile Update</td>
              <td className="py-2">Yesterday</td>
            </tr>
            <tr className='border-b hover:bg-blue-50'>
              <td className="py-2">Sherazi</td>
              <td className="py-2">Logged Out</td>
              <td className="py-2">2 days ago</td>
            </tr>
            <tr className='hover:bg-blue-50'>
              <td className='py-2'>Umer</td>
              <td className='py-2'>Logged In</td>
              <td className='py-2'>2 hour ago</td>
            </tr>
            </tbody>
          </table>
        </div>
    </main>
    </div>

  </div>


  )
}

export default Dashboard
