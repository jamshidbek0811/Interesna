"use client"

import { cn } from "@/lib/utils"
import { IUser } from "@/types"
import { FileText, HomeIcon, LucideProps, User, Users } from "lucide-react"
import Link from "next/link"
import { AiOutlineGlobal } from "react-icons/ai"
import AccountComponent from "../shared/account-component"
import { usePathname } from "next/navigation"

interface SidebarProps {
  user: IUser
}

interface ILinks {
  name: string
  route: string
  icon: LucideProps
}

const Sidebar = ({ user }: SidebarProps) => {
  const pathname = usePathname()
  return (
    <div className="fixed left-0 top-0 border-r h-screen lg:w-[20vw] w-[15vw] lg:px-2 flex flex-col justify-around">
      <div className="w-full absolute top-3 flex max-lg:flex-col justify-center items-center md:gap-2 text-center font-bold">
        <AiOutlineGlobal className="lg:text-3xl sm:text-2xl text-xl"/>
        <h2 className="md:block hidden lg:text-3xl sm:text-xl">Uzun Devs Comunity</h2>
        <h2 className="md:hidden block text-xl">UDC</h2>
      </div>

      <div className="flex flex-col gap-y-3">
        {links.map(link => (
          <Link href={link.route} role="button" key={link.name} className={cn("flex w-full hover:bg-sky-600 duration-300 select-none justify-center p-2 rounded-full border cursor-pointer items-center gap-2", (pathname === link.route) && "bg-sky-600")}>
            <h2 className="md:block hidden">{link.name}</h2>
            <p>
              {link.icon as string}
            </p>
            
          </Link>
        ))}
      </div>

      <div className="absolute bottom-4 w-full">
        <AccountComponent user={user} />
      </div>
    </div>
  )
}

const links: ILinks[] = [
    {
      name: "Home",
      route: "/",
      icon: <HomeIcon />
    },
    {
      name: "Posts",
      route: "/posts",
      icon: <FileText />
    },
    {
      name: "Users",
      route: "/users",
      icon: <Users />
    },
    {
      name: "Profile",
      route: "/profile",
      icon: <User />
    }
]

export default Sidebar