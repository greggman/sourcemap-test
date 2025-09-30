import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from "@rollup/plugin-node-resolve";
import fs from 'fs';

const pkg = JSON.parse(fs.readFileSync('package.json', {encoding: 'utf8'}));
const banner = `/* @${pkg.version} */`;
const major = pkg.version.split('.')[0];
const dist = `build`;

const plugins = [
    nodeResolve(),
    typescript({ tsconfig: './tsconfig.json' }),
];
const shared = {
    watch: {
        clearScreen: false,
    },
};

export default [
    {
        input: 'src/test.ts',
        output: [
            {
                file: `${dist}/test.module.js`,
                format: 'esm',
                sourcemap: 'inline',
                freeze: false,
                banner,
            },
        ],
        plugins: [
            ...plugins,
            terser(),
        ],
        ...shared,
    },
];
