import { css } from '@emotion/react';

import { useCountStore } from '@/shared/store';

const textStyle = theme => css`
  font-size: ${theme.fontSize.lg};
`;

const DefectChartPage = () => {
  const { count, setIncrease, setDecrease, reset } = useCountStore();

  return (
    <div>
      <h1>DefectChartPage</h1>
      <p css={textStyle}>{count}</p>
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
