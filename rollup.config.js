import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "src/index.ts",
    output: {
      name: "measurement-toolkit",
      exports: 'named',
      file: "dist/bundle/measurement-toolkit.umd.js",
      format: "umd",
      sourcemap: true
    },
    plugins: [
      json(),
      resolve({ browser: false }),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.esm.json", declaration: false })
    ]
  },
  {
    input: "src/index.ts",
    output: {
      name: "measurement-toolkit",
      exports: 'named',
      file: "dist/bundle/measurement-toolkit.umd.min.js",
      format: "umd",
      sourcemap: true
    },
    plugins: [
      json(),
      resolve({ browser: false }),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.esm.json", declaration: false }),
      terser({
        output: {
          comments: false
        }
      })
    ]
  },
  {
    input: "src/index.ts",
    output: {
      exports: 'named',
      file: "dist/bundle/measurement-toolkit.mjs",
      format: "es",
      sourcemap: true
    },
    plugins: [
      json(),
      resolve({ browser: false }),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.esm.json", declaration: false })
    ]
  },
  {
    input: "src/index.ts",
    output: {
      exports: 'named',
      file: "dist/bundle/measurement-toolkit.min.mjs",
      format: "es",
      sourcemap: true
    },
    plugins: [
      json(),
      resolve({ browser: false }),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.esm.json", declaration: false }),
      terser({
        output: {
          comments: false
        }
      })
    ]
  }
];
