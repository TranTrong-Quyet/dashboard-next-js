"use client";

import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import Image from "next/image";

//-----DATA---------
const data = [
  {
    name: "Mon",
    present: 60,
    absent: 2,
  },
  {
    name: "Tue",
    present: 70,
    absent: 20,
  },
  {
    name: "Wed",
    present: 56,
    absent: 40,
  },
  {
    name: "Thu",
    present: 150,
    absent: 34,
  },
  {
    name: "Fri",
    present: 80,
    absent: 20,
  },
];

const AttendanceChart = () => {
  return (
    <>
      <div className="bg-white rounded-md px-4 py-4 h-full">
        {/* Chart Top */}
        <div className="flex flex-row justify-between items-center ">
          <div className="text-base text-medium text-lg font-semibold">
            Attendance
          </div>
          <Image src="/moreDark.png" width={24} alt="" height={24} />
        </div>

        {/* Chart itself */}
        <div className="chart__wrapper w-full h-full">
          <ResponsiveContainer>
            <BarChart
              //   width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 15,
                left: 20,
                bottom: 32,
              }}
            >
              <Legend
                align="left"
                verticalAlign="top"
                wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
              />
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} />
              <Tooltip />
              <Bar
                dataKey="present"
                fill="#8884d8"
                activeBar={<Rectangle fill="pink" stroke="blue" />}
                legendType="circle"
                radius={[10, 10, 0, 0]}
              />
              <Bar
                dataKey="absent"
                fill="#82ca9d"
                activeBar={<Rectangle fill="gold" stroke="purple" />}
                legendType="circle"
                radius={[10, 10, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default AttendanceChart;
