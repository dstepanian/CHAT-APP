import Navbar from "./components/Navbar.jsx";
import {Routes, Route, Link, Router, Navigate} from "react-router-dom";

import HomePage from "./pages/HomePage.jsx"
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx"
import SettingsPage from "./pages/SettingsPage.jsx"
import ProfilePage from "./pages/ProfilePage.jsx"
import {useAuthStore} from "./store/useAuthStore.js";
import {useEffect} from "react";

import {Loader} from "lucide-react";


const App = () => {
    const {authUser, checkAuth, isCheckingAuth} = useAuthStore()

    useEffect(() => {
        checkAuth()
    }, [checkAuth])

    if (isCheckingAuth && !authUser) {
        return (<div className="flex items-center justify-center h-screen">
                <Loader className='size-15 animate-spin '/>
            </div>)
    }

    console.log(authUser)
    return (<div>
        <Navbar/>

        <Routes>
            <Route path='/' element={ authUser ? <HomePage/> : <Navigate to="/login" /> }/>
            <Route path='/signup' element={ !authUser ? <SignUpPage/> : <Navigate to="/" /> }/>
            <Route path='auth/login' element={ !authUser ? <LoginPage/> : <Navigate to="/" /> }/>
            <Route path='/settings' element={<SettingsPage/>}/>
            <Route path='/profile' element={ authUser ? <ProfilePage/> : <Navigate to="/login" /> }/>
        </Routes>
    </div>)
}

export default App