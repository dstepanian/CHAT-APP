import {create} from 'zustand';
import {axiosInstance} from '../lib/axios.js';
import {toast} from "react-hot-toast";

export const useAuthStore = create((set) => ({
    authUser: null,
    isSignedInUp: false,
    isLoggingIn: false,
    isUpdatingProfile: false,

    isCheckingAuth: true,

    checkAuth: async () => {
        try {
            const res = await axiosInstance.get('auth/check')

            set({authUser: res.data})
        } catch (e) {
            set({authUser: null})
            console.log(e)
        } finally {
            set({isCheckingAuth: false})
        }
    },

    signup: async (data) => {
        set({isSigningUp: true})
        try {
            const res = await axiosInstance.post('auth/signup', data)
            set({authUser: res.data})
            toast.success('Signup successful')

        } catch (e) {
            toast.error(e.response.data.message)
        } finally {
            set({isSigningUp: false})
        }
    },

    logout : async () => {
        try{
            await axiosInstance.post('auth/logout')
            set({authUser: null})
            toast.success('Logout successful')
        }catch(e){
            toast.error(e.response.data.message)
        }
    },

    login: async (data) => {
        set({isLoggingIn: true})
        try {
            const res = await axiosInstance.post('auth/login', data)
            set({authUser: res.data})
            toast.success('Login successful')
        } catch (e) {
            toast.error(e.response.data.message)
        } finally {
            set({isLoggingIn: false})
        }
    },

    updateProfile: async (data) => {
        set({ isUpdatingProfile: true });
        try {
            const res = await axiosInstance.put("/auth/update-profile", data);
            set({ authUser: res.data });
            toast.success("Profile updated successfully");
        } catch (error) {
            console.log("error in update profile:", error);
            toast.error(error.response.data.message);
        } finally {
            set({ isUpdatingProfile: false });
        }
    },
}))
