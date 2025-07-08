import React, {useState} from 'react'
import {useAuthStore} from "../store/useAuthStore.js";
import {Mail, MessageSquare, User, Lock, Eye, EyeOff, Loader2} from "lucide-react";
import {Link} from "react-router-dom";
import AuthImagePattern from "../components/AuthImagePattern";
import {toast} from 'react-hot-toast'

const SignUpPage = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        fullName: '', email: '', password: '',
    })

    const {signup, isSigningUp} = useAuthStore()
    const validateForm = () => {
        if (!formData.fullName.trim()) return toast.error("Full name is required");
        if (!formData.email.trim()) return toast.error("Email is required");
        if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
        if (!formData.password) return toast.error("Password is required");
        if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");

        return true;
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const success = validateForm();

        if (success === true) signup(formData);
    }

    return <div className='max-h-screen grid lg:grid-cols-2 h-screen'>
        {/*    LEFT SIDE    */}
        <div className='flex flex-col justify-center items-center p-6 sm:p-12'>
            <div className='w-full max-w-md space-y-8'>
                {/*LOGO*/}
                <div className="text-center mb-8">
                    <div className="flex flex-col items-center gap-2 group">
                        <div
                            className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <MessageSquare className="size-8 text-primary hover:text-pink-100 animate-pulse"/>
                        </div>
                        <h1 className="text-2xl font-bold mt-2 d">Create Account</h1>
                        <p className="text-base-content/16">Get started with your free account</p>
                    </div>
                </div>
                {/*FORM*/}
                <form onSubmit={handleSubmit} className='space-y-6'>
                    {/*Full Name field*/}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium">Full Name</span>
                        </label>
                        <div className='relative'>

                            <input
                                type="text"
                                className={`input rounded-xl input-bordered w-full pl-10`}
                                placeholder="Donald Trump"
                                value={formData.fullName}
                                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                            />
                            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                <User className='size-5 text-gray-400'/>
                            </div>
                        </div>
                    </div>
                    {/*Email field*/}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium">Email</span>
                        </label>
                        <div className='relative'>
                            <input
                                type="text"
                                className={`input rounded-xl input-bordered w-full pl-10`}
                                placeholder="donald@trump.com"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                                <Mail className='size-5 text-gray-400'/>
                            </div>
                        </div>
                    </div>
                    {/*Password field*/}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium">Password</span>
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                className={`input input-bordered w-full pl-10`}
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={(e) => setFormData({...formData, password: e.target.value})}
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="size-5 text-base-content/40"/>
                            </div>
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <EyeOff className="size-5 text-base-content/40"/>
                                ) : (
                                    <Eye className="size-5 text-base-content/40"/>
                                )}
                            </button>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-full" disabled={isSigningUp}>
                        {isSigningUp ? (
                            <>
                                <Loader2 className="size-5 animate-spin"/>
                                Loading...
                            </>
                        ) : (
                            "Create Account"
                        )}
                    </button>
                </form>
                <div className="text-center">
                    <p className="text-base-content/60">
                        Already have an account?{" "}
                        <Link to="/login" className="link link-primary">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>

        {/*    Right Side   */}

        <AuthImagePattern
            title="Join to Miasin"
            subtitle="Connect with friends, share moments, and stay in touch with your loved ones."
        />
    </div>
}
export default SignUpPage
