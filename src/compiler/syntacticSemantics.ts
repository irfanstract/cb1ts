
import * as TS from "./_namespaces/ts" ;







import {
  Node ,
  SyntacticNode ,
  ParsedNode ,
  Statement ,
  Expression ,
} from "./_namespaces/ts" ;









/**
 * collects effective narrowings from given {@link Node} (shall be {@link Statement}).
 * 
 */
export interface TypeAssertiveCollector01<in Nd extends TS.InstructiveNode>
{
  computeImpliedNarrowings(x: Nd ): TypeNarrowingIm ;
}

/**
 * effective narrowings
 * 
 */
type TypeNarrowingIm = { _tNrrwgBrand ?: any , } & TS.Type ;

/**
 * computes effective type of given {@link Node} (supposed to be {@link Expression}, altho *spread*s don't).
 * 
 */
export interface EvaluatedTypeCollector01<in Nd extends TS.PartialTermQuerylikeNode>
{
  computeType(x: Nd ): TS.Type ;
}










