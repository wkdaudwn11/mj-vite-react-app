import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import GlobalStyle from '../theme/GlobalStyle';
import { theme } from '../theme/theme';

const ThemeProvider = ({ children }) => (
  <EmotionThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </EmotionThemeProvider>
);

export default ThemeProvider;
