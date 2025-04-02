import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const initialState = {
  count: 0,
};

/**
 * @typedef {Object} CreateSlice
 * @property {number} count - 카운트 값
 * @property {() => void} setIncrease - 증가 함수
 * @property {() => void} setDecrease - 감소 함수
 * @property {() => void} reset - 초기화 함수
 */
/** @type {import('zustand').StateCreator<CreateSlice>} */
const createCountSlice = set => ({
  ...initialState,
  setIncrease: () => set(state => ({ count: state.count + 1 }), false, 'increase'),
  setDecrease: () => set(state => ({ count: state.count - 1 }), false, 'decrease'),
  reset: () => set(initialState, false, 'reset'),
});

const useCountStore = create(
  import.meta.env.VITE_APP_ENV === 'development'
    ? devtools(createCountSlice, { name: 'useCountStore' })
    : createCountSlice
);

export default useCountStore;
