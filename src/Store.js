import { create } from "zustand";
import axios from "axios";


const useStore = create( (set) => ({
  isAuth: false,
  user: null,
  intializeAuth : async () => {  
    try {
      const res = await axios.get('/api/users/current-user')
      if(res.data.statusCode === 200) {
        set((state) => ({ isAuth: (state.isAuth = true), user: res.data.data }))
      }
    } catch (error) {
      set(state => ({isAuth : state.isAuth = false , user: null}))
      set({isAuth : false, user : null})
    }
  },
  isLogin: (userData) =>
    set((state) => ({ isAuth: (state.isAuth = true), user: userData })),
  isLogOut: () => set({ bears: 0 }),
}));

export default useStore;
