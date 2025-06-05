import { IUser } from "@/types"
import { signOut } from 'next-auth/react'
import { RiLogoutCircleLine } from 'react-icons/ri'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Loader2, LogOut, MoreHorizontal } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

interface AccountComponentProps {
    user: IUser
}

const AccountComponent = ({ user }: AccountComponentProps) => {
    if(user === undefined) return (
      <div className="flex justify-center items-center h-24">
        <Loader2 className="animate-spin text-sky-500" />
      </div>
    )
    return (
      <>
        <div className='lg:hidden block'>
            <div
              className='mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex items-center justify-center bg-red-500 hover:bg-opacity-80 transition cursor-pointer'
              onClick={() => signOut()}
            >
              <RiLogoutCircleLine size={24} color='white' />
            </div>
          </div>

          <Popover>
          <PopoverTrigger className='w-full rounded-full hover:opacity-80 border hidden lg:block cursor-pointer hover:bg-opacity-10 px-4 py-2 transition'>
            <div className='flex justify-between items-center gap-2'>
              <div className='flex gap-2 items-center'>
                <Avatar>
                  <AvatarImage src={user?.profileImage} />
                  <AvatarFallback>{user?.username?.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className='flex flex-col items-start text-white'>
                  {user?.username ? (
                    <p className='opacity-40'>@{user?.username}</p>
                  ) : (
                    <p className='opacity-40'>Manage account</p>
                  )}
                </div>
              </div>
              <MoreHorizontal size={24} color='white'/>
            </div>
          </PopoverTrigger>

          <PopoverContent className='bg-black lg:w-[20vw] border-none rounded-sm shadow shadow-white/20 py-2 px-1 mb-3'>
            <div
              className='font-bold flex gap-2 text-white cursor-pointer hover:bg-red-400 hover:bg-opacity-10 px-2 py-3 transition'
              onClick={() => signOut()}
            >
              <LogOut />
              <p>Log out</p>
            </div>
          </PopoverContent>
          </Popover>
      </>
    )
}

export default AccountComponent