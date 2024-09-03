import EventCalander from "@/components/EventCalander";
import Announcement from "@/components/Announcement";
import BigCalender from "@/components/BigCalender";

const TeacherPage = () => {
  return (
    <div className="flex-1 p-4 flex gap-4 flex-col xl:flex-row">
      {/* LEFT */}
      <div className="flex w-full flex-col md:w-2/3 lg:w-2/3 xl:w-2/3 gap-y-8">
        <div className="h-full bg-white rounded-md p-4">
          <h1 className="font-semibold text-xl text-slate-900">Schedule</h1>
          <BigCalender />
        </div>
      </div>

      {/* RIGHT */}
      {/* RIGHT */}
      <div className="bg-white p-4 rounded-md flex w-full  flex-col gap-8 md:w-1/3 lg:w-1/3 xl:w-1/3">
        {/* <EventCalander /> */}
        <Announcement />
      </div>
    </div>
  );
};

export default TeacherPage;
