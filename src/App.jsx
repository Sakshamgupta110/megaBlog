import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login,logout } from './store/authSlice'
import { Footer, Header } from './components'
import { Routes, Route } from 'react-router-dom';
import { AuthLayout } from './components';
import AddPost from './pages/AddPost';
import EditPost from './pages/EditPost';
import AllPost from './pages/AllPost';
import Post from './pages/Post';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=> {
      setLoading(false)
      console.log('Loading finished');
    })
  },[])
   
   if(loading)
   {
     return <div style={{color: 'white', textAlign: 'center', marginTop: '2rem'}}>Loading... (test message)</div>;
   }
   if(!loading)
   {
     return (
      <div className="min-h-screen flex-wrap content-between bg-gray-600">
        <div className='w-full block'>
          <Header/>
          <main>
            <Routes>
              <Route path="/" element={<AllPost />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route element={<AuthLayout authentication={true} />}>
                <Route path="/add-post" element={<AddPost />} />
                <Route path="/edit-post/:slug" element={<EditPost />} />
                <Route path="/all-posts" element={<AllPost />} />
                <Route path="/post/:slug" element={<Post />} />
              </Route>
            </Routes>
          </main>
          <Footer/>
        </div>
      </div>
     )
   }
}

export default App
