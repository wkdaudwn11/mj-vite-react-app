import { css } from '@emotion/react';

import { useCountStore } from '@/shared/store';

const containerStyle = theme => css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  gap: 8px;
  background: ${theme.colors.secondary};
`;

const textStyle = theme => css`
  font-size: ${theme.fontSize.lg};
  color: ${theme.colors.white};
`;

const buttonStyle = theme => css`
  background: ${theme.colors.white};
`;

const App = () => {
  const { count, setIncrease, setDecrease, reset } = useCountStore();

  return (
    <div css={containerStyle}>
      <p css={textStyle}>{count}</p>
      <button css={buttonStyle} onClick={setIncrease}>
        +
      </button>
      <button css={buttonStyle} onClick={setDecrease}>
        -
      </button>
      <button css={buttonStyle} onClick={reset}>
        reset
      </button>
    </div>
  );
};

export default App;
