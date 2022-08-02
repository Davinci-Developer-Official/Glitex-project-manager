import React from 'react'
import{
    BrowserRouter as Router,//router.
    Routes,//routes followed.
    Route//individual route.

}from 'react-router-dom';

import Dashboard from './pages/Dashboard'//user dashboard
import ErrorPage from './pages/ErrorPage';//error page
import UploadPage from './pages/UploadPage'//uploads  page
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Admin from './pages/Admin';
import Forum from './pages/Forum';
import Login from './pages/Login';
import Register from './pages/Register';
import ProfileSettings from './pages/ProfileSettings';
import FeedbackPage from './pages/FeedbackPage'
function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Dashboard/>} />
            <Route path='/upload' element={<UploadPage/>} />
            <Route path='/adminpage ' element={<Admin/>}/>
            <Route path='/forum' element={<Forum/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>}  />
            <Route path='/profile'  element={<ProfileSettings/>} />
            <Route path='/feedback' element={<FeedbackPage/>} />



            
           <Route path='*' element={<ErrorPage/>} />


            
            

        </Routes>
        <Footer/>
    </Router>

    
  )
}

export default App