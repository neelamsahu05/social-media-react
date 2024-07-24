import { PostContext } from "../store/PostListStore"
import Post from "./Post"
import { useContext, useEffect, useState } from "react"
import WelcomeMsg from './WelcomMsg'
import LoadingSpinner from "./LoadingSpinner"

const PostList = ()=>{
    const {postList,fateching}=useContext(PostContext)  
    
        

    
 
    return  (
        <>  
        {fateching && <LoadingSpinner/>}
        { !fateching && postList.length === 0 && <WelcomeMsg  />  }
        { !fateching && postList.map((post)=> <Post   key ={post.id} post={post}/>)}
          
      
    </>

)


}
export default PostList