





// @ts-check
import { CancelToken } from "@esfx/canceltoken";
import assert from "assert";
import chalk from "chalk";
import chokidar from "chokidar";
import esbuild from "esbuild";
import { execSync, } from "child_process";
import { EventEmitter } from "events";
import * as fs from "fs";
import { glob } from "glob";
import { task } from "hereby";
import * as path from "path";



// import * as tscTasks from "@studiokit/tsc/Herebyfile.mjs" ;





// export const {
//   generateDiagnostics ,
// } = tscTasks ;

const tscPkgDir = (
  path.join(process.cwd() , "packages", "@studiokit", "tsc" )
) ;

export const generateDiagnostics = task({
  name: "st-tsc-generate-diagnostics",
  description: "Generates a diagnostic file in TypeScript based on an input JSON file",
  run: async () => {
    console["info"](`running 'generate-diag' in '${tscPkgDir }' `) ;
    // await exec(process.execPath, ["scripts/processDiagnosticMessages.mjs", diagnosticMessagesJson]);
    execSync(`npx hereby generate-diagnostics`, {
      cwd: tscPkgDir ,
    } ) ;
  },
});










