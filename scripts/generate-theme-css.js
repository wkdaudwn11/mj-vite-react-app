/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { theme } from '../src/shared/styles/theme.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputPath = path.resolve(__dirname, '../src/app/styles/theme.css');

const { colors = {}, fontSize = {} } = theme;

const colorLines = Object.entries(colors).map(
  ([key, value]) => `  --color-${key}: ${value};`
);

const fontSizeLines = Object.entries(fontSize).map(
  ([key, value]) => `  --font-size-${key}: ${value};`
);

const cssContent = `@theme {\n${[...colorLines, ...fontSizeLines].join('\n')}\n}\n`;

fs.writeFileSync(outputPath, cssContent);

console.log('theme.css generated at:', outputPath);
