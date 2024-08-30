import Image from "next/image"

const UserCard = ({type}:{type:string}) => {
  return (
    <div className="rounded-lg p-4 flex-1 flex flex-col gap-y-4 odd:bg-qSky even:bg-qSkyLight min-w-[130px]">
      <div className="flex flex-row justify-between text-sm text-slate-600">
        <span className="text-slate-800 px-2 py-1 rounded-full bg-slate-50 text-xs">2025, 24 June</span>
        <Image src='/more.png' alt="" width={20} height={20}/>
      </div>

      <div className="text-xl font-semibold text-slate-800">6,120</div>

       <div className="text-sm text-slate-600 capitalize">{type}</div>
    </div>
  )
}

export default UserCard