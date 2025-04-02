<p align="center">
  <img src="https://vitejs.dev/logo.svg" alt="Vite Logo" width="80" />
  <img src="https://reactjs.org/logo-og.png" alt="React Logo" width="80" />
  <img src="https://tailwindcss.com/favicons/favicon-32x32.png" alt="Tailwind CSS Logo" width="32" />
  <img src="https://avatars.githubusercontent.com/u/139895814?s=200&v=4" alt="shadcn/ui" width="32" />
  <img src="https://zustand-demo.pmnd.rs/favicon.ico" alt="Zustand Logo" width="32" />
</p>

<p align="center">
  <img alt="Vite" src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white" />
  <img alt="React" src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black" />
  <img alt="TailwindCSS" src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" />
  <img alt="shadcn/ui" src="https://img.shields.io/badge/shadcn/ui-black?style=flat-square" />
  <img alt="Zustand" src="https://img.shields.io/badge/Zustand-000000?style=flat-square&logo=zustand&logoColor=white" />
  <img alt="Prettier" src="https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=black" />
  <img alt="ESLint" src="https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white" />
</p>

---

## 🧰 Tech Stack

| Category         | Technology                                   |
| ---------------- | -------------------------------------------- |
| Build Tool       | [Vite](https://vitejs.dev)                   |
| UI Library       | [React](https://react.dev)                   |
| CSS Utility      | [Tailwind CSS](https://tailwindcss.com) (v4) |
| UI Component     | [shadcn/ui](https://ui.shadcn.com)           |
| State Management | [Zustand](https://zustand-demo.pmnd.rs/)     |
| Formatter        | [Prettier](https://prettier.io)              |
| Linter           | [ESLint](https://eslint.org)                 |

---

## 🛠️ VSCode 설정 (권장)

저장 시 자동으로 **코드 포맷팅 및 ESLint 수정**이 작동하도록 아래와 같이 VSCode를 설정하는 것을 권장합니다.

<details>
<summary>💡 <code>.vscode/settings.json</code> 예시</summary>

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit",
    "source.fixAll.eslint": "explicit"
  }
}
```
