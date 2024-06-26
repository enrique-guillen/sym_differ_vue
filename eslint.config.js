import globals from 'globals';
import pluginVue from 'eslint-plugin-vue';
import stylistic from '@stylistic/eslint-plugin';

import path from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';

// Mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname, recommendedConfig: pluginJs.configs.recommended });

export default [
  { languageOptions: { globals: globals.browser } },
  ...compat.extends('xo'),
  ...pluginVue.configs['flat/essential'],
  { plugins: { '@stylistic': stylistic } },
  {
    rules: {
      indent: ['error', 2],
      'object-curly-spacing': ['error', 'always'],
      '@stylistic/object-curly-spacing': ['error', 'always'],
    },
  },
  {
    files: ['src/axios-adapter.js'],
    rules: { camelcase: ['off'] },
  },
];
