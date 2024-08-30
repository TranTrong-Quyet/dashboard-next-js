import Image from "next/image"

const NavBar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-4 ring-1 rounded-full pl-2">
        <Image src='/search.png' width={14} height={14} alt="search icon"/>
        <input type="text" placeholder="Search here..." className="px-2 py-1 bg-transparent rounded-full"/>
      </div>

      {/* USER ICONS */}
      <div className="flex flex-row align-middle items-center gap-6 justify-end w-full">
       <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
        <Image src="/message.png" alt="user message" width={20} height={20}/>
       </div>
       <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
        <Image src="/announcement.png" alt="user message" width={20} height={20}/>
        <div className="w-4 absolute -right-2 -top-1 h-4 bg-red-600 rounded-full text-[10px] flex align-middle items-center justify-center text-white leading-none">1</div>
       </div>
       <div className="bg-white flex flex-col">
          <span className="text-sm font-medium leading-3">Alex Nguyen</span>
          <span className="text-[10px] text-gray-500 text-right">Alex Nguyen</span>
       </div>
       <Image src='/avatar.png' alt="" width={35} height={35} className="rounded-full"/>
      </div>
    </div>
  )
}

export default NavBar