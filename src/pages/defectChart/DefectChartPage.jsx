import { useCountStore } from '@/shared/store';

const DefectChartPage = () => {
  const { count, setIncrease, setDecrease, reset } = useCountStore();

  return (
    <div className='bg-gray-400'>
      <h1>DefectChartPage</h1>
      <h1 className='text-3xl font-bold text-blue-500 underline'>
        Hello world!
      </h1>
      <p>{count}</p>
      <button type='button' onClick={setIncrease}>
        +
      </button>
      <button type='button' onClick={setDecrease}>
        -
      </button>
      <button type='button' onClick={reset}>
        reset
      </button>
    </div>
  );
};

export default DefectChartPage;
