import { create } from 'zustand';
import { axiosInstance } from '../lib/axios.js';

export const useAuthStore = create((set) => ({
    authUser: null,
    isSignedInUp: false,
    isLoggingIn: false,
    isUpdatingProfile: false,

    isCheckingAuth:true,

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

    }
}))
