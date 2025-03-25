## 🛠️ VSCode 설정 (권장)

이 프로젝트는 Vite + ESLint(Flat Config) + Prettier 기반으로 구성되어 있습니다.  
아래와 같이 VSCode에 설정하면 저장 시 자동으로 포맷 및 린트 고침이 작동합니다.

<details>
<summary>💡 <code>.vscode/settings.json</code> 예시</summary>

```json
{
  "editor.formatOnSave": true,
  "eslint.useFlatConfig": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit",
    "source.fixAll.eslint": "explicit"
  }
}
```

</detail>
ℹ️ 위 설정은 Prettier와 ESLint 확장 설치가 필요합니다.
