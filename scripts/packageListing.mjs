




import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;

/* PLATFORM PATHS */
import {

  pathToFileURL,
  pathFromFileURL,
  fileURLToPath,
  fileURLFromPath,
  Path,

} from './util-all.mjs' ;

/* PLATFORM I/O */
import {
  IO,

} from './util-all.mjs' ;

/* PLATFORM SHELL */
import {

  execAsync,
  spawn,
  exec,
  execSync,
  spawnSync,

} from './util-all.mjs' ;

/* ETC */
import {
} from './util-all.mjs' ;







import {
  baseDirActualPath ,
  pkgsDirActualPath ,
} from "./paths1.mjs" ;


import { PackageNames, } from './util-all.mjs';


/** @type {PackageNames} */
export const pkgs = (
  // TODO

  /**
   * `IO.readdirSync(pkgsDirActualPath)`
   */
  IO.readdirSync(pkgsDirActualPath)

  /**
   * due to possibility of an item being `.git`, `.gitignore`, `.dprint`, `.gitattributes`, etc
   * we'll need to check which conforms which doesn't
   * 
   */
  .filter(itemName => {

    /**
     * albeit flawed
     * most-of-the-time `package.json`-presence-or-not become the key factor
     * 
     */
    const trueCasePJsonAbsolutePath = (
      Path.join(pkgsDirActualPath, itemName, "package.json" )
    ) ;

    /**
     * albeit flawed
     * most-of-the-time `package.json`-presence-or-not become the key factor
     * 
     */
    return (
      IO.existsSync(trueCasePJsonAbsolutePath )
    ) ;
  } )

) ;

export {
  describeExpectedPkgNames,
} ;

/**
 * {@link describeExpectedPkgNames} .
 * 
 * @type {(...x: import("./util-eawo.mts").ArgsWithOptions<[PackageNames ], import("./util-eawo.mts").AllOrNever1<({ sort: boolean ; deduplicate: boolean })>> ) => PackageNames }
 * 
 */
function describeExpectedPkgNames(...[xPkgs, xpo = {}])
{
  xpo ;
  return (
    util.L.intersection(pkgs, xPkgs)
    .toSorted()
  ) ;
}

/* `toSorted` */
import "core-js/proposals/change-array-by-copy.js" ;


/**
 * *__library__ packages which cannot be directly used in Node since it'd require extra (pre)compilation step* ;
 * for example,
 * packages whose src-code are TypeScript and CoffeeScript files, or
 * those which "imports" `.css` files (typically React-specific) ;
 * 
 * __only the library packages__.
 * `studk-demos` is excluded, as the name suggests ;
 * 
 */
export const nonPlainJsPkgs = (
  // TODO
  describeExpectedPkgNames((
    util.reiterated(function* () {

      /* utility package(s) */

      yield* (
        pkgs
        .filter(nm => nm.match(/^studk-util\b/u) )
      ) ;
      yield* (
        pkgs
        .filter(nm => nm.match(/^typexpe-commons\b/u) )
      ) ;
      
      /* helper packages each for using the corresponding library */

      yield* (
        pkgs
        .filter(nm => nm.startsWith('studk-nextjs') )
      ) ;
      
      yield* (
        pkgs
        .filter(nm => nm.startsWith('studk-fbreact') )
      ) ;

      yield* (
        pkgs
        .filter(nm => nm.match(/^studk-dom\b/u) )
      ) ;
      
      /* our official reusable packages */

      {
        yield* (
          pkgs
          .filter(nm => nm.match(/\b(common|encore)\b/g ) )
        ) ;
      }

      yield* (
        pkgs
        .filter(nm => nm.startsWith('studk-uieditmgmt') )
      ) ;
      yield 'studk-ui' ;
      yield* (
        pkgs
        .filter(nm => nm.startsWith('studk-ui') )
      ) ;

      yield 'studk-uieditmgmt' ;
      
      yield* (
        pkgs
        .filter(nm => nm.startsWith('studk-i3d') )
      ) ;
      
      yield* (
        pkgs
        .filter(nm => nm.startsWith('studk-audio') )
      ) ;

      yield* (
        pkgs
        .filter(nm => nm.match(/^studpresent(?:ed|ers)/u) )
      ) ;

      /* internal FW packages */
      
      yield* (
        pkgs
        .filter(nm => nm.match(/^studk\b/u) )
      ) ;

      {
        yield* (
          pkgs
          .filter(nm => nm.match(/\b(core|fwcore)\b/g ) )
        ) ;
      }

    })
  ))
) ;

export const internalFwPackages = (
  describeExpectedPkgNames((
    util.reiterated(function* ()
    {
      for (const pnm of pkgs) {
        if (pnm.match(/\bfwcore\b/g) ) { yield pnm ; }
      }
    } )
  ))
) ;

/**
 * packages which are
 * __application__(s) built on "yyy dev server" (eg `next`, `vite`, `webpack-dev-server`, etc)
 * 
 */
export const webFwkDevServedAppPkgs = (
  describeExpectedPkgNames((
    util.reiterated(function* () {
      yield 'studk-demos' ;
      yield 'studk-ui-demos' ;
    })
  ))
) ;

export const internallyNonImportiblePkgs = (
  describeExpectedPkgNames([
    ...webFwkDevServedAppPkgs ,
  ])
) ;

export const internallImportiblePkgs = (
  describeExpectedPkgNames((
    util.L.without(pkgs, ...internallyNonImportiblePkgs )
  ))
) ;


/**
 * {@link nextJsMustPreCompilePackageList}.
 * see https://nextjs.org/docs/app/api-reference/next-config-js/transpilePackages .
 * 
 */
export const nextJsMustPreCompilePackageList = (() => {

  /**
   * having to
   * constantly update {@link nonPlainJsPkgs}
   * everytime we need to "split packages into smaller" to do SOC (Separation Of Concerns)
   * will easily lead to bugs (eg "module parse failed unexpected keyword type" )
   * ;
   * for now
   * we'll just make `next` do Transpile for all pkg(s)
   * 
   */
  if (0) {
    return (
      describeExpectedPkgNames((
        util.L.intersection(internallImportiblePkgs, nonPlainJsPkgs )
      ))
    ) ;
  }

  return (
    describeExpectedPkgNames(internallImportiblePkgs)
  ) ;
})() ;


export const externallyNonReusablePkgs = (
  describeExpectedPkgNames([
    ...internalFwPackages ,
    ...internallyNonImportiblePkgs ,
    ...webFwkDevServedAppPkgs ,
  ])
) ;

export const externallyImportiblePkgs = (
  describeExpectedPkgNames((
    util.L.without(pkgs, ...externallyNonReusablePkgs )
  ))
) ;








