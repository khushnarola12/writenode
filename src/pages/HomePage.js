import { useEffect, useState,useRef } from "react"
import { getDocs,collection } from "firebase/firestore"
import { db } from "../firebase/config"
import {PostCard} from "../components/PostCard"
import { SkeletonCard } from "../components"

export const HomePage = () => {

  const [posts,setPosts] = useState([false,false])
  const postsRef =collection(db,"posts")
  const [toggle,setToggle] = useState(false)

  useEffect(()=>{
    async function getPosts(){
        const data = await getDocs(postsRef)
        setPosts(data.docs.map((document)=>(
          {...document.data(),id:document.id}
         )
      ))
        
    }
    getPosts()
  },[toggle])

   return (
    <section>
      {posts.map((post=>(
        post ? ( <PostCard key={post.id} post={post} toggle={toggle} setToggle={setToggle}/>) : (<SkeletonCard/>)
       
      )))}
    </section>
  
  )

}
