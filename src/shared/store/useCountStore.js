import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const initialState = {
  count: 0,
};
const useCountStore = create(
  devtools(set => ({
    ...initialState,
    setIncrease: () =>
      set(
        state => ({
          count: state.count + 1,
        }),
        false,
        'increase'
      ),
    setDecrease: () =>
      set(
        state => ({
          count: state.count - 1,
        }),
        false,
        'decrease'
      ),
    reset: () => set(initialState, false, 'reset'),
  }))
);

export default useCountStore;
