import { Options } from "tsup";
const config: Options = {
  clean: true,
  format: ["esm"],
  sourcemap: true,
  entry: ["src/index.ts"],
};

export default config;
