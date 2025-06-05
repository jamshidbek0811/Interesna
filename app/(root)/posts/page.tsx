"use client"

import Header from "@/components/shared/header"
import React, { useEffect, useState } from "react"
import Category from "@/components/shared/category"
import { IPost } from "@/types"
import PostCard from "@/components/shared/post-item"
import CreatePostModal from "@/components/modals/create-post-modal"
import TopComponent from "./components/top-component"
import axios from "axios"
import { Loader2 } from "lucide-react"
import Button from "@/components/ui/button"

const PostPage = () => {
  const [load, setLoad] = useState(false)
  const [posts, setPosts] = useState<IPost[]>() 
  const [limit, setLimit] = useState(10)
  const [category, setCategory] = useState("all")

  const getAllPost = async () => {
    setLoad(true)
    try {
      const response = await axios.get(`http://localhost:3000/api/post?category=${category}&limit=${limit}`)
      setPosts(response.data.posts)
    } catch (error) {
      console.log(error);
    } finally {
      setLoad(false)
    }
  } 
  
  useEffect(() => {
    getAllPost()
  },[category, limit])


  return (
    <>
        <CreatePostModal setPosts={setPosts} />
        <Header label="Posts" isBack />
        <TopComponent />
        <Category setCategory={setCategory}/>

        <div className="md:px-6 px-2 py-4 max-md:py-8 w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
          {load && <Loader2 className="h-5 w-5 animate-spin"/>}
          {posts && posts.length > 0 ? posts.map((post, i) => (
            <PostCard key={i} post={post} />
          )) : (
              <p>Post is not found</p>
          )}
        </div>

          <div className="w-full flex justify-center items-center py-4">
            <Button label="Ko'proq ko'rish" secondary onClick={() => setLimit(prev => prev += 5)}/>
          </div>
    </>
  )
}

export default PostPage
