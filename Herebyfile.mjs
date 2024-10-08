





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

import {
  fileURLToPath,
} from "studk-fwcore-setups/src/util-all.mjs";



// import * as tscTasks from "@studiokit/tsc/Herebyfile.mjs" ;





// export const {
//   generateDiagnostics ,
// } = tscTasks ;

const rootDirAbsolPath = (
  import.meta.dirname
  ??
  path.join(import.meta.filename ?? fileURLToPath(import.meta.url) , "..")
) ;

console["log"]({ rootDirAbsolPath, }) ;

/**
 * paths used in the child-pkg's Herebyfile
 * are relative paths, implicitly assuming `CWD` being set to its root-dir .
 * {@link execSync needs to explicitly set `cwd` in `options` in the following sec(s) to point to there }.
 * 
 */
const tscPkgDir = (
  path.join(rootDirAbsolPath , "packages", "@studiokit", "tsc" )
) ;

console["log"]({ tscPkgDir, }) ;

class StTscHereby {

  /**
   * 
   * @satisfies {(...args: [string]) => any }
   * 
   */
  static runNamedDutySync = function (...[w] )
  {
    ;
    /**
     * paths used in the child-pkg's Herebyfile
     * are relative paths, implicitly assuming `CWD` being set to its root-dir .
     * {@link execSync needs to explicitly set `cwd` in the following `options` to point to there}.
     * 
     */
    console["info"](`running '${w }' in '${tscPkgDir }' `) ;
    return (
      execSync(`npx hereby ${w }`, {
        cwd: tscPkgDir ,
      } )
    ) ;
  } ;

}

export const stTscGenerateDiagnostics = task({
  name: "st-tsc-generate-diagnostics",
  description: "TSC: Generates a diagnostic file in TypeScript based on an input JSON file",
  run: async () => {
    // await exec(process.execPath, ["scripts/processDiagnosticMessages.mjs", diagnosticMessagesJson]);
    StTscHereby.runNamedDutySync("generate-diagnostics") ;
  },
});

export const stTscRunTests = task({
  name: "st-tsc-test",
  description: "TSC: Run All Tests",
  run: async () => {
    StTscHereby.runNamedDutySync("runtests") ;
  },
});

export const stTscPrepareTest = task({
  name: "st-tsc-prepare-test",
  description: "TSC: Prepare All Tests",
  run: async () => {
    StTscHereby.runNamedDutySync("tests") ;
  },
});

export const stTscCompilerCliBuild = task({
  name: "st-tsc-compiler-cli-build",
  description: "TSC: Build The Compiler CLI",
  run: async () => {
    StTscHereby.runNamedDutySync("tsc") ;
  },
});

export const stTscClean = task({
  name: "st-tsc-clean",
  description: "TSC: Clean",
  run: async () => {
    StTscHereby.runNamedDutySync("clean") ;
  },
});















