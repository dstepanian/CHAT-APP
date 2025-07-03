import React, {useState} from 'react'
import {useAuthStore} from "../store/useAuthStore.js";
import {MessageSquare, User} from "lucide-react";

const SignUpPage = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        fullName: '', email: '', password: '',
    })

    const {signup, isSigningUp} = useAuthStore()
    const validateForm = () => {

    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return <div className='max-h-screen grid lg:grid-cols-2'>
        {/*    LEFT SIDE    */}
        <div className='flex flex-col justify-center items-center p-6 sm:p-12'>
            <div className='w-full max-w-md space-y-8'>
                {/*LOGO*/}
                <div className="text-center mb-8">
                    <div className="flex flex-col items-center gap-2 group">
                        <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <MessageSquare className="size-8 text-primary hover:text-pink-100 animate-pulse"/>
                        </div>
                        <h1 className="text-2xl font-bold mt-2 d">Create Account</h1>
                        <p className="text-base-content/16">Get started with your free account</p>
                    </div>
                </div>
                {/*FORM*/}
                <form onSubmit={handleSubmit} className='space-y-6'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium">Full Name</span>
                        </label>
                        <div className='relative'>
                            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                                <User className='size-5 text-base-content/40'/>
                            </div>
                            <input
                                type="text"
                                className={`input rounded-xl input-bordered w-full pl-6`}
                                placeholder="Donald Trump"
                                value={formData.fullName}
                                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
}
export default SignUpPage
