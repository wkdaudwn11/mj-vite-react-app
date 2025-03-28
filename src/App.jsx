import { css } from '@emotion/react';

const themedStyle = theme => css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: ${theme.colors.primary};
  font-size: ${theme.fontSize.lg};
  color: #ffffff;
`;

const App = () => <div css={themedStyle}>App</div>;

export default App;
