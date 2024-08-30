import Image from "next/image";
import Link from "next/link";
import Menu from "@/components/Menu";
import NavBar from "@/components/NavBar";



export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="h-screen flex">
        {/* LEFT */}
        <div className=" w-1/6 md:w-[8%] lg:w-[16%] xl:w-[14%] px-2 pt-3">
        <Link href='/' className="flex items-center justify-center lg:justify-start gap-2 mb-8">
        <Image src='/logo.png' alt="Logo" width={32} height={32} />
        <span className="hidden lg:block text-slate-700 font-semibold text-base ">Q school</span>
        </Link>

        <Menu/>
        </div>
        {/* RIGHT */}
        <div className='flex flex-col w-5/6 md:w-[92%] lg:w-[84%] xl:w-[86%] bg-slate-100' >
        <NavBar/>
        {children}         
        </div>
      </div>
  );
}
