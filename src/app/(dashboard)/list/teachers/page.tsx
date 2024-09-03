import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import React from "react";

import { role, teachersData } from "@/lib/data";
import Link from "next/link";

type Teacher = {
  id: number;
  teacherId: string;
  name: string;
  email?: string;
  photo: string;
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Subjects",
    accessor: "subjects",
    className: "hidden md:table-cell",
  },
  {
    header: "Classes",
    accessor: "classes",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const TeacherListPage = () => {
  const renderRow = (item: Teacher) => {
    return (
      <tr
        key={item.id}
        className="even:bg-blue-50 odd:bg-white border-b-slate-400"
      >
        <td className="flex flex-row gap-4 p-4 items-center">
          <Image
            src={item.photo}
            width={40}
            height={40}
            alt=""
            className="md:hidden xl:block rounded-full flex h-auto"
          />
          <div className="flex flex-col">
            <h3 className="text-base font-semibold">{item.name}</h3>
            <p className="text-sm font-normal text-slate-500">{item?.email}</p>
          </div>
        </td>
        <td className="hidden md:table-cell">{item.teacherId}</td>
        <td className="hidden md:table-cell">{item.subjects.join(";")}</td>
        <td className="hidden md:table-cell">{item.classes.join(";")}</td>
        <td className="hidden md:table-cell">{item.phone}</td>
        <td className="hidden md:table-cell">{item.address}</td>
        <td className="flex items-center gap-2">
          <Link href={`list/teacher/${item.id}`}>
            <button className="flex items-center justify-center rounded-full bg-blue-400">
              <Image src="/view.png" alt="" width={16} height={16} />
            </button>
          </Link>

          {role === "admin" && (
            <button className="flex items-center justify-center rounded-full bg-blue-400">
              <Image src="/view.png" alt="" width={16} height={16} />
            </button>
          )}
        </td>
      </tr>
    );
  };

  return (
    <div>
      <div className="flex p-4 flex-col rounded-md bg-white h-full m-4 flex-1">
        {/* TOP */}
        <div className="flex flex-row justify-between md:w-full items-center">
          <h1>All teachers</h1>
          <div className="flex flex-col gap-4 w-full md:w-auto md:flex-row items-center align-middle">
            <TableSearch />
            <div className="flex flex-row gap-4 self-end md:self-center">
              <button className="w-8 h-8 flex rounded-full bg-qSky items-center justify-center">
                <Image src="/filter.png" width={14} height={14} />
              </button>
              <button className="w-8 h-8 flex rounded-full bg-qSky items-center justify-center">
                <Image src="/sort.png" width={14} height={14} />
              </button>
              <button className="w-8 h-8 flex rounded-full bg-qSky items-center justify-center">
                <Image src="/plus.png" width={14} height={14} />
              </button>
            </div>
          </div>
        </div>
        {/* LIST */}
        <Table columns={columns} renderRow={renderRow} data={teachersData} />
        {/* PAGINATION */}
        <Pagination />
      </div>
    </div>
  );
};

export default TeacherListPage;
