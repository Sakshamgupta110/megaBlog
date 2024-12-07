import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login,logout } from './store/authSlice'
import { Footer, Header } from './components'

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
    .finally(()=> setLoading(false))
    ,[]})
     
   if(!loading)
   {
     return (
      <div className="min-h-screen flex-wrap content-between bg-gray-600">
        <div className='w-full block'>
          <Header/>
          <main>
            //handle later
          </main>
          <Footer/>
        </div>
      </div>
     )
   }
   else
   {
    return null;
   }
}

export default App
