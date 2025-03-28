import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const initialState = {
  count: 0,
};

const createCountSlice = set => ({
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
});

const useCountStore = create(
  import.meta.env.VITE_APP_ENV === 'development'
    ? devtools(createCountSlice, { name: 'useCountStore' })
    : createCountSlice
);

export default useCountStore;
