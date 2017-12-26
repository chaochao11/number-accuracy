import typescript from 'rollup-plugin-typescript2';

export default {
  input: './src/index.ts',
  output: [{
    format: 'iife',
    name: 'NA',
    dest: './build/index.iife.js',
  }, {
    format: 'umd',
    name: 'NA',
    dest: './build/index.umd.js',
  }, {
    format: 'cjs',
    dest: './build/index.js',
  }],
  plugins: [
    typescript()
  ]
};
