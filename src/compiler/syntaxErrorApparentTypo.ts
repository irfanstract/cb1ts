


import {
  Declaration,
  DiagnosticWithLocation,
  ModifierFlags,
  PhysicalDeclaration,
  Symbol,
  SymbolFlags,
  createDiagnosticForNode,
  hasSyntacticModifier,
  isTypeAliasDeclaration,
  nodeIsMissing,
  unescapeLeadingUnderscores,
} from "./_namespaces/ts" ;














/**
 * `export type T;` - may have meant `export type { T }`
 */
export function isExportTypeTDeclarationApparentTypo(...[node, symbol] : [Declaration, Symbol ])
{
  return ExportTypeTDeclarationApparentTypo.isOne(node, symbol) ;
}

/**
 * `export type T;` - may have meant `export type { T }`
 */
export const ExportTypeTDeclarationApparentTypo: EdtDiagnosticEntryByArgs<[exposer: Declaration, exposee: Symbol ]> = {
  // ;

  isOne(...[node, symbol] : [Declaration, Symbol ])
  {
    return (
      isTypeAliasDeclaration(node) 
      && nodeIsMissing(node.type)
      && hasSyntacticModifier(node, ModifierFlags.Export)
      && !!(symbol.flags & (SymbolFlags.Alias | SymbolFlags.Type | SymbolFlags.Namespace) )
    ) ;
  } ,

  createDiagnostic(...[node] : [Declaration & PhysicalDeclaration,  ])
  {
    return (
      createDiagnosticForNode(node, Diagnostics.Did_you_mean_0, `export type { ${unescapeLeadingUnderscores(node.name.escapedText)} }`)
    ) ;
  } ,
}

interface EdtDiagnosticEntryByArgs<T extends any[] >
{
  //
  isOne           (...args : T): boolean ;
  createDiagnostic(...args : T): DiagnosticWithLocation ;
}










