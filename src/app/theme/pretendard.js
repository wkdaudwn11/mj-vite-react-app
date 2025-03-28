import { css } from '@emotion/react';

import PretendardBlack from '@/shared/assets/fonts/Pretendard/Pretendard-Black.woff2';
import PretendardBold from '@/shared/assets/fonts/Pretendard/Pretendard-Bold.woff2';
import PretendardExtraBold from '@/shared/assets/fonts/Pretendard/Pretendard-ExtraBold.woff2';
import PretendardExtraLight from '@/shared/assets/fonts/Pretendard/Pretendard-ExtraLight.woff2';
import PretendardLight from '@/shared/assets/fonts/Pretendard/Pretendard-Light.woff2';
import PretendardMedium from '@/shared/assets/fonts/Pretendard/Pretendard-Medium.woff2';
import PretendardRegular from '@/shared/assets/fonts/Pretendard/Pretendard-Regular.woff2';
import PretendardSemiBold from '@/shared/assets/fonts/Pretendard/Pretendard-SemiBold.woff2';
import PretendardThin from '@/shared/assets/fonts/Pretendard/Pretendard-Thin.woff2';

const pretendardFont = css`
  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardThin}) format('woff2');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardExtraLight}) format('woff2');
    font-weight: 200;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardLight}) format('woff2');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardRegular}) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardMedium}) format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardSemiBold}) format('woff2');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardBold}) format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardExtraBold}) format('woff2');
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardBlack}) format('woff2');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }
`;

export default pretendardFont;
