"use client"

import Button from "@/components/ui/button"
import useCreateModal from "@/hooks/use-create-post-modal"
import { PlusCircle } from "lucide-react"

const TopComponent = () => {
    const useCreatePostModal = useCreateModal()

    return (
      <section className="md:px-6 px-2 py-4 flex flex-col max-md:gap-3 md:flex-row md:items-center md:justify-between border-b border-slate-700">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            Posts
          </h1>
          <p className="text-slate-400 mt-1 max-w-md">
            Foydalanuvchilarning so‘nggi postlarini o‘qing, fikr bildiring va o‘z postlaringizni yarating.
          </p>
        </div>

        <Button onClick={useCreatePostModal.onOpen} label={<div className="flex items-center gap-2"><PlusCircle size={30} className="text-sky-500" /> <p>Create Post</p></div>} secondary />
      </section>
    )
}

export default TopComponent