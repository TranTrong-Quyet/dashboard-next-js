import AttendanceChart from "./_components/AttendanceChart";
import CountChart from "./_components/CountChart";
import UserCard from "@/components/UserCards";

const AdminPage = () => {
  return (
    <div className="flex flex-col p-6 md:flex-row gap-6">
      {/* LEFT */}
      <div className="flex w-full flex-col md:w-2/3 lg:w-2/3 xl:w-3/4 gap-y-8">
        {/* USER CARD */}
        <div className="flex lg:flex-row w-full gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="parent" />
          <UserCard type="teacher" />
          <UserCard type="staff" />
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          {/* CountChart */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>

          {/* BarChart */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>
      </div>

      {/* MIDDLE CHART */}

      {/* RIGHT */}
      <div className="flex w-full md:w-1/3 lg:w-1/3 xl:w-1/4">right</div>
    </div>
  );
};

export default AdminPage;
