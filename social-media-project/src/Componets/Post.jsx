import { MdDelete } from "react-icons/md";
import PostContextProvider from "../store/PostListStore";
import { PostContext } from "../store/PostListStore";
import { useContext } from "react";
const Post = ({post})=>{
   const {DeleteList}=useContext(PostContext);
   
  return(

<div className="card  post-card"   style={{width:" 30rem"}}>
  
  <div className="card-body  ">
    <h5 className="card-title">{post.title}
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=> DeleteList(post.id)}>
      
    <MdDelete  />
      </span>
    </h5>
    <p className="card-text">{post.body}</p>
       
    { 
    post.tags.map((tag) => <span key={tag}
    className="badge text-bg-primary post-tag">{tag}</span>)}
   
   
     <div className="alert alert-success" role="alert">
     this post has been reacted by {post.reactions.likes} people
</div>  
<div className="alert alert-danger" role="alert">
     this post has been disliked  by {post.reactions.dislikes} people
</div>   
  
   </div>
</div>

)
}
export default Post