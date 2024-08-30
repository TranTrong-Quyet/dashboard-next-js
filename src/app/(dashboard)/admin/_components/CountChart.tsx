"use client";

import React, { PureComponent } from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

import Image from "next/image";

//-----DATA---------
const data = [
  {
    name: "Total",
    count: 100,
    fill: "white",
  },
  {
    name: "Boys",
    count: 50,
    fill: "#8884d8",
  },
  {
    name: "Girls",
    count: 50,
    fill: "#83a6ed",
  },
];

const CountChart = () => {
  return (
    <>
      <div className="bg-white rounded-md px-4 py-4 h-full">
        {/* Chart Top */}
        <div className="flex flex-row justify-between items-center ">
          <div className="text-base text-medium text-lg font-semibold">
            Students
          </div>
          <Image src="/moreDark.png" width={24} alt="" height={24} />
        </div>

        {/* Chart itself */}

        <div className="chart__wrapper w-full h-[75%]">
          <ResponsiveContainer>
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="40%"
              outerRadius="100%"
              barSize={24}
              data={data}
            >
              <RadialBar
                label={{ position: "insideStart", fill: "#fff" }}
                background
                dataKey="count"
              />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
        {/* Bottom */}
        <div className="flex flex-row gap-4 self-center justify-center ">
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="rounded-full w-5 h-5 bg-qSky"></div>
            <h1 className="font-bold ">1,324</h1>
            <h2 className="text-slate-700 text-xs">Boy: 233</h2>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <div className="rounded-full w-5 h-5 bg-qSkyLight"></div>
            <h1 className="font-bold ">1,676</h1>
            <h2 className="text-slate-700 text-xs">Girl: 233</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountChart;
