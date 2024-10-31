
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { format } from "@storybook/blocks";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
      file: packageJson.main,
      name: "octagon-ui",
      format: "amd",
      sourcemap: true,
      inlineDynamicImports: true
    }, {
      file: packageJson.module,
      name: "octagon-ui",
      format: "es",
      sourcemap: true,
      inlineDynamicImports: true
    }],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        extract: true,
        minimize: true,
        sourceMap: true
      }),
      terser()
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "src/index.ts",
    output: [{ file: packageJson.types }],
    plugins: [dts.default()],
    external: [/\.css$/],
  },
];

