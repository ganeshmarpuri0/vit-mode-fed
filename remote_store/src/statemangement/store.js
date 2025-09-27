import {create} from 'zustand'

//  const useStore = create((set) => ({
//     count: 0,
//     increment: () => set((state) => ({ count: state.count + 1 })),
//     decrement: () => set((state) => ({ count: state.count - 1 })),
//     incrementBy: (value) => set((state) => ({ count: state.count + value })),
//   }))


const useStore = create((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    incrementBy: (value) => set((state) => ({ count: state.count + value })),
    access_token: '',
    refresh_token: '',
    setAccessToken: (token) => set({ access_token: token }),
    setRefreshToken: (token) => set({ refresh_token: token }),
  }))

  export default useStore