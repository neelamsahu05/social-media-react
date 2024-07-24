import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider,createBrowserRouter} from  'react-router-dom'
import App from './router/App.jsx'
import CreatePost from './Componets/CreatePost.jsx'
import PostList from './Componets/PostList.jsx'
  

const router= createBrowserRouter([
  { path:"/", element: <App/> ,
    children:[
    {path:"/create-post"    ,element:<CreatePost/>},
    { path:"/",  element:< PostList/>}
  ]},
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    
  </React.StrictMode>,
)
