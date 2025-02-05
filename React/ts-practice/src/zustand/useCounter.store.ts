import {create} from 'zustand'


type counterState ={
    count: number;
    increment: () => void;
    decrement: () => void
}

export const useCounterStore = create<counterState>((set) =>{
    return {
        count:0,
        increment: () => set((state) => ({...state, count: state.count + 1})),
        decrement: () => set((state) => ({...state, count: state.count - 1}))
    }
})

