import typescript from "rollup-plugin-typescript2";
import vue from "rollup-plugin-vue";

export default [
  // ESM build to be used with webpack/rollup.
  {
    input: "src/index.ts",
    output: {
      format: "esm",
      file: "dist/index.esm.js",
    },
    plugins: [
      vue({ target: "browser" }),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: true,
          },
          include: null,
        },
      }),
    ],
  },
  // SSR build.
  {
    input: "src/index.ts",
    output: {
      format: "cjs",
      file: "dist/index.ssr.js",
    },
    plugins: [
      vue({ target: "node" }), // use 'node' to compile for SSR
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: true,
          },
          include: null,
        },
      }),
    ],
  },
  // Browser build.
  {
    input: "src/index.ts",
    output: {
      format: "iife",
      file: "dist/index.js",
    },
    plugins: [
      vue({ target: "browser" }),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: true,
          },
          include: null,
        },
      }),
    ],
  },
];
