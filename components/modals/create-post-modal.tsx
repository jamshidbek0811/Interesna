"use client"

import useCreateModal from "@/hooks/use-create-post-modal"
import { useState } from "react"
import Modal from "../ui/modal"
import { Textarea } from "../ui/textarea"
import Button from "../ui/button"
import axios from "axios"
import { toast } from "sonner"
import { IPost } from "@/types"

interface CreatePostModalProps {
    setPosts: (post: IPost[]) => void
}

const CreatePostModal = ({ setPosts }: CreatePostModalProps) => {
    const [value, setValue] = useState("")
    const [load, setLoad] = useState(false)
    const useCreatePostModal = useCreateModal()

    const onClickHandler = async () => {
        setLoad(true)
        try {
            const { data } = await axios.post('/api/post', {
                body: value
            })
            const newComment = {...data, likes: 0, hasLiked: false }
            setPosts(data)
            setPosts
            setValue("")
            useCreatePostModal.onClose()
        } catch (error: any) {
            toast.error(error.response.data.message)
            console.log(error);
        } finally {
            setLoad(false)
        }
    }
    
    const bodyContent = <div className="px-2">
        <h2 className="text-center text-3xl font-semibold mt-2 mb-5">
            Create new post!
        </h2>
        <div>
            <Textarea value={value} onChange={(e) => setValue(e.target.value)} placeholder="Create new post"/>
        </div>
        <div className="mt-6">
            <Button label={"Create"} disabled={load} onClick={onClickHandler} roundedNone secondary fullWidth />
        </div>
    </div>

    return (
      <Modal isOpen={useCreatePostModal.isOpen} onClose={useCreatePostModal.onClose} body={bodyContent} />
    )
}

export default CreatePostModal