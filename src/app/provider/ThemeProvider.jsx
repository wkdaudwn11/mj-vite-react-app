import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import { GlobalStyle, theme } from '../theme';

const ThemeProvider = ({ children }) => (
  <EmotionThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </EmotionThemeProvider>
);

export default ThemeProvider;
