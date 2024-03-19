
import * as TS from "./_namespaces/ts" ;







import {
  Node ,
  SyntacticNode ,
  ParsedNode ,
} from "./_namespaces/ts" ;

import { Scanner, } from "./scanner";






// export class Node
// {
//   _beingNodeObjBrand ?: any ;
// }

// export class GrammaticalNode extends Node
// {
//   _beingNodeObjBrand ?: any ;
// }

// export abstract class GrammaticalParser
// {
//   _beingGrammatiParserObjBrand ?: any ;

//   lexer ?: Lexer ;

//   abstract nextLinebreak() : null | LGMatchResult<AcceptableLinebreakChar, GrammaticalParser > ;

// }

// type AcceptableLinebreakChar = "\n" | "\r\n" ;

// /**
//  * lexers is the first step in parsing
//  * 
//  */
// export abstract class Lexer
// {
//   _beingGrammatiParserObjBrand ?: any ;

//   abstract nextWithinCurrentLine(m: RegExp) : null | LexerMatchResult ;
//   abstract sameLine() : null | LexerMatchResult ;

// }

// type LexerMatchResult = LGMatchResult<string, Lexer > ;

// type LGMatchResult<out matched, out nextState > = {
//   0: matched ;
//   1: nextState ;
// } ;

export abstract class GrammaticalParser {}

type Lexer = Scanner ;
export { Lexer, } ;

;






export interface GrammaticalPrescriber01
{
  describeGrammaticalFeat  <Nd extends SyntacticNode   >(...[impl] : [impl: (GrammaticalFeat01<Nd> ) ] ) : (GrammaticalFeat01<Nd>  ) ,
  describeTrivialLexerToken<Nd extends SyntacticNode   >(...[impl] : [impl: (TrivialLexerFeat01<Nd>) ] ) : (TrivialLexerFeat01<Nd> ) ,
  describeLexerFeat        <Nd extends SyntacticNode   >(...[impl] : [impl: (NormalLexerFeat01<Nd> ) ] ) : (NormalLexerFeat01<Nd>  ) ,
}

/**
 * 
 */
function describeSyntacticPlugin(...[initialiseImpl]: [initialiser: (ctx: GrammaticalPrescriber01 ) => {} ] )
{ return initialiseImpl(gs) ; }

export { describeSyntacticPlugin , } ;



export interface GrammaticalFeat01<Nd extends SyntacticNode>
{
  //
  id: SyntacticFeatId ,
  ndBuilder: { parseFrom(x: GrammaticalParser): Nd ; },
  esFormatter: { stringify(x: Nd): string ; } ,
}

export interface TrivialLexerFeat01<Nd extends Node> {
  // ;
  id: SyntacticFeatId ,
  grammar: RegExp ,
}

export interface NormalLexerFeat01<Nd extends Node> {
  // ,
  id: SyntacticFeatId ,
  grammar: { parseFrom(x: Lexer): Nd ; } ,
}



const gs = (function () {
  ;


  ;

  
  function describeGrammaticalFeat<Nd extends SyntacticNode>(...[impl]: [impl: GrammaticalFeat01<Nd> ])
  {
    return {
      ...impl ,
      // register: (x) => {} ,
    } ;
  }


  function describeTrivialLexerToken<Nd extends Node>(...[impl] : [impl: TrivialLexerFeat01<Nd> ] )
  {
    return {
      ...impl ,
      // register: (x) => {} ,
    } ;
  }

  function describeLexerFeat<Nd extends Node>(...[impl] : [impl: NormalLexerFeat01<Nd> ] )
  {
    return {
      ...impl ,
      // register: (x) => {} ,
    } ;
  }


  return ((): GrammaticalPrescriber01 => ({
    describeGrammaticalFeat ,
    describeTrivialLexerToken,
    describeLexerFeat ,
  }) )() ;
} )() ;

export {
  /** @deprecated see {@link describeSyntacticPlugin} */
  gs,
} ;





export interface SyntacticFeatId extends Number {}

export interface SyntacticFeatRepo
{}








