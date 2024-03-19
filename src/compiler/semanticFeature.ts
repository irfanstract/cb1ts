
import * as TS from "./_namespaces/ts" ;









import {
  Node,
  FunctionallyGeneratedNode ,
} from "./_namespaces/ts";





export interface TypedAstNodePrescriber01
{
  // describeGrammaticalFeat  <Nd extends SyntacticNode   >(...[impl] : [impl: (GrammaticalFeat01<Nd> ) ] ) : (GrammaticalFeat01<Nd>  ) ,
  // describeTrivialLexerToken<Nd extends SyntacticNode   >(...[impl] : [impl: (TrivialLexerFeat01<Nd>) ] ) : (TrivialLexerFeat01<Nd> ) ,
  // describeLexerFeat        <Nd extends SyntacticNode   >(...[impl] : [impl: (NormalLexerFeat01<Nd> ) ] ) : (NormalLexerFeat01<Nd>  ) ,
}

/**
 * 
 */
function describeTypedAstNodePlugin(...[initialiseImpl]: [initialiser: (ctx: TypedAstNodePrescriber01 ) => {} ] )
{ return initialiseImpl(sms) ; }

export { describeTypedAstNodePlugin , } ;




// TODO
let sms : TypedAstNodePrescriber01 ;








