import { css } from '@emotion/react';

import { useCountStore } from '@/shared/store';
import { theme } from '@/shared/theme';

const textStyle = css`
  font-size: ${theme.fontSize.lg};
  color: ${theme.colors.red};
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
