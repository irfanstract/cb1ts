









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

 






const classifyTests = (
function (...[itemNames]: [readonly string[] ])
{
;

const itemDescs = (
  //
  itemNames
  .map(cFileNm => {
    const cnm = (
      cFileNm
      .replace(/\.[cm]?[jt]sx?$/, () => "" )
    ) ;
    const [ /* IGNORE */ , cat = util.throwTypeError() , lnm = util.throwTypeError() ,  ] = (
      cnm
      .match(/^(.+?)\/([\w\.\-]+)$/ )
      ??
      util.throwTypeError(`error: ${(
        cnm
        .match(/^(.+?)/ )
      ) } `)
    ) ;
    const [ /* IGNORE */ , lnmCat = util.throwTypeError(`lnmCat??`) , lnmVer = util.throwTypeError(`lnmVer??`) ,  ] = (
      lnm
      .match(/^(.*?)([0-9]*)$/)
      ??
      [lnm, "" ]
    ) ;
    const cnmCat = (
      "" + cat + "/" + lnmCat
    ) ;
    const cnmCh = (
      "" + cat + "/" + (
        (
          lnmCat.match(/^([A-Za-z][a-z]+|[A-Z]+(?![a-z]))/g)?.[0]
          ??
          lnmCat.slice(0, 4)
        )
        .slice(0, 3)
      )
    ) ;
    return {
      cFileNm ,
      cnm ,
      cnmCat,
      cnmCh,
      lnm ,
      lnmCat ,
      lnmVer ,
      cat ,
    } as const ;
  } )
) ;

const itCatnc = (
  util.Immutable.Set(itemDescs)
  .map(e => e.cnmCat )
) ;

const itCh = (
  util.Immutable.Seq(itemDescs)
  .groupBy(e => e.cnmCh )
  .map((e, enm) => [enm, e.size, e.toIndexedSeq() ] as const )
) ;

return {
  //
  itemNames ,
  itemDescs ,
  itCatnc ,
  itCh ,
} as const ;
}
) ;

{
;

  const itemNames = (

    IO.readFileSync(Path.join(baseDirActualPath, "scripts", "tscTests.txt") , {
      encoding: "utf8" ,
    } )
    .split(/\r?\n/)
    .filter(lne => !(lne.match(/^\s*$/) ) )

    .filter(l => (
      l
      .startsWith("compiler/" )
    ))
  ) ;

  const {
    //
    // itemNames ,
    itemDescs ,
    itCatnc ,
    itCh ,
  } = (
    classifyTests((

      IO.readFileSync(Path.join(baseDirActualPath, "scripts", "tscTests.txt") , {
        encoding: "utf8" ,
      } )
      .split(/\r?\n/)
      .filter(lne => !(lne.match(/^\s*$/) ) )
  
      .filter(l => (
        l
        .startsWith("compiler/" )
      ))
    ),)
  ) ;

  console["log"](`{ Item Name Count: ${itemNames.length} (catnc=${itCatnc.size }; chcount=${itCh.size }), }`) ;
  console["log"]((
    JSON.stringify((
      itCh
      .toSeq()
      .map(e => `${e[0]} (${e[1]}) (${ (() => {
        const s = e[2].map(e => e.lnmCat ) ;
        return 0 ? s.join(",") : `(${s.size } items)` ;
      })() })`)
      .sort()
    ), null, 2 )
  )) ;
  0 && (
    console["log"]({ firstFewItems: (
      itemDescs
      .slice(0, 20)
    ), })
  ) ;

}
























