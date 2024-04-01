



import { gs, describeSyntacticPlugin, } from "../syntaxFeature";



// TODO
export = describeSyntacticPlugin(gs => (
  gs.describeTrivialLexerToken({
    id: 2035,
    grammar: /^\/.*?\/$/ ,
  })
)) ;





