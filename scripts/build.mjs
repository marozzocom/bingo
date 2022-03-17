import { build } from "esbuild"
import fs from "fs-extra"

const generateBuild = async () => {
  await fs.emptyDirSync("./build/static", { recursive: true })

  await build({
    entryPoints: ["./src/index.tsx"],
    outfile: "./build/static/main.js",
    inject: ["./scripts/react-shim.mjs"],
    minify: true,
    bundle: true,
    sourcemap: true,
    loader: { ".woff2": "dataurl" },
    define: {
      "process.env.NODE_ENV": "'production'"
    }
  }).catch(() => process.exit(1))
}

void generateBuild()
