import { useEffect,useState,  createContext, useReducer } from "react";

 export const PostContext=createContext({
    postList :[],
    AddList:()=>{},
   fateching:false,
    DeleteList:()=>{},
})
// reducer method
  const PostListReducer=(currpostList,action)=>{
     let newpostList=currpostList; 
    if(action.type === "Post_Add"){
      newpostList=[action.payload,...currpostList] 
     
    }
    else if(action.type === "Post_Initial_Add"){
      newpostList= action.payload.posts;
    }
     else if(action.type === "Post_Delete"){
         newpostList= currpostList.filter((post)=>  post.id !=action.payload.postId )
     }
  
    return newpostList;
  }
   //postprovider
  export  const PostContextProvider= ({children})=>{

      const [postList, dispatchPostList]=useReducer(PostListReducer,[]);
      const [fateching,setFateched]=useState(false)

     
      //  add
     
  const AddList = (post)=>  {
 //console.log("add post call"+post)
      dispatchPostList({
        type:"Post_Add",
        payload: post,
              
       
      })}

      const AddInitialList =(posts)=>  {
 
        dispatchPostList({
          type:"Post_Initial_Add",
          payload:{
              posts,
          },
        })
  

      } 


    //   delete
      const DeleteList=(postId)=>{
       //console.log(`deleted item is ${postId}`)
         const deleteActin ={
           type:"Post_Delete",
            payload:{
           postId:postId

         } 

         }
     dispatchPostList(deleteActin)
      }  
           
      useEffect (()=>{
          setFateched(true)
 
          const Controller= new AbortController();
          const signal= Controller.signal;
         fetch('https://dummyjson.com/posts',(signal))
         .then(res => res.json())
         .then(data =>{ 
             AddInitialList(data.posts)
             setFateched(false)
         },)
 
          return ()=>{
             //console.log("clenaed api")
             Controller.abort();
          }
      }, [])
     
     



 
    return(
    <PostContext.Provider value={{postList,AddList,fateching,DeleteList}}>
       {children}

    </PostContext.Provider>
)
}
  



export default PostContextProvider