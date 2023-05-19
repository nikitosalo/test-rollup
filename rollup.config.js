import commonjs from 'rollup-plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: 'dist/index.js',
      format: 'iife',
      sourcemap: true,
    },
  ],
  plugins: [commonjs(), typescript(), terser(), resolve()],
};
