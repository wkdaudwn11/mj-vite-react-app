import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import eslintPluginImport from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSort,
      'jsx-a11y': jsxA11y,
      import: eslintPluginImport,
    },

    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      ...prettier.rules,

      // React Fast Refresh 안정성
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/jsx-key': 'warn', // map 같은 거 돌릴 때 key 누락 경고
      'react/no-array-index-key': 'warn', // index를 key로 쓰면 경고

      // mport 정렬 (알파벳 순)
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      // 사용하지 않는 변수 에러
      'no-unused-vars': [
        'warn',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: true,
          varsIgnorePattern: 'StrictMode|App',
        },
      ],
      'no-duplicate-imports': 'error', // 중복 import 금지
      'no-console': ['warn', { allow: ['warn', 'error'] }], // console.log 경고 처리
      'no-else-return': 'warn', // 불필요한 else 방지
      'no-var': 'error', // 'var' 사용 금지
      'no-multi-spaces': 'warn', // 여러 개의 공백 금지 (코드 내 들쭉날쭉한 공백 방지)
      'no-useless-return': 'warn', // 쓸모없는 return 제거
      'no-empty-function': ['warn', { allow: ['arrowFunctions'] }], // 비어있는 함수는 경고
      'no-alert': 'warn', // alert 사용 금지

      // import 순서를 그룹별로 검사 (알파벳 순 아님, 검사만)
      'import/order': [
        'warn',
        {
          groups: [
            ['builtin', 'external'],
            'internal',
            ['parent', 'sibling', 'index'],
          ],
          'newlines-between': 'always',
        },
      ],
      'import/no-unresolved': 'error', // 존재하지 않는 모듈 import 시 에러
      'import/no-duplicates': 'error', // 같은 모듈을 중복 import하면 에러
      'import/newline-after-import': 'warn', // import 문 다음에 빈 줄이 없으면 경고

      'prefer-const': 'warn', // 변경되지 않는 변수는 const 사용 유도
      'prefer-template': 'warn', // 문자열 연결 시 템플릿 리터럴 사용 유도

      'arrow-body-style': ['warn', 'as-needed'], // 화살표 함수에서 한 줄 반환일 경우 중괄호 생략
      yoda: ['error', 'never'], // yoda 조건문 금지 ex) if (5 === x) <- 이런식으로 쓰는 거 금지. 리터럴은 항상 오른쪽에.

      eqeqeq: ['error', 'always'], // 항상 '===' 사용
      curly: ['error', 'all'], // 블록문 중괄호 강제
    },
  },
];
