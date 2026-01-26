import React from 'react';
import {Chart as ChartJs} from "chart.js/auto";
import {Bar,Doughnut,Line,Pie} from "react-chartjs-2";

function Chart() {
  return (
    <div>
      <div className='w-md'>
        <Bar 
        data={{
            labels: ["jan","feb","march"],
            datasets: [
                {
                    label: "total user",
                    data: [200,300,400]
                },
                {
                    label: "active user",
                    data: [120,230,300]
                }
            ],
        }} />
      </div>
      <div className='w-md'>
        <Doughnut 
        data={{
            labels: ["jan","feb","march"],
            datasets: [
                {
                    label: "total user",
                    data: [200,300,400]
                }
            ],
        }} />
        </div>
        <div className='w-md'>
        <Pie
        data={{
            labels: ["jan","feb","march"],
            datasets: [
                {
                    label: "total user",
                    data: [200,300,400]
                }
            ],
        }} />
        </div>

        <div className='w-md'>
        <Line
        data={{
            labels: ["jan","feb","march","april"],
            datasets: [
                {
                    label: "total user",
                    data: [100,200,100,250]
                },
                {
                    label: "active user",
                    data: [80,130,100,200]
                }
            ],
        }} />
        </div>
    </div>
  )
}

export default Chart


      {/* <aside className="w-80 p-5 block bg-[#0B3F71]">
        <h2 className="text-3xl font-bold text-white mb-10">Dashboard</h2>

        <nav className="space-y-4">
          <a href="/home" className="flex items-center gap-3 text-blue-100 font-semibold text-lg hover:text-white">
            <Home size={20} />Home</a>

          <a href="/profile" className="flex items-center gap-3 text-blue-100 font-semibold text-lg hover:text-white">
            <User size={20} />Profile</a>

          <a href="#" className="flex items-center gap-3 text-red-500 font-semibold text-lg hover:text-red-700">
            <LogOut size={20} />Logout</a>
        </nav>
      </aside> */}
