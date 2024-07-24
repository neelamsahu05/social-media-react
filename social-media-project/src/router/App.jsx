import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Footer from '../Componets/Footer'
import 'bootstrap/dist/css/Bootstrap.min.css'
import Header from '../Componets/Header'
import Slidebar from '../Componets/Slidebar'
import CreatePost from '../Componets/CreatePost'
import PostList from '../Componets/PostList'
import PostContextPrivider from '../store/PostListStore'
import { Outlet } from 'react-router-dom'
function App() {
 const [selectedTab,setSelectedTab]=useState("Home")
 

  return (
     <PostContextPrivider> 
        <div className='app-container'>
    <Slidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
    <div className='content'> 
      <Header/>
       <Outlet/> 
   
      <Footer/>
   </div>
    </div>
    </PostContextPrivider>
 
  )
}

export default App
