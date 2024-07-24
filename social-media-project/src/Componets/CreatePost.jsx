import { useContext, useRef } from "react"
import { PostContext } from "../store/PostListStore";
import { useNavigate } from "react-router-dom";

const CreatePost =()=>{
 const {AddList}=useContext(PostContext)
 const navigate= useNavigate();
  const refUserId=useRef();
  const refPostTitle=useRef();
  const refPostBody=useRef();
  const refReaction=useRef();
  const refdisReaction=useRef();
  const refTag=useRef();
       
   const handleSubmit=(e)=>{
    e.preventDefault();
   const userId=refUserId.current.value;
   const post_title=refPostTitle.current.value;
   const postBody=refPostBody.current.value;
   const postReaction=refReaction.current.value;
   const postdisReaction=refdisReaction.current.value;
   const postTag =refTag.current.value.split(" ");
   
   refUserId.current.value="";
   refPostTitle.current.value=""
   refPostBody.current.value=""
   refReaction.current.value=""
   refdisReaction.current.value=""
   refTag.current.value=""
   fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
            id:Date.now(),
            title:post_title,
            body:postBody ,
            reactions:{
              likes:postReaction, 
              dislikes:postdisReaction,
            },
            userId:userId,
            tags:postTag ,
             
         
    })
  
  })
  .then(res => res.json())
  .then((post)=> {AddList(post)
    navigate("/")
  }  
);
    
 
   
   //AddList(userId,post_title,postBody,postReaction,postdisReaction,postTag)
     }

return(

    <form  onSubmit={handleSubmit}
    className="create-post">
  <div className="mb-3">
    <label forhtml="userId" className="form-label">enter your userid</label>
    <input type="text" className="form-control" id="userId"
    ref={refUserId}
    placeholder="user Id"/>
    
  </div>
  <div className="mb-3">
    <label forhtml="title" className="form-label">title</label>
    <input type="text" className="form-control" id="title"
    ref={refPostTitle}
    placeholder=" how are you feeling ...."/>
    
  </div>
  <div className="mb-3">
    <label forhtml="userId" className="form-label">describe yourself in brief</label>
    <textarea type="text" 
     ref={refPostBody}
    rows="4" className="form-control" id="body" placeholder="tell us more about it "/>
    
  </div>

  <div className="mb-3">
    <label forhtml="reaction" className="form-label">Number of reaction</label>
    <input type="text"
     ref={refReaction}
    className="form-control" id="userId" placeholder="how many poeple react "/>
    
  </div>

  <div className="mb-3">
    <label forhtml="reaction" className="form-label">Number of reaction of dislike</label>
    <input type="text"
     ref={refdisReaction}
    className="form-control" id="userId" placeholder="how many poeple react "/>
    
  </div>
  <div className="mb-3">
    <label forhtml="tag" className="form-label">enter your hashtag here</label>
    <input type="text" 
    ref={refTag}
    className="form-control" id="tag" placeholder="enter tag using spaces"/>
    
  </div>
 
  <button type="submit" className="btn btn-primary">post</button>
</form>
)


}
export default CreatePost