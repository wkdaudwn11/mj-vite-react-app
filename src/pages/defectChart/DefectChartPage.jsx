import { useCountStore } from '@/shared/store';
import { theme } from '@/shared/styles';

const DefectChartPage = () => {
  const { count, setIncrease, setDecrease, reset } = useCountStore();

  return (
    <div className='flex flex-col gap-2 px-4'>
      <h1>DefectChartPage</h1>
      <p className='text-coral'>coral: {theme.colors.coral}</p>
      <p className='text-lagoon'>title: {theme.fontSize.title}</p>
      <p className='text-3xl font-bold text-blue-500 underline'>{count}</p>
      <div className='flex gap-4'>
        <button
          type='button'
          className='cursor-pointer bg-gray-300 px-2 py-1'
          onClick={setIncrease}
        >
          +
        </button>
        <button
          type='button'
          className='cursor-pointer bg-gray-400 px-2 py-1'
          onClick={setDecrease}
        >
          -
        </button>
        <button
          type='button'
          className='cursor-pointer bg-gray-500 px-2 py-1 text-gray-50'
          onClick={reset}
        >
          reset
        </button>
      </div>
    </div>
  );
};

export default DefectChartPage;
