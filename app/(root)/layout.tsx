import Auth from "@/components/auth"
import Sidebar from "@/components/sidebar"
import { authOptions } from "@/lib/auth-options"
import { getServerSession } from "next-auth"
import NextTopLoader from 'nextjs-toploader'
import { ReactNode } from "react"
import { Toaster } from "sonner"

interface Props {
  children: ReactNode
}

const Layout = async ({ children }: Props) => {
    const session = await getServerSession(authOptions)
    if(!session?.user){
        return <div className="w-screen h-screen"><Auth /></div>
    }
    
    return (
    <div className="h-screen w-screen">
      <Sidebar user={JSON.parse(JSON.stringify(session.user))} />

      <div className="lg:ml-[20vw] ml-[15vw] lg:w-[80vw] w-[85vw]">
        <NextTopLoader
          color="#2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        <div className="w-full">
          <Toaster />
          {children}
        </div>
      </div>
    </div>
)
}

export default Layout