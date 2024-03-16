



import { gs, describeSyntacticPlugin } from "../syntaxFeature";






export = describeSyntacticPlugin(gs => (
  gs.describeGrammaticalFeat({
    id: 2330 ,
    ndBuilder: { parseFrom(x) {
        throw Error() ;
    }, } ,
    esFormatter: {
      stringify(x) {
        throw Error() ; return `${Symbol() }` ;
      },
    } ,
  })
)) ;





