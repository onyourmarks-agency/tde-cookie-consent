import { babel } from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import fs from 'fs';
import path from 'path';
import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import scss from 'rollup-plugin-scss';
import terser from '@rollup/plugin-terser';
import sveltePreprocess from 'svelte-preprocess';

const options = {
  input: 'src/js/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      compact: true,
    },
    {
      file: 'dist/index.es.js',
      format: 'es',
      compact: true,
    },
  ],
  plugins: [
    {
      name: 'Erase Dist',
      buildStart() {
        fs.rmSync(path.resolve('dist'), {
          recursive: true,
          force: true,
        });
      },
    },
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
    resolve({
      browser: true,
      exportConditions: ['svelte'],
      extensions: ['.svelte'],
    }),
    scss({
      fileName: 'index.css',
      outputStyle: 'compressed',
    }),
    svelte({
      preprocess: sveltePreprocess(),
      include: 'src/**/*.svelte',
    }),
    terser(),
    typescript({
      module: 'esnext',
      declaration: true,
      declarationDir: 'dist/types',
    }),
  ],
};

export default options;
