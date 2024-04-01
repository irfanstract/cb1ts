
import * as TS from "./_namespaces/ts" ;







import {
  Node ,
  SyntacticNode ,
  ParsedNode ,
} from "./_namespaces/ts" ;

import { Scanner, } from "./scanner";

import {
  TypeAssertiveCollector01 ,
  EvaluatedTypeCollector01 ,
} from "./syntacticSemantics";






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



export interface GrammaticalFeat01<Nd extends TS.Node1 & TS.SyntacticNode> extends
GrammaticalFeatIdOps01
, GrammaticalFeatFunctionalFactoryOps01 <TS.TypeNoInfer<Nd> >
, GrammaticalFeatSmAllAnalysOps01       <TS.TypeNoInfer<Nd> >
, GrammaticalFeatParsingAndPrintingOps01<TS.TypeNoInfer<Nd> >
{
  //
  id: SyntacticFeatId ,


}

interface GrammaticalFeatIdOps01 {
  id: SyntacticFeatId
}

/**
 * {@link GrammaticalFeat01 } structural, analytics and semantics feats
 * 
 */
export interface GrammaticalFeatSmAllAnalysOps01<Nd extends TS.Node1>
extends Object, GrammaticalFeatTypeAnalysOps01<Nd>
{
  traverser: SyntacticTraverser01<TS.TypeNoInfer<Nd> > ;
}

/**
 * {@link GrammaticalFeat01 }, for obtaining Node(s) in functional setting
 * 
 */
export interface GrammaticalFeatFunctionalFactoryOps01<Nd extends TS.SyntacticNode>
extends Object
{
  // TODO
  astFac: {
    describe: (
      // (...args: ESF<Nd> ) => Node
      (...args: TS.TSNextNodeElementsTupleByNdObj<Nd & TS.Node > ) => (Nd & Node)
    ) ;
  } ,
}

/**
 * {@link GrammaticalFeat01 } parsing and printing feats
 * 
 */
export interface GrammaticalFeatParsingAndPrintingOps01<Nd extends TS.SyntacticNode>
extends Object
{
  parsingBuilder: GrammaticalParsingBuilder01<Nd, TS.SyntacticNode> ,
  printer: GrammaticalPrinter01<Nd, TS.SyntacticNode> ,

}

/**
 * {@link GrammaticalFeat01 } type-analytic feats
 * 
 */
interface GrammaticalFeatTypeAnalysOps01<Nd extends TS.SyntacticNode>
{
  //
  typeAnalyser?: (
    Nd extends (TS.InstructiveNode) ?
    TypeAssertiveCollector01<Nd>
    :
    Nd extends (TS.PartialTermQuerylikeNode) ?
    EvaluatedTypeCollector01<Nd>
    :
    never
  ) , 
} ;



;

/**
 * describes how to parse from intended input
 * 
 */
export abstract class GrammaticalParsingBuilder01<C extends S, S extends TS.Node1 = TS.SyntacticNode>
{
  iGrammaticalParsingBuilder01ObjBrand = Symbol()
}

/**
 * a {@link GrammaticalParsingBuilder01}
 * pulling from a mutable-state-based Parser
 * 
 */
export class GrammaticalParserDequeueingBuilder01<C extends S, S extends TS.Node1 = TS.SyntacticNode>
extends GrammaticalParsingBuilder01<C, S>
{
  //
  constructor(public parseFrom: (x: GrammaticalParserImpl, ctx: {} ) => TS.TypeNoInfer<C> )
  { super() ; }
}

export abstract class GrammaticalPrinter01<C extends S, S extends TS.Node1 = TS.SyntacticNode>
{
  iGrammaticalPrinter01ObjBrand = Symbol()
}

export class GrammaticalStrfDefPrinter01<C extends S, S extends TS.Node1 = TS.SyntacticNode>
extends GrammaticalPrinter01<C, S>
{
  constructor(public stringify: (x: TS.TypeNoInfer<C>, ctx: {} ) => string )
  { super() ; }
}

/**
 * Node traverser
 * 
 */
export abstract class SyntacticTraverser01<C extends S, S extends TS.Node1 = TS.SyntacticNode>
extends Object implements SyntacticTraverserNdb<S>
{
  iSyntacticTraverser01Brand ?: any ;
}

/**
 * Array-returning {@link SyntacticTraverser01 }
 * 
 */
export class ArrayEnumerativeSyntacticTraverser01<C extends S, S extends TS.Node1 = TS.Node1>
extends SyntacticTraverser01<C, S>
{
  constructor(public getAllChildrenOf: (x: C ) => S[] )
  { super() ; }
}

/**
 * *if-else-like* {@link SyntacticTraverser01 }
 * 
 */
export class ConditionalExprlikeSyntacticTraverser01<C extends S, S extends TS.Node1>
extends SyntacticTraverser01<C, S> implements SyntacticTraverserNdb<S>, GCO<C, S>
{
  constructor(public getChildrenOf: (x: C ) => ({ ctrlExpr: S, positiveCaseExpr: S, negativeCaseExpr: S }) )
  { super() ; }
}

/**
 * 
 */
interface SyntacticTraverserNdb<S extends TS.Node1> extends Object
{
  //
  iSyntacticTraverserNdbBrand ?: any ;
}

interface GCO<C extends S, S extends TS.Node1> extends SyntacticTraverser01<C, S>, SyntacticTraverserNdb<S>
{
  //
  getChildrenOf(x: C) : { } ;
}



export interface TrivialLexerFeat01<Nd extends TS.Node1> {
  // ;
  id: SyntacticFeatId ,
  grammar: RegExp ,
}

export interface NormalLexerFeat01<Nd extends TS.Node1> {
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


  function describeTrivialLexerToken<Nd extends TS.Node1>(...[impl] : [impl: TrivialLexerFeat01<Nd> ] )
  {
    return {
      ...impl ,
      // register: (x) => {} ,
    } ;
  }

  function describeLexerFeat<Nd extends TS.Node1>(...[impl] : [impl: NormalLexerFeat01<Nd> ] )
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








