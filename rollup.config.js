import commonjs from 'rollup-plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import glob from 'glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export default {
  input: Object.fromEntries(
    glob.sync('src/**/*.tsx').map((file) => [
      // This remove `src/` as well as the file extension from each
      // file, so e.g. src/nested/foo.js becomes nested/foo
      path.relative(
        'src',
        file.slice(0, file.length - path.extname(file).length),
      ),
      // This expands the relative paths to absolute paths, so e.g.
      // src/nested/foo becomes /project/src/nested/foo.js
      fileURLToPath(new URL(file, import.meta.url)),
    ]),
  ),
  output: {
    format: 'es',
    dir: 'dist',
  },
  // input: 'src/index.tsx',
  // output: [
  //   {
  //     file: 'dist/index.js',
  //     format: 'iife',
  //     sourcemap: true,
  //   },
  // ],
  plugins: [commonjs(), typescript(), terser(), resolve()],
};
