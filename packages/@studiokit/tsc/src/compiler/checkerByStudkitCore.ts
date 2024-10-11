



import {
    __String,
    AccessExpression,
    AccessFlags,
    AccessorDeclaration,
    addRange,
    addRelatedInfo,
    addSyntheticLeadingComment,
    addSyntheticTrailingComment,
    AliasDeclarationNode,
    AllAccessorDeclarations,
    AllOrNever1,
    AmbientModuleDeclaration,
    and,
    AnonymousType,
    AnyImportOrJsDocImport,
    AnyImportOrReExport,
    append,
    appendIfUnique,
    ArgsWithOptions,
    ArrayBindingElement,
    ArrayBindingPattern,
    arrayFrom,
    arrayIsEqualTo,
    arrayIsHomogeneous,
    ArrayLiteralExpression,
    arrayOf,
    arrayToMultiMap,
    ArrayTypeNode,
    ArrowFunction,
    AsExpression,
    AssertionExpression,
    AssignmentDeclarationKind,
    AssignmentKind,
    AssignmentPattern,
    AwaitExpression,
    BaseType,
    BigIntLiteral,
    BigIntLiteralType,
    BinaryExpression,
    BinaryOperator,
    BinaryOperatorToken,
    binarySearch,
    BindableAccessExpression,
    BindableObjectDefinePropertyCall,
    BindablePropertyAssignmentExpression,
    BindableStaticAccessExpression,
    BindableStaticNameExpression,
    BindableStaticPropertyAssignmentExpression,
    BindingElement,
    BindingElementGrandparent,
    BindingName,
    BindingPattern,
    bindSourceFile,
    Block,
    BooleanLiteral,
    BreakOrContinueStatement,
    CallChain,
    CallExpression,
    CallLikeExpression,
    CallSignatureDeclaration,
    CancellationToken,
    canHaveDecorators,
    canHaveExportModifier,
    canHaveFlowNode,
    canHaveIllegalDecorators,
    canHaveIllegalModifiers,
    canHaveJSDoc,
    canHaveLocals,
    canHaveModifiers,
    canHaveModuleSpecifier,
    canHaveSymbol,
    canIncludeBindAndCheckDiagnostics,
    canUsePropertyAccess,
    cartesianProduct,
    CaseBlock,
    CaseClause,
    CaseOrDefaultClause,
    cast,
    CatchClause,
    chainDiagnosticMessages,
    CharacterCodes,
    CheckFlags,
    CheckMode,
    ClassDeclaration,
    ClassElement,
    classElementOrClassElementParameterIsDecorated,
    ClassExpression,
    ClassLikeDeclaration,
    classOrConstructorParameterIsDecorated,
    ClassStaticBlockDeclaration,
    compareDiagnostics,
    comparePaths,
    compareValues,
    Comparison,
    CompilerHost,
    CompilerOptions,
    ComputedPropertyName,
    concatenate,
    concatenateDiagnosticMessageChains,
    ConditionalExpression,
    ConditionalRoot,
    ConditionalType,
    ConditionalTypeNode,
    ConstructorDeclaration,
    ConstructorTypeNode,
    ConstructSignatureDeclaration,
    contains,
    containsParseError,
    ContextFlags,
    copyEntries,
    countWhere,
    createBinaryExpressionTrampoline,
    createCompilerDiagnostic,
    createDetachedDiagnostic,
    createDiagnosticCollection,
    createDiagnosticForFileFromMessageChain,
    createDiagnosticForNode,
    createDiagnosticForNodeArray,
    createDiagnosticForNodeArrayFromMessageChain,
    createDiagnosticForNodeFromMessageChain,
    createDiagnosticForNodeInSourceFile,
    createDiagnosticMessageChainFromDiagnostic,
    createEmptyExports,
    createEvaluator,
    createFileDiagnostic,
    createFlowNode,
    createGetSymbolWalker,
    createModeAwareCacheKey,
    createModeMismatchDetails,
    createModuleNotFoundChain,
    createMultiMap,
    createNameResolver,
    createPrinterWithDefaults,
    createPrinterWithRemoveComments,
    createPrinterWithRemoveCommentsNeverAsciiEscape,
    createPrinterWithRemoveCommentsOmitTrailingSemicolon,
    createPropertyNameNodeForIdentifierOrLiteral,
    createQueue,
    createScanner,
    createSymbolTable,
    createSyntacticTypeNodeBuilder,
    createTextWriter,
    Debug,
    Declaration,
    DeclarationName,
    declarationNameToString,
    DeclarationStatement,
    DeclarationWithTypeParameterChildren,
    DeclarationWithTypeParameters,
    Decorator,
    deduplicate,
    DefaultClause,
    defaultMaximumTruncationLength,
    DeferredTypeReference,
    DeleteExpression,
    DestructuringAssignment,
    Diagnostic,
    DiagnosticAndArguments,
    DiagnosticArguments,
    DiagnosticCategory,
    DiagnosticMessage,
    DiagnosticMessageChain,
    DiagnosticRelatedInformation,
    Diagnostics,
    DiagnosticWithLocation,
    DoStatement,
    DynamicNamedDeclaration,
    ElementAccessChain,
    ElementAccessExpression,
    ElementFlags,
    EmitFlags,
    EmitHint,
    emitModuleKindIsNonNodeESM,
    EmitResolver,
    EmitTextWriter,
    emptyArray,
    EntityName,
    EntityNameExpression,
    EntityNameOrEntityNameExpression,
    entityNameToString,
    EnumDeclaration,
    EnumMember,
    EnumType,
    equateValues,
    escapeLeadingUnderscores,
    escapeString,
    EvaluatorResult,
    evaluatorResult,
    every,
    EvolvingArrayType,
    ExclamationToken,
    ExportAssignment,
    exportAssignmentIsAlias,
    ExportDeclaration,
    ExportSpecifier,
    Expression,
    expressionResultIsUnused,
    ExpressionStatement,
    ExpressionWithTypeArguments,
    Extension,
    ExternalEmitHelpers,
    externalHelpersModuleNameText,
    factory,
    fileExtensionIs,
    fileExtensionIsOneOf,
    filter,
    find,
    findAncestor,
    findBestPatternMatch,
    findConstructorDeclaration,
    findIndex,
    findLast,
    findLastIndex,
    findUseStrictPrologue,
    first,
    firstDefined,
    firstIterator,
    firstOrUndefined,
    firstOrUndefinedIterator,
    flatMap,
    flatten,
    FlowArrayMutation,
    FlowAssignment,
    FlowCall,
    FlowCondition,
    FlowFlags,
    FlowLabel,
    FlowNode,
    FlowReduceLabel,
    FlowStart,
    FlowSwitchClause,
    FlowSwitchClauseData,
    FlowType,
    forEach,
    forEachChild,
    forEachChildRecursively,
    forEachEnclosingBlockScopeContainer,
    forEachEntry,
    forEachKey,
    forEachReturnStatement,
    forEachYieldExpression,
    ForInOrOfStatement,
    ForInStatement,
    formatMessage,
    ForOfStatement,
    ForStatement,
    FreshableIntrinsicType,
    FreshableType,
    FreshObjectLiteralType,
    FunctionDeclaration,
    FunctionExpression,
    FunctionFlags,
    FunctionLikeDeclaration,
    FunctionOrConstructorTypeNode,
    FunctionTypeNode,
    GenericType,
    GetAccessorDeclaration,
    getAliasDeclarationFromName,
    getAllJSDocTags,
    getAllowSyntheticDefaultImports,
    getAncestor,
    getAnyExtensionFromPath,
    getAssignedExpandoInitializer,
    getAssignmentDeclarationKind,
    getAssignmentDeclarationPropertyAccessKind,
    getAssignmentTargetKind,
    getCanonicalDiagnostic,
    getCheckFlags,
    getClassExtendsHeritageElement,
    getClassLikeDeclarationOfSymbol,
    getCombinedLocalAndExportSymbolFlags,
    getCombinedModifierFlags,
    getCombinedNodeFlags,
    getCommonSourceDirectoryOfConfig,
    getContainingClass,
    getContainingClassExcludingClassDecorators,
    getContainingClassStaticBlock,
    getContainingFunction,
    getContainingFunctionOrClassStaticBlock,
    getDeclarationFileExtension,
    getDeclarationModifierFlagsFromSymbol,
    getDeclarationOfKind,
    getDeclarationsOfKind,
    getDeclaredExpandoInitializer,
    getDecorators,
    getDirectoryPath,
    getEffectiveBaseTypeNode,
    getEffectiveConstraintOfTypeParameter,
    getEffectiveContainerForJSDocTemplateTag,
    getEffectiveImplementsTypeNodes,
    getEffectiveInitializer,
    getEffectiveJSDocHost,
    getEffectiveModifierFlags,
    getEffectiveReturnTypeNode,
    getEffectiveSetAccessorTypeAnnotationNode,
    getEffectiveTypeAnnotationNode,
    getEffectiveTypeParameterDeclarations,
    getElementOrPropertyAccessName,
    getEmitDeclarations,
    getEmitModuleKind,
    getEmitModuleResolutionKind,
    getEmitScriptTarget,
    getEmitStandardClassFields,
    getEnclosingBlockScopeContainer,
    getEnclosingContainer,
    getEntityNameFromTypeNode,
    getErrorSpanForNode,
    getEscapedTextOfIdentifierOrLiteral,
    getEscapedTextOfJsxAttributeName,
    getEscapedTextOfJsxNamespacedName,
    getESModuleInterop,
    getExpandoInitializer,
    getExportAssignmentExpression,
    getExternalModuleImportEqualsDeclarationExpression,
    getExternalModuleName,
    getExternalModuleRequireArgument,
    getFirstConstructorWithBody,
    getFirstIdentifier,
    getFunctionFlags,
    getHostSignatureFromJSDoc,
    getIdentifierGeneratedImportReference,
    getIdentifierTypeArguments,
    getImmediatelyInvokedFunctionExpression,
    getInitializerOfBinaryExpression,
    getInterfaceBaseTypeNodes,
    getInvokedExpression,
    getIsolatedModules,
    getJSDocClassTag,
    getJSDocDeprecatedTag,
    getJSDocEnumTag,
    getJSDocHost,
    getJSDocOverloadTags,
    getJSDocParameterTags,
    getJSDocRoot,
    getJSDocSatisfiesExpressionType,
    getJSDocTags,
    getJSDocThisTag,
    getJSDocType,
    getJSDocTypeAssertionType,
    getJSDocTypeParameterDeclarations,
    getJSDocTypeTag,
    getJSXImplicitImportBase,
    getJSXRuntimeImport,
    getJSXTransformEnabled,
    getLeftmostAccessExpression,
    getLineAndCharacterOfPosition,
    getMembersOfDeclaration,
    getModifiers,
    getModuleInstanceState,
    getNameFromImportAttribute,
    getNameFromIndexInfo,
    getNameOfDeclaration,
    getNameOfExpando,
    getNameOrArgument,
    getNamespaceDeclarationNode,
    getNewTargetContainer,
    getNodeId,
    getNonAugmentationDeclaration,
    getNonModifierTokenPosOfNode,
    getNormalizedAbsolutePath,
    getObjectFlags,
    getOriginalNode,
    getOrUpdate,
    getParameterSymbolFromJSDoc,
    getParseTreeNode,
    getPropertyAssignmentAliasLikeExpression,
    getPropertyNameForPropertyNameNode,
    getPropertyNameFromType,
    getRangesWhere,
    getRelativePathFromDirectory,
    getRelativePathFromFile,
    getResolutionDiagnostic,
    getResolutionModeOverride,
    getResolveJsonModule,
    getRestParameterElementType,
    getRightMostAssignedExpression,
    getRootDeclaration,
    getScriptTargetFeatures,
    getSelectedEffectiveModifierFlags,
    getSemanticJsxChildren,
    getSetAccessorValueParameter,
    getSingleVariableOfVariableStatement,
    getSourceFileOfModule,
    getSourceFileOfNode,
    getSourceTextOfNodeFromSourceFile,
    getSpanOfTokenAtPosition,
    getSpellingSuggestion,
    getStrictOptionValue,
    getSuperContainer,
    getSymbolId,
    getSymbolNameForPrivateIdentifier,
    getTextOfIdentifierOrLiteral,
    getTextOfJSDocComment,
    getTextOfJsxAttributeName,
    getTextOfNode,
    getTextOfPropertyName,
    getThisContainer,
    getThisParameter,
    getTokenPosOfNode,
    getTrailingSemicolonDeferringWriter,
    getTypeParameterFromJsDoc,
    getUseDefineForClassFields,
    hasAbstractModifier,
    hasAccessorModifier,
    hasAmbientModifier,
    HasContainerFlags,
    hasContextSensitiveParameters,
    HasDecorators,
    hasDecorators,
    hasDynamicName,
    hasEffectiveModifier,
    hasEffectiveModifiers,
    hasEffectiveReadonlyModifier,
    HasExpressionInitializer,
    hasExtension,
    HasFlowNode,
    HasIllegalDecorators,
    HasIllegalModifiers,
    HasInferredType,
    hasInferredType,
    HasInitializer,
    hasInitializer,
    hasJSDocNodes,
    hasJSDocParameterTags,
    hasJsonModuleEmitEnabled,
    HasLocals,
    HasModifiers,
    hasOnlyExpressionInitializer,
    hasOverrideModifier,
    hasPossibleExternalModuleReference,
    hasQuestionToken,
    hasResolutionModeOverride,
    hasRestParameter,
    hasScopeMarker,
    hasStaticModifier,
    hasSyntacticModifier,
    hasSyntacticModifiers,
    hasType,
    HeritageClause,
    hostGetCanonicalFileName,
    Identifier,
    identifierToKeywordKind,
    IdentifierTypePredicate,
    idText,
    IfStatement,
    ImmutableJs,
    ImportAttribute,
    ImportCall,
    ImportClause,
    ImportDeclaration,
    ImportEqualsDeclaration,
    ImportOrExportSpecifier,
    ImportSpecifier,
    ImportTypeNode,
    IndexedAccessType,
    IndexedAccessTypeNode,
    IndexFlags,
    IndexInfo,
    IndexKind,
    indexOfNode,
    IndexSignatureDeclaration,
    IndexType,
    indicesOf,
    InferenceContext,
    InferenceFlags,
    InferenceInfo,
    InferencePriority,
    InferTypeNode,
    InstanceofExpression,
    InstantiableType,
    InstantiationExpressionType,
    InterfaceDeclaration,
    InterfaceType,
    InterfaceTypeWithDeclaredMembers,
    InternalNodeBuilderFlags,
    InternalSymbolName,
    IntersectionFlags,
    IntersectionType,
    IntersectionTypeNode,
    intrinsicTagNameToString,
    IntrinsicType,
    introducesArgumentsExoticObject,
    IntroducesNewScopeNode,
    isAccessExpression,
    isAccessor,
    isAliasableExpression,
    isAmbientModule,
    isArray,
    isArrayBindingPattern,
    isArrayLiteralExpression,
    isArrowFunction,
    isAssertionExpression,
    isAssignmentDeclaration,
    isAssignmentExpression,
    isAssignmentOperator,
    isAssignmentPattern,
    isAssignmentTarget,
    isAsyncFunction,
    isAutoAccessorPropertyDeclaration,
    isAwaitExpression,
    isBinaryExpression,
    isBinaryLogicalOperator,
    isBindableObjectDefinePropertyCall,
    isBindableStaticAccessExpression,
    isBindableStaticElementAccessExpression,
    isBindableStaticNameExpression,
    isBindingElement,
    isBindingElementOfBareOrAccessedRequire,
    isBindingPattern,
    isBlock,
    isBlockOrCatchScoped,
    IsBlockScopedContainer,
    isBlockScopedContainerTopLevel,
    isBooleanLiteral,
    isCallChain,
    isCallExpression,
    isCallLikeExpression,
    isCallLikeOrFunctionLikeExpression,
    isCallOrNewExpression,
    isCallSignatureDeclaration,
    isCatchClause,
    isCatchClauseVariableDeclaration,
    isCatchClauseVariableDeclarationOrBindingElement,
    isCheckJsEnabledForFile,
    isClassDeclaration,
    isClassElement,
    isClassExpression,
    isClassInstanceProperty,
    isClassLike,
    isClassStaticBlockDeclaration,
    isCommaSequence,
    isCommonJsExportedExpression,
    isCommonJsExportPropertyAssignment,
    isCompoundAssignment,
    isComputedNonLiteralName,
    isComputedPropertyName,
    isConditionalTypeNode,
    isConstAssertion,
    isConstructorDeclaration,
    isConstructorTypeNode,
    isConstructSignatureDeclaration,
    isConstTypeReference,
    IsContainer,
    isDeclaration,
    isDeclarationFileName,
    isDeclarationName,
    isDeclarationReadonly,
    isDeclarationStatement,
    isDecorator,
    isDefaultedExpandoInitializer,
    isDeleteTarget,
    isDestructuringAssignment,
    isDottedName,
    isDynamicName,
    isEffectiveExternalModule,
    isElementAccessExpression,
    isEmptyObjectLiteral,
    isEntityName,
    isEntityNameExpression,
    isEnumConst,
    isEnumDeclaration,
    isEnumMember,
    isExclusivelyTypeOnlyImportOrExport,
    isExpandoPropertyDeclaration,
    isExportAssignment,
    isExportDeclaration,
    isExportsIdentifier,
    isExportSpecifier,
    isExpression,
    isExpressionNode,
    isExpressionOfOptionalChainRoot,
    isExpressionStatement,
    isExpressionWithTypeArguments,
    isExpressionWithTypeArgumentsInClassExtendsClause,
    isExternalModule,
    isExternalModuleAugmentation,
    isExternalModuleImportEqualsDeclaration,
    isExternalModuleIndicator,
    isExternalModuleNameRelative,
    isExternalModuleReference,
    isExternalModuleSymbol,
    isExternalOrCommonJsModule,
    isForInOrOfStatement,
    isForInStatement,
    isForOfStatement,
    isForStatement,
    isFunctionDeclaration,
    isFunctionExpression,
    isFunctionExpressionOrArrowFunction,
    isFunctionLike,
    isFunctionLikeDeclaration,
    isFunctionLikeOrClassStaticBlockDeclaration,
    isFunctionOrModuleBlock,
    isFunctionSymbol,
    isFunctionTypeNode,
    isGeneratedIdentifier,
    isGetAccessor,
    isGetAccessorDeclaration,
    isGetOrSetAccessorDeclaration,
    isGlobalScopeAugmentation,
    isGlobalSourceFile,
    isHeritageClause,
    isIdentifier,
    isIdentifierName,
    isIdentifierText,
    isIdentifierTypePredicate,
    isIdentifierTypeReference,
    isIfStatement,
    isImportAttributes,
    isImportCall,
    isImportClause,
    isImportDeclaration,
    isImportEqualsDeclaration,
    isImportKeyword,
    isImportOrExportSpecifier,
    isImportSpecifier,
    isImportTypeNode,
    isInCompoundLikeAssignment,
    isIndexedAccessTypeNode,
    isIndexSignatureDeclaration,
    isInExpressionContext,
    isInfinityOrNaNString,
    isInitializedProperty,
    isInJSDoc,
    isInJSFile,
    isInJsonFile,
    isInstanceOfExpression,
    isInterfaceDeclaration,
    isInternalModuleImportEqualsDeclaration,
    isInTopLevelContext,
    isIntrinsicJsxName,
    isInTypeQuery,
    isIterationStatement,
    isJSDocAugmentsTag,
    isJSDocCallbackTag,
    isJSDocConstructSignature,
    isJSDocEnumTag,
    isJSDocFunctionType,
    isJSDocImportTag,
    isJSDocIndexSignature,
    isJSDocLinkLike,
    isJSDocMemberName,
    isJSDocNameReference,
    isJSDocNode,
    isJSDocNonNullableType,
    isJSDocNullableType,
    isJSDocOptionalParameter,
    isJSDocOverloadTag,
    isJSDocParameterTag,
    isJSDocPropertyLikeTag,
    isJSDocPropertyTag,
    isJSDocSatisfiesExpression,
    isJSDocSatisfiesTag,
    isJSDocSignature,
    isJSDocTemplateTag,
    isJSDocThisTag,
    isJSDocTypeAlias,
    isJSDocTypeAssertion,
    isJSDocTypedefTag,
    isJSDocTypeExpression,
    isJSDocTypeLiteral,
    isJSDocVariadicType,
    isJsonSourceFile,
    isJsxAttribute,
    isJsxAttributeLike,
    isJsxAttributes,
    isJsxCallLike,
    isJsxElement,
    isJsxFragment,
    isJsxNamespacedName,
    isJsxOpeningElement,
    isJsxOpeningFragment,
    isJsxOpeningLikeElement,
    isJsxSelfClosingElement,
    isJsxSpreadAttribute,
    isJSXTagName,
    isKnownSymbol,
    isLateVisibilityPaintedStatement,
    isLeftHandSideExpression,
    isLineBreak,
    isLiteralComputedPropertyDeclarationName,
    isLiteralExpression,
    isLiteralExpressionOfObject,
    isLiteralImportTypeNode,
    isLiteralTypeNode,
    isLogicalOrCoalescingAssignmentExpression,
    isLogicalOrCoalescingAssignmentOperator,
    isLogicalOrCoalescingBinaryExpression,
    isLogicalOrCoalescingBinaryOperator,
    isMetaProperty,
    isMethodDeclaration,
    isMethodSignature,
    isModifier,
    isModuleAugmentationExternal,
    isModuleBlock,
    isModuleDeclaration,
    isModuleExportsAccessExpression,
    isModuleIdentifier,
    isModuleOrEnumDeclaration,
    isModuleWithStringLiteralName,
    isNamedDeclaration,
    isNamedEvaluationSource,
    isNamedExports,
    isNamedTupleMember,
    isNamespaceExport,
    isNamespaceExportDeclaration,
    isNamespaceReexportDeclaration,
    isNewExpression,
    isNodeDescendantOf,
    isNonNullAccess,
    isNonNullExpression,
    isNullishCoalesce,
    isNumericLiteral,
    isNumericLiteralName,
    isObjectBindingPattern,
    isObjectLiteralElementLike,
    isObjectLiteralExpression,
    isObjectLiteralMethod,
    isObjectLiteralOrClassExpressionMethodOrAccessor,
    isOmittedExpression,
    isOptionalChain,
    isOptionalChainRoot,
    isOptionalDeclaration,
    isOptionalJSDocPropertyLikeTag,
    isOptionalTypeNode,
    isOutermostOptionalChain,
    isParameter,
    isParameterPropertyDeclaration,
    isParenthesizedExpression,
    isParenthesizedTypeNode,
    isPartOfParameterDeclaration,
    isPartOfTypeNode,
    isPartOfTypeOnlyImportOrExportDeclaration,
    isPartOfTypeQuery,
    isPlainJsFile,
    isPrefixUnaryExpression,
    isPrivateIdentifier,
    isPrivateIdentifierClassElementDeclaration,
    isPrivateIdentifierPropertyAccessExpression,
    isPrologueDirective,
    isPropertyAccessEntityNameExpression,
    isPropertyAccessExpression,
    isPropertyAccessOrQualifiedName,
    isPropertyAccessOrQualifiedNameOrImportTypeNode,
    isPropertyAssignment,
    isPropertyDeclaration,
    isPropertyName,
    isPropertyNameLiteral,
    isPropertySignature,
    isPrototypeAccess,
    isPrototypePropertyAssignment,
    isPushOrUnshiftIdentifier,
    isQualifiedName,
    isRequireCall,
    isRestParameter,
    isRestTypeNode,
    isRightSideOfAccessExpression,
    isRightSideOfInstanceofExpression,
    isRightSideOfQualifiedNameOrPropertyAccess,
    isRightSideOfQualifiedNameOrPropertyAccessOrJSDocMemberName,
    isSameEntityName,
    isSatisfiesExpression,
    isSetAccessor,
    isSetAccessorDeclaration,
    isShorthandAmbientModuleSymbol,
    isShorthandPropertyAssignment,
    isSideEffectImport,
    isSignedNumericLiteral,
    isSingleOrDoubleQuote,
    isSourceFile,
    isSourceFileJS,
    isSpecialPropertyDeclaration,
    isSpreadAssignment,
    isSpreadElement,
    isStatement,
    isStatementButNotDeclaration,
    isStatementWithLocals,
    isStatic,
    isString,
    isStringANonContextualKeyword,
    isStringLiteral,
    isStringLiteralLike,
    isStringOrNumericLiteralLike,
    isSuperCall,
    isSuperProperty,
    isTaggedTemplateExpression,
    isTemplateSpan,
    isThisContainerOrFunctionBlock,
    isThisIdentifier,
    isThisInitializedDeclaration,
    isThisInitializedObjectBindingExpression,
    isThisInTypeQuery,
    isThisProperty,
    isThisTypeParameter,
    isThisTypePredicate,
    isTransientSymbol,
    isTupleTypeNode,
    isTypeAlias,
    isTypeAliasDeclaration,
    isTypeDeclaration,
    isTypeLiteralNode,
    isTypeNode,
    isTypeNodeKind,
    isTypeOfExpression,
    isTypeOnlyImportDeclaration,
    isTypeOnlyImportOrExportDeclaration,
    isTypeOperatorNode,
    isTypeParameterDeclaration,
    isTypePredicateNode,
    isTypeQueryNode,
    isTypeReferenceNode,
    isTypeReferenceType,
    isTypeUsableAsPropertyName,
    isUMDExportSymbol,
    isValidBigIntString,
    isValidESSymbolDeclaration,
    isValidTypeOnlyAliasUseSite,
    isValueSignatureDeclaration,
    isVariableDeclaration,
    isVariableDeclarationInitializedToBareOrAccessedRequire,
    isVariableDeclarationInVariableStatement,
    isVariableDeclarationList,
    isVariableLike,
    isVariableStatement,
    isWriteAccess,
    isWriteOnlyAccess,
    IterableOrIteratorType,
    IterationTypes,
    JSDoc,
    JSDocAugmentsTag,
    JSDocCallbackTag,
    JSDocClassTag,
    JSDocComment,
    JSDocEnumTag,
    JSDocFunctionType,
    JSDocImplementsTag,
    JSDocImportTag,
    JSDocLink,
    JSDocLinkCode,
    JSDocLinkPlain,
    JSDocMemberName,
    JSDocNullableType,
    JSDocOptionalType,
    JSDocOverloadTag,
    JSDocParameterTag,
    JSDocPrivateTag,
    JSDocPropertyLikeTag,
    JSDocPropertyTag,
    JSDocProtectedTag,
    JSDocPublicTag,
    JSDocSatisfiesTag,
    JSDocSignature,
    JSDocTemplateTag,
    JSDocThisTag,
    JSDocTypeAssertion,
    JSDocTypedefTag,
    JSDocTypeExpression,
    JSDocTypeLiteral,
    JSDocTypeReferencingNode,
    JSDocTypeTag,
    JSDocVariadicType,
    JsxAttribute,
    JsxAttributeLike,
    JsxAttributeName,
    JsxAttributes,
    JsxCallLike,
    JsxChild,
    JsxClosingElement,
    JsxElement,
    JsxEmit,
    JsxExpression,
    JsxFlags,
    JsxFragment,
    JsxNamespacedName,
    JsxOpeningElement,
    JsxOpeningFragment,
    JsxOpeningLikeElement,
    JsxReferenceKind,
    JsxSelfClosingElement,
    JsxSpreadAttribute,
    JsxTagNameExpression,
    KeywordTypeNode,
    LabeledStatement,
    LanguageFeatureMinimumTarget,
    last,
    lastOrUndefined,
    LateBoundBinaryExpressionDeclaration,
    LateBoundDeclaration,
    LateBoundName,
    LateVisibilityPaintedStatement,
    LazyNodeCheckFlags,
    length,
    LiteralExpression,
    LiteralLikeElementAccessExpression,
    LiteralType,
    LiteralTypeNode,
    map,
    mapDefined,
    MappedSymbol,
    MappedType,
    MappedTypeNode,
    MatchingKeys,
    maybeBind,
    MemberOverrideStatus,
    MetaProperty,
    MethodDeclaration,
    MethodSignature,
    minAndMax,
    MinusToken,
    Modifier,
    ModifierFlags,
    modifiersToFlags,
    modifierToFlag,
    ModuleBlock,
    ModuleDeclaration,
    ModuleExportName,
    moduleExportNameIsDefault,
    moduleExportNameTextEscaped,
    moduleExportNameTextUnescaped,
    ModuleInstanceState,
    ModuleKind,
    ModuleResolutionKind,
    ModuleSpecifierResolutionHost,
    Mutable,
    MutableNodeArray,
    NamedDeclaration,
    NamedExports,
    NamedImportsOrExports,
    NamedTupleMember,
    NamespaceDeclaration,
    NamespaceExport,
    NamespaceExportDeclaration,
    NamespaceImport,
    needsScopeMarker,
    NewExpression,
    Node,
    NodeArray,
    NodeBuilderFlags,
    nodeCanBeDecorated,
    NodeCheckFlags,
    NodeFlags,
    nodeHasName,
    nodeIsMissing,
    nodeIsPresent,
    nodeIsSynthesized,
    NodeLinks,
    nodeStartsNewLexicalEnvironment,
    NodeWithTypeArguments,
    NonNullChain,
    NonNullExpression,
    NoSubstitutionTemplateLiteral,
    not,
    noTruncationMaximumTruncationLength,
    NumberLiteralType,
    NumericLiteral,
    objectAllocator,
    ObjectBindingPattern,
    ObjectFlags,
    ObjectFlagsType,
    ObjectLiteralElementLike,
    ObjectLiteralExpression,
    ObjectType,
    OptionalChain,
    OptionalTypeNode,
    or,
    orderedRemoveItemAt,
    OuterExpressionKinds,
    ParameterDeclaration,
    parameterIsThisKeyword,
    ParameterPropertyDeclaration,
    ParenthesizedExpression,
    ParenthesizedTypeNode,
    parseIsolatedEntityName,
    parseNodeFactory,
    parsePseudoBigInt,
    parseValidBigInt,
    Path,
    pathIsRelative,
    Pattern,
    PatternAmbientModule,
    PlusToken,
    PostfixUnaryExpression,
    PredicateSemantics,
    PrefixUnaryExpression,
    PrivateIdentifier,
    Program,
    PromiseOrAwaitableType,
    PropertyAccessChain,
    PropertyAccessEntityNameExpression,
    PropertyAccessExpression,
    PropertyAssignment,
    PropertyDeclaration,
    PropertyName,
    PropertySignature,
    PseudoBigInt,
    pseudoBigIntToString,
    PunctuationSyntaxKind,
    pushIfUnique,
    QualifiedName,
    QuestionToken,
    rangeEquals,
    rangeOfNode,
    rangeOfTypeParameters,
    ReadonlyKeyword,
    reduceLeft,
    RegularExpressionLiteral,
    RelationComparisonResult,
    relativeComplement,
    removeExtension,
    removeFileExtension,
    removePrefix,
    replaceElement,
    resolutionExtensionIsTSOrJson,
    ResolutionMode,
    ResolvedModuleFull,
    ResolvedType,
    resolvingEmptyArray,
    RestTypeNode,
    ReturnStatement,
    ReverseMappedSymbol,
    ReverseMappedType,
    sameMap,
    SatisfiesExpression,
    Scanner,
    scanTokenAtPosition,
    ScriptKind,
    ScriptTarget,
    SetAccessorDeclaration,
    setCommentRange,
    setEmitFlags,
    setIdentifierTypeArguments,
    setNodeFlags,
    setOriginalNode,
    setParent,
    setParentRecursive,
    setSyntheticLeadingComments,
    setTextRange,
    setTextRangePosEnd,
    setValueDeclaration,
    ShorthandPropertyAssignment,
    shouldAllowImportingTsExtension,
    shouldPreserveConstEnums,
    shouldRewriteModuleSpecifier,
    Signature,
    SignatureDeclaration,
    SignatureFlags,
    SignatureKind,
    singleElementArray,
    SingleSignatureType,
    skipOuterExpressions,
    skipParentheses,
    skipTrivia,
    skipTypeChecking,
    skipTypeParentheses,
    sliceAfter,
    some,
    SourceFile,
    sourceFileMayBeEmitted,
    SpreadAssignment,
    SpreadElement,
    startsWith,
    Statement,
    StringLiteral,
    StringLiteralLike,
    StringLiteralType,
    StringMappingType,
    stripQuotes,
    StructuredType,
    SubstitutionType,
    SuperCall,
    SuperExpression,
    SwitchStatement,
    Symbol,
    SymbolAccessibility,
    SymbolAccessibilityResult,
    SymbolFlags,
    SymbolFormatFlags,
    SymbolId,
    SymbolLinks,
    symbolName,
    SymbolTable,
    SymbolTracker,
    SymbolVisibilityResult,
    SyntacticTypeNodeBuilderContext,
    SyntacticTypeNodeBuilderResolver,
    // SymbolTable,
    SyntaxKind,
    SyntheticDefaultModuleType,
    SyntheticExpression,
    TaggedTemplateExpression,
    TemplateExpression,
    TemplateLiteralType,
    TemplateLiteralTypeNode,
    Ternary,
    TextRange,
    textRangeContainsPositionInclusive,
    TextSpan,
    textSpanContainsPosition,
    textSpanEnd,
    ThisExpression,
    ThisTypeNode,
    ThrowStatement,
    TokenFlags,
    tokenToString,
    tracing,
    TracingNode,
    TrackedSymbol,
    TransientSymbol,
    TransientSymbolLinks,
    tryAddToSet,
    tryCast,
    tryExtractTSExtension,
    tryGetClassImplementingOrExtendingExpressionWithTypeArguments,
    tryGetExtensionFromPath,
    tryGetJSDocSatisfiesTypeNode,
    tryGetModuleSpecifierFromDeclaration,
    tryGetPropertyAccessOrIdentifierToString,
    tryParsePattern,
    TryStatement,
    TupleType,
    TupleTypeNode,
    TupleTypeReference,
    Type,
    TypeAliasDeclaration,
    TypeAssertion,
    TypeChecker,
    TypeCheckerHost,
    TypeComparer,
    TypeElement,
    TypeFacts,
    TypeFlags,
    TypeFormatFlags,
    TypeId,
    TypeLiteralNode,
    TypeMapKind,
    TypeMapper,
    TypeNode,
    TypeNodeSyntaxKind,
    TypeOfExpression,
    TypeOnlyAliasDeclaration,
    TypeOnlyCompatibleAliasDeclaration,
    TypeOperatorNode,
    TypeParameter,
    TypeParameterDeclaration,
    TypePredicate,
    TypePredicateKind,
    TypePredicateNode,
    TypeQueryNode,
    TypeReference,
    TypeReferenceNode,
    TypeReferenceSerializationKind,
    TypeReferenceType,
    TypeVariable,
    unescapeLeadingUnderscores,
    UnionOrIntersectionType,
    UnionOrIntersectionTypeNode,
    UnionReduction,
    UnionType,
    UnionTypeNode,
    UniqueESSymbolType,
    unreachableCodeIsError,
    unusedLabelIsError,
    usingSingleLineStringWriter,
    util,
    VariableDeclaration,
    VariableDeclarationList,
    VariableLikeDeclaration,
    VariableStatement,
    VarianceFlags,
    visitEachChild,
    visitNode,
    visitNodes,
    Visitor,
    VisitResult,
    VoidExpression,
    walkUpBindingElementsAndPatterns,
    walkUpOuterExpressions,
    walkUpParenthesizedExpressions,
    walkUpParenthesizedTypes,
    walkUpParenthesizedTypesAndGetParentAndChild,
    WhileStatement,
    WideningContext,
    WithStatement,
    YieldExpression,
} from "./_namespaces/ts.js";

import * as moduleSpecifiers from "./_namespaces/ts.moduleSpecifiers.js";
import * as performance from "./_namespaces/ts.performance.js";

/** {@link ReadonlySymbolTable } */
type ReadonlySymbolTable = (
    & Pick<Map<__String, Symbol>, "get" | "entries" | "keys" | "values"  | "has" | "size" >
    & Iterable<readonly [__String, Symbol]>
    & { forEach: ReadonlyMap<__String, Symbol>["forEach"], }
)

namespace ReadonlySymbolTable { ; }







;

function analyseCompilerOptions(...[compilerOptions] : [CompilerOptions])
{

    var languageVersion = getEmitScriptTarget(compilerOptions);
    var moduleKind = getEmitModuleKind(compilerOptions);
    var legacyDecorators = !!compilerOptions.experimentalDecorators;
    var useDefineForClassFields = getUseDefineForClassFields(compilerOptions);
    var emitStandardClassFields = getEmitStandardClassFields(compilerOptions);
    var allowSyntheticDefaultImports = getAllowSyntheticDefaultImports(compilerOptions);

    return {
        languageVersion ,
        moduleKind ,
        legacyDecorators ,
        useDefineForClassFields ,
        emitStandardClassFields ,
        allowSyntheticDefaultImports ,
    } as const ;
}

export {
    analyseCompilerOptions ,
} ;







namespace Sttc
{

    /**
     * allocate another `class` like this.
     *
     */
    function CSAC()
    {
        return (
            class CSACi
            {
                static #c: ImmutableJs.Seq.Indexed<CSACi> = ImmutableJs.Seq.Indexed() ;

                constructor()
                {
                    CSACi.#c = CSACi.#c.concat([this]) ;
                }

                getId() { return CSACi.#c.indexOf(this) ?? Debug.fail(`error, unregistered item`) ; }

                // static g
                static getById<const T extends CSACi>(i: number) { return (
                    CSACi
                ).#c.get(i) ?? Debug.fail(`NF`) ; }

            }
        ) ;
    }

    //

    function allocateTypeAndSymbolAllocatorCore()
    {

        let symbolCount: number = 0 ;

        class SymbolImpl extends (objectAllocator.getSymbolConstructor() )
        {

            //

        }

        class SymbDenotImpl extends (objectAllocator.getSymbolConstructor() )
        {

            //

        }

        function createSymbol(flags: SymbolFlags, name: __String, checkFlags?: CheckFlags) {
            symbolCount++;
            const symbol = new SymbolImpl(flags | SymbolFlags.Transient, name) as TransientSymbol;
            symbol.links = new SymbolLinks() as TransientSymbolLinks;
            symbol.links.checkFlags = checkFlags || CheckFlags.None;
            return symbol;
        }
    
        // // TODO
        // function createSymDenot(flags: SymbolFlags, name: __String, checkFlags?: CheckFlags) {
        //     // symbolCount++;
        //     const symbol = new SymbDenotImpl(flags | SymbolFlags.Transient, name) ;
        //     symbol.links = new SymbolLinks() as TransientSymbolLinks;
        //     symbol.links.checkFlags = checkFlags || CheckFlags.None;
        //     return symbol;
        // }

        let typeCount: number = 0 ;
    
        class TypeImpl extends (objectAllocator.getTypeConstructor() )
        {

            //

        }

        function createType(flags: TypeFlags): Type {
            const result = new TypeImpl(checker, flags);
            typeCount++;
            result.id = typeCount;
            tracing?.recordType(result);
            return result;
        }
    
        function createTypeWithSymbol(flags: TypeFlags, symbol: Symbol): Type {
            const result = createType(flags);
            result.symbol = symbol;
            return result;
        }
    
        function createOriginType(flags: TypeFlags): Type {
            return new Type(checker, flags);
        }
    
        class IdentifierImpl extends (objectAllocator.getIdentifierConstructor() )
        {

            //

        }

        class SignatureImpl extends (objectAllocator.getSignatureConstructor() )
        {

            //

        }

        return {
            SymbolImpl ,
            createSymbol,
            SymbDenotImpl,
            TypeImpl ,
            createType,
            createTypeWithSymbol,
            createOriginType,
            SignatureImpl ,
            IdentifierImpl ,
        } as const ;
    }

    interface TypeAndSymbolAllocatorCore extends ReturnType<typeof allocateTypeAndSymbolAllocatorCore>
    {}

    interface KeywdedIntrinsicType<out intrinsicNameT extends string>
    { readonly fromIntrinsicNameKwd?: intrinsicNameT, }

    function allocateCoreTypesCore(ctx: TypeAndSymbolAllocatorCore)
    {
        
        const {
            SymbolImpl ,
            createSymbol ,
            SymbDenotImpl,
            TypeImpl ,
            createType,
            createTypeWithSymbol,
            createOriginType,
            IdentifierImpl,
            SignatureImpl ,
        } = (
            ctx
        ) ;
    
        function createIntrinsicType<const intrinsicNameT extends string>
        (kind: TypeFlags, intrinsicName: intrinsicNameT, objectFlags = ObjectFlags.None, debugIntrinsicName?: string): IntrinsicType & KeywdedIntrinsicType<intrinsicNameT>
        {
            checkIntrinsicName(intrinsicName, debugIntrinsicName);
            const type = createType(kind) as IntrinsicType;
            type.intrinsicName = intrinsicName;
            type.debugIntrinsicName = debugIntrinsicName;
            type.objectFlags = objectFlags | ObjectFlags.CouldContainTypeVariablesComputed | ObjectFlags.IsGenericTypeComputed | ObjectFlags.IsUnknownLikeUnionComputed | ObjectFlags.IsNeverIntersectionComputed;
            return type;
        }
    
        function checkIntrinsicName(name: string, debug: string | undefined) {
            const key = `${name},${debug ?? ""}`;
            if (seenIntrinsicNames.has(key)) {
                Debug.fail(`Duplicate intrinsic type name ${name}${debug ? ` (${debug})` : ""}; you may need to pass a name to createIntrinsicType.`);
            }
            seenIntrinsicNames.add(key);
        }
    
        function createTypeParameter(symbol?: Symbol) {
            return createTypeWithSymbol(TypeFlags.TypeParameter, symbol!) as TypeParameter;
        }
    
        var seenIntrinsicNames = new Set<string>();
    
        var anyType = createIntrinsicType(TypeFlags.Any, "any");
        var autoType = createIntrinsicType(TypeFlags.Any, "any", ObjectFlags.NonInferrableType, "auto");
        var wildcardType = createIntrinsicType(TypeFlags.Any, "any", /*objectFlags*/ undefined, "wildcard");
        var blockedStringType = createIntrinsicType(TypeFlags.Any, "any", /*objectFlags*/ undefined, "blocked string");
        var errorType = createIntrinsicType(TypeFlags.Any, "error");
        var unresolvedType = createIntrinsicType(TypeFlags.Any, "unresolved");
        var nonInferrableAnyType = createIntrinsicType(TypeFlags.Any, "any", ObjectFlags.ContainsWideningType, "non-inferrable");
        var intrinsicMarkerType = createIntrinsicType(TypeFlags.Any, "intrinsic");
        var unknownType = createIntrinsicType(TypeFlags.Unknown, "unknown");
        var undefinedType = createIntrinsicType(TypeFlags.Undefined, "undefined");
        var missingType = createIntrinsicType(TypeFlags.Undefined, "undefined", /*objectFlags*/ undefined, "missing");
        var optionalType = createIntrinsicType(TypeFlags.Undefined, "undefined", /*objectFlags*/ undefined, "optional");
        var nullType = createIntrinsicType(TypeFlags.Null, "null");

        var voidType = createIntrinsicType(TypeFlags.Void, "void");
        var neverType = createIntrinsicType(TypeFlags.Never, "never");
        var silentNeverType = createIntrinsicType(TypeFlags.Never, "never", ObjectFlags.NonInferrableType, "silent");
        var implicitNeverType = createIntrinsicType(TypeFlags.Never, "never", /*objectFlags*/ undefined, "implicit");
        var unreachableNeverType = createIntrinsicType(TypeFlags.Never, "never", /*objectFlags*/ undefined, "unreachable");

        var unknownSymbol = createSymbol(SymbolFlags.Property, "unknown" as __String);
        var resolvingSymbol = createSymbol(0, InternalSymbolName.Resolving);
        ;

        function getAliasId(aliasSymbol: Symbol | undefined, aliasTypeArguments: readonly Type[] | undefined) {
            return aliasSymbol ? `@${getSymbolId(aliasSymbol)}` + (aliasTypeArguments ? `:${getTypeListId(aliasTypeArguments)}` : "") : "";
        }
    
        function getTypeListId(types: readonly Type[] | undefined) {
            let result = "";
            if (types) {
                const length = types.length;
                let i = 0;
                while (i < length) {
                    const startId = types[i].id;
                    let count = 1;
                    while (i + count < length && types[i + count].id === startId + count) {
                        count++;
                    }
                    if (result.length) {
                        result += ",";
                    }
                    result += startId;
                    if (count > 1) {
                        result += ":" + count;
                    }
                    i += count;
                }
            }
            return result;
        }
    
        function getTypeId(type: Type): TypeId {
            return type.id;
        }

        function createUniqueESSymbolType(symbol: Symbol) {
            const type = createTypeWithSymbol(TypeFlags.UniqueESSymbol, symbol) as UniqueESSymbolType;
            type.escapedName = `__@${type.symbol.escapedName}@${getSymbolId(type.symbol)}` as __String;
            return type;
        }

        ;

        // This function is used to propagate certain flags when creating new object type references and union types.
        // It is only necessary to do so if a constituent type might be the undefined type, the null type, the type
        // of an object literal or a non-inferrable type. This is because there are operations in the type checker
        // that care about the presence of such types at arbitrary depth in a containing type.
        function getPropagatingFlagsOfTypes(types: readonly Type[], excludeKinds?: TypeFlags): ObjectFlags {
            let result: ObjectFlags = 0;
            for (const type of types) {
                if (excludeKinds === undefined || !(type.flags & excludeKinds)) {
                    result |= getObjectFlags(type);
                }
            }
            return result & ObjectFlags.PropagatingFlags;
        }

        ;

        function tryCreateTypeReference(target: GenericType, typeArguments: readonly Type[] | undefined): Type {
            if (some(typeArguments) && target === emptyGenericType) {
                return unknownType;
            }

            return createTypeReference(target, typeArguments);
        }

        function createTypeReference(target: GenericType, typeArguments: readonly Type[] | undefined): TypeReference {
            const id = getTypeListId(typeArguments);
            let type = target.instantiations.get(id);
            if (!type) {
                type = createObjectType(ObjectFlags.Reference, target.symbol) as TypeReference;
                target.instantiations.set(id, type);
                type.objectFlags |= typeArguments ? getPropagatingFlagsOfTypes(typeArguments) : 0;
                type.target = target;
                type.resolvedTypeArguments = typeArguments;
            }
            return type;
        }

        function cloneTypeReference(source: TypeReference): TypeReference {
            const type = createTypeWithSymbol(source.flags, source.symbol) as TypeReference;
            type.objectFlags = source.objectFlags;
            type.target = source.target;
            type.resolvedTypeArguments = source.resolvedTypeArguments;
            return type;
        }

        function getTypeArgumentsVerbatim(type: TypeReference): readonly Type[]
        { ; }

        function getTypeReferenceArity(type: TypeReference): number {
            return length(type.target.typeParameters);
        }

        ;

        ;
    
        return {
            //

            getAliasId, 

            createIntrinsicType ,
            checkIntrinsicName ,
            createTypeParameter ,

            getTypeListId,
            getTypeId,

            seenIntrinsicNames ,

            anyType,
            autoType ,
            wildcardType ,
            blockedStringType ,
            errorType ,
            unresolvedType ,
            nonInferrableAnyType ,
            intrinsicMarkerType ,
            unknownType ,
            undefinedType ,
            missingType ,
            optionalType ,
            nullType ,
            voidType ,
            neverType ,
            silentNeverType ,
            implicitNeverType ,
            unreachableNeverType ,

            unknownSymbol ,
            resolvingSymbol ,

            createUniqueESSymbolType,

            getPropagatingFlagsOfTypes,

            tryCreateTypeReference,
            createTypeReference,
            cloneTypeReference,

            // getTypeArguments,
            getTypeReferenceArity,

        } as const ;
    }

    function allocateLiteralTypesAllocator(ctx: ReturnType<typeof allocateTypeAndSymbolAllocatorCore>)
    {
        const {
            //
            createType,
            createTypeWithSymbol,
        } = ctx ;

        function createLiteralType(flags: TypeFlags, value: string | number | PseudoBigInt, symbol?: Symbol, regularType?: LiteralType) {
            const type = createTypeWithSymbol(flags, symbol!) as LiteralType;
            type.value = value;
            type.regularType = regularType || type;
            return type;
        }
    
        function getFreshTypeOfLiteralType(type: Type): Type {
            if (type.flags & TypeFlags.Freshable) {
                if (!(type as FreshableType).freshType) {
                    const freshType = createLiteralType(type.flags, (type as LiteralType).value, (type as LiteralType).symbol, type as LiteralType);
                    freshType.freshType = freshType;
                    (type as FreshableType).freshType = freshType;
                }
                return (type as FreshableType).freshType;
            }
            return type;
        }
    
        function getRegularTypeOfLiteralType(type: Type): Type {
            return type.flags & TypeFlags.Freshable ? (type as FreshableType).regularType :
                type.flags & TypeFlags.Union ? ((type as UnionType).regularType || ((type as UnionType).regularType = mapType(type, getRegularTypeOfLiteralType) as UnionType)) :
                type;
        }
    
        function isFreshLiteralType(type: Type) {
            return !!(type.flags & TypeFlags.Freshable) && (type as LiteralType).freshType === type;
        }
    
        var eLiteralTypes = new Map<unknown, LiteralType>();
        var stringLiteralTypes = new Map<string, StringLiteralType>();
        var numberLiteralTypes = new Map<number, NumberLiteralType>();
        var bigIntLiteralTypes = new Map<string, BigIntLiteralType>();
        var enumLiteralTypes = new Map<string, LiteralType>();
    
        // function getLiteralType<const Value extends unknown>(value: Value): LiteralType {
        //     let type;
        //     return eLiteralTypes.get(value) ||
        //         (eLiteralTypes.set(value, type = createLiteralType(TypeFlags.StringLiteral, value) as StringLiteralType), type);
        // }
    
        function getStringLiteralType(value: string): StringLiteralType {
            let type;
            return stringLiteralTypes.get(value) ||
                (stringLiteralTypes.set(value, type = createLiteralType(TypeFlags.StringLiteral, value) as StringLiteralType), type);
        }
    
        function getNumberLiteralType(value: number): NumberLiteralType {
            let type;
            return numberLiteralTypes.get(value) ||
                (numberLiteralTypes.set(value, type = createLiteralType(TypeFlags.NumberLiteral, value) as NumberLiteralType), type);
        }
    
        function getBigIntLiteralType(value: PseudoBigInt): BigIntLiteralType {
            let type;
            const key = pseudoBigIntToString(value);
            return bigIntLiteralTypes.get(key) ||
                (bigIntLiteralTypes.set(key, type = createLiteralType(TypeFlags.BigIntLiteral, value) as BigIntLiteralType), type);
        }
    
        function getEnumLiteralType(value: string | number, enumId: number, symbol: Symbol): LiteralType {
            let type;
            const key = `${enumId}${typeof value === "string" ? "@" : "#"}${value}`;
            const flags = TypeFlags.EnumLiteral | (typeof value === "string" ? TypeFlags.StringLiteral : TypeFlags.NumberLiteral);
            return enumLiteralTypes.get(key) ||
                (enumLiteralTypes.set(key, type = createLiteralType(flags, value, symbol)), type);
        }

        return {
            createLiteralType,
            isFreshLiteralType ,
            getFreshTypeOfLiteralType,
            getRegularTypeOfLiteralType ,
            getStringLiteralType ,
            getNumberLiteralType ,
            getBigIntLiteralType ,
            getEnumLiteralType ,

            inteerned1: {
                eLiteralTypes ,
                stringLiteralTypes ,
                numberLiteralTypes ,
                bigIntLiteralTypes ,
                enumLiteralTypes ,
            } ,
        } as const ;
    }

    function allocateBaseSignatureReprAllocator(ctx: TypeAndSymbolAllocatorCore )
    {
        const {
            SignatureImpl ,
        } = ctx ;

        function createSignature(
            declaration: SignatureDeclaration | JSDocSignature | undefined,
            typeParameters: readonly TypeParameter[] | undefined,
            thisParameter: Symbol | undefined,
            parameters: readonly Symbol[],
            resolvedReturnType: Type | undefined,
            resolvedTypePredicate: TypePredicate | undefined,
            minArgumentCount: number,
            flags: SignatureFlags,
        ): Signature {
            const sig = new SignatureImpl(checker, flags);
            sig.declaration = declaration;
            sig.typeParameters = typeParameters;
            sig.parameters = parameters;
            sig.thisParameter = thisParameter;
            sig.resolvedReturnType = resolvedReturnType;
            sig.resolvedTypePredicate = resolvedTypePredicate;
            sig.minArgumentCount = minArgumentCount;
            sig.resolvedMinArgumentCount = undefined;
            sig.target = undefined;
            sig.mapper = undefined;
            sig.compositeSignatures = undefined;
            sig.compositeKind = undefined;
            return sig;
        }
    
        function cloneSignature(sig: Signature): Signature {
            const result = createSignature(sig.declaration, sig.typeParameters, sig.thisParameter, sig.parameters, /*resolvedReturnType*/ undefined, /*resolvedTypePredicate*/ undefined, sig.minArgumentCount, sig.flags & SignatureFlags.PropagatingFlags);
            result.target = sig.target;
            result.mapper = sig.mapper;
            result.compositeSignatures = sig.compositeSignatures;
            result.compositeKind = sig.compositeKind;
            return result;
        }
    
        function createUnionSignature(signature: Signature, unionSignatures: Signature[]) {
            const result = cloneSignature(signature);
            result.compositeSignatures = unionSignatures;
            result.compositeKind = TypeFlags.Union;
            result.target = undefined;
            result.mapper = undefined;
            return result;
        }
    
        return {
            // ..
            createSignature ,
            cloneSignature ,
            createUnionSignature ,
        } as const ;
    }

    function allocateCoreSymbolTableAllocator(ctx: TypeAndSymbolAllocatorCore )
    {
        ;;
        
        const {
            SymbolImpl ,
            createSymbol ,
            SymbDenotImpl,
        } = (
            ctx
        ) ;
    
        function createPositionalArg(name: __String, )
        {
            const symbol = createSymbol(SymbolFlags.FunctionScopedVariable, name);
            return symbol;
        }
    
        function createHardTypedPositionalArg(name: __String, type: Type)
        {
            const symbol = createPositionalArg(name);
            symbol.links.type = type;
            return symbol;
        }
    
        function createProperty(name: __String, )
        {
            const symbol = createSymbol(SymbolFlags.Property, name);
            return symbol;
        }
    
        function createHardTypedProperty(name: __String, type: Type)
        {
            const symbol = createProperty(name) ;
            symbol.links.type = type;
            return symbol;
        }

        return {
            createPositionalArg ,
            createHardTypedPositionalArg ,
            createProperty ,
            createHardTypedProperty ,

            // getMergedSymbol,
            // getSymbolOfDeclaration ,
            // getSymbolOfNode,
            // getParentOfSymbol ,
        } as const ;
    }

    function allocateFlowPerspectorAllocator()
    {
        ;

        class FlowPtPerspectiveImpl extends (class {} )
        {

            //

        }

        const getFlowPtPerspective = (

            (() => {
                const cache = (
                    new WeakMap<FlowNode, FlowPtPerspectiveImpl >()
                ) ;
                return function (...[v] : [FlowNode]) {
                    let r: FlowPtPerspectiveImpl;
                    r = cache.get(v) ?? (r = cache.set(v, new FlowPtPerspectiveImpl() ) , r ) ;
                    return r ;
                } ;
            })()
        ) ;

        const getFlowPtPerspectiveLexically = (

            function (...[v] : [Node])
            {
                const vF = getFlowNodeVerbatim(v) ;
                return vF && getFlowPtPerspective(vF) ;
            }
        ) ;

        function getFlowNodeVerbatim(...[reference] : [Node] )
        {
            return (
                tryCast(reference, canHaveFlowNode)
                ?.flowNode
            ) ;
        }
    
    
        return {
            FlowPtPerspectiveImpl ,
            getFlowPtPerspective ,
            getFlowNodeVerbatim ,
            getFlowPtPerspectiveLexically ,

        } as const ;
    }

    interface AcatCore extends ReturnType<typeof allocateCoreTypesCore>
    {}

    function allocateCoreTypesRestAllocator(
        ctx: TypeAndSymbolAllocatorCore, acatCore: AcatCore )
    {
        ;

        var templateLiteralTypes = new Map<string, TemplateLiteralType>();
        var stringMappingTypes = new Map<string, StringMappingType>();
        var substitutionTypes = new Map<string, SubstitutionType>();
        var decoratorContextOverrideTypeCache = new Map<string, Type>();

        var cachedTypes = new Map<string, Type>();
        var evolvingArrayTypes: EvolvingArrayType[] = [];
        var markerTypes = new Set<number>();

        return {
            templateLiteralTypes ,
            stringMappingTypes ,
            substitutionTypes ,
            decoratorContextOverrideTypeCache ,

            cachedTypes,
            evolvingArrayTypes,
            markerTypes,
        } as const ;
    }

    function allocateCoreCombinedTypesAllocator(ctx: TypeAndSymbolAllocatorCore, acatCore: AcatCore )
    {

        const {
            SymbolImpl ,
            createSymbol ,
            SymbDenotImpl,
            TypeImpl ,
            createType,
            createTypeWithSymbol,
            createOriginType,
            IdentifierImpl,
            SignatureImpl ,
        } = (
            ctx
        ) ;
    
        const {
            createIntrinsicType ,
            checkIntrinsicName ,
            createTypeParameter ,

            getTypeListId,
            getTypeId,

            seenIntrinsicNames ,

            anyType,
            autoType ,
            wildcardType ,
            blockedStringType ,
            errorType ,
            unresolvedType ,
            nonInferrableAnyType ,
            intrinsicMarkerType ,
            unknownType ,
            undefinedType ,
            missingType ,
            optionalType ,
            nullType ,

            voidType ,
            neverType ,
            silentNeverType ,
            implicitNeverType ,
            unreachableNeverType ,

            unknownSymbol ,
            resolvingSymbol ,

            getAliasId, 

            createUniqueESSymbolType,

        } = (
            acatCore
        ) ;

        var unionTypes = new Map<string, UnionType>();
        var unionOfUnionTypes = new Map<string, Type>();
        var intersectionTypes = new Map<string, Type>();

        // This function assumes the constituent type list is sorted and deduplicated.
        function getUnionTypeFromSortedList(...[types, precomputedObjectFlags, aliasSymbol, aliasTypeArguments, origin] : [types: Type[], precomputedObjectFlags: ObjectFlags, aliasSymbol?: Symbol, aliasTypeArguments?: readonly Type[], origin?: Type]): Type {
            if (types.length === 0) {
                return neverType;
            }
            if (types.length === 1) {
                return types[0];
            }
            const typeKey = !origin ? getTypeListId(types) :
                origin.flags & TypeFlags.Union ? `|${getTypeListId((origin as UnionType).types)}` :
                origin.flags & TypeFlags.Intersection ? `&${getTypeListId((origin as IntersectionType).types)}` :
                `#${(origin as IndexType).type.id}|${getTypeListId(types)}`; // origin type id alone is insufficient, as `keyof x` may resolve to multiple WIP values while `x` is still resolving
            const id = typeKey + getAliasId(aliasSymbol, aliasTypeArguments);
            let type = unionTypes.get(id);
            if (!type) {
                type = createType(TypeFlags.Union) as UnionType;
                type.objectFlags = precomputedObjectFlags | getPropagatingFlagsOfTypes(types, /*excludeKinds*/ TypeFlags.Nullable);
                type.types = types;
                type.origin = origin;
                type.aliasSymbol = aliasSymbol;
                type.aliasTypeArguments = aliasTypeArguments;
                if (types.length === 2 && types[0].flags & TypeFlags.BooleanLiteral && types[1].flags & TypeFlags.BooleanLiteral) {
                    type.flags |= TypeFlags.Boolean;
                    (type as UnionType & IntrinsicType).intrinsicName = "boolean";
                }
                unionTypes.set(id, type);
            }
            return type;
        }

        return {
            //
            getUnionTypeFromSortedList ,

            unionTypes ,
            unionOfUnionTypes ,
            intersectionTypes ,
        } as const ;
    }
    ;

    function allocateTypeCheckerCore(...[
        host
        ,
        ctx = allocateTypeAndSymbolAllocatorCore()
        ,
        acasta  = allocateCoreSymbolTableAllocator(ctx)
        ,
        acatCore = allocateCoreTypesCore(ctx)
        ,
        altta = allocateLiteralTypesAllocator(ctx)
        ,
        // acat: ReturnType<typeof allocateCoreTypes> = allocateCoreTypes(ctx, acatCore, altta )
        // ,
        paramica = allocateBaseSignatureReprAllocator(ctx)
        ,
        arstc = allocateCoreTypesRestAllocator(ctx, acatCore)
        ,
    ] : (
        ArgsWithOptions<[
            host : TypeCheckerHost
            ,
            ...([
                //
                ctx?: TypeAndSymbolAllocatorCore  
                ,
                acasta?: ReturnType<typeof allocateCoreSymbolTableAllocator>  
                ,
                acatCore?: AcatCore 
                ,
                altta?: ReturnType<typeof allocateLiteralTypesAllocator>  
                ,
                // acat: ReturnType<typeof allocateCoreTypes>  
                // ,
                paramica?: ReturnType<typeof allocateBaseSignatureReprAllocator> 
                ,
                arstc?: ReturnType<typeof allocateCoreTypesRestAllocator> 
                ,
            ]) ,
        ], {}>
    ) )
    {

    //#region 

    const {
        SymbolImpl ,
        createSymbol ,
        SymbDenotImpl,
        TypeImpl ,
        createType,
        createTypeWithSymbol,
        createOriginType,
        IdentifierImpl,
    } = (
        ctx
    ) ;

    function cloneSymbol(symbol: Symbol): TransientSymbol {
        const result = createSymbol(symbol.flags, symbol.escapedName);
        result.declarations = symbol.declarations ? symbol.declarations.slice() : [];
        result.parent = symbol.parent;
        if (symbol.valueDeclaration) result.valueDeclaration = symbol.valueDeclaration;
        if (symbol.constEnumOnlyModule) result.constEnumOnlyModule = true;
        if (symbol.members) result.members = new Map(symbol.members);
        if (symbol.exports) result.exports = new Map(symbol.exports);
        recordMergedSymbol(result, symbol);
        return result;
    }

    const {
        //
        FlowPtPerspectiveImpl ,
        getFlowPtPerspective ,
        getFlowNodeVerbatim ,
        getFlowPtPerspectiveLexically ,
    } = (
        allocateFlowPerspectorAllocator()
    ) ;

    const {
        SignatureImpl ,
    } = (
        ctx
    ) ;

    function createSignature(
        declaration: SignatureDeclaration | JSDocSignature | undefined,
        typeParameters: readonly TypeParameter[] | undefined,
        thisParameter: Symbol | undefined,
        parameters: readonly Symbol[],
        resolvedReturnType: Type | undefined,
        resolvedTypePredicate: TypePredicate | undefined,
        minArgumentCount: number,
        flags: SignatureFlags,
    ): Signature {
        const sig = new SignatureImpl(checker, flags);
        sig.declaration = declaration;
        sig.typeParameters = typeParameters;
        sig.parameters = parameters;
        sig.thisParameter = thisParameter;
        sig.resolvedReturnType = resolvedReturnType;
        sig.resolvedTypePredicate = resolvedTypePredicate;
        sig.minArgumentCount = minArgumentCount;
        sig.resolvedMinArgumentCount = undefined;
        sig.target = undefined;
        sig.mapper = undefined;
        sig.compositeSignatures = undefined;
        sig.compositeKind = undefined;
        return sig;
    }

    function cloneSignature(sig: Signature): Signature {
        const result = createSignature(sig.declaration, sig.typeParameters, sig.thisParameter, sig.parameters, /*resolvedReturnType*/ undefined, /*resolvedTypePredicate*/ undefined, sig.minArgumentCount, sig.flags & SignatureFlags.PropagatingFlags);
        result.target = sig.target;
        result.mapper = sig.mapper;
        result.compositeSignatures = sig.compositeSignatures;
        result.compositeKind = sig.compositeKind;
        return result;
    }

    function createUnionSignature(signature: Signature, unionSignatures: Signature[]) {
        const result = cloneSignature(signature);
        result.compositeSignatures = unionSignatures;
        result.compositeKind = TypeFlags.Union;
        result.target = undefined;
        result.mapper = undefined;
        return result;
    }

    function getOptionalCallSignature(signature: Signature, callChainFlags: SignatureFlags): Signature {
        if ((signature.flags & SignatureFlags.CallChainFlags) === callChainFlags) {
            return signature;
        }
        if (!signature.optionalCallSignatureCache) {
            signature.optionalCallSignatureCache = {};
        }
        const key = callChainFlags === SignatureFlags.IsInnerCallChain ? "inner" : "outer";
        return signature.optionalCallSignatureCache[key]
            || (signature.optionalCallSignatureCache[key] = createOptionalCallSignature(signature, callChainFlags));
    }

    function createOptionalCallSignature(signature: Signature, callChainFlags: SignatureFlags) {
        Debug.assert(callChainFlags === SignatureFlags.IsInnerCallChain || callChainFlags === SignatureFlags.IsOuterCallChain, "An optional call signature can either be for an inner call chain or an outer call chain, but not both.");
        const result = cloneSignature(signature);
        result.flags |= callChainFlags;
        return result;
    }

    const {
        getAliasId ,
        getTypeId,
        getTypeListId,
    } = acatCore ;

    const {
        //
        unknownSymbol ,
        resolvingSymbol ,

        //
        getPropagatingFlagsOfTypes,

        tryCreateTypeReference,
        createTypeReference,
        cloneTypeReference,

        // getTypeArguments,
        getTypeReferenceArity,

    } = acatCore ;

    function getTypeArguments(type: TypeReference): readonly Type[] {
        if (!type.resolvedTypeArguments) {
            if (!pushTypeResolution(type, TypeSystemPropertyName.ResolvedTypeArguments)) {
                return concatenate(type.target.outerTypeParameters, type.target.localTypeParameters?.map(() => errorType)) || emptyArray;
            }
            const node = type.node;
            const typeArguments = !node ? emptyArray :
                node.kind === SyntaxKind.TypeReference ? concatenate(type.target.outerTypeParameters, getEffectiveTypeArguments(node, type.target.localTypeParameters!)) :
                node.kind === SyntaxKind.ArrayType ? [getTypeFromTypeNode(node.elementType)] :
                map(node.elements, getTypeFromTypeNode);
            if (popTypeResolution()) {
                type.resolvedTypeArguments ??= type.mapper ? instantiateTypes(typeArguments, type.mapper) : typeArguments;
            }
            else {
                type.resolvedTypeArguments ??= concatenate(type.target.outerTypeParameters, type.target.localTypeParameters?.map(() => errorType) || emptyArray);
                error(
                    type.node || currentNode,
                    type.target.symbol ? Diagnostics.Type_arguments_for_0_circularly_reference_themselves : Diagnostics.Tuple_type_arguments_circularly_reference_themselves,
                    type.target.symbol && symbolToString(type.target.symbol),
                );
            }
        }
        return type.resolvedTypeArguments;
    }

    const {
        createPositionalArg ,
        createHardTypedPositionalArg ,
        createProperty ,
        createHardTypedProperty ,

        // getMergedSymbol,
        // getSymbolOfDeclaration ,
        // getSymbolOfNode,
        // getParentOfSymbol ,
    } = (
        acasta
    ) ;

    const {
        createIntrinsicType ,
        checkIntrinsicName ,
        createTypeParameter ,

        seenIntrinsicNames,

        anyType,
        autoType ,
        wildcardType ,
        blockedStringType ,
        errorType ,
        unresolvedType ,
        nonInferrableAnyType ,
        intrinsicMarkerType ,
        unknownType ,
        undefinedType ,
        missingType ,
        optionalType ,
        nullType ,

        voidType ,
        neverType ,
        silentNeverType ,
        implicitNeverType ,
        unreachableNeverType ,

        // literalTyping,

        //
        // getUnionTypeFromSortedList ,
        // intersectionTypes ,
        // unionOfUnionTypes ,
        // unionTypes ,
        // getUnionType,

        // nonnullPts,

        // typeCombinationsReductionsAndRelationship ,

    } = acatCore;

    ;

    var compilerOptions = host.getCompilerOptions();
    const {
        languageVersion ,
        moduleKind ,
        legacyDecorators ,
        useDefineForClassFields ,
        emitStandardClassFields ,
        allowSyntheticDefaultImports ,
    } = (
        analyseCompilerOptions(compilerOptions)
    ) ;
    var strictNullChecks = getStrictOptionValue(compilerOptions, "strictNullChecks");
    var strictFunctionTypes = getStrictOptionValue(compilerOptions, "strictFunctionTypes");
    var strictBindCallApply = getStrictOptionValue(compilerOptions, "strictBindCallApply");
    var strictPropertyInitialization = getStrictOptionValue(compilerOptions, "strictPropertyInitialization");
    var strictBuiltinIteratorReturn = getStrictOptionValue(compilerOptions, "strictBuiltinIteratorReturn");
    var noImplicitAny = getStrictOptionValue(compilerOptions, "noImplicitAny");
    var noImplicitThis = getStrictOptionValue(compilerOptions, "noImplicitThis");
    var useUnknownInCatchVariables = getStrictOptionValue(compilerOptions, "useUnknownInCatchVariables");
    var exactOptionalPropertyTypes = compilerOptions.exactOptionalPropertyTypes;
    var noUncheckedSideEffectImports = !!compilerOptions.noUncheckedSideEffectImports;

    var isolatedModulesLikeFlagName = compilerOptions.verbatimModuleSyntax ? "verbatimModuleSyntax" : "isolatedModules";
    var canCollectSymbolAliasAccessabilityData = !compilerOptions.verbatimModuleSyntax;

    ;

    function lookupOrIssueError(location: Node | undefined, message: DiagnosticMessage, ...args: DiagnosticArguments): Diagnostic {
        const diagnostic = location
            ? createDiagnosticForNode(location, message, ...args)
            : createCompilerDiagnostic(message, ...args);
        const existing = diagnostics.lookup(diagnostic);
        if (existing) {
            return existing;
        }
        else {
            diagnostics.add(diagnostic);
            return diagnostic;
        }
    }

    function errorSkippedOn(key: keyof CompilerOptions, location: Node | undefined, message: DiagnosticMessage, ...args: DiagnosticArguments): Diagnostic {
        const diagnostic = error(location, message, ...args);
        diagnostic.skippedOn = key;
        return diagnostic;
    }

    function createError(location: Node | undefined, message: DiagnosticMessage, ...args: DiagnosticArguments): Diagnostic {
        return location
            ? createDiagnosticForNode(location, message, ...args)
            : createCompilerDiagnostic(message, ...args);
    }

    function error(location: Node | undefined, message: DiagnosticMessage, ...args: DiagnosticArguments): Diagnostic {
        const diagnostic = createError(location, message, ...args);
        diagnostics.add(diagnostic);
        return diagnostic;
    }

    var diagnostics = createDiagnosticCollection();
    var suggestionDiagnostics = createDiagnosticCollection();

    ;

    ;

    function getSymbolLinks(symbol: Symbol): SymbolLinks {
        if (symbol.flags & SymbolFlags.Transient) return (symbol as TransientSymbol).links;
        const id = getSymbolId(symbol);
        return symbolLinks[id] ??= new SymbolLinks();
    }

    function getNodeLinks(node: Node): NodeLinks {
        const nodeId = getNodeId(node);
        return nodeLinks[nodeId] || (nodeLinks[nodeId] = new (NodeLinks as any)());
    }

    function getSymbol(symbols: SymbolTable, name: __String, meaning: SymbolFlags): Symbol | undefined {
        if (meaning) {
            const symbol = getMergedSymbol(symbols.get(name));
            if (symbol) {
                if (symbol.flags & meaning) {
                    return symbol;
                }
                if (symbol.flags & SymbolFlags.Alias) {
                    const targetFlags = getSymbolFlags(symbol);
                    // `targetFlags` will be `SymbolFlags.All` if an error occurred in alias resolution; this avoids cascading errors
                    if (targetFlags & meaning) {
                        return symbol;
                    }
                }
            }
        }
        // return undefined if we can't find a symbol.
    }

    /**
     * Get symbols that represent parameter-property-declaration as parameter and as property declaration
     * @param parameter a parameterDeclaration node
     * @param parameterName a name of the parameter to get the symbols for.
     * @return a tuple of two symbols
     */
    function getSymbolsOfParameterPropertyDeclaration(parameter: ParameterPropertyDeclaration, parameterName: __String): [Symbol, Symbol] {
        const constructorDeclaration = parameter.parent;
        const classDeclaration = parameter.parent.parent;

        const parameterSymbol = getSymbol(constructorDeclaration.locals!, parameterName, SymbolFlags.Value);
        const propertySymbol = getSymbol(getMembersOfSymbol(classDeclaration.symbol), parameterName, SymbolFlags.Value);

        if (parameterSymbol && propertySymbol) {
            return [parameterSymbol, propertySymbol];
        }

        return Debug.fail("There should exist two symbols, one as property declaration and one as parameter declaration");
    }

    function getUnresolvedSymbolForEntityName(name: EntityNameOrEntityNameExpression) {
        const identifier = name.kind === SyntaxKind.QualifiedName ? name.right :
            name.kind === SyntaxKind.PropertyAccessExpression ? name.name :
            name;
        const text = identifier.escapedText;
        if (text) {
            const parentSymbol = name.kind === SyntaxKind.QualifiedName ? getUnresolvedSymbolForEntityName(name.left) :
                name.kind === SyntaxKind.PropertyAccessExpression ? getUnresolvedSymbolForEntityName(name.expression) :
                undefined;
            const path = parentSymbol ? `${getSymbolPath(parentSymbol)}.${text}` : text as string;
            let result = unresolvedSymbols.get(path);
            if (!result) {
                unresolvedSymbols.set(path, result = createSymbol(SymbolFlags.TypeAlias, text, CheckFlags.Unresolved));
                result.parent = parentSymbol;
                result.links.declaredType = unresolvedType;
            }
            return result;
        }
        return unknownSymbol;
    }

    function getSymbolPath(symbol: Symbol): string {
        return symbol.parent ? `${getSymbolPath(symbol.parent)}.${symbol.escapedName}` : symbol.escapedName as string;
    }

    function getMergedSymbol(symbol: Symbol): Symbol;
    function getMergedSymbol(symbol: Symbol | undefined): Symbol | undefined;
    function getMergedSymbol(symbol: Symbol | undefined): Symbol | undefined {
        let merged: Symbol;
        return symbol && symbol.mergeId && (merged = mergedSymbols[symbol.mergeId]) ? merged : symbol;
    }

    function getSymbolOfDeclaration(node: Declaration): Symbol {
        return getMergedSymbol(node.symbol && getLateBoundSymbol(node.symbol));
    }

    /**
     * Get the merged symbol for a node. If you know the node is a `Declaration`, it is faster and more type safe to
     * use use `getSymbolOfDeclaration` instead.
     */
    function getSymbolOfNode(node: Node): Symbol | undefined {
        return canHaveSymbol(node) ? getSymbolOfDeclaration(node) : undefined;
    }

    function getParentOfSymbol(symbol: Symbol): Symbol | undefined {
        return getMergedSymbol(symbol.parent && getLateBoundSymbol(symbol.parent));
    }

    var unresolvedSymbols = new Map<string, TransientSymbol>();

    var errorTypes = new Map<string, Type>();

    var argumentsSymbol = createSymbol(SymbolFlags.Property, "arguments" as __String);
    
    //#endregion

    ;

    ;

    interface FlowPerspective extends
    InstanceType<typeof FlowPtPerspectiveImpl>
    {}

    ;

    function getCtxtualGlobalObj(vwp: FlowPerspective): Symbol
    { return ; }

    function createDeferredTypeReference(target: GenericType, node: TypeReferenceNode | ArrayTypeNode | TupleTypeNode, mapper?: TypeMapper, aliasSymbol?: Symbol, aliasTypeArguments?: readonly Type[]): DeferredTypeReference {
        if (!aliasSymbol) {
            aliasSymbol = getAliasSymbolForTypeNode(node);
            const localAliasTypeArguments = getTypeArgumentsForAliasSymbol(aliasSymbol);
            aliasTypeArguments = mapper ? instantiateTypes(localAliasTypeArguments, mapper) : localAliasTypeArguments;
        }
        const type = createObjectType(ObjectFlags.Reference, target.symbol) as DeferredTypeReference;
        type.target = target;
        type.node = node;
        type.mapper = mapper;
        type.aliasSymbol = aliasSymbol;
        type.aliasTypeArguments = aliasTypeArguments;
        return type;
    }

    ;

    function getTypeOfSymbol(...[symbol] : [s: Symbol, persp: FlowPerspective | null ]): Type
    {
        const checkFlags = getCheckFlags(symbol);
        if (checkFlags & CheckFlags.DeferredType) {
            return getTypeOfSymbolWithDeferredType(symbol);
        }
        if (checkFlags & CheckFlags.Instantiated) {
            return getTypeOfInstantiatedSymbol(symbol);
        }
        if (checkFlags & CheckFlags.Mapped) {
            return getTypeOfMappedSymbol(symbol as MappedSymbol);
        }
        if (checkFlags & CheckFlags.ReverseMapped) {
            return getTypeOfReverseMappedSymbol(symbol as ReverseMappedSymbol);
        }
        if (symbol.flags & (SymbolFlags.Variable | SymbolFlags.Property)) {
            return getTypeOfVariableOrParameterOrProperty(symbol);
        }
        if (symbol.flags & (SymbolFlags.Function | SymbolFlags.Method | SymbolFlags.Class | SymbolFlags.Enum | SymbolFlags.ValueModule)) {
            return getTypeOfFuncClassEnumModule(symbol);
        }
        if (symbol.flags & SymbolFlags.EnumMember) {
            return getTypeOfEnumMember(symbol);
        }
        if (symbol.flags & SymbolFlags.Accessor) {
            return getTypeOfAccessors(symbol);
        }
        if (symbol.flags & SymbolFlags.Alias) {
            return getTypeOfAlias(symbol);
        }
        return errorType;
    }

    function getTypeOfSymbolOnsite(symbol: Symbol): Type
    {
        return (
            getTypeOfSymbol(symbol, null )
        ) ;
    }

    function getNonMissingTypeOfSymbol(symbol: Symbol) {
        return removeMissingType(getTypeOfSymbol(symbol), !!(symbol.flags & SymbolFlags.Optional));
    }

    function isReferenceToSomeType(type: Type, targets: readonly Type[]) {
        if (type === undefined || (getObjectFlags(type) & ObjectFlags.Reference) === 0) {
            return false;
        }
        for (const target of targets) {
            if ((type as TypeReference).target === target) {
                return true;
            }
        }
        return false;
    }

    function isReferenceToType(type: Type, target: Type) {
        return type !== undefined
            && target !== undefined
            && (getObjectFlags(type) & ObjectFlags.Reference) !== 0
            && (type as TypeReference).target === target;
    }

    function getTargetType(type: Type): Type {
        return getObjectFlags(type) & ObjectFlags.Reference ? (type as TypeReference).target : type;
    }

    // TODO: GH#18217 If `checkBase` is undefined, we should not call this because this will always return false.
    function hasBaseType(type: Type, checkBase: Type | undefined) {
        return check(type);
        function check(type: Type): boolean {
            if (getObjectFlags(type) & (ObjectFlags.ClassOrInterface | ObjectFlags.Reference)) {
                const target = getTargetType(type) as InterfaceType;
                return target === checkBase || some(getBaseTypes(target), check);
            }
            else if (type.flags & TypeFlags.Intersection) {
                return some((type as IntersectionType).types, check);
            }
            return false;
        }
    }

    // Appends the type parameters given by a list of declarations to a set of type parameters and returns the resulting set.
    // The function allocates a new array if the input type parameter set is undefined, but otherwise it modifies the set
    // in-place and returns the same array.
    function appendTypeParameters(typeParameters: TypeParameter[] | undefined, declarations: readonly TypeParameterDeclaration[]): TypeParameter[] | undefined {
        for (const declaration of declarations) {
            typeParameters = appendIfUnique(typeParameters, getDeclaredTypeOfTypeParameter(getSymbolOfDeclaration(declaration)));
        }
        return typeParameters;
    }

    ;

    const {
        createLiteralType ,
        getRegularTypeOfLiteralType ,
        getFreshTypeOfLiteralType ,
        isFreshLiteralType ,
    } = altta ;

    ;

    var stringType = createIntrinsicType(TypeFlags.String, "string");
    var numberType = createIntrinsicType(TypeFlags.Number, "number");
    var bigintType = createIntrinsicType(TypeFlags.BigInt, "bigint");

    var falseType = createIntrinsicType(TypeFlags.BooleanLiteral, "false", /*objectFlags*/ undefined, "fresh") as FreshableIntrinsicType;
    var regularFalseType = createIntrinsicType(TypeFlags.BooleanLiteral, "false") as FreshableIntrinsicType;
    var trueType = createIntrinsicType(TypeFlags.BooleanLiteral, "true", /*objectFlags*/ undefined, "fresh") as FreshableIntrinsicType;
    var regularTrueType = createIntrinsicType(TypeFlags.BooleanLiteral, "true") as FreshableIntrinsicType;
    trueType.regularType = regularTrueType;
    trueType.freshType = trueType;
    regularTrueType.regularType = regularTrueType;
    regularTrueType.freshType = trueType;
    falseType.regularType = regularFalseType;
    falseType.freshType = falseType;
    regularFalseType.regularType = regularFalseType;
    regularFalseType.freshType = falseType;
    var booleanType = getUnionType([regularFalseType, regularTrueType]);

    var esSymbolType = createIntrinsicType(TypeFlags.ESSymbol, "symbol");

    var nonPrimitiveType = createIntrinsicType(TypeFlags.NonPrimitive, "object");

    const nonnullPts = (() => {
        ;
        return {
            //
            stringType ,
            numberType,
            bigintType ,

            falseType ,
            regularFalseType ,
            trueType ,
            regularTrueType ,
            booleanType ,

            esSymbolType ,

            nonPrimitiveType ,
        } as const ;
    })() ;
    ;

    ;

    ;

    ;
    var emptySymbols = ImmutableJs.Map() satisfies ReadonlySymbolTable ;

    /**
     * is {@link createUnnamedShallowStructuralType}.
     * 
     * @deprecated please use the new name.
     * 
     */
    const createAnonymousType = createUnnamedShallowStructuralType ;

    //

    // TODO

    //

    var undefinedWideningType = strictNullChecks ? undefinedType : createIntrinsicType(TypeFlags.Undefined, "undefined", ObjectFlags.ContainsWideningType, "widening");
    var undefinedOrMissingType = exactOptionalPropertyTypes ? missingType : undefinedType;
    var nullWideningType = strictNullChecks ? nullType : createIntrinsicType(TypeFlags.Null, "null", ObjectFlags.ContainsWideningType, "widening");
    //

    var indexedAccessTypes = new Map<string, IndexedAccessType>();

    //

    var stringOrNumberType = getUnionType([stringType, numberType]);
    var stringNumberSymbolType = getUnionType([stringType, numberType, esSymbolType]);
    var numberOrBigIntType = getUnionType([numberType, bigintType]);
    var templateConstraintType = getUnionType([stringType, numberType, booleanType, bigintType, nullType, undefinedType]) as UnionType;
    var numericStringType = getTemplateLiteralType(["", ""], [numberType]); // The `${number}` type

    //

    //

    // function makeFunctionTypeMapper(func: (t: Type) => Type, debugInfo: () => string): TypeMapper {
    //     return Debug.attachDebugPrototypeIfDebug({ kind: TypeMapKind.Function, func, debugInfo: Debug.isDebugging ? debugInfo : undefined });
    // }

    // var restrictiveMapper: TypeMapper = makeFunctionTypeMapper(t => t.flags & TypeFlags.TypeParameter ? getRestrictiveTypeParameter(t as TypeParameter) : t, () => "(restrictive mapper)");
    // var permissiveMapper: TypeMapper = makeFunctionTypeMapper(t => t.flags & TypeFlags.TypeParameter ? wildcardType : t, () => "(permissive mapper)");
    // var uniqueLiteralType = createIntrinsicType(TypeFlags.Never, "never", /*objectFlags*/ undefined, "unique literal"); // `uniqueLiteralType` is a special `never` flagged by union reduction to behave as a literal
    // var uniqueLiteralMapper: TypeMapper = makeFunctionTypeMapper(t => t.flags & TypeFlags.TypeParameter ? uniqueLiteralType : t, () => "(unique literal mapper)"); // replace all type parameters with the unique literal type (disregarding constraints)
    // var outofbandVarianceMarkerHandler: ((onlyUnreliable: boolean) => void) | undefined;
    // var reportUnreliableMapper = makeFunctionTypeMapper(t => {
    //     if (outofbandVarianceMarkerHandler && (t === markerSuperType || t === markerSubType || t === markerOtherType)) {
    //         outofbandVarianceMarkerHandler(/*onlyUnreliable*/ true);
    //     }
    //     return t;
    // }, () => "(unmeasurable reporter)");
    // var reportUnmeasurableMapper = makeFunctionTypeMapper(t => {
    //     if (outofbandVarianceMarkerHandler && (t === markerSuperType || t === markerSubType || t === markerOtherType)) {
    //         outofbandVarianceMarkerHandler(/*onlyUnreliable*/ false);
    //     }
    //     return t;
    // }, () => "(unreliable reporter)");

    var emptyObjectType = createAnonymousType(/*symbol*/ undefined, emptySymbols, emptyArray, emptyArray, emptyArray);
    var emptyJsxObjectType = createAnonymousType(/*symbol*/ undefined, emptySymbols, emptyArray, emptyArray, emptyArray);
    emptyJsxObjectType.objectFlags |= ObjectFlags.JsxAttributes;
    var emptyFreshJsxObjectType = createAnonymousType(/*symbol*/ undefined, emptySymbols, emptyArray, emptyArray, emptyArray);
    emptyFreshJsxObjectType.objectFlags |= ObjectFlags.JsxAttributes | ObjectFlags.FreshLiteral | ObjectFlags.ObjectLiteral | ObjectFlags.ContainsObjectOrArrayLiteral;

    var emptyTypeLiteralSymbol = createSymbol(SymbolFlags.TypeLiteral, InternalSymbolName.Type);
    emptyTypeLiteralSymbol.members = createSymbolTable();
    var emptyTypeLiteralType = createAnonymousType(emptyTypeLiteralSymbol, emptySymbols, emptyArray, emptyArray, emptyArray);

    var unknownEmptyObjectType = createAnonymousType(/*symbol*/ undefined, emptySymbols, emptyArray, emptyArray, emptyArray);
    var unknownUnionType = strictNullChecks ? getUnionType([undefinedType, nullType, unknownEmptyObjectType]) : unknownType;

    var emptyGenericType = createAnonymousType(/*symbol*/ undefined, emptySymbols, emptyArray, emptyArray, emptyArray) as ObjectType as GenericType;
    emptyGenericType.instantiations = new Map<string, TypeReference>();

    var anyFunctionType = createAnonymousType(/*symbol*/ undefined, emptySymbols, emptyArray, emptyArray, emptyArray);
    // The anyFunctionType contains the anyFunctionType by definition. The flag is further propagated
    // in getPropagatingFlagsOfTypes, and it is checked in inferFromTypes.
    anyFunctionType.objectFlags |= ObjectFlags.NonInferrableType;

    var noConstraintType = createAnonymousType(/*symbol*/ undefined, emptySymbols, emptyArray, emptyArray, emptyArray);
    var circularConstraintType = createAnonymousType(/*symbol*/ undefined, emptySymbols, emptyArray, emptyArray, emptyArray);
    var resolvingDefaultType = createAnonymousType(/*symbol*/ undefined, emptySymbols, emptyArray, emptyArray, emptyArray);

    var markerSuperType = createTypeParameter();
    var markerSubType = createTypeParameter();
    markerSubType.constraint = markerSuperType;
    var markerOtherType = createTypeParameter();

    var markerSuperTypeForCheck = createTypeParameter();
    var markerSubTypeForCheck = createTypeParameter();
    markerSubTypeForCheck.constraint = markerSuperTypeForCheck;

    var noTypePredicate = createTypePredicate(TypePredicateKind.Identifier, "<<unresolved>>", 0, anyType);

    var anySignature = createSignature(/*declaration*/ undefined, /*typeParameters*/ undefined, /*thisParameter*/ undefined, emptyArray, anyType, /*resolvedTypePredicate*/ undefined, 0, SignatureFlags.None);
    var unknownSignature = createSignature(/*declaration*/ undefined, /*typeParameters*/ undefined, /*thisParameter*/ undefined, emptyArray, errorType, /*resolvedTypePredicate*/ undefined, 0, SignatureFlags.None);
    var resolvingSignature = createSignature(/*declaration*/ undefined, /*typeParameters*/ undefined, /*thisParameter*/ undefined, emptyArray, anyType, /*resolvedTypePredicate*/ undefined, 0, SignatureFlags.None);
    var silentNeverSignature = createSignature(/*declaration*/ undefined, /*typeParameters*/ undefined, /*thisParameter*/ undefined, emptyArray, silentNeverType, /*resolvedTypePredicate*/ undefined, 0, SignatureFlags.None);

    var enumNumberIndexInfo = createIndexInfo(numberType, stringType, /*isReadonly*/ true);

    //

    function createTypeofType() {
        return getUnionType(arrayFrom(typeofNEFacts.keys(), getStringLiteralType));
    }

    function createObjectType(objectFlags: ObjectFlags, symbol?: Symbol): ObjectType {
        const type = createTypeWithSymbol(TypeFlags.Object, symbol!) as ObjectType;
        type.objectFlags = objectFlags;
        type.members = undefined;
        type.properties = undefined;
        type.callSignatures = undefined;
        type.constructSignatures = undefined;
        type.indexInfos = undefined;
        return type;
    }

    // A reserved member name starts with two underscores, but the third character cannot be an underscore,
    // @, or #. A third underscore indicates an escaped form of an identifier that started
    // with at least two underscores. The @ character indicates that the name is denoted by a well known ES
    // Symbol instance and the # character indicates that the name is a PrivateIdentifier.
    function isReservedMemberName(name: __String) {
        return (name as string).charCodeAt(0) === CharacterCodes._ &&
            (name as string).charCodeAt(1) === CharacterCodes._ &&
            (name as string).charCodeAt(2) !== CharacterCodes._ &&
            (name as string).charCodeAt(2) !== CharacterCodes.at &&
            (name as string).charCodeAt(2) !== CharacterCodes.hash;
    }

    function setStructuredTypeMembers(
        type: StructuredType,
        members: SymbolTable | ImmutableJs.Map<__String, Symbol>,
        callSignatures: readonly Signature[],
        constructSignatures: readonly Signature[],
        indexInfos: readonly IndexInfo[],
    ): ResolvedType
    {
        const resolved = type as ResolvedType;
        if (members instanceof Map ) {
            resolved.members = members;
        } else {
            for (const [k, v] of members ) {
                resolved.members.set(k, v) ;
            }
        }
        resolved.properties = emptyArray;
        resolved.callSignatures = callSignatures;
        resolved.constructSignatures = constructSignatures;
        resolved.indexInfos = indexInfos;
        // This can loop back to getPropertyOfType() which would crash if `callSignatures` & `constructSignatures` are not initialized.
        if (members !== emptySymbols) resolved.properties = getNamedMembers(members);
        return resolved;
    }

    function createUnnamedShallowStructuralType(symbol: Symbol | undefined, members: SymbolTable | ImmutableJs.Map<__String, Symbol>, callSignatures: readonly Signature[], constructSignatures: readonly Signature[], indexInfos: readonly IndexInfo[]): ResolvedType {
        return setStructuredTypeMembers(createObjectType(ObjectFlags.Anonymous, symbol), members, callSignatures, constructSignatures, indexInfos);
    }

    ;

    ;

    var subtypeReductionCache = new Map<string, Type[]>();
    ;

    const {
        //
        getUnionTypeFromSortedList ,

        unionTypes ,
        unionOfUnionTypes ,
        intersectionTypes ,
    } = (
        allocateCoreCombinedTypesAllocator(ctx, acatCore)
    ) ;

    // We sort and deduplicate the constituent types based on object identity. If the subtypeReduction
    // flag is specified we also reduce the constituent type set to only include types that aren't subtypes
    // of other types. Subtype reduction is expensive for large union types and is possible only when union
    // types are known not to circularly reference themselves (as is the case with union types created by
    // expression constructs such as array literals and the || and ?: operators). Named types can
    // circularly reference themselves and therefore cannot be subtype reduced during their declaration.
    // For example, "type Item = string | (() => Item" is a named type that circularly references itself.
    function getUnionType(types: readonly Type[], unionReduction: UnionReduction = UnionReduction.Literal, aliasSymbol?: Symbol, aliasTypeArguments?: readonly Type[], origin?: Type): Type {
        if (types.length === 0) {
            return neverType;
        }
        if (types.length === 1) {
            return types[0];
        }
        // We optimize for the common case of unioning a union type with some other type (such as `undefined`).
        if (types.length === 2 && !origin && (types[0].flags & TypeFlags.Union || types[1].flags & TypeFlags.Union)) {
            const infix = unionReduction === UnionReduction.None ? "N" : unionReduction === UnionReduction.Subtype ? "S" : "L";
            const index = types[0].id < types[1].id ? 0 : 1;
            const id = types[index].id + infix + types[1 - index].id + getAliasId(aliasSymbol, aliasTypeArguments);
            let type = unionOfUnionTypes.get(id);
            if (!type) {
                type = getUnionTypeWorker(types, unionReduction, aliasSymbol, aliasTypeArguments, /*origin*/ undefined);
                unionOfUnionTypes.set(id, type);
            }
            return type;
        }
        return getUnionTypeWorker(types, unionReduction, aliasSymbol, aliasTypeArguments, origin);
    }

    //#region typeCombinationsReductionsAndRelationship 
    ;

    function eachTypeContainedIn(source: Type, types: Type[]) {
        return source.flags & TypeFlags.Union ? !forEach((source as UnionType).types, t => !contains(types, t)) : contains(types, source);
    }

    function isTypeSubsetOf(source: Type, target: Type) {
        return !!(source === target || source.flags & TypeFlags.Never || target.flags & TypeFlags.Union && isTypeSubsetOfUnion(source, target as UnionType));
    }

    function isTypeSubsetOfUnion(source: Type, target: UnionType) {
        if (source.flags & TypeFlags.Union) {
            for (const t of (source as UnionType).types) {
                if (!containsType(target.types, t)) {
                    return false;
                }
            }
            return true;
        }
        if (source.flags & TypeFlags.EnumLike && getBaseTypeOfEnumLikeType(source as LiteralType) === target) {
            return true;
        }
        return containsType(target.types, source);
    }

    function forEachType<T>(type: Type, f: (t: Type) => T | undefined): T | undefined {
        return type.flags & TypeFlags.Union ? forEach((type as UnionType).types, f) : f(type);
    }

    function someType(type: Type, f: (t: Type) => boolean): boolean {
        return type.flags & TypeFlags.Union ? some((type as UnionType).types, f) : f(type);
    }

    function everyType(type: Type, f: (t: Type) => boolean): boolean {
        return type.flags & TypeFlags.Union ? every((type as UnionType).types, f) : f(type);
    }

    function everyContainedType(type: Type, f: (t: Type) => boolean): boolean {
        return type.flags & TypeFlags.UnionOrIntersection ? every((type as UnionOrIntersectionType).types, f) : f(type);
    }

    function filterType(type: Type, f: (t: Type) => boolean): Type {
        if (type.flags & TypeFlags.Union) {
            const types = (type as UnionType).types;
            const filtered = filter(types, f);
            if (filtered === types) {
                return type;
            }
            const origin = (type as UnionType).origin;
            let newOrigin: Type | undefined;
            if (origin && origin.flags & TypeFlags.Union) {
                // If the origin type is a (denormalized) union type, filter its non-union constituents. If that ends
                // up removing a smaller number of types than in the normalized constituent set (meaning some of the
                // filtered types are within nested unions in the origin), then we can't construct a new origin type.
                // Otherwise, if we have exactly one type left in the origin set, return that as the filtered type.
                // Otherwise, construct a new filtered origin type.
                const originTypes = (origin as UnionType).types;
                const originFiltered = filter(originTypes, t => !!(t.flags & TypeFlags.Union) || f(t));
                if (originTypes.length - originFiltered.length === types.length - filtered.length) {
                    if (originFiltered.length === 1) {
                        return originFiltered[0];
                    }
                    newOrigin = createOriginUnionOrIntersectionType(TypeFlags.Union, originFiltered);
                }
            }
            // filtering could remove intersections so `ContainsIntersections` might be forwarded "incorrectly"
            // it is purely an optimization hint so there is no harm in accidentally forwarding it
            return getUnionTypeFromSortedList(filtered, (type as UnionType).objectFlags & (ObjectFlags.PrimitiveUnion | ObjectFlags.ContainsIntersections), /*aliasSymbol*/ undefined, /*aliasTypeArguments*/ undefined, newOrigin);
        }
        return type.flags & TypeFlags.Never || f(type) ? type : neverType;
    }

    function removeType(type: Type, targetType: Type) {
        return filterType(type, t => t !== targetType);
    }

    function countTypes(type: Type) {
        return type.flags & TypeFlags.Union ? (type as UnionType).types.length : 1;
    }

    // Apply a mapping function to a type and return the resulting type. If the source type
    // is a union type, the mapping function is applied to each constituent type and a union
    // of the resulting types is returned.
    function mapType(type: Type, mapper: (t: Type) => Type, noReductions?: boolean): Type;
    function mapType(type: Type, mapper: (t: Type) => Type | undefined, noReductions?: boolean): Type | undefined;
    function mapType(type: Type, mapper: (t: Type) => Type | undefined, noReductions?: boolean): Type | undefined {
        if (type.flags & TypeFlags.Never) {
            return type;
        }
        if (!(type.flags & TypeFlags.Union)) {
            return mapper(type);
        }
        const origin = (type as UnionType).origin;
        const types = origin && origin.flags & TypeFlags.Union ? (origin as UnionType).types : (type as UnionType).types;
        let mappedTypes: Type[] | undefined;
        let changed = false;
        for (const t of types) {
            const mapped = t.flags & TypeFlags.Union ? mapType(t, mapper, noReductions) : mapper(t);
            changed ||= t !== mapped;
            if (mapped) {
                if (!mappedTypes) {
                    mappedTypes = [mapped];
                }
                else {
                    mappedTypes.push(mapped);
                }
            }
        }
        return changed ? mappedTypes && getUnionType(mappedTypes, noReductions ? UnionReduction.None : UnionReduction.Literal) : type;
    }

    function mapTypeWithAlias(type: Type, mapper: (t: Type) => Type, aliasSymbol: Symbol | undefined, aliasTypeArguments: readonly Type[] | undefined) {
        return type.flags & TypeFlags.Union && aliasSymbol ?
            getUnionType(map((type as UnionType).types, mapper), UnionReduction.Literal, aliasSymbol, aliasTypeArguments) :
            mapType(type, mapper);
    }

    function extractTypesOfKind(type: Type, kind: TypeFlags) {
        return filterType(type, t => (t.flags & kind) !== 0);
    }

    // Return a new type in which occurrences of the string, number and bigint primitives and placeholder template
    // literal types in typeWithPrimitives have been replaced with occurrences of compatible and more specific types
    // from typeWithLiterals. This is essentially a limited form of intersection between the two types. We avoid a
    // true intersection because it is more costly and, when applied to union types, generates a large number of
    // types we don't actually care about.
    function replacePrimitivesWithLiterals(typeWithPrimitives: Type, typeWithLiterals: Type) {
        if (
            maybeTypeOfKind(typeWithPrimitives, TypeFlags.String | TypeFlags.TemplateLiteral | TypeFlags.Number | TypeFlags.BigInt) &&
            maybeTypeOfKind(typeWithLiterals, TypeFlags.StringLiteral | TypeFlags.TemplateLiteral | TypeFlags.StringMapping | TypeFlags.NumberLiteral | TypeFlags.BigIntLiteral)
        ) {
            return mapType(typeWithPrimitives, t =>
                t.flags & TypeFlags.String ? extractTypesOfKind(typeWithLiterals, TypeFlags.String | TypeFlags.StringLiteral | TypeFlags.TemplateLiteral | TypeFlags.StringMapping) :
                    isPatternLiteralType(t) && !maybeTypeOfKind(typeWithLiterals, TypeFlags.String | TypeFlags.TemplateLiteral | TypeFlags.StringMapping) ? extractTypesOfKind(typeWithLiterals, TypeFlags.StringLiteral) :
                    t.flags & TypeFlags.Number ? extractTypesOfKind(typeWithLiterals, TypeFlags.Number | TypeFlags.NumberLiteral) :
                    t.flags & TypeFlags.BigInt ? extractTypesOfKind(typeWithLiterals, TypeFlags.BigInt | TypeFlags.BigIntLiteral) : t);
        }
        return typeWithPrimitives;
    }

    function containsType(types: readonly Type[], type: Type): boolean {
        return binarySearch(types, type, getTypeId, compareValues) >= 0;
    }

    function insertType(types: Type[], type: Type): boolean {
        const index = binarySearch(types, type, getTypeId, compareValues);
        if (index < 0) {
            types.splice(~index, 0, type);
            return true;
        }
        return false;
    }

    function addTypeToUnion(typeSet: Type[], includes: TypeFlags, type: Type) {
        const flags = type.flags;
        // We ignore 'never' types in unions
        if (!(flags & TypeFlags.Never)) {
            includes |= flags & TypeFlags.IncludesMask;
            if (flags & TypeFlags.Instantiable) includes |= TypeFlags.IncludesInstantiable;
            if (flags & TypeFlags.Intersection && getObjectFlags(type) & ObjectFlags.IsConstrainedTypeVariable) includes |= TypeFlags.IncludesConstrainedTypeVariable;
            if (type === wildcardType) includes |= TypeFlags.IncludesWildcard;
            if (isErrorType(type)) includes |= TypeFlags.IncludesError;
            if (!strictNullChecks && flags & TypeFlags.Nullable) {
                if (!(getObjectFlags(type) & ObjectFlags.ContainsWideningType)) includes |= TypeFlags.IncludesNonWideningType;
            }
            else {
                const len = typeSet.length;
                const index = len && type.id > typeSet[len - 1].id ? ~len : binarySearch(typeSet, type, getTypeId, compareValues);
                if (index < 0) {
                    typeSet.splice(~index, 0, type);
                }
            }
        }
        return includes;
    }

    // Add the given types to the given type set. Order is preserved, duplicates are removed,
    // and nested types of the given kind are flattened into the set.
    function addTypesToUnion(typeSet: Type[], includes: TypeFlags, types: readonly Type[]): TypeFlags {
        let lastType: Type | undefined;
        for (const type of types) {
            // We skip the type if it is the same as the last type we processed. This simple test particularly
            // saves a lot of work for large lists of the same union type, such as when resolving `Record<A, B>[A]`,
            // where A and B are large union types.
            if (type !== lastType) {
                includes = type.flags & TypeFlags.Union ?
                    addTypesToUnion(typeSet, includes | (isNamedUnionType(type) ? TypeFlags.Union : 0), (type as UnionType).types) :
                    addTypeToUnion(typeSet, includes, type);
                lastType = type;
            }
        }
        return includes;
    }

    function removeSubtypes(types: Type[], hasObjectTypes: boolean): Type[] | undefined {
        // [] and [T] immediately reduce to [] and [T] respectively
        if (types.length < 2) {
            return types;
        }

        const id = getTypeListId(types);
        const match = subtypeReductionCache.get(id);
        if (match) {
            return match;
        }

        // We assume that redundant primitive types have already been removed from the types array and that there
        // are no any and unknown types in the array. Thus, the only possible supertypes for primitive types are empty
        // object types, and if none of those are present we can exclude primitive types from the subtype check.
        const hasEmptyObject = hasObjectTypes && some(types, t => !!(t.flags & TypeFlags.Object) && !isGenericMappedType(t) && isEmptyResolvedType(resolveStructuredTypeMembers(t as ObjectType)));
        const len = types.length;
        let i = len;
        let count = 0;
        while (i > 0) {
            i--;
            const source = types[i];
            if (hasEmptyObject || source.flags & TypeFlags.StructuredOrInstantiable) {
                // A type parameter with a union constraint may be a subtype of some union, but not a subtype of the
                // individual constituents of that union. For example, `T extends A | B` is a subtype of `A | B`, but not
                // a subtype of just `A` or just `B`. When we encounter such a type parameter, we therefore check if the
                // type parameter is a subtype of a union of all the other types.
                if (source.flags & TypeFlags.TypeParameter && getBaseConstraintOrType(source).flags & TypeFlags.Union) {
                    if (isTypeRelatedTo(source, getUnionType(map(types, t => t === source ? neverType : t)), strictSubtypeRelation)) {
                        orderedRemoveItemAt(types, i);
                    }
                    continue;
                }
                // Find the first property with a unit type, if any. When constituents have a property by the same name
                // but of a different unit type, we can quickly disqualify them from subtype checks. This helps subtype
                // reduction of large discriminated union types.
                const keyProperty = source.flags & (TypeFlags.Object | TypeFlags.Intersection | TypeFlags.InstantiableNonPrimitive) ?
                    find(getPropertiesOfType(source), p => isUnitType(getTypeOfSymbol(p, null ))) :
                    undefined;
                const keyPropertyType = keyProperty && getRegularTypeOfLiteralType(getTypeOfSymbol(keyProperty, null ));
                for (const target of types) {
                    if (source !== target) {
                        if (count === 100000) {
                            // After 100000 subtype checks we estimate the remaining amount of work by assuming the
                            // same ratio of checks per element. If the estimated number of remaining type checks is
                            // greater than 1M we deem the union type too complex to represent. This for example
                            // caps union types at 1000 unique object types.
                            const estimatedCount = (count / (len - i)) * len;
                            if (estimatedCount > 1000000) {
                                tracing?.instant(tracing.Phase.CheckTypes, "removeSubtypes_DepthLimit", { typeIds: types.map(t => t.id) });
                                error(currentNode, Diagnostics.Expression_produces_a_union_type_that_is_too_complex_to_represent);
                                return undefined;
                            }
                        }
                        count++;
                        if (keyProperty && target.flags & (TypeFlags.Object | TypeFlags.Intersection | TypeFlags.InstantiableNonPrimitive)) {
                            const t = getTypeOfPropertyOfType(target, keyProperty.escapedName);
                            if (t && isUnitType(t) && getRegularTypeOfLiteralType(t) !== keyPropertyType) {
                                continue;
                            }
                        }
                        if (
                            isTypeRelatedTo(source, target, strictSubtypeRelation) && (
                                !(getObjectFlags(getTargetType(source)) & ObjectFlags.Class) ||
                                !(getObjectFlags(getTargetType(target)) & ObjectFlags.Class) ||
                                isTypeDerivedFrom(source, target)
                            )
                        ) {
                            orderedRemoveItemAt(types, i);
                            break;
                        }
                    }
                }
            }
        }
        subtypeReductionCache.set(id, types);
        return types;
    }

    function removeRedundantLiteralTypes(types: Type[], includes: TypeFlags, reduceVoidUndefined: boolean) {
        let i = types.length;
        while (i > 0) {
            i--;
            const t = types[i];
            const flags = t.flags;
            const remove = flags & (TypeFlags.StringLiteral | TypeFlags.TemplateLiteral | TypeFlags.StringMapping) && includes & TypeFlags.String ||
                flags & TypeFlags.NumberLiteral && includes & TypeFlags.Number ||
                flags & TypeFlags.BigIntLiteral && includes & TypeFlags.BigInt ||
                flags & TypeFlags.UniqueESSymbol && includes & TypeFlags.ESSymbol ||
                reduceVoidUndefined && flags & TypeFlags.Undefined && includes & TypeFlags.Void ||
                isFreshLiteralType(t) && containsType(types, (t as LiteralType).regularType);
            if (remove) {
                orderedRemoveItemAt(types, i);
            }
        }
    }

    function removeStringLiteralsMatchedByTemplateLiterals(types: Type[]) {
        const templates = filter(types, isPatternLiteralType) as (TemplateLiteralType | StringMappingType)[];
        if (templates.length) {
            let i = types.length;
            while (i > 0) {
                i--;
                const t = types[i];
                if (t.flags & TypeFlags.StringLiteral && some(templates, template => isTypeMatchedByTemplateLiteralOrStringMapping(t, template))) {
                    orderedRemoveItemAt(types, i);
                }
            }
        }
    }

    function isTypeMatchedByTemplateLiteralOrStringMapping(type: Type, template: TemplateLiteralType | StringMappingType) {
        return template.flags & TypeFlags.TemplateLiteral ?
            isTypeMatchedByTemplateLiteralType(type, template as TemplateLiteralType) :
            isMemberOfStringMapping(type, template);
    }

    function removeConstrainedTypeVariables(types: Type[]) {
        const typeVariables: TypeVariable[] = [];
        // First collect a list of the type variables occurring in constraining intersections.
        for (const type of types) {
            if (type.flags & TypeFlags.Intersection && getObjectFlags(type) & ObjectFlags.IsConstrainedTypeVariable) {
                const index = (type as IntersectionType).types[0].flags & TypeFlags.TypeVariable ? 0 : 1;
                pushIfUnique(typeVariables, (type as IntersectionType).types[index]);
            }
        }
        // For each type variable, check if the constraining intersections for that type variable fully
        // cover the constraint of the type variable; if so, remove the constraining intersections and
        // substitute the type variable.
        for (const typeVariable of typeVariables) {
            const primitives: Type[] = [];
            // First collect the primitive types from the constraining intersections.
            for (const type of types) {
                if (type.flags & TypeFlags.Intersection && getObjectFlags(type) & ObjectFlags.IsConstrainedTypeVariable) {
                    const index = (type as IntersectionType).types[0].flags & TypeFlags.TypeVariable ? 0 : 1;
                    if ((type as IntersectionType).types[index] === typeVariable) {
                        insertType(primitives, (type as IntersectionType).types[1 - index]);
                    }
                }
            }
            // If every constituent in the type variable's constraint is covered by an intersection of the type
            // variable and that constituent, remove those intersections and substitute the type variable.
            const constraint = getBaseConstraintOfType(typeVariable)!;
            if (everyType(constraint, t => containsType(primitives, t))) {
                let i = types.length;
                while (i > 0) {
                    i--;
                    const type = types[i];
                    if (type.flags & TypeFlags.Intersection && getObjectFlags(type) & ObjectFlags.IsConstrainedTypeVariable) {
                        const index = (type as IntersectionType).types[0].flags & TypeFlags.TypeVariable ? 0 : 1;
                        if ((type as IntersectionType).types[index] === typeVariable && containsType(primitives, (type as IntersectionType).types[1 - index])) {
                            orderedRemoveItemAt(types, i);
                        }
                    }
                }
                insertType(types, typeVariable);
            }
        }
    }

    function isNamedUnionType(type: Type) {
        return !!(type.flags & TypeFlags.Union && (type.aliasSymbol || (type as UnionType).origin));
    }

    function addNamedUnions(namedUnions: Type[], types: readonly Type[]) {
        for (const t of types) {
            if (t.flags & TypeFlags.Union) {
                const origin = (t as UnionType).origin;
                if (t.aliasSymbol || origin && !(origin.flags & TypeFlags.Union)) {
                    pushIfUnique(namedUnions, t);
                }
                else if (origin && origin.flags & TypeFlags.Union) {
                    addNamedUnions(namedUnions, (origin as UnionType).types);
                }
            }
        }
    }

    function createOriginUnionOrIntersectionType(flags: TypeFlags, types: Type[]) {
        const result = createOriginType(flags) as UnionOrIntersectionType;
        result.types = types;
        return result;
    }

    function getUnionTypeWorker(types: readonly Type[], unionReduction: UnionReduction, aliasSymbol: Symbol | undefined, aliasTypeArguments: readonly Type[] | undefined, origin: Type | undefined): Type {
        let typeSet: Type[] | undefined = [];
        const includes = addTypesToUnion(typeSet, 0 as TypeFlags, types);
        if (unionReduction !== UnionReduction.None) {
            if (includes & TypeFlags.AnyOrUnknown) {
                return includes & TypeFlags.Any ?
                    includes & TypeFlags.IncludesWildcard ? wildcardType :
                        includes & TypeFlags.IncludesError ? errorType : anyType :
                    unknownType;
            }
            if (includes & TypeFlags.Undefined) {
                // If type set contains both undefinedType and missingType, remove missingType
                if (typeSet.length >= 2 && typeSet[0] === undefinedType && typeSet[1] === missingType) {
                    orderedRemoveItemAt(typeSet, 1);
                }
            }
            if (includes & (TypeFlags.Enum | TypeFlags.Literal | TypeFlags.UniqueESSymbol | TypeFlags.TemplateLiteral | TypeFlags.StringMapping) || includes & TypeFlags.Void && includes & TypeFlags.Undefined) {
                removeRedundantLiteralTypes(typeSet, includes, !!(unionReduction & UnionReduction.Subtype));
            }
            if (includes & TypeFlags.StringLiteral && includes & (TypeFlags.TemplateLiteral | TypeFlags.StringMapping)) {
                removeStringLiteralsMatchedByTemplateLiterals(typeSet);
            }
            if (includes & TypeFlags.IncludesConstrainedTypeVariable) {
                removeConstrainedTypeVariables(typeSet);
            }
            if (unionReduction === UnionReduction.Subtype) {
                typeSet = removeSubtypes(typeSet, !!(includes & TypeFlags.Object));
                if (!typeSet) {
                    return errorType;
                }
            }
            if (typeSet.length === 0) {
                return includes & TypeFlags.Null ? includes & TypeFlags.IncludesNonWideningType ? nullType : nullWideningType :
                    includes & TypeFlags.Undefined ? includes & TypeFlags.IncludesNonWideningType ? undefinedType : undefinedWideningType :
                    neverType;
            }
        }
        if (!origin && includes & TypeFlags.Union) {
            const namedUnions: Type[] = [];
            addNamedUnions(namedUnions, types);
            const reducedTypes: Type[] = [];
            for (const t of typeSet) {
                if (!some(namedUnions, union => containsType((union as UnionType).types, t))) {
                    reducedTypes.push(t);
                }
            }
            if (!aliasSymbol && namedUnions.length === 1 && reducedTypes.length === 0) {
                return namedUnions[0];
            }
            // We create a denormalized origin type only when the union was created from one or more named unions
            // (unions with alias symbols or origins) and when there is no overlap between those named unions.
            const namedTypesCount = reduceLeft(namedUnions, (sum, union) => sum + (union as UnionType).types.length, 0);
            if (namedTypesCount + reducedTypes.length === typeSet.length) {
                for (const t of namedUnions) {
                    insertType(reducedTypes, t);
                }
                origin = createOriginUnionOrIntersectionType(TypeFlags.Union, reducedTypes);
            }
        }
        const objectFlags = (includes & TypeFlags.NotPrimitiveUnion ? 0 : ObjectFlags.PrimitiveUnion) |
            (includes & TypeFlags.Intersection ? ObjectFlags.ContainsIntersections : 0);
        return getUnionTypeFromSortedList(typeSet, objectFlags, aliasSymbol, aliasTypeArguments, origin);
    }

    function getUnionOrIntersectionTypePredicate(signatures: readonly Signature[], kind: TypeFlags | undefined): TypePredicate | undefined {
        let last: TypePredicate | undefined;
        const types: Type[] = [];
        for (const sig of signatures) {
            const pred = getTypePredicateOfSignature(sig);
            if (pred) {
                // Constituent type predicates must all have matching kinds. We don't create composite type predicates for assertions.
                if (pred.kind !== TypePredicateKind.This && pred.kind !== TypePredicateKind.Identifier || last && !typePredicateKindsMatch(last, pred)) {
                    return undefined;
                }
                last = pred;
                types.push(pred.type);
            }
            else {
                // In composite union signatures we permit and ignore signatures with a return type `false`.
                const returnType = kind !== TypeFlags.Intersection ? getReturnTypeOfSignature(sig) : undefined;
                if (returnType !== falseType && returnType !== regularFalseType) {
                    return undefined;
                }
            }
        }
        if (!last) {
            return undefined;
        }
        const compositeType = getUnionOrIntersectionType(types, kind);
        return createTypePredicate(last.kind, last.parameterName, last.parameterIndex, compositeType);
    }

    function typePredicateKindsMatch(a: TypePredicate, b: TypePredicate): boolean {
        return a.kind === b.kind && a.parameterIndex === b.parameterIndex;
    }

    function addTypeToIntersection(typeSet: Map<string, Type>, includes: TypeFlags, type: Type) {
        const flags = type.flags;
        if (flags & TypeFlags.Intersection) {
            return addTypesToIntersection(typeSet, includes, (type as IntersectionType).types);
        }
        if (isEmptyAnonymousObjectType(type)) {
            if (!(includes & TypeFlags.IncludesEmptyObject)) {
                includes |= TypeFlags.IncludesEmptyObject;
                typeSet.set(type.id.toString(), type);
            }
        }
        else {
            if (flags & TypeFlags.AnyOrUnknown) {
                if (type === wildcardType) includes |= TypeFlags.IncludesWildcard;
                if (isErrorType(type)) includes |= TypeFlags.IncludesError;
            }
            else if (strictNullChecks || !(flags & TypeFlags.Nullable)) {
                if (type === missingType) {
                    includes |= TypeFlags.IncludesMissingType;
                    type = undefinedType;
                }
                if (!typeSet.has(type.id.toString())) {
                    if (type.flags & TypeFlags.Unit && includes & TypeFlags.Unit) {
                        // We have seen two distinct unit types which means we should reduce to an
                        // empty intersection. Adding TypeFlags.NonPrimitive causes that to happen.
                        includes |= TypeFlags.NonPrimitive;
                    }
                    typeSet.set(type.id.toString(), type);
                }
            }
            includes |= flags & TypeFlags.IncludesMask;
        }
        return includes;
    }

    // Add the given types to the given type set. Order is preserved, freshness is removed from literal
    // types, duplicates are removed, and nested types of the given kind are flattened into the set.
    function addTypesToIntersection(typeSet: Map<string, Type>, includes: TypeFlags, types: readonly Type[]) {
        for (const type of types) {
            includes = addTypeToIntersection(typeSet, includes, getRegularTypeOfLiteralType(type));
        }
        return includes;
    }

    function removeRedundantSupertypes(types: Type[], includes: TypeFlags) {
        let i = types.length;
        while (i > 0) {
            i--;
            const t = types[i];
            const remove = t.flags & TypeFlags.String && includes & (TypeFlags.StringLiteral | TypeFlags.TemplateLiteral | TypeFlags.StringMapping) ||
                t.flags & TypeFlags.Number && includes & TypeFlags.NumberLiteral ||
                t.flags & TypeFlags.BigInt && includes & TypeFlags.BigIntLiteral ||
                t.flags & TypeFlags.ESSymbol && includes & TypeFlags.UniqueESSymbol ||
                t.flags & TypeFlags.Void && includes & TypeFlags.Undefined ||
                isEmptyAnonymousObjectType(t) && includes & TypeFlags.DefinitelyNonNullable;
            if (remove) {
                orderedRemoveItemAt(types, i);
            }
        }
    }

    // Check that the given type has a match in every union. A given type is matched by
    // an identical type, and a literal type is additionally matched by its corresponding
    // primitive type, and missingType is matched by undefinedType (and vice versa).
    function eachUnionContains(unionTypes: UnionType[], type: Type) {
        for (const u of unionTypes) {
            if (!containsType(u.types, type)) {
                if (type === missingType) {
                    return containsType(u.types, undefinedType);
                }
                if (type === undefinedType) {
                    return containsType(u.types, missingType);
                }
                const primitive = type.flags & TypeFlags.StringLiteral ? stringType :
                    type.flags & (TypeFlags.Enum | TypeFlags.NumberLiteral) ? numberType :
                    type.flags & TypeFlags.BigIntLiteral ? bigintType :
                    type.flags & TypeFlags.UniqueESSymbol ? esSymbolType :
                    undefined;
                if (!primitive || !containsType(u.types, primitive)) {
                    return false;
                }
            }
        }
        return true;
    }

    /**
     * Returns true if the intersection of the template literals and string literals is the empty set,
     * for example `get${string}` & "setX", and should reduce to never.
     */
    function extractRedundantTemplateLiterals(types: Type[]): boolean {
        let i = types.length;
        const literals = filter(types, t => !!(t.flags & TypeFlags.StringLiteral));
        while (i > 0) {
            i--;
            const t = types[i];
            if (!(t.flags & (TypeFlags.TemplateLiteral | TypeFlags.StringMapping))) continue;
            for (const t2 of literals) {
                if (isTypeSubtypeOf(t2, t)) {
                    // For example, `get${T}` & "getX" is just "getX", and Lowercase<string> & "foo" is just "foo"
                    orderedRemoveItemAt(types, i);
                    break;
                }
                else if (isPatternLiteralType(t)) {
                    return true;
                }
            }
        }
        return false;
    }

    function removeFromEach(types: Type[], flag: TypeFlags) {
        for (let i = 0; i < types.length; i++) {
            types[i] = filterType(types[i], t => !(t.flags & flag));
        }
    }

    // If the given list of types contains more than one union of primitive types, replace the
    // first with a union containing an intersection of those primitive types, then remove the
    // other unions and return true. Otherwise, do nothing and return false.
    function intersectUnionsOfPrimitiveTypes(types: Type[]) {
        let unionTypes: UnionType[] | undefined;
        const index = findIndex(types, t => !!(getObjectFlags(t) & ObjectFlags.PrimitiveUnion));
        if (index < 0) {
            return false;
        }
        let i = index + 1;
        // Remove all but the first union of primitive types and collect them in
        // the unionTypes array.
        while (i < types.length) {
            const t = types[i];
            if (getObjectFlags(t) & ObjectFlags.PrimitiveUnion) {
                (unionTypes || (unionTypes = [types[index] as UnionType])).push(t as UnionType);
                orderedRemoveItemAt(types, i);
            }
            else {
                i++;
            }
        }
        // Return false if there was only one union of primitive types
        if (!unionTypes) {
            return false;
        }
        // We have more than one union of primitive types, now intersect them. For each
        // type in each union we check if the type is matched in every union and if so
        // we include it in the result.
        const checked: Type[] = [];
        const result: Type[] = [];
        for (const u of unionTypes) {
            for (const t of u.types) {
                if (insertType(checked, t)) {
                    if (eachUnionContains(unionTypes, t)) {
                        // undefinedType/missingType should always come sorted first so we leverage that here
                        if (t === undefinedType && result.length && result[0] === missingType) {
                            continue;
                        }
                        if (t === missingType && result.length && result[0] === undefinedType) {
                            result[0] = missingType;
                            continue;
                        }
                        insertType(result, t);
                    }
                }
            }
        }
        // Finally replace the first union with the result
        types[index] = getUnionTypeFromSortedList(result, ObjectFlags.PrimitiveUnion);
        return true;
    }

    function createIntersectionType(types: Type[], objectFlags: ObjectFlags, aliasSymbol?: Symbol, aliasTypeArguments?: readonly Type[]) {
        const result = createType(TypeFlags.Intersection) as IntersectionType;
        result.objectFlags = objectFlags | getPropagatingFlagsOfTypes(types, /*excludeKinds*/ TypeFlags.Nullable);
        result.types = types;
        result.aliasSymbol = aliasSymbol;
        result.aliasTypeArguments = aliasTypeArguments;
        return result;
    }

    // We normalize combinations of intersection and union types based on the distributive property of the '&'
    // operator. Specifically, because X & (A | B) is equivalent to X & A | X & B, we can transform intersection
    // types with union type constituents into equivalent union types with intersection type constituents and
    // effectively ensure that union types are always at the top level in type representations.
    //
    // We do not perform structural deduplication on intersection types. Intersection types are created only by the &
    // type operator and we can't reduce those because we want to support recursive intersection types. For example,
    // a type alias of the form "type List<T> = T & { next: List<T> }" cannot be reduced during its declaration.
    // Also, unlike union types, the order of the constituent types is preserved in order that overload resolution
    // for intersections of types with signatures can be deterministic.
    function getIntersectionType(types: readonly Type[], flags = IntersectionFlags.None, aliasSymbol?: Symbol, aliasTypeArguments?: readonly Type[]): Type {
        const typeMembershipMap = new Map<string, Type>();
        const includes = addTypesToIntersection(typeMembershipMap, 0 as TypeFlags, types);
        const typeSet: Type[] = arrayFrom(typeMembershipMap.values());
        let objectFlags = ObjectFlags.None;
        // An intersection type is considered empty if it contains
        // the type never, or
        // more than one unit type or,
        // an object type and a nullable type (null or undefined), or
        // a string-like type and a type known to be non-string-like, or
        // a number-like type and a type known to be non-number-like, or
        // a symbol-like type and a type known to be non-symbol-like, or
        // a void-like type and a type known to be non-void-like, or
        // a non-primitive type and a type known to be primitive.
        if (includes & TypeFlags.Never) {
            return contains(typeSet, silentNeverType) ? silentNeverType : neverType;
        }
        if (
            strictNullChecks && includes & TypeFlags.Nullable && includes & (TypeFlags.Object | TypeFlags.NonPrimitive | TypeFlags.IncludesEmptyObject) ||
            includes & TypeFlags.NonPrimitive && includes & (TypeFlags.DisjointDomains & ~TypeFlags.NonPrimitive) ||
            includes & TypeFlags.StringLike && includes & (TypeFlags.DisjointDomains & ~TypeFlags.StringLike) ||
            includes & TypeFlags.NumberLike && includes & (TypeFlags.DisjointDomains & ~TypeFlags.NumberLike) ||
            includes & TypeFlags.BigIntLike && includes & (TypeFlags.DisjointDomains & ~TypeFlags.BigIntLike) ||
            includes & TypeFlags.ESSymbolLike && includes & (TypeFlags.DisjointDomains & ~TypeFlags.ESSymbolLike) ||
            includes & TypeFlags.VoidLike && includes & (TypeFlags.DisjointDomains & ~TypeFlags.VoidLike)
        ) {
            return neverType;
        }
        if (includes & (TypeFlags.TemplateLiteral | TypeFlags.StringMapping) && includes & TypeFlags.StringLiteral && extractRedundantTemplateLiterals(typeSet)) {
            return neverType;
        }
        if (includes & TypeFlags.Any) {
            return includes & TypeFlags.IncludesWildcard ? wildcardType : includes & TypeFlags.IncludesError ? errorType : anyType;
        }
        if (!strictNullChecks && includes & TypeFlags.Nullable) {
            return includes & TypeFlags.IncludesEmptyObject ? neverType : includes & TypeFlags.Undefined ? undefinedType : nullType;
        }
        if (
            includes & TypeFlags.String && includes & (TypeFlags.StringLiteral | TypeFlags.TemplateLiteral | TypeFlags.StringMapping) ||
            includes & TypeFlags.Number && includes & TypeFlags.NumberLiteral ||
            includes & TypeFlags.BigInt && includes & TypeFlags.BigIntLiteral ||
            includes & TypeFlags.ESSymbol && includes & TypeFlags.UniqueESSymbol ||
            includes & TypeFlags.Void && includes & TypeFlags.Undefined ||
            includes & TypeFlags.IncludesEmptyObject && includes & TypeFlags.DefinitelyNonNullable
        ) {
            if (!(flags & IntersectionFlags.NoSupertypeReduction)) removeRedundantSupertypes(typeSet, includes);
        }
        if (includes & TypeFlags.IncludesMissingType) {
            typeSet[typeSet.indexOf(undefinedType)] = missingType;
        }
        if (typeSet.length === 0) {
            return unknownType;
        }
        if (typeSet.length === 1) {
            return typeSet[0];
        }
        if (typeSet.length === 2 && !(flags & IntersectionFlags.NoConstraintReduction)) {
            const typeVarIndex = typeSet[0].flags & TypeFlags.TypeVariable ? 0 : 1;
            const typeVariable = typeSet[typeVarIndex];
            const primitiveType = typeSet[1 - typeVarIndex];
            if (
                typeVariable.flags & TypeFlags.TypeVariable &&
                (primitiveType.flags & (TypeFlags.Primitive | TypeFlags.NonPrimitive) && !isGenericStringLikeType(primitiveType) || includes & TypeFlags.IncludesEmptyObject)
            ) {
                // We have an intersection T & P or P & T, where T is a type variable and P is a primitive type, the object type, or {}.
                const constraint = getBaseConstraintOfType(typeVariable);
                // Check that T's constraint is similarly composed of primitive types, the object type, or {}.
                if (constraint && everyType(constraint, t => !!(t.flags & (TypeFlags.Primitive | TypeFlags.NonPrimitive)) || isEmptyAnonymousObjectType(t))) {
                    // If T's constraint is a subtype of P, simply return T. For example, given `T extends "a" | "b"`,
                    // the intersection `T & string` reduces to just T.
                    if (isTypeStrictSubtypeOf(constraint, primitiveType)) {
                        return typeVariable;
                    }
                    if (!(constraint.flags & TypeFlags.Union && someType(constraint, c => isTypeStrictSubtypeOf(c, primitiveType)))) {
                        // No constituent of T's constraint is a subtype of P. If P is also not a subtype of T's constraint,
                        // then the constraint and P are unrelated, and the intersection reduces to never. For example, given
                        // `T extends "a" | "b"`, the intersection `T & number` reduces to never.
                        if (!isTypeStrictSubtypeOf(primitiveType, constraint)) {
                            return neverType;
                        }
                    }
                    // Some constituent of T's constraint is a subtype of P, or P is a subtype of T's constraint. Thus,
                    // the intersection further constrains the type variable. For example, given `T extends string | number`,
                    // the intersection `T & "a"` is marked as a constrained type variable. Likewise, given `T extends "a" | 1`,
                    // the intersection `T & number` is marked as a constrained type variable.
                    objectFlags = ObjectFlags.IsConstrainedTypeVariable;
                }
            }
        }
        return getDeferredIntersectionType(typeSet, {
            flags,
            aliasSymbol,
            aliasTypeArguments,
            secondaryReduce: !!(includes & TypeFlags.Union),
            originalTypeArray: types ,
            objectFlags,
        }) ;
    }

    function getDeferredIntersectionType(...[typeSet, { flags, aliasSymbol, aliasTypeArguments, objectFlags, secondaryReduce , originalTypeArray: types, }] : (
        ArgsWithOptions<[Type[],  ] , (
            & {
                // types: readonly Type[],
                flags: IntersectionFlags,
                aliasSymbol?: Symbol,
                aliasTypeArguments?: readonly Type[],
            }
            & (
                | {
                    //
                    secondaryReduce : true ,
                    originalTypeArray : readonly Type[] ,
                    objectFlags?: never ,
                }
                | {
                    //
                    secondaryReduce ?: false ,
                    originalTypeArray ?: readonly Type[] ,
                    objectFlags: ObjectFlags ,
                }
            )
        )>
    ))
    {
        const id = getTypeListId(typeSet) + (flags & IntersectionFlags.NoConstraintReduction ? "*" : getAliasId(aliasSymbol, aliasTypeArguments));
        let result = intersectionTypes.get(id);
        if (!result) {
            if (secondaryReduce) {
                if (intersectUnionsOfPrimitiveTypes(typeSet)) {
                    // When the intersection creates a reduced set (which might mean that *all* union types have
                    // disappeared), we restart the operation to get a new set of combined flags. Once we have
                    // reduced we'll never reduce again, so this occurs at most once.
                    result = getIntersectionType(typeSet, flags, aliasSymbol, aliasTypeArguments);
                }
                else if (every(typeSet, t => !!(t.flags & TypeFlags.Union && (t as UnionType).types[0].flags & TypeFlags.Undefined))) {
                    const containedUndefinedType = some(typeSet, containsMissingType) ? missingType : undefinedType;
                    removeFromEach(typeSet, TypeFlags.Undefined);
                    result = getUnionType([getIntersectionType(typeSet, flags), containedUndefinedType], UnionReduction.Literal, aliasSymbol, aliasTypeArguments);
                }
                else if (every(typeSet, t => !!(t.flags & TypeFlags.Union && ((t as UnionType).types[0].flags & TypeFlags.Null || (t as UnionType).types[1].flags & TypeFlags.Null)))) {
                    removeFromEach(typeSet, TypeFlags.Null);
                    result = getUnionType([getIntersectionType(typeSet, flags), nullType], UnionReduction.Literal, aliasSymbol, aliasTypeArguments);
                }
                else if (typeSet.length >= 3 && types.length > 2) {
                    // When we have three or more constituents, more than two inputs (to head off infinite reexpansion), some of which are unions, we employ a "divide and conquer" strategy
                    // where A & B & C & D is processed as (A & B) & (C & D). Since intersections of unions often produce far smaller
                    // unions of intersections than the full cartesian product (due to some intersections becoming `never`), this can
                    // dramatically reduce the overall work.
                    const middle = Math.floor(typeSet.length / 2);
                    result = getIntersectionType([getIntersectionType(typeSet.slice(0, middle), flags), getIntersectionType(typeSet.slice(middle), flags)], flags, aliasSymbol, aliasTypeArguments);
                }
                else {
                    // We are attempting to construct a type of the form X & (A | B) & (C | D). Transform this into a type of
                    // the form X & A & C | X & A & D | X & B & C | X & B & D. If the estimated size of the resulting union type
                    // exceeds 100000 constituents, report an error.
                    if (!checkCrossProductUnion(typeSet)) {
                        return errorType;
                    }
                    const constituents = getCrossProductIntersections(typeSet, flags);
                    // We attach a denormalized origin type when at least one constituent of the cross-product union is an
                    // intersection (i.e. when the intersection didn't just reduce one or more unions to smaller unions) and
                    // the denormalized origin has fewer constituents than the union itself.
                    const origin = some(constituents, t => !!(t.flags & TypeFlags.Intersection)) && getConstituentCountOfTypes(constituents) > getConstituentCountOfTypes(typeSet) ? createOriginUnionOrIntersectionType(TypeFlags.Intersection, typeSet) : undefined;
                    result = getUnionType(constituents, UnionReduction.Literal, aliasSymbol, aliasTypeArguments, origin);
                }
            }
            else {
                result = createIntersectionType(typeSet, objectFlags, aliasSymbol, aliasTypeArguments);
            }
            intersectionTypes.set(id, result);
        }
        return result;
    }

    var subtypeRelation = new Map<string, RelationComparisonResult>();
    var strictSubtypeRelation = new Map<string, RelationComparisonResult>();
    var assignableRelation = new Map<string, RelationComparisonResult>();
    var comparableRelation = new Map<string, RelationComparisonResult>();
    var identityRelation = new Map<string, RelationComparisonResult>();
    var enumRelation = new Map<string, RelationComparisonResult>();

    function isTypeIdenticalTo(source: Type, target: Type): boolean {
        return isTypeRelatedTo(source, target, identityRelation);
    }

    function compareTypesIdentical(source: Type, target: Type): Ternary {
        return isTypeRelatedTo(source, target, identityRelation) ? Ternary.True : Ternary.False;
    }

    function compareTypesAssignable(source: Type, target: Type): Ternary {
        return isTypeRelatedTo(source, target, assignableRelation) ? Ternary.True : Ternary.False;
    }

    function compareTypesSubtypeOf(source: Type, target: Type): Ternary {
        return isTypeRelatedTo(source, target, subtypeRelation) ? Ternary.True : Ternary.False;
    }

    function isTypeSubtypeOf(source: Type, target: Type): boolean {
        return isTypeRelatedTo(source, target, subtypeRelation);
    }

    function isTypeStrictSubtypeOf(source: Type, target: Type): boolean {
        return isTypeRelatedTo(source, target, strictSubtypeRelation);
    }

    function isTypeAssignableTo(source: Type, target: Type): boolean {
        return isTypeRelatedTo(source, target, assignableRelation);
    }

    // An object type S is considered to be derived from an object type T if
    // S is a union type and every constituent of S is derived from T,
    // T is a union type and S is derived from at least one constituent of T, or
    // S is an intersection type and some constituent of S is derived from T, or
    // S is a type variable with a base constraint that is derived from T, or
    // T is {} and S is an object-like type (ensuring {} is less derived than Object), or
    // T is one of the global types Object and Function and S is a subtype of T, or
    // T occurs directly or indirectly in an 'extends' clause of S.
    // Note that this check ignores type parameters and only considers the
    // inheritance hierarchy.
    function isTypeDerivedFrom(source: Type, target: Type): boolean
    {}

    /**
     * This is *not* a bi-directional relationship.
     * If one needs to check both directions for comparability, use a second call to this function or 'checkTypeComparableTo'.
     *
     * A type S is comparable to a type T if some (but not necessarily all) of the possible values of S are also possible values of T.
     * It is used to check following cases:
     *   - the types of the left and right sides of equality/inequality operators (`===`, `!==`, `==`, `!=`).
     *   - the types of `case` clause expressions and their respective `switch` expressions.
     *   - the type of an expression in a type assertion with the type being asserted.
     */
    function isTypeComparableTo(source: Type, target: Type): boolean {
        return isTypeRelatedTo(source, target, comparableRelation);
    }

    function areTypesComparable(type1: Type, type2: Type): boolean {
        return isTypeComparableTo(type1, type2) || isTypeComparableTo(type2, type1);
    }

    function checkTypeAssignableTo(source: Type, target: Type, errorNode: Node | undefined, headMessage?: DiagnosticMessage, containingMessageChain?: () => DiagnosticMessageChain | undefined, errorOutputObject?: { errors?: Diagnostic[]; }): boolean {
        return checkTypeRelatedTo(source, target, assignableRelation, errorNode, headMessage, containingMessageChain, errorOutputObject);
    }

    ;

    function compareTypePredicateRelatedTo(
        source: TypePredicate,
        target: TypePredicate,
        reportErrors: boolean,
        errorReporter: ErrorReporter | undefined,
        compareTypes: (s: Type, t: Type, reportErrors?: boolean) => Ternary,
    ): Ternary {
        if (source.kind !== target.kind) {
            if (reportErrors) {
                errorReporter!(Diagnostics.A_this_based_type_guard_is_not_compatible_with_a_parameter_based_type_guard);
                errorReporter!(Diagnostics.Type_predicate_0_is_not_assignable_to_1, typePredicateToString(source), typePredicateToString(target));
            }
            return Ternary.False;
        }

        if (source.kind === TypePredicateKind.Identifier || source.kind === TypePredicateKind.AssertsIdentifier) {
            if (source.parameterIndex !== (target as IdentifierTypePredicate).parameterIndex) {
                if (reportErrors) {
                    errorReporter!(Diagnostics.Parameter_0_is_not_in_the_same_position_as_parameter_1, source.parameterName, (target as IdentifierTypePredicate).parameterName);
                    errorReporter!(Diagnostics.Type_predicate_0_is_not_assignable_to_1, typePredicateToString(source), typePredicateToString(target));
                }
                return Ternary.False;
            }
        }

        const related = source.type === target.type ? Ternary.True :
            source.type && target.type ? compareTypes(source.type, target.type, reportErrors) :
            Ternary.False;
        if (related === Ternary.False && reportErrors) {
            errorReporter!(Diagnostics.Type_predicate_0_is_not_assignable_to_1, typePredicateToString(source), typePredicateToString(target));
        }
        return related;
    }

    function isImplementationCompatibleWithOverload(implementation: Signature, overload: Signature): boolean {
        const erasedSource = getErasedSignature(implementation);
        const erasedTarget = getErasedSignature(overload);

        // First see if the return types are compatible in either direction.
        const sourceReturnType = getReturnTypeOfSignature(erasedSource);
        const targetReturnType = getReturnTypeOfSignature(erasedTarget);
        if (
            targetReturnType === voidType
            || isTypeRelatedTo(targetReturnType, sourceReturnType, assignableRelation)
            || isTypeRelatedTo(sourceReturnType, targetReturnType, assignableRelation)
        ) {
            return isSignatureAssignableTo(erasedSource, erasedTarget, /*ignoreReturnTypes*/ true);
        }

        return false;
    }

    function isEmptyResolvedType(t: ResolvedType) {
        return t !== anyFunctionType &&
            t.properties.length === 0 &&
            t.callSignatures.length === 0 &&
            t.constructSignatures.length === 0 &&
            t.indexInfos.length === 0;
    }

    function isEmptyObjectType(type: Type): boolean {
        return type.flags & TypeFlags.Object ? !isGenericMappedType(type) && isEmptyResolvedType(resolveStructuredTypeMembers(type as ObjectType)) :
            type.flags & TypeFlags.NonPrimitive ? true :
            type.flags & TypeFlags.Union ? some((type as UnionType).types, isEmptyObjectType) :
            type.flags & TypeFlags.Intersection ? every((type as UnionType).types, isEmptyObjectType) :
            false;
    }

    function isEmptyAnonymousObjectType(type: Type) {
        return !!(getObjectFlags(type) & ObjectFlags.Anonymous && (
            (type as ResolvedType).members && isEmptyResolvedType(type as ResolvedType) ||
            type.symbol && type.symbol.flags & SymbolFlags.TypeLiteral && getMembersOfSymbol(type.symbol).size === 0
        ));
    }

    function isUnknownLikeUnionType(type: Type) {
        if (strictNullChecks && type.flags & TypeFlags.Union) {
            if (!((type as UnionType).objectFlags & ObjectFlags.IsUnknownLikeUnionComputed)) {
                const types = (type as UnionType).types;
                (type as UnionType).objectFlags |= ObjectFlags.IsUnknownLikeUnionComputed | (types.length >= 3 && types[0].flags & TypeFlags.Undefined &&
                        types[1].flags & TypeFlags.Null && some(types, isEmptyAnonymousObjectType) ? ObjectFlags.IsUnknownLikeUnion : 0);
            }
            return !!((type as UnionType).objectFlags & ObjectFlags.IsUnknownLikeUnion);
        }
        return false;
    }

    function containsUndefinedType(type: Type) {
        return !!((type.flags & TypeFlags.Union ? (type as UnionType).types[0] : type).flags & TypeFlags.Undefined);
    }

    function containsNonMissingUndefinedType(type: Type) {
        const candidate = type.flags & TypeFlags.Union ? (type as UnionType).types[0] : type;
        return !!(candidate.flags & TypeFlags.Undefined) && candidate !== missingType;
    }

    function isStringIndexSignatureOnlyType(type: Type): boolean {
        return type.flags & TypeFlags.Object && !isGenericMappedType(type) && getPropertiesOfType(type).length === 0 && getIndexInfosOfType(type).length === 1 && !!getIndexInfoOfType(type, stringType) ||
            type.flags & TypeFlags.UnionOrIntersection && every((type as UnionOrIntersectionType).types, isStringIndexSignatureOnlyType) ||
            false;
    }

    function isEnumTypeRelatedTo(source: Symbol, target: Symbol, errorReporter?: ErrorReporter) {
        const sourceSymbol = source.flags & SymbolFlags.EnumMember ? getParentOfSymbol(source)! : source;
        const targetSymbol = target.flags & SymbolFlags.EnumMember ? getParentOfSymbol(target)! : target;
        if (sourceSymbol === targetSymbol) {
            return true;
        }
        if (sourceSymbol.escapedName !== targetSymbol.escapedName || !(sourceSymbol.flags & SymbolFlags.RegularEnum) || !(targetSymbol.flags & SymbolFlags.RegularEnum)) {
            return false;
        }
        const id = getSymbolId(sourceSymbol) + "," + getSymbolId(targetSymbol);
        const entry = enumRelation.get(id);
        if (entry !== undefined && !(entry & RelationComparisonResult.Failed && errorReporter)) {
            return !!(entry & RelationComparisonResult.Succeeded);
        }
        const targetEnumType = getTypeOfSymbol(targetSymbol);
        for (const sourceProperty of getPropertiesOfType(getTypeOfSymbol(sourceSymbol))) {
            if (sourceProperty.flags & SymbolFlags.EnumMember) {
                const targetProperty = getPropertyOfType(targetEnumType, sourceProperty.escapedName);
                if (!targetProperty || !(targetProperty.flags & SymbolFlags.EnumMember)) {
                    if (errorReporter) {
                        errorReporter(Diagnostics.Property_0_is_missing_in_type_1, symbolName(sourceProperty), typeToString(getDeclaredTypeOfSymbol(targetSymbol), /*enclosingDeclaration*/ undefined, TypeFormatFlags.UseFullyQualifiedType));
                    }
                    enumRelation.set(id, RelationComparisonResult.Failed);
                    return false;
                }
                const sourceValue = getEnumMemberValue(getDeclarationOfKind(sourceProperty, SyntaxKind.EnumMember)!).value;
                const targetValue = getEnumMemberValue(getDeclarationOfKind(targetProperty, SyntaxKind.EnumMember)!).value;
                if (sourceValue !== targetValue) {
                    const sourceIsString = typeof sourceValue === "string";
                    const targetIsString = typeof targetValue === "string";

                    // If we have 2 enums with *known* values that differ, they are incompatible.
                    if (sourceValue !== undefined && targetValue !== undefined) {
                        if (errorReporter) {
                            const escapedSource = sourceIsString ? `"${escapeString(sourceValue)}"` : sourceValue;
                            const escapedTarget = targetIsString ? `"${escapeString(targetValue)}"` : targetValue;
                            errorReporter(Diagnostics.Each_declaration_of_0_1_differs_in_its_value_where_2_was_expected_but_3_was_given, symbolName(targetSymbol), symbolName(targetProperty), escapedTarget, escapedSource);
                        }
                        enumRelation.set(id, RelationComparisonResult.Failed);
                        return false;
                    }

                    // At this point we know that at least one of the values is 'undefined'.
                    // This may mean that we have an opaque member from an ambient enum declaration,
                    // or that we were not able to calculate it (which is basically an error).
                    //
                    // Either way, we can assume that it's numeric.
                    // If the other is a string, we have a mismatch in types.
                    if (sourceIsString || targetIsString) {
                        if (errorReporter) {
                            const knownStringValue = sourceValue ?? targetValue;
                            Debug.assert(typeof knownStringValue === "string");
                            const escapedValue = `"${escapeString(knownStringValue)}"`;
                            errorReporter(Diagnostics.One_value_of_0_1_is_the_string_2_and_the_other_is_assumed_to_be_an_unknown_numeric_value, symbolName(targetSymbol), symbolName(targetProperty), escapedValue);
                        }
                        enumRelation.set(id, RelationComparisonResult.Failed);
                        return false;
                    }
                }
            }
        }
        enumRelation.set(id, RelationComparisonResult.Succeeded);
        return true;
    }

    function isSimpleTypeRelatedTo(source: Type, target: Type, relation: Map<string, RelationComparisonResult>, errorReporter?: ErrorReporter) {
        const s = source.flags;
        const t = target.flags;
        if (t & TypeFlags.Any || s & TypeFlags.Never || source === wildcardType) return true;
        if (t & TypeFlags.Unknown && !(relation === strictSubtypeRelation && s & TypeFlags.Any)) return true;
        if (t & TypeFlags.Never) return false;
        if (s & TypeFlags.StringLike && t & TypeFlags.String) return true;
        if (
            s & TypeFlags.StringLiteral && s & TypeFlags.EnumLiteral &&
            t & TypeFlags.StringLiteral && !(t & TypeFlags.EnumLiteral) &&
            (source as StringLiteralType).value === (target as StringLiteralType).value
        ) return true;
        if (s & TypeFlags.NumberLike && t & TypeFlags.Number) return true;
        if (
            s & TypeFlags.NumberLiteral && s & TypeFlags.EnumLiteral &&
            t & TypeFlags.NumberLiteral && !(t & TypeFlags.EnumLiteral) &&
            (source as NumberLiteralType).value === (target as NumberLiteralType).value
        ) return true;
        if (s & TypeFlags.BigIntLike && t & TypeFlags.BigInt) return true;
        if (s & TypeFlags.BooleanLike && t & TypeFlags.Boolean) return true;
        if (s & TypeFlags.ESSymbolLike && t & TypeFlags.ESSymbol) return true;
        if (
            s & TypeFlags.Enum && t & TypeFlags.Enum && source.symbol.escapedName === target.symbol.escapedName &&
            isEnumTypeRelatedTo(source.symbol, target.symbol, errorReporter)
        ) return true;
        if (s & TypeFlags.EnumLiteral && t & TypeFlags.EnumLiteral) {
            if (s & TypeFlags.Union && t & TypeFlags.Union && isEnumTypeRelatedTo(source.symbol, target.symbol, errorReporter)) return true;
            if (
                s & TypeFlags.Literal && t & TypeFlags.Literal && (source as LiteralType).value === (target as LiteralType).value &&
                isEnumTypeRelatedTo(source.symbol, target.symbol, errorReporter)
            ) return true;
        }
        // In non-strictNullChecks mode, `undefined` and `null` are assignable to anything except `never`.
        // Since unions and intersections may reduce to `never`, we exclude them here.
        if (s & TypeFlags.Undefined && (!strictNullChecks && !(t & TypeFlags.UnionOrIntersection) || t & (TypeFlags.Undefined | TypeFlags.Void))) return true;
        if (s & TypeFlags.Null && (!strictNullChecks && !(t & TypeFlags.UnionOrIntersection) || t & TypeFlags.Null)) return true;
        if (s & TypeFlags.Object && t & TypeFlags.NonPrimitive && !(relation === strictSubtypeRelation && isEmptyAnonymousObjectType(source) && !(getObjectFlags(source) & ObjectFlags.FreshLiteral))) return true;
        if (relation === assignableRelation || relation === comparableRelation) {
            if (s & TypeFlags.Any) return true;
            // Type number is assignable to any computed numeric enum type or any numeric enum literal type, and
            // a numeric literal type is assignable any computed numeric enum type or any numeric enum literal type
            // with a matching value. These rules exist such that enums can be used for bit-flag purposes.
            if (s & TypeFlags.Number && (t & TypeFlags.Enum || t & TypeFlags.NumberLiteral && t & TypeFlags.EnumLiteral)) return true;
            if (
                s & TypeFlags.NumberLiteral && !(s & TypeFlags.EnumLiteral) && (t & TypeFlags.Enum ||
                    t & TypeFlags.NumberLiteral && t & TypeFlags.EnumLiteral &&
                        (source as NumberLiteralType).value === (target as NumberLiteralType).value)
            ) return true;
            // Anything is assignable to a union containing undefined, null, and {}
            if (isUnknownLikeUnionType(target)) return true;
        }
        return false;
    }

    function isTypeRelatedTo(source: Type, target: Type, relation: Map<string, RelationComparisonResult>) {
        if (isFreshLiteralType(source)) {
            source = (source as FreshableType).regularType;
        }
        if (isFreshLiteralType(target)) {
            target = (target as FreshableType).regularType;
        }
        if (source === target) {
            return true;
        }
        if (relation !== identityRelation) {
            if (relation === comparableRelation && !(target.flags & TypeFlags.Never) && isSimpleTypeRelatedTo(target, source, relation) || isSimpleTypeRelatedTo(source, target, relation)) {
                return true;
            }
        }
        else if (!((source.flags | target.flags) & (TypeFlags.UnionOrIntersection | TypeFlags.IndexedAccess | TypeFlags.Conditional | TypeFlags.Substitution))) {
            // We have excluded types that may simplify to other forms, so types must have identical flags
            if (source.flags !== target.flags) return false;
            if (source.flags & TypeFlags.Singleton) return true;
        }
        if (source.flags & TypeFlags.Object && target.flags & TypeFlags.Object) {
            const related = relation.get(getRelationKey(source, target, IntersectionState.None, relation, /*ignoreConstraints*/ false));
            if (related !== undefined) {
                return !!(related & RelationComparisonResult.Succeeded);
            }
        }
        if (source.flags & TypeFlags.StructuredOrInstantiable || target.flags & TypeFlags.StructuredOrInstantiable) {
            return checkTypeRelatedTo(source, target, relation, /*errorNode*/ undefined);
        }
        return false;
    }

    function isIgnoredJsxProperty(source: Type, sourceProp: Symbol) {
        return getObjectFlags(source) & ObjectFlags.JsxAttributes && isHyphenatedJsxName(sourceProp.escapedName);
    }

    function getNormalizedType(type: Type, writing: boolean): Type {
        while (true) {
            const t = isFreshLiteralType(type) ? (type as FreshableType).regularType :
                isGenericTupleType(type) ? getNormalizedTupleType(type, writing) :
                getObjectFlags(type) & ObjectFlags.Reference ? (type as TypeReference).node ? createTypeReference((type as TypeReference).target, getTypeArguments(type as TypeReference)) : getSingleBaseForNonAugmentingSubtype(type) || type :
                type.flags & TypeFlags.UnionOrIntersection ? getNormalizedUnionOrIntersectionType(type as UnionOrIntersectionType, writing) :
                type.flags & TypeFlags.Substitution ? writing ? (type as SubstitutionType).baseType : getSubstitutionIntersection(type as SubstitutionType) :
                type.flags & TypeFlags.Simplifiable ? getSimplifiedType(type, writing) :
                type;
            if (t === type) return t;
            type = t;
        }
    }

    function getNormalizedUnionOrIntersectionType(type: UnionOrIntersectionType, writing: boolean) {
        const reduced = getReducedType(type);
        if (reduced !== type) {
            return reduced;
        }
        if (type.flags & TypeFlags.Intersection && shouldNormalizeIntersection(type as IntersectionType)) {
            // Normalization handles cases like
            // Partial<T>[K] & ({} | null) ==>
            // Partial<T>[K] & {} | Partial<T>[K} & null ==>
            // (T[K] | undefined) & {} | (T[K] | undefined) & null ==>
            // T[K] & {} | undefined & {} | T[K] & null | undefined & null ==>
            // T[K] & {} | T[K] & null
            const normalizedTypes = sameMap(type.types, t => getNormalizedType(t, writing));
            if (normalizedTypes !== type.types) {
                return getIntersectionType(normalizedTypes);
            }
        }
        return type;
    }

    function shouldNormalizeIntersection(type: IntersectionType) {
        let hasInstantiable = false;
        let hasNullableOrEmpty = false;
        for (const t of type.types) {
            hasInstantiable ||= !!(t.flags & TypeFlags.Instantiable);
            hasNullableOrEmpty ||= !!(t.flags & TypeFlags.Nullable) || isEmptyAnonymousObjectType(t);
            if (hasInstantiable && hasNullableOrEmpty) return true;
        }
        return false;
    }

    function getNormalizedTupleType(type: TupleTypeReference, writing: boolean): Type {
        const elements = getElementTypes(type);
        const normalizedElements = sameMap(elements, t => t.flags & TypeFlags.Simplifiable ? getSimplifiedType(t, writing) : t);
        return elements !== normalizedElements ? createNormalizedTupleType(type.target, normalizedElements) : type;
    }

    ;

    /**
     * Checks if 'source' is related to 'target' (e.g.: is a assignable to).
     * @param source The left-hand-side of the relation.
     * @param target The right-hand-side of the relation.
     * @param relation The relation considered. One of 'identityRelation', 'subtypeRelation', 'assignableRelation', or 'comparableRelation'.
     * Used as both to determine which checks are performed and as a cache of previously computed results.
     * @param errorNode The suggested node upon which all errors will be reported, if defined. This may or may not be the actual node used.
     * @param headMessage If the error chain should be prepended by a head message, then headMessage will be used.
     * @param containingMessageChain A chain of errors to prepend any new errors found.
     * @param errorOutputContainer Return the diagnostic. Do not log if 'skipLogging' is truthy.
     */
    function checkTypeRelatedTo(
        source: Type,
        target: Type,
        relation: Map<string, RelationComparisonResult>,
        errorNode: Node | undefined,
        headMessage?: DiagnosticMessage,
        containingMessageChain?: () => DiagnosticMessageChain | undefined,
        errorOutputContainer?: { errors?: Diagnostic[]; skipLogging?: boolean; },
    ): boolean
    {}
    ;

    function maybeTypeOfKindConsideringBaseConstraint(type: Type, kind: TypeFlags): boolean {
        if (maybeTypeOfKind(type, kind)) {
            return true;
        }

        const baseConstraint = getBaseConstraintOrType(type);
        return !!baseConstraint && maybeTypeOfKind(baseConstraint, kind);
    }

    // Return true if type might be of the given kind. A union or intersection type might be of a given
    // kind if at least one constituent type is of the given kind.
    function maybeTypeOfKind(type: Type, kind: TypeFlags): boolean {
        if (type.flags & kind) {
            return true;
        }
        if (type.flags & TypeFlags.UnionOrIntersection) {
            const types = (type as UnionOrIntersectionType).types;
            for (const t of types) {
                if (maybeTypeOfKind(t, kind)) {
                    return true;
                }
            }
        }
        return false;
    }

    function isTypeAssignableToKind(source: Type, kind: TypeFlags, strict?: boolean): boolean {
        if (source.flags & kind) {
            return true;
        }
        if (strict && source.flags & (TypeFlags.AnyOrUnknown | TypeFlags.Void | TypeFlags.Undefined | TypeFlags.Null)) {
            return false;
        }
        return !!(kind & TypeFlags.NumberLike) && isTypeAssignableTo(source, numberType) ||
            !!(kind & TypeFlags.BigIntLike) && isTypeAssignableTo(source, bigintType) ||
            !!(kind & TypeFlags.StringLike) && isTypeAssignableTo(source, stringType) ||
            !!(kind & TypeFlags.BooleanLike) && isTypeAssignableTo(source, booleanType) ||
            !!(kind & TypeFlags.Void) && isTypeAssignableTo(source, voidType) ||
            !!(kind & TypeFlags.Never) && isTypeAssignableTo(source, neverType) ||
            !!(kind & TypeFlags.Null) && isTypeAssignableTo(source, nullType) ||
            !!(kind & TypeFlags.Undefined) && isTypeAssignableTo(source, undefinedType) ||
            !!(kind & TypeFlags.ESSymbol) && isTypeAssignableTo(source, esSymbolType) ||
            !!(kind & TypeFlags.NonPrimitive) && isTypeAssignableTo(source, nonPrimitiveType);
    }

    function allTypesAssignableToKind(source: Type, kind: TypeFlags, strict?: boolean): boolean {
        return source.flags & TypeFlags.Union ?
            every((source as UnionType).types, subType => allTypesAssignableToKind(subType, kind, strict)) :
            isTypeAssignableToKind(source, kind, strict);
    }

    ;

    function literalTypesWithSameBaseType(types: Type[]): boolean {
        let commonBaseType: Type | undefined;
        for (const t of types) {
            if (!(t.flags & TypeFlags.Never)) {
                const baseType = getBaseTypeOfLiteralType(t);
                commonBaseType ??= baseType;
                if (baseType === t || baseType !== commonBaseType) {
                    return false;
                }
            }
        }
        return true;
    }

    function getCombinedTypeFlags(types: Type[]): TypeFlags {
        return reduceLeft(types, (flags, t) => flags | (t.flags & TypeFlags.Union ? getCombinedTypeFlags((t as UnionType).types) : t.flags), 0 as TypeFlags);
    }

    function getCommonSupertype(types: Type[]): Type {
        if (types.length === 1) {
            return types[0];
        }
        // Remove nullable types from each of the candidates.
        const primaryTypes = strictNullChecks ? sameMap(types, t => filterType(t, u => !(u.flags & TypeFlags.Nullable))) : types;
        // When the candidate types are all literal types with the same base type, return a union
        // of those literal types. Otherwise, return the leftmost type for which no type to the
        // right is a supertype.
        const superTypeOrUnion = literalTypesWithSameBaseType(primaryTypes) ?
            getUnionType(primaryTypes) :
            reduceLeft(primaryTypes, (s, t) => isTypeSubtypeOf(s, t) ? t : s)!;
        // Add any nullable types that occurred in the candidates back to the result.
        return primaryTypes === types ? superTypeOrUnion : getNullableType(superTypeOrUnion, getCombinedTypeFlags(types) & TypeFlags.Nullable);
    }

    // Return the leftmost type for which no type to the right is a subtype.
    function getCommonSubtype(types: Type[]) {
        return reduceLeft(types, (s, t) => isTypeSubtypeOf(t, s) ? t : s)!;
    }

    function isArrayType(type: Type): type is TypeReference {
        return !!(getObjectFlags(type) & ObjectFlags.Reference) && ((type as TypeReference).target === globalArrayType || (type as TypeReference).target === globalReadonlyArrayType);
    }

    function isReadonlyArrayType(type: Type): boolean {
        return !!(getObjectFlags(type) & ObjectFlags.Reference) && (type as TypeReference).target === globalReadonlyArrayType;
    }

    function isArrayOrTupleType(type: Type): type is TypeReference {
        return isArrayType(type) || isTupleType(type);
    }

    function isMutableArrayOrTuple(type: Type): boolean {
        return isArrayType(type) && !isReadonlyArrayType(type) || isTupleType(type) && !type.target.readonly;
    }

    function getElementTypeOfArrayType(type: Type): Type | undefined {
        return isArrayType(type) ? getTypeArguments(type)[0] : undefined;
    }

    function isArrayLikeType(type: Type): boolean {
        // A type is array-like if it is a reference to the global Array or global ReadonlyArray type,
        // or if it is not the undefined or null type and if it is assignable to ReadonlyArray<any>
        return isArrayType(type) || !(type.flags & TypeFlags.Nullable) && isTypeAssignableTo(type, anyReadonlyArrayType);
    }

    function isMutableArrayLikeType(type: Type): boolean {
        // A type is mutable-array-like if it is a reference to the global Array type, or if it is not the
        // any, undefined or null type and if it is assignable to Array<any>
        return isMutableArrayOrTuple(type) || !(type.flags & (TypeFlags.Any | TypeFlags.Nullable)) && isTypeAssignableTo(type, anyArrayType);
    }

    function getSingleBaseForNonAugmentingSubtype(type: Type) {
        if (!(getObjectFlags(type) & ObjectFlags.Reference) || !(getObjectFlags((type as TypeReference).target) & ObjectFlags.ClassOrInterface)) {
            return undefined;
        }
        if (getObjectFlags(type) & ObjectFlags.IdenticalBaseTypeCalculated) {
            return getObjectFlags(type) & ObjectFlags.IdenticalBaseTypeExists ? (type as TypeReference).cachedEquivalentBaseType : undefined;
        }
        (type as TypeReference).objectFlags |= ObjectFlags.IdenticalBaseTypeCalculated;
        const target = (type as TypeReference).target as InterfaceType;
        if (getObjectFlags(target) & ObjectFlags.Class) {
            const baseTypeNode = getBaseTypeNodeOfClass(target);
            // A base type expression may circularly reference the class itself (e.g. as an argument to function call), so we only
            // check for base types specified as simple qualified names.
            if (baseTypeNode && baseTypeNode.expression.kind !== SyntaxKind.Identifier && baseTypeNode.expression.kind !== SyntaxKind.PropertyAccessExpression) {
                return undefined;
            }
        }
        const bases = getBaseTypes(target);
        if (bases.length !== 1) {
            return undefined;
        }
        if (getMembersOfSymbol(type.symbol).size) {
            return undefined; // If the interface has any members, they may subtype members in the base, so we should do a full structural comparison
        }
        let instantiatedBase = !length(target.typeParameters) ? bases[0] : instantiateType(bases[0], createTypeMapper(target.typeParameters!, getTypeArguments(type as TypeReference).slice(0, target.typeParameters!.length)));
        if (length(getTypeArguments(type as TypeReference)) > length(target.typeParameters)) {
            instantiatedBase = getTypeWithThisArgument(instantiatedBase, last(getTypeArguments(type as TypeReference)));
        }
        (type as TypeReference).objectFlags |= ObjectFlags.IdenticalBaseTypeExists;
        return (type as TypeReference).cachedEquivalentBaseType = instantiatedBase;
    }

    function isEmptyLiteralType(type: Type): boolean {
        return strictNullChecks ? type === implicitNeverType : type === undefinedWideningType;
    }

    function isEmptyArrayLiteralType(type: Type): boolean {
        const elementType = getElementTypeOfArrayType(type);
        return !!elementType && isEmptyLiteralType(elementType);
    }

    function isTupleLikeType(type: Type): boolean {
        let lengthType;
        return isTupleType(type) ||
            !!getPropertyOfType(type, "0" as __String) ||
            isArrayLikeType(type) && !!(lengthType = getTypeOfPropertyOfType(type, "length" as __String)) && everyType(lengthType, t => !!(t.flags & TypeFlags.NumberLiteral));
    }

    function isArrayOrTupleLikeType(type: Type): boolean {
        return isArrayLikeType(type) || isTupleLikeType(type);
    }

    function getTupleElementType(type: Type, index: number) {
        const propType = getTypeOfPropertyOfType(type, "" + index as __String);
        if (propType) {
            return propType;
        }
        if (everyType(type, isTupleType)) {
            return getTupleElementTypeOutOfStartCount(type, index, compilerOptions.noUncheckedIndexedAccess ? undefinedType : undefined);
        }
        return undefined;
    }

    function isNeitherUnitTypeNorNever(type: Type): boolean {
        return !(type.flags & (TypeFlags.Unit | TypeFlags.Never));
    }

    function isUnitType(type: Type): boolean {
        return !!(type.flags & TypeFlags.Unit);
    }

    function isUnitLikeType(type: Type): boolean {
        // Intersections that reduce to 'never' (e.g. 'T & null' where 'T extends {}') are not unit types.
        const t = getBaseConstraintOrType(type);
        // Scan intersections such that tagged literal types are considered unit types.
        return t.flags & TypeFlags.Intersection ? some((t as IntersectionType).types, isUnitType) : isUnitType(t);
    }

    function extractUnitType(type: Type) {
        return type.flags & TypeFlags.Intersection ? find((type as IntersectionType).types, isUnitType) || type : type;
    }

    function isLiteralType(type: Type): boolean {
        return type.flags & TypeFlags.Boolean ? true :
            type.flags & TypeFlags.Union ? type.flags & TypeFlags.EnumLiteral ? true : every((type as UnionType).types, isUnitType) :
            isUnitType(type);
    }

    function getBaseTypeOfLiteralType(type: Type): Type {
        return type.flags & TypeFlags.EnumLike ? getBaseTypeOfEnumLikeType(type as LiteralType) :
            type.flags & (TypeFlags.StringLiteral | TypeFlags.TemplateLiteral | TypeFlags.StringMapping) ? stringType :
            type.flags & TypeFlags.NumberLiteral ? numberType :
            type.flags & TypeFlags.BigIntLiteral ? bigintType :
            type.flags & TypeFlags.BooleanLiteral ? booleanType :
            type.flags & TypeFlags.Union ? getBaseTypeOfLiteralTypeUnion(type as UnionType) :
            type;
    }

    function getBaseTypeOfLiteralTypeUnion(type: UnionType) {
        const key = `B${getTypeId(type)}`;
        return getCachedType(key) ?? setCachedType(key, mapType(type, getBaseTypeOfLiteralType));
    }

    // This like getBaseTypeOfLiteralType, but instead treats enum literals as strings/numbers instead
    // of returning their enum base type (which depends on the types of other literals in the enum).
    function getBaseTypeOfLiteralTypeForComparison(type: Type): Type {
        return type.flags & (TypeFlags.StringLiteral | TypeFlags.TemplateLiteral | TypeFlags.StringMapping) ? stringType :
            type.flags & (TypeFlags.NumberLiteral | TypeFlags.Enum) ? numberType :
            type.flags & TypeFlags.BigIntLiteral ? bigintType :
            type.flags & TypeFlags.BooleanLiteral ? booleanType :
            type.flags & TypeFlags.Union ? mapType(type, getBaseTypeOfLiteralTypeForComparison) :
            type;
    }

    function getWidenedLiteralType(type: Type): Type {
        return type.flags & TypeFlags.EnumLike && isFreshLiteralType(type) ? getBaseTypeOfEnumLikeType(type as LiteralType) :
            type.flags & TypeFlags.StringLiteral && isFreshLiteralType(type) ? stringType :
            type.flags & TypeFlags.NumberLiteral && isFreshLiteralType(type) ? numberType :
            type.flags & TypeFlags.BigIntLiteral && isFreshLiteralType(type) ? bigintType :
            type.flags & TypeFlags.BooleanLiteral && isFreshLiteralType(type) ? booleanType :
            type.flags & TypeFlags.Union ? mapType(type as UnionType, getWidenedLiteralType) :
            type;
    }

    function getWidenedUniqueESSymbolType(type: Type): Type {
        return type.flags & TypeFlags.UniqueESSymbol ? esSymbolType :
            type.flags & TypeFlags.Union ? mapType(type as UnionType, getWidenedUniqueESSymbolType) :
            type;
    }

    function getWidenedLiteralLikeTypeForContextualType(type: Type, contextualType: Type | undefined) {
        if (!isLiteralOfContextualType(type, contextualType)) {
            type = getWidenedUniqueESSymbolType(getWidenedLiteralType(type));
        }
        return getRegularTypeOfLiteralType(type);
    }

    function getWidenedLiteralLikeTypeForContextualReturnTypeIfNeeded(type: Type | undefined, contextualSignatureReturnType: Type | undefined, isAsync: boolean) {
        if (type && isUnitType(type)) {
            const contextualType = !contextualSignatureReturnType ? undefined :
                isAsync ? getPromisedTypeOfPromise(contextualSignatureReturnType) :
                contextualSignatureReturnType;
            type = getWidenedLiteralLikeTypeForContextualType(type, contextualType);
        }
        return type;
    }

    function getWidenedLiteralLikeTypeForContextualIterationTypeIfNeeded(type: Type | undefined, contextualSignatureReturnType: Type | undefined, kind: IterationTypeKind, isAsyncGenerator: boolean) {
        if (type && isUnitType(type)) {
            const contextualType = !contextualSignatureReturnType ? undefined :
                getIterationTypeOfGeneratorFunctionReturnType(kind, contextualSignatureReturnType, isAsyncGenerator);
            type = getWidenedLiteralLikeTypeForContextualType(type, contextualType);
        }
        return type;
    }

    /**
     * Check if a Type was written as a tuple type literal.
     * Prefer using isTupleLikeType() unless the use of `elementTypes`/`getTypeArguments` is required.
     */
    function isTupleType(type: Type): type is TupleTypeReference {
        return !!(getObjectFlags(type) & ObjectFlags.Reference && (type as TypeReference).target.objectFlags & ObjectFlags.Tuple);
    }

    function isGenericTupleType(type: Type): type is TupleTypeReference {
        return isTupleType(type) && !!(type.target.combinedFlags & ElementFlags.Variadic);
    }

    function isSingleElementGenericTupleType(type: Type): type is TupleTypeReference {
        return isGenericTupleType(type) && type.target.elementFlags.length === 1;
    }

    function getRestTypeOfTupleType(type: TupleTypeReference) {
        return getElementTypeOfSliceOfTupleType(type, type.target.fixedLength);
    }

    function getTupleElementTypeOutOfStartCount(type: Type, index: number, undefinedOrMissingType: Type | undefined) {
        return mapType(type, t => {
            const tupleType = t as TupleTypeReference;
            const restType = getRestTypeOfTupleType(tupleType);
            if (!restType) {
                return undefinedType;
            }
            if (undefinedOrMissingType && index >= getTotalFixedElementCount(tupleType.target)) {
                return getUnionType([restType, undefinedOrMissingType]);
            }
            return restType;
        });
    }

    function getRestArrayTypeOfTupleType(type: TupleTypeReference) {
        const restType = getRestTypeOfTupleType(type);
        return restType && createArrayType(restType);
    }

    function getElementTypeOfSliceOfTupleType(type: TupleTypeReference, index: number, endSkipCount = 0, writing = false, noReductions = false) {
        const length = getTypeReferenceArity(type) - endSkipCount;
        if (index < length) {
            const typeArguments = getTypeArguments(type);
            const elementTypes: Type[] = [];
            for (let i = index; i < length; i++) {
                const t = typeArguments[i];
                elementTypes.push(type.target.elementFlags[i] & ElementFlags.Variadic ? getIndexedAccessType(t, numberType) : t);
            }
            return writing ? getIntersectionType(elementTypes) : getUnionType(elementTypes, noReductions ? UnionReduction.None : UnionReduction.Literal);
        }
        return undefined;
    }

    function isTupleTypeStructureMatching(t1: TupleTypeReference, t2: TupleTypeReference) {
        return getTypeReferenceArity(t1) === getTypeReferenceArity(t2) &&
            every(t1.target.elementFlags, (f, i) => (f & ElementFlags.Variable) === (t2.target.elementFlags[i] & ElementFlags.Variable));
    }

    function isZeroBigInt({ value }: BigIntLiteralType) {
        return value.base10Value === "0";
    }

    function removeDefinitelyFalsyTypes(type: Type): Type {
        return filterType(type, t => hasTypeFacts(t, TypeFacts.Truthy));
    }

    function extractDefinitelyFalsyTypes(type: Type): Type {
        return mapType(type, getDefinitelyFalsyPartOfType);
    }

    function getDefinitelyFalsyPartOfType(type: Type): Type {
        return type.flags & TypeFlags.String ? emptyStringType :
            type.flags & TypeFlags.Number ? zeroType :
            type.flags & TypeFlags.BigInt ? zeroBigIntType :
            type === regularFalseType ||
                type === falseType ||
                type.flags & (TypeFlags.Void | TypeFlags.Undefined | TypeFlags.Null | TypeFlags.AnyOrUnknown) ||
                type.flags & TypeFlags.StringLiteral && (type as StringLiteralType).value === "" ||
                type.flags & TypeFlags.NumberLiteral && (type as NumberLiteralType).value === 0 ||
                type.flags & TypeFlags.BigIntLiteral && isZeroBigInt(type as BigIntLiteralType) ? type :
            neverType;
    }

    /**
     * Add undefined or null or both to a type if they are missing.
     * @param type - type to add undefined and/or null to if not present
     * @param flags - Either TypeFlags.Undefined or TypeFlags.Null, or both
     */
    function getNullableType(type: Type, flags: TypeFlags): Type {
        const missing = (flags & ~type.flags) & (TypeFlags.Undefined | TypeFlags.Null);
        return missing === 0 ? type :
            missing === TypeFlags.Undefined ? getUnionType([type, undefinedType]) :
            missing === TypeFlags.Null ? getUnionType([type, nullType]) :
            getUnionType([type, undefinedType, nullType]);
    }

    function getOptionalType(type: Type, isProperty = false): Type {
        Debug.assert(strictNullChecks);
        const missingOrUndefined = isProperty ? undefinedOrMissingType : undefinedType;
        return type === missingOrUndefined || type.flags & TypeFlags.Union && (type as UnionType).types[0] === missingOrUndefined ? type : getUnionType([type, missingOrUndefined]);
    }

    // function getGlobalNonNullableTypeInstantiation(type: Type) {
    //     if (!deferredGlobalNonNullableTypeAlias) {
    //         deferredGlobalNonNullableTypeAlias = getGlobalSymbol("NonNullable" as __String, SymbolFlags.TypeAlias, /*diagnostic*/ undefined) || unknownSymbol;
    //     }
    //     return deferredGlobalNonNullableTypeAlias !== unknownSymbol ?
    //         getTypeAliasInstantiation(deferredGlobalNonNullableTypeAlias, [type]) :
    //         getIntersectionType([type, emptyObjectType]);
    // }

    function getNonNullableType(type: Type): Type {
        return strictNullChecks ? getAdjustedTypeWithFacts(type, TypeFacts.NEUndefinedOrNull) : type;
    }

    function addOptionalTypeMarker(type: Type) {
        return strictNullChecks ? getUnionType([type, optionalType]) : type;
    }

    function removeOptionalTypeMarker(type: Type): Type {
        return strictNullChecks ? removeType(type, optionalType) : type;
    }

    function propagateOptionalTypeMarker(type: Type, node: OptionalChain, wasOptional: boolean) {
        return wasOptional ? isOutermostOptionalChain(node) ? getOptionalType(type) : addOptionalTypeMarker(type) : type;
    }

    function getOptionalExpressionType(exprType: Type, expression: Expression) {
        return isExpressionOfOptionalChainRoot(expression) ? getNonNullableType(exprType) :
            isOptionalChain(expression) ? removeOptionalTypeMarker(exprType) :
            exprType;
    }

    function removeMissingType(type: Type, isOptional: boolean) {
        return exactOptionalPropertyTypes && isOptional ? removeType(type, missingType) : type;
    }

    function containsMissingType(type: Type) {
        return type === missingType || !!(type.flags & TypeFlags.Union) && (type as UnionType).types[0] === missingType;
    }

    function removeMissingOrUndefinedType(type: Type): Type {
        return exactOptionalPropertyTypes ? removeType(type, missingType) : getTypeWithFacts(type, TypeFacts.NEUndefined);
    }

    /**
     * Is source potentially coercible to target type under `==`.
     * Assumes that `source` is a constituent of a union, hence
     * the boolean literal flag on the LHS, but not on the RHS.
     *
     * This does not fully replicate the semantics of `==`. The
     * intention is to catch cases that are clearly not right.
     *
     * Comparing (string | number) to number should not remove the
     * string element.
     *
     * Comparing (string | number) to 1 will remove the string
     * element, though this is not sound. This is a pragmatic
     * choice.
     *
     * @see narrowTypeByEquality
     *
     * @param source
     * @param target
     */
    function isCoercibleUnderDoubleEquals(source: Type, target: Type): boolean {
        return ((source.flags & (TypeFlags.Number | TypeFlags.String | TypeFlags.BooleanLiteral)) !== 0)
            && ((target.flags & (TypeFlags.Number | TypeFlags.String | TypeFlags.Boolean)) !== 0);
    }

    /**
     * Return true if type was inferred from an object literal, written as an object type literal, or is the shape of a module
     * with no call or construct signatures.
     */
    function isObjectTypeWithInferableIndex(type: Type): boolean {
        const objectFlags = getObjectFlags(type);
        return type.flags & TypeFlags.Intersection
            ? every((type as IntersectionType).types, isObjectTypeWithInferableIndex)
            : !!(
                type.symbol
                && (type.symbol.flags & (SymbolFlags.ObjectLiteral | SymbolFlags.TypeLiteral | SymbolFlags.Enum | SymbolFlags.ValueModule)) !== 0
                && !(type.symbol.flags & SymbolFlags.Class)
                && !typeHasCallOrConstructSignatures(type)
            ) || !!(
                objectFlags & ObjectFlags.ObjectRestType
            ) || !!(objectFlags & ObjectFlags.ReverseMapped && isObjectTypeWithInferableIndex((type as ReverseMappedType).source));
    }

    function createSymbolWithType(source: Symbol, type: Type | undefined) {
        const symbol = createSymbol(source.flags, source.escapedName, getCheckFlags(source) & CheckFlags.Readonly);
        symbol.declarations = source.declarations;
        symbol.parent = source.parent;
        symbol.links.type = type;
        symbol.links.target = source;
        if (source.valueDeclaration) {
            symbol.valueDeclaration = source.valueDeclaration;
        }
        const nameType = getSymbolLinks(source).nameType;
        if (nameType) {
            symbol.links.nameType = nameType;
        }
        return symbol;
    }

    function transformTypeOfMembers(type: Type, f: (propertyType: Type) => Type) {
        const members = createSymbolTable();
        for (const property of getPropertiesOfObjectType(type)) {
            const original = getTypeOfSymbol(property);
            const updated = f(original);
            members.set(property.escapedName, updated === original ? property : createSymbolWithType(property, updated));
        }
        return members;
    }

    /**
     * If the the provided object literal is subject to the excess properties check,
     * create a new that is exempt. Recursively mark object literal members as exempt.
     * Leave signatures alone since they are not subject to the check.
     */
    function getRegularTypeOfObjectLiteral(type: Type): Type {
        if (!(isObjectLiteralType(type) && getObjectFlags(type) & ObjectFlags.FreshLiteral)) {
            return type;
        }
        const regularType = (type as FreshObjectLiteralType).regularType;
        if (regularType) {
            return regularType;
        }

        const resolved = type as ResolvedType;
        const members = transformTypeOfMembers(type, getRegularTypeOfObjectLiteral);
        const regularNew = createAnonymousType(resolved.symbol, members, resolved.callSignatures, resolved.constructSignatures, resolved.indexInfos);
        regularNew.flags = resolved.flags;
        regularNew.objectFlags |= resolved.objectFlags & ~ObjectFlags.FreshLiteral;
        (type as FreshObjectLiteralType).regularType = regularNew;
        return regularNew;
    }

    ;

    ;


    ;
    //#endregion

    ;

    var uniqueLiteralType = createIntrinsicType(TypeFlags.Never, "never", /*objectFlags*/ undefined, "unique literal"); // `uniqueLiteralType` is a special `never` flagged by union reduction to behave as a literal
    ;

    function makeFunctionTypeMapper(func: (t: Type) => Type, debugInfo: () => string): TypeMapper {
        return Debug.attachDebugPrototypeIfDebug({ kind: TypeMapKind.Function, func, debugInfo: Debug.isDebugging ? debugInfo : undefined });
    }

    var restrictiveMapper: TypeMapper = makeFunctionTypeMapper(t => t.flags & TypeFlags.TypeParameter ? getRestrictiveTypeParameter(t as TypeParameter) : t, () => "(restrictive mapper)");
    var permissiveMapper: TypeMapper = makeFunctionTypeMapper(t => t.flags & TypeFlags.TypeParameter ? wildcardType : t, () => "(permissive mapper)");
    var uniqueLiteralMapper: TypeMapper = makeFunctionTypeMapper(t => t.flags & TypeFlags.TypeParameter ? uniqueLiteralType : t, () => "(unique literal mapper)"); // replace all type parameters with the unique literal type (disregarding constraints)
    var outofbandVarianceMarkerHandler: ((onlyUnreliable: boolean) => void) | undefined;
    var reportUnreliableMapper = makeFunctionTypeMapper(t => {
        if (outofbandVarianceMarkerHandler && (t === markerSuperType || t === markerSubType || t === markerOtherType)) {
            outofbandVarianceMarkerHandler(/*onlyUnreliable*/ true);
        }
        return t;
    }, () => "(unmeasurable reporter)");
    var reportUnmeasurableMapper = makeFunctionTypeMapper(t => {
        if (outofbandVarianceMarkerHandler && (t === markerSuperType || t === markerSubType || t === markerOtherType)) {
            outofbandVarianceMarkerHandler(/*onlyUnreliable*/ false);
        }
        return t;
    }, () => "(unreliable reporter)");

    const typeMappers = {
        restrictiveMapper ,
        permissiveMapper ,
        uniqueLiteralMapper ,
        outofbandVarianceMarkerHandler ,

        reportUnreliableMapper ,
        reportUnmeasurableMapper ,

    } as const ;

    ;

    ;

    //#region type-resolving entrypts

    function getTypePerspective(nd: Node): FlowPerspective
    { return ; }

    /**
     * Get type from type-reference that reference to class or interface.
     * subject  to ctxtual narrowing.
     * 
     */
    function getTypeFromClassOrInterfaceReference(node: NodeWithTypeArguments, symbol: Symbol): Type
    { return ; }

    function getTypeAliasInstantiation(symbol: Symbol, typeArguments: readonly Type[] | undefined, aliasSymbol?: Symbol, aliasTypeArguments?: readonly Type[]): Type {
        const type = getDeclaredTypeOfSymbol(symbol);
        if (type === intrinsicMarkerType) {
            const typeKind = intrinsicTypeKinds.get(symbol.escapedName as string);
            if (typeKind !== undefined && typeArguments && typeArguments.length === 1) {
                return typeKind === IntrinsicTypeKind.NoInfer ? getNoInferType(typeArguments[0]) : getStringMappingType(symbol, typeArguments[0]);
            }
        }
        const links = getSymbolLinks(symbol);
        const typeParameters = links.typeParameters!;
        const id = getTypeListId(typeArguments) + getAliasId(aliasSymbol, aliasTypeArguments);
        let instantiation = links.instantiations!.get(id);
        if (!instantiation) {
            links.instantiations!.set(id, instantiation = instantiateTypeWithAlias(type, createTypeMapper(typeParameters, fillMissingTypeArguments(typeArguments, typeParameters, getMinTypeArgumentCount(typeParameters), isInJSFile(symbol.valueDeclaration))), aliasSymbol, aliasTypeArguments));
        }
        return instantiation;
    }

    /**
     * Get type from reference to type alias. When a type alias is generic, the declared type of the type alias may include
     * references to the type parameters of the alias.
     * We replace those with the actual type arguments by instantiating the
     * declared type.
     * where the {@link TypeNode} lexically lies at, subject to ctxtual narrowings.
     * 
     * Instantiations are cached using the type identities of the type arguments as the key.
     */
    function getTypeFromTypeAliasReference(node: NodeWithTypeArguments, symbol: Symbol): Type {
        if (getCheckFlags(symbol) & CheckFlags.Unresolved) {
            const typeArguments = typeArgumentsFromTypeReferenceNode(node);
            const id = getAliasId(symbol, typeArguments);
            let errorType = errorTypes.get(id);
            if (!errorType) {
                errorType = createIntrinsicType(TypeFlags.Any, "error", /*objectFlags*/ undefined, `alias ${id}`);
                errorType.aliasSymbol = symbol;
                errorType.aliasTypeArguments = typeArguments;
                errorTypes.set(id, errorType);
            }
            return errorType;
        }
        const type = getDeclaredTypeOfSymbol(symbol);
        const typeParameters = getSymbolLinks(symbol).typeParameters;
        if (typeParameters) {
            const numTypeArguments = length(node.typeArguments);
            const minTypeArgumentCount = getMinTypeArgumentCount(typeParameters);
            if (numTypeArguments < minTypeArgumentCount || numTypeArguments > typeParameters.length) {
                error(
                    node,
                    minTypeArgumentCount === typeParameters.length ?
                        Diagnostics.Generic_type_0_requires_1_type_argument_s :
                        Diagnostics.Generic_type_0_requires_between_1_and_2_type_arguments,
                    symbolToString(symbol),
                    minTypeArgumentCount,
                    typeParameters.length,
                );
                return errorType;
            }
            // We refrain from associating a local type alias with an instantiation of a top-level type alias
            // because the local alias may end up being referenced in an inferred return type where it is not
            // accessible--which in turn may lead to a large structural expansion of the type when generating
            // a .d.ts file. See #43622 for an example.
            const aliasSymbol = getAliasSymbolForTypeNode(node);
            let newAliasSymbol = aliasSymbol && (isLocalTypeAlias(symbol) || !isLocalTypeAlias(aliasSymbol)) ? aliasSymbol : undefined;
            let aliasTypeArguments: Type[] | undefined;
            if (newAliasSymbol) {
                aliasTypeArguments = getTypeArgumentsForAliasSymbol(newAliasSymbol);
            }
            else if (isTypeReferenceType(node)) {
                const aliasSymbol = resolveTypeReferenceName(node, SymbolFlags.Alias, /*ignoreErrors*/ true);
                // refers to an alias import/export/reexport - by making sure we use the target as an aliasSymbol,
                // we ensure the exported symbol is used to refer to the type when it's reserialized later
                if (aliasSymbol && aliasSymbol !== unknownSymbol) {
                    const resolved = resolveAlias(aliasSymbol);
                    if (resolved && resolved.flags & SymbolFlags.TypeAlias) {
                        newAliasSymbol = resolved;
                        aliasTypeArguments = typeArgumentsFromTypeReferenceNode(node) || (typeParameters ? [] : undefined);
                    }
                }
            }
            return getTypeAliasInstantiation(symbol, typeArgumentsFromTypeReferenceNode(node), newAliasSymbol, aliasTypeArguments);
        }
        return checkNoTypeArguments(node, symbol) ? type : errorType;
    }

    function isLocalTypeAlias(symbol: Symbol) {
        const declaration = symbol.declarations?.find(isTypeAlias);
        return !!(declaration && getContainingFunction(declaration));
    }

    function getTypeReferenceName(node: TypeReferenceType): EntityNameOrEntityNameExpression | undefined {
        switch (node.kind) {
            case SyntaxKind.TypeReference:
                return node.typeName;
            case SyntaxKind.ExpressionWithTypeArguments:
                // We only support expressions that are simple qualified names. For other
                // expressions this produces undefined.
                const expr = node.expression;
                if (isEntityNameExpression(expr)) {
                    return expr;
                }
                // fall through;
        }

        return undefined;
    }

    function resolveTypeReferenceName(typeReference: TypeReferenceType, meaning: SymbolFlags, ignoreErrors?: boolean) {
        const name = getTypeReferenceName(typeReference);
        if (!name) {
            return unknownSymbol;
        }
        const symbol = resolveEntityName(name, meaning, ignoreErrors);
        return symbol && symbol !== unknownSymbol ? symbol :
            ignoreErrors ? unknownSymbol : getUnresolvedSymbolForEntityName(name);
    }

    /**
     * {@link getTypeReferenceType}.
     * where the {@link TypeNode} lexically lies at, subject to ctxtual narrowings.
     * 
     */
    function getTypeReferenceType(node: NodeWithTypeArguments, symbol: Symbol): Type {
        if (symbol === unknownSymbol) {
            return errorType;
        }
        symbol = getExpandoSymbol(symbol) || symbol;
        if (symbol.flags & (SymbolFlags.Class | SymbolFlags.Interface)) {
            return getTypeFromClassOrInterfaceReference(node, symbol);
        }
        if (symbol.flags & SymbolFlags.TypeAlias) {
            return getTypeFromTypeAliasReference(node, symbol);
        }
        // Get type from reference to named type that cannot be generic (enum or type parameter)
        const res = tryGetDeclaredTypeOfSymbol(symbol);
        if (res) {
            return checkNoTypeArguments(node, symbol) ? getRegularTypeOfLiteralType(res) : errorType;
        }
        const vwpt = (
            (() => { const flwNode = getFlowNodeVerbatim(node) ; return flwNode && getFlowPtPerspective(flwNode) ; })()
        ) ;
        if (symbol.flags & SymbolFlags.Value && isJSDocTypeReference(node)) {
            const jsdocType = getTypeFromJSDocValueReference(node, symbol);
            if (jsdocType) {
                return jsdocType;
            }
            else {
                // Resolve the type reference as a Type for the purpose of reporting errors.
                resolveTypeReferenceName(node, SymbolFlags.Type);
                return getTypeOfSymbol(symbol, vwpt);
            }
        }
        return errorType;
    }

    /**
     * A JSdoc TypeReference may be to a value, but resolve it as a type anyway.
     * where the {@link TypeNode} lexically lies at, subject to ctxtual narrowings.
     * Example: import('./b').ConstructorFunction
     */
    function getTypeFromJSDocValueReference(node: NodeWithTypeArguments, symbol: Symbol, vwpt: FlowPerspective | null ): Type | undefined {
        const links = getNodeLinks(node);
        if (!links.resolvedJSDocType) {
            const valueType = getTypeOfSymbol(symbol, vwpt);
            let typeType = valueType;
            if (symbol.valueDeclaration) {
                const isImportTypeWithQualifier = node.kind === SyntaxKind.ImportType && (node as ImportTypeNode).qualifier;
                // valueType might not have a symbol, eg, {import('./b').STRING_LITERAL}
                if (valueType.symbol && valueType.symbol !== symbol && isImportTypeWithQualifier) {
                    typeType = getTypeReferenceType(node, valueType.symbol);
                }
            }
            links.resolvedJSDocType = typeType;
        }
        return links.resolvedJSDocType;
    }

    function getNoInferType(type: Type) {
        return isNoInferTargetType(type) ? getOrCreateSubstitutionType(type, unknownType) : type;
    }

    function isNoInferTargetType(type: Type): boolean {
        // This is effectively a more conservative and predictable form of couldContainTypeVariables. We want to
        // preserve NoInfer<T> only for types that could contain type variables, but we don't want to exhaustively
        // examine all object type members.
        return !!(type.flags & TypeFlags.UnionOrIntersection && some((type as UnionOrIntersectionType).types, isNoInferTargetType) ||
            type.flags & TypeFlags.Substitution && !isNoInferType(type) && isNoInferTargetType((type as SubstitutionType).baseType) ||
            type.flags & TypeFlags.Object && !isEmptyAnonymousObjectType(type) ||
            type.flags & (TypeFlags.Instantiable & ~TypeFlags.Substitution) && !isPatternLiteralType(type));
    }

    function isNoInferType(type: Type) {
        // A NoInfer<T> type is represented as a substitution type with a TypeFlags.Unknown constraint.
        return !!(type.flags & TypeFlags.Substitution && (type as SubstitutionType).constraint.flags & TypeFlags.Unknown);
    }

    function getSubstitutionType(baseType: Type, constraint: Type) {
        return constraint.flags & TypeFlags.AnyOrUnknown || constraint === baseType || baseType.flags & TypeFlags.Any ?
            baseType :
            getOrCreateSubstitutionType(baseType, constraint);
    }

    function getOrCreateSubstitutionType(baseType: Type, constraint: Type) {
        const id = `${getTypeId(baseType)}>${getTypeId(constraint)}`;
        const cached = substitutionTypes.get(id);
        if (cached) {
            return cached;
        }
        const result = createType(TypeFlags.Substitution) as SubstitutionType;
        result.baseType = baseType;
        result.constraint = constraint;
        substitutionTypes.set(id, result);
        return result;
    }

    function getSubstitutionIntersection(substitutionType: SubstitutionType) {
        return isNoInferType(substitutionType) ? substitutionType.baseType : getIntersectionType([substitutionType.constraint, substitutionType.baseType]);
    }

    function isUnaryTupleTypeNode(node: TypeNode) {
        return node.kind === SyntaxKind.TupleType && (node as TupleTypeNode).elements.length === 1;
    }

    function getImpliedConstraint(type: Type, checkNode: TypeNode, extendsNode: TypeNode): Type | undefined {
        return isUnaryTupleTypeNode(checkNode) && isUnaryTupleTypeNode(extendsNode) ? getImpliedConstraint(type, (checkNode as TupleTypeNode).elements[0], (extendsNode as TupleTypeNode).elements[0]) :
            getActualTypeVariable(getTypeFromTypeNode(checkNode)) === getActualTypeVariable(type) ? getTypeFromTypeNode(extendsNode) :
            undefined;
    }

    function getConditionalFlowTypeOfType(type: Type, node: Node) {
        let constraints: Type[] | undefined;
        let covariant = true;
        while (node && !isStatement(node) && node.kind !== SyntaxKind.JSDoc) {
            const parent = node.parent;
            // only consider variance flipped by parameter locations - `keyof` types would usually be considered variance inverting, but
            // often get used in indexed accesses where they behave sortof invariantly, but our checking is lax
            if (parent.kind === SyntaxKind.Parameter) {
                covariant = !covariant;
            }
            // Always substitute on type parameters, regardless of variance, since even
            // in contravariant positions, they may rely on substituted constraints to be valid
            if ((covariant || type.flags & TypeFlags.TypeVariable) && parent.kind === SyntaxKind.ConditionalType && node === (parent as ConditionalTypeNode).trueType) {
                const constraint = getImpliedConstraint(type, (parent as ConditionalTypeNode).checkType, (parent as ConditionalTypeNode).extendsType);
                if (constraint) {
                    constraints = append(constraints, constraint);
                }
            }
            // Given a homomorphic mapped type { [K in keyof T]: XXX }, where T is constrained to an array or tuple type, in the
            // template type XXX, K has an added constraint of number | `${number}`.
            else if (type.flags & TypeFlags.TypeParameter && parent.kind === SyntaxKind.MappedType && !(parent as MappedTypeNode).nameType && node === (parent as MappedTypeNode).type) {
                const mappedType = getTypeFromTypeNode(parent as TypeNode) as MappedType;
                if (getTypeParameterFromMappedType(mappedType) === getActualTypeVariable(type)) {
                    const typeParameter = getHomomorphicTypeVariable(mappedType);
                    if (typeParameter) {
                        const constraint = getConstraintOfTypeParameter(typeParameter);
                        if (constraint && everyType(constraint, isArrayOrTupleType)) {
                            constraints = append(constraints, getUnionType([numberType, numericStringType]));
                        }
                    }
                }
            }
            node = parent;
        }
        return constraints ? getSubstitutionType(type, getIntersectionType(constraints)) : type;
    }

    function isJSDocTypeReference(node: Node): node is TypeReferenceNode {
        return !!(node.flags & NodeFlags.JSDoc) && (node.kind === SyntaxKind.TypeReference || node.kind === SyntaxKind.ImportType);
    }

    function checkNoTypeArguments(node: NodeWithTypeArguments, symbol?: Symbol) {
        if (node.typeArguments) {
            error(node, Diagnostics.Type_0_is_not_generic, symbol ? symbolToString(symbol) : (node as TypeReferenceNode).typeName ? declarationNameToString((node as TypeReferenceNode).typeName) : anon);
            return false;
        }
        return true;
    }

    function getIntendedTypeFromJSDocTypeReference(node: TypeReferenceNode): Type | undefined {
        if (isIdentifier(node.typeName)) {
            const typeArgs = node.typeArguments;
            switch (node.typeName.escapedText) {
                case "String":
                    checkNoTypeArguments(node);
                    return stringType;
                case "Number":
                    checkNoTypeArguments(node);
                    return numberType;
                case "Boolean":
                    checkNoTypeArguments(node);
                    return booleanType;
                case "Void":
                    checkNoTypeArguments(node);
                    return voidType;
                case "Undefined":
                    checkNoTypeArguments(node);
                    return undefinedType;
                case "Null":
                    checkNoTypeArguments(node);
                    return nullType;
                case "Function":
                case "function":
                    checkNoTypeArguments(node);
                    return globalFunctionType;
                case "array":
                    return !(typeArgs && typeArgs.length) && !noImplicitAny ? anyArrayType : undefined;
                case "promise":
                    return !(typeArgs && typeArgs.length) && !noImplicitAny ? createPromiseType(anyType) : undefined;
                case "Object":
                    if (typeArgs && typeArgs.length === 2) {
                        if (isJSDocIndexSignature(node)) {
                            const indexed = getTypeFromTypeNode(typeArgs[0]);
                            const target = getTypeFromTypeNode(typeArgs[1]);
                            const indexInfo = indexed === stringType || indexed === numberType ? [createIndexInfo(indexed, target, /*isReadonly*/ false)] : emptyArray;
                            return createAnonymousType(/*symbol*/ undefined, emptySymbols, emptyArray, emptyArray, indexInfo);
                        }
                        return anyType;
                    }
                    checkNoTypeArguments(node);
                    return !noImplicitAny ? anyType : undefined;
            }
        }
    }

    /**
     * query
     * the type which it would resolve to,
     * where the {@link TypeNode} lexically lies at, subject to ctxtual narrowings,
     * .
     * 
     */
    function getTypeFromJSDocNullableTypeNode(node: JSDocNullableType) {
        const type = getTypeFromTypeNode(node.type);
        return strictNullChecks ? getNullableType(type, TypeFlags.Null) : type;
    }

    /**
     * query
     * the type which it would resolve to,
     * where the {@link TypeNode} lexically lies at, subject to ctxtual narrowings,
     * .
     * 
     */
    function getTypeFromTypeReference(node: TypeReferenceType): Type {
        const links = getNodeLinks(node);
        if (!links.resolvedType) {
            // handle LS queries on the `const` in `x as const` by resolving to the type of `x`
            if (isConstTypeReference(node) && isAssertionExpression(node.parent)) {
                links.resolvedSymbol = unknownSymbol;
                return links.resolvedType = checkExpressionCached(node.parent.expression);
            }
            let symbol: Symbol | undefined;
            let type: Type | undefined;
            const meaning = SymbolFlags.Type;
            if (isJSDocTypeReference(node)) {
                type = getIntendedTypeFromJSDocTypeReference(node);
                if (!type) {
                    symbol = resolveTypeReferenceName(node, meaning, /*ignoreErrors*/ true);
                    if (symbol === unknownSymbol) {
                        symbol = resolveTypeReferenceName(node, meaning | SymbolFlags.Value);
                    }
                    else {
                        resolveTypeReferenceName(node, meaning); // Resolve again to mark errors, if any
                    }
                    type = getTypeReferenceType(node, symbol);
                }
            }
            if (!type) {
                symbol = resolveTypeReferenceName(node, meaning);
                type = getTypeReferenceType(node, symbol);
            }
            // Cache both the resolved symbol and the resolved type. The resolved symbol is needed when we check the
            // type reference in checkTypeReferenceNode.
            links.resolvedSymbol = symbol;
            links.resolvedType = type;
        }
        return links.resolvedType;
    }

    /**
     * query
     * the type which it would resolve to,
     * where the {@link TypeNode} lexically lies at, subject to ctxtual narrowings,
     * .
     * 
     */
    function typeArgumentsFromTypeReferenceNode(node: NodeWithTypeArguments): Type[] | undefined {
        return map(node.typeArguments, getTypeFromTypeNode);
    }

    /**
     * query
     * the type which it would resolve to,
     * where the {@link TypeNode} lexically lies at, subject to ctxtual narrowings,
     * .
     * 
     */
    function getTypeFromTypeQueryNode(node: TypeQueryNode): Type {
        const links = getNodeLinks(node);
        if (!links.resolvedType) {
            // TypeScript 1.0 spec (April 2014): 3.6.3
            // The expression is processed as an identifier expression (section 4.3)
            // or property access expression(section 4.10),
            // the widened type(section 3.9) of which becomes the result.
            const type = checkExpressionWithTypeArguments(node);
            links.resolvedType = getRegularTypeOfLiteralType(getWidenedType(type));
        }
        return links.resolvedType;
    }

    /**
     * query
     * the {@link Type type } which it would resolve to,
     * where the {@link TypeNode } lexically lies at, subject to ctxtual narrowings,
     * .
     * 
     */
    function getTypeFromTypeNode(...[node]: [node: TypeNode, nf ?:  GtptnFlags ]): Type
    { return ; }

    /**
     * query
     * the {@link Type type } which it would resolve to,
     * where the {@link TypeNode } lexically lies at, subject to ctxtual narrowings,
     * .
     * 
     */
    function getTypeFromLiteralTypeNode(node: LiteralTypeNode): Type {
        if (node.literal.kind === SyntaxKind.NullKeyword) {
            return nullType;
        }
        const links = getNodeLinks(node);
        if (!links.resolvedType) {
            links.resolvedType = getRegularTypeOfLiteralType(checkExpression(node.literal));
        }
        return links.resolvedType;
    }

    /**
     * query
     * the {@link Type type } which it would resolve to,
     * where the {@link TypeNode } lexically lies at, subject to ctxtual narrowings,
     * .
     * 
     */
    function getESSymbolLikeTypeForNode(node: Node) {
        if (isInJSFile(node) && isJSDocTypeExpression(node)) {
            const host = getJSDocHost(node);
            if (host) {
                node = getSingleVariableOfVariableStatement(host) || host;
            }
        }
        if (isValidESSymbolDeclaration(node)) {
            const symbol = isCommonJsExportPropertyAssignment(node) ? getSymbolOfNode((node as BinaryExpression).left) : getSymbolOfNode(node);
            if (symbol) {
                const links = getSymbolLinks(symbol);
                return links.uniqueESSymbolType || (links.uniqueESSymbolType = createUniqueESSymbolType(symbol));
            }
        }
        return esSymbolType;
    }

    /**
     * query
     * the type it would conform to,
     * where the {@link Expression} lexically lies at, subject to ctxtual narrowings,
     * .
     * 
     */
    function getPublicMembersOfEvaluatedTypeOf(s: Expression)
    : ImmutableJs.Set<Symbol>
    {
        const sAcTpe = getEvaluatedTypeOf(s) ;
        return (
            getPublicMembersOfType(sAcTpe)
        )
    }

    /**
     * query
     * the {@link Type type } which it would resolve to,
     * where the {@link TypeNode } lexically lies at, subject to ctxtual narrowings,
     * .
     * 
     */
    function getPublicMembersOfType(...[s, vp] : [...(
        | [s: Type              , vp    : FlowPerspective]
        | [s: IntrinsicType     , vp?   : FlowPerspective]
        | [s: ObjectType        , vp?   : FlowPerspective]
    ), flgs?: GepubmtFlags] )
    : ImmutableJs.Set<Symbol>
    {
        return (
            ImmutableJs.Set<Symbol>()
            .concat((
                (() => {
                    if (s.flags & TypeFlags.Object  ) {
                        return (s as (ObjectType  ) ).members?.values() ?? [] ;
                    }
                    return [] ;
                })()
            ) )
        )
    }

    /**
     * query
     * the type which it would resolve to,
     * where the {@link Symbol.declarations `Symbol`-proxied construct } lexically lies at, subject to ctxtual narrowings,
     * .
     * 
     */
    function getPublicMembersOfSymb(...[s, vp] : [s: Symbol, vp?: FlowPerspective, flgs?: GepubmtFlags] )
    : ImmutableJs.Set<Symbol>
    {
        return (
            ImmutableJs.Set<Symbol>()
            .concat(s.members?.values() ?? [] )
        )
    }

    function getPublicMembersSymbolsOfSymb(...[s,] : [s: Symbol, flgs?: GepubmtFlags] )
    : ImmutableJs.Set<Symbol>
    {
        return (
            ImmutableJs.Set<Symbol>()
            .concat(s.members?.values() ?? [] )
        )
    }

    function getNamedMembers(...[members,]: [ReadonlySymbolTable, ]): Symbol[]
    {
        let result: Symbol[] | undefined;
        members.forEach((symbol, id) => {
            if (isNamedMember(symbol, id )) {
                (result || (result = [])).push(symbol);
            }
        });
        return result || emptyArray;
    }

    function isNamedMember(...[member, escapedName] : [member: Symbol, escapedName: __String ]) {
        return !isReservedMemberName(escapedName) && symbolIsValue(member);
    }

    function getNamedOrIndexSignatureMembers(members: ReadonlySymbolTable): Symbol[] {
        const result = getNamedMembers(members);
        const index = getIndexSymbolFromSymbolTable(members);
        return index ? concatenate(result, [index]) : result;
    }

    ;

    function resolveStructuredTypeMembers(type: StructuredType): ResolvedType {
        if (!(type as ResolvedType).members) {
            if (type.flags & TypeFlags.Object) {
                if ((type as ObjectType).objectFlags & ObjectFlags.Reference) {
                    resolveTypeReferenceMembers(type as TypeReference);
                }
                else if ((type as ObjectType).objectFlags & ObjectFlags.ClassOrInterface) {
                    resolveClassOrInterfaceMembers(type as InterfaceType);
                }
                else if ((type as ReverseMappedType).objectFlags & ObjectFlags.ReverseMapped) {
                    resolveReverseMappedTypeMembers(type as ReverseMappedType);
                }
                else if ((type as ObjectType).objectFlags & ObjectFlags.Anonymous) {
                    resolveAnonymousTypeMembers(type as AnonymousType);
                }
                else if ((type as MappedType).objectFlags & ObjectFlags.Mapped) {
                    resolveMappedTypeMembers(type as MappedType);
                }
                else {
                    Debug.fail("Unhandled object type " + Debug.formatObjectFlags(type.objectFlags));
                }
            }
            else if (type.flags & TypeFlags.Union) {
                resolveUnionTypeMembers(type as UnionType);
            }
            else if (type.flags & TypeFlags.Intersection) {
                resolveIntersectionTypeMembers(type as IntersectionType);
            }
            else {
                Debug.fail("Unhandled type " + Debug.formatTypeFlags(type.flags));
            }
        }
        return type as ResolvedType;
    }

    /** Return properties of an object type or an empty array for other types */
    function getPropertiesOfObjectType(type: Type): Symbol[] {
        if (type.flags & TypeFlags.Object) {
            return resolveStructuredTypeMembers(type as ObjectType).properties;
        }
        return emptyArray;
    }

    /** If the given type is an object type and that type has a property by the given name,
     * return the symbol for that property. Otherwise return undefined.
     */
    function getPropertyOfObjectType(type: Type, name: __String): Symbol | undefined {
        if (type.flags & TypeFlags.Object) {
            const resolved = resolveStructuredTypeMembers(type as ObjectType);
            const symbol = resolved.members.get(name);
            if (symbol && symbolIsValue(symbol)) {
                return symbol;
            }
        }
    }

    function getPropertiesOfUnionOrIntersectionType(type: UnionOrIntersectionType): Symbol[] {
        if (!type.resolvedProperties) {
            const members = createSymbolTable();
            for (const current of type.types) {
                for (const prop of getPropertiesOfType(current)) {
                    if (!members.has(prop.escapedName)) {
                        const combinedProp = getPropertyOfUnionOrIntersectionType(type, prop.escapedName, /*skipObjectFunctionPropertyAugment*/ !!(type.flags & TypeFlags.Intersection));
                        if (combinedProp) {
                            members.set(prop.escapedName, combinedProp);
                        }
                    }
                }
                // The properties of a union type are those that are present in all constituent types, so
                // we only need to check the properties of the first type without index signature
                if (type.flags & TypeFlags.Union && getIndexInfosOfType(current).length === 0) {
                    break;
                }
            }
            type.resolvedProperties = getNamedMembers(members);
        }
        return type.resolvedProperties;
    }

    function getPropertiesOfType(type: Type): Symbol[] {
        type = getReducedApparentType(type);
        return type.flags & TypeFlags.UnionOrIntersection ?
            getPropertiesOfUnionOrIntersectionType(type as UnionType) :
            getPropertiesOfObjectType(type);
    }

    function forEachPropertyOfType(type: Type, action: (symbol: Symbol, escapedName: __String) => void): void {
        type = getReducedApparentType(type);
        if (type.flags & TypeFlags.StructuredType) {
            resolveStructuredTypeMembers(type as StructuredType).members.forEach((symbol, escapedName) => {
                if (isNamedMember(symbol, escapedName)) {
                    action(symbol, escapedName);
                }
            });
        }
    }

    function isTypeInvalidDueToUnionDiscriminant(contextualType: Type, obj: ObjectLiteralExpression | JsxAttributes): boolean {
        const list = obj.properties as NodeArray<ObjectLiteralElementLike | JsxAttributeLike>;
        return list.some(property => {
            const nameType = property.name && (isJsxNamespacedName(property.name) ? getStringLiteralType(getTextOfJsxAttributeName(property.name)) : getLiteralTypeFromPropertyName(property.name));
            const name = nameType && isTypeUsableAsPropertyName(nameType) ? getPropertyNameFromType(nameType) : undefined;
            const expected = name === undefined ? undefined : getTypeOfPropertyOfType(contextualType, name);
            return !!expected && isLiteralType(expected) && !isTypeAssignableTo(getTypeOfNode(property), expected);
        });
    }

    function getAllPossiblePropertiesOfTypes(types: readonly Type[]): Symbol[] {
        const unionType = getUnionType(types);
        if (!(unionType.flags & TypeFlags.Union)) {
            return getAugmentedPropertiesOfType(unionType);
        }

        const props = createSymbolTable();
        for (const memberType of types) {
            for (const { escapedName } of getAugmentedPropertiesOfType(memberType)) {
                if (!props.has(escapedName)) {
                    const prop = createUnionOrIntersectionProperty(unionType as UnionType, escapedName);
                    // May be undefined if the property is private
                    if (prop) props.set(escapedName, prop);
                }
            }
        }
        return arrayFrom(props.values());
    }

    function getConstraintOfType(type: InstantiableType | UnionOrIntersectionType): Type | undefined {
        return type.flags & TypeFlags.TypeParameter ? getConstraintOfTypeParameter(type as TypeParameter) :
            type.flags & TypeFlags.IndexedAccess ? getConstraintOfIndexedAccess(type as IndexedAccessType) :
            type.flags & TypeFlags.Conditional ? getConstraintOfConditionalType(type as ConditionalType) :
            getBaseConstraintOfType(type);
    }

    function getConstraintOfTypeParameter(typeParameter: TypeParameter): Type | undefined {
        return hasNonCircularBaseConstraint(typeParameter) ? getConstraintFromTypeParameter(typeParameter) : undefined;
    }

    function isConstMappedType(type: MappedType, depth: number): boolean {
        const typeVariable = getHomomorphicTypeVariable(type);
        return !!typeVariable && isConstTypeVariable(typeVariable, depth);
    }

    function isConstTypeVariable(type: Type | undefined, depth = 0): boolean {
        return depth < 5 && !!(type && (
            type.flags & TypeFlags.TypeParameter && some((type as TypeParameter).symbol?.declarations, d => hasSyntacticModifier(d, ModifierFlags.Const)) ||
            type.flags & TypeFlags.UnionOrIntersection && some((type as UnionOrIntersectionType).types, t => isConstTypeVariable(t, depth)) ||
            type.flags & TypeFlags.IndexedAccess && isConstTypeVariable((type as IndexedAccessType).objectType, depth + 1) ||
            type.flags & TypeFlags.Conditional && isConstTypeVariable(getConstraintOfConditionalType(type as ConditionalType), depth + 1) ||
            type.flags & TypeFlags.Substitution && isConstTypeVariable((type as SubstitutionType).baseType, depth) ||
            getObjectFlags(type) & ObjectFlags.Mapped && isConstMappedType(type as MappedType, depth) ||
            isGenericTupleType(type) && findIndex(getElementTypes(type), (t, i) => !!(type.target.elementFlags[i] & ElementFlags.Variadic) && isConstTypeVariable(t, depth)) >= 0
        ));
    }

    function getConstraintOfIndexedAccess(type: IndexedAccessType) {
        return hasNonCircularBaseConstraint(type) ? getConstraintFromIndexedAccess(type) : undefined;
    }

    function getSimplifiedTypeOrConstraint(type: Type) {
        const simplified = getSimplifiedType(type, /*writing*/ false);
        return simplified !== type ? simplified : getConstraintOfType(type);
    }

    function getConstraintFromIndexedAccess(type: IndexedAccessType) {
        if (isMappedTypeGenericIndexedAccess(type)) {
            // For indexed access types of the form { [P in K]: E }[X], where K is non-generic and X is generic,
            // we substitute an instantiation of E where P is replaced with X.
            return substituteIndexedMappedType(type.objectType as MappedType, type.indexType);
        }
        const indexConstraint = getSimplifiedTypeOrConstraint(type.indexType);
        if (indexConstraint && indexConstraint !== type.indexType) {
            const indexedAccess = getIndexedAccessTypeOrUndefined(type.objectType, indexConstraint, type.accessFlags);
            if (indexedAccess) {
                return indexedAccess;
            }
        }
        const objectConstraint = getSimplifiedTypeOrConstraint(type.objectType);
        if (objectConstraint && objectConstraint !== type.objectType) {
            return getIndexedAccessTypeOrUndefined(objectConstraint, type.indexType, type.accessFlags);
        }
        return undefined;
    }

    function getDefaultConstraintOfConditionalType(type: ConditionalType) {
        if (!type.resolvedDefaultConstraint) {
            // An `any` branch of a conditional type would normally be viral - specifically, without special handling here,
            // a conditional type with a single branch of type `any` would be assignable to anything, since it's constraint would simplify to
            // just `any`. This result is _usually_ unwanted - so instead here we elide an `any` branch from the constraint type,
            // in effect treating `any` like `never` rather than `unknown` in this location.
            const trueConstraint = getInferredTrueTypeFromConditionalType(type);
            const falseConstraint = getFalseTypeFromConditionalType(type);
            type.resolvedDefaultConstraint = isTypeAny(trueConstraint) ? falseConstraint : isTypeAny(falseConstraint) ? trueConstraint : getUnionType([trueConstraint, falseConstraint]);
        }
        return type.resolvedDefaultConstraint;
    }

    function getConstraintOfDistributiveConditionalType(type: ConditionalType): Type | undefined {
        if (type.resolvedConstraintOfDistributive !== undefined) {
            return type.resolvedConstraintOfDistributive || undefined;
        }

        // Check if we have a conditional type of the form 'T extends U ? X : Y', where T is a constrained
        // type parameter. If so, create an instantiation of the conditional type where T is replaced
        // with its constraint. We do this because if the constraint is a union type it will be distributed
        // over the conditional type and possibly reduced. For example, 'T extends undefined ? never : T'
        // removes 'undefined' from T.
        // We skip returning a distributive constraint for a restrictive instantiation of a conditional type
        // as the constraint for all type params (check type included) have been replace with `unknown`, which
        // is going to produce even more false positive/negative results than the distribute constraint already does.
        // Please note: the distributive constraint is a kludge for emulating what a negated type could to do filter
        // a union - once negated types exist and are applied to the conditional false branch, this "constraint"
        // likely doesn't need to exist.
        if (type.root.isDistributive && type.restrictiveInstantiation !== type) {
            const simplified = getSimplifiedType(type.checkType, /*writing*/ false);
            const constraint = simplified === type.checkType ? getConstraintOfType(simplified) : simplified;
            if (constraint && constraint !== type.checkType) {
                const instantiated = getConditionalTypeInstantiation(type, prependTypeMapping(type.root.checkType, constraint, type.mapper), /*forConstraint*/ true);
                if (!(instantiated.flags & TypeFlags.Never)) {
                    type.resolvedConstraintOfDistributive = instantiated;
                    return instantiated;
                }
            }
        }
        type.resolvedConstraintOfDistributive = false;
        return undefined;
    }

    function getConstraintFromConditionalType(type: ConditionalType) {
        return getConstraintOfDistributiveConditionalType(type) || getDefaultConstraintOfConditionalType(type);
    }

    function getConstraintOfConditionalType(type: ConditionalType) {
        return hasNonCircularBaseConstraint(type) ? getConstraintFromConditionalType(type) : undefined;
    }

    function getEffectiveConstraintOfIntersection(types: readonly Type[], targetIsUnion: boolean) {
        let constraints: Type[] | undefined;
        let hasDisjointDomainType = false;
        for (const t of types) {
            if (t.flags & TypeFlags.Instantiable) {
                // We keep following constraints as long as we have an instantiable type that is known
                // not to be circular or infinite (hence we stop on index access types).
                let constraint = getConstraintOfType(t);
                while (constraint && constraint.flags & (TypeFlags.TypeParameter | TypeFlags.Index | TypeFlags.Conditional)) {
                    constraint = getConstraintOfType(constraint);
                }
                if (constraint) {
                    constraints = append(constraints, constraint);
                    if (targetIsUnion) {
                        constraints = append(constraints, t);
                    }
                }
            }
            else if (t.flags & TypeFlags.DisjointDomains || isEmptyAnonymousObjectType(t)) {
                hasDisjointDomainType = true;
            }
        }
        // If the target is a union type or if we are intersecting with types belonging to one of the
        // disjoint domains, we may end up producing a constraint that hasn't been examined before.
        if (constraints && (targetIsUnion || hasDisjointDomainType)) {
            if (hasDisjointDomainType) {
                // We add any types belong to one of the disjoint domains because they might cause the final
                // intersection operation to reduce the union constraints.
                for (const t of types) {
                    if (t.flags & TypeFlags.DisjointDomains || isEmptyAnonymousObjectType(t)) {
                        constraints = append(constraints, t);
                    }
                }
            }
            // The source types were normalized; ensure the result is normalized too.
            return getNormalizedType(getIntersectionType(constraints, IntersectionFlags.NoConstraintReduction), /*writing*/ false);
        }
        return undefined;
    }

    function getBaseConstraintOfType(type: Type): Type | undefined {
        if (type.flags & (TypeFlags.InstantiableNonPrimitive | TypeFlags.UnionOrIntersection | TypeFlags.TemplateLiteral | TypeFlags.StringMapping) || isGenericTupleType(type)) {
            const constraint = getResolvedBaseConstraint(type as InstantiableType | UnionOrIntersectionType);
            return constraint !== noConstraintType && constraint !== circularConstraintType ? constraint : undefined;
        }
        return type.flags & TypeFlags.Index ? stringNumberSymbolType : undefined;
    }

    /**
     * This is similar to `getBaseConstraintOfType` except it returns the input type if there's no base constraint, instead of `undefined`
     * It also doesn't map indexes to `string`, as where this is used this would be unneeded (and likely undesirable)
     */
    function getBaseConstraintOrType(type: Type) {
        return getBaseConstraintOfType(type) || type;
    }

    function hasNonCircularBaseConstraint(type: InstantiableType): boolean {
        return getResolvedBaseConstraint(type) !== circularConstraintType;
    }

    /**
     * Return the resolved base constraint of a type variable. The noConstraintType singleton is returned if the
     * type variable has no constraint, and the circularConstraintType singleton is returned if the constraint
     * circularly references the type variable.
     */
    function getResolvedBaseConstraint(type: InstantiableType | UnionOrIntersectionType): Type {
        if (type.resolvedBaseConstraint) {
            return type.resolvedBaseConstraint;
        }
        const stack: object[] = [];
        return type.resolvedBaseConstraint = getImmediateBaseConstraint(type);

        function getImmediateBaseConstraint(t: Type): Type {
            if (!t.immediateBaseConstraint) {
                if (!pushTypeResolution(t, TypeSystemPropertyName.ImmediateBaseConstraint)) {
                    return circularConstraintType;
                }
                let result;
                // We always explore at least 10 levels of nested constraints. Thereafter, we continue to explore
                // up to 50 levels of nested constraints provided there are no "deeply nested" types on the stack
                // (i.e. no types for which five instantiations have been recorded on the stack). If we reach 50
                // levels of nesting, we are presumably exploring a repeating pattern with a long cycle that hasn't
                // yet triggered the deeply nested limiter. We have no test cases that actually get to 50 levels of
                // nesting, so it is effectively just a safety stop.
                const identity = getRecursionIdentity(t);
                if (stack.length < 10 || stack.length < 50 && !contains(stack, identity)) {
                    stack.push(identity);
                    result = computeBaseConstraint(getSimplifiedType(t, /*writing*/ false));
                    stack.pop();
                }
                if (!popTypeResolution()) {
                    if (t.flags & TypeFlags.TypeParameter) {
                        const errorNode = getConstraintDeclaration(t as TypeParameter);
                        if (errorNode) {
                            const diagnostic = error(errorNode, Diagnostics.Type_parameter_0_has_a_circular_constraint, typeToString(t));
                            if (currentNode && !isNodeDescendantOf(errorNode, currentNode) && !isNodeDescendantOf(currentNode, errorNode)) {
                                addRelatedInfo(diagnostic, createDiagnosticForNode(currentNode, Diagnostics.Circularity_originates_in_type_at_this_location));
                            }
                        }
                    }
                    result = circularConstraintType;
                }
                t.immediateBaseConstraint ??= result || noConstraintType;
            }
            return t.immediateBaseConstraint;
        }

        function getBaseConstraint(t: Type): Type | undefined {
            const c = getImmediateBaseConstraint(t);
            return c !== noConstraintType && c !== circularConstraintType ? c : undefined;
        }

        function computeBaseConstraint(t: Type): Type | undefined {
            if (t.flags & TypeFlags.TypeParameter) {
                const constraint = getConstraintFromTypeParameter(t as TypeParameter);
                return (t as TypeParameter).isThisType || !constraint ?
                    constraint :
                    getBaseConstraint(constraint);
            }
            if (t.flags & TypeFlags.UnionOrIntersection) {
                const types = (t as UnionOrIntersectionType).types;
                const baseTypes: Type[] = [];
                let different = false;
                for (const type of types) {
                    const baseType = getBaseConstraint(type);
                    if (baseType) {
                        if (baseType !== type) {
                            different = true;
                        }
                        baseTypes.push(baseType);
                    }
                    else {
                        different = true;
                    }
                }
                if (!different) {
                    return t;
                }
                return t.flags & TypeFlags.Union && baseTypes.length === types.length ? getUnionType(baseTypes) :
                    t.flags & TypeFlags.Intersection && baseTypes.length ? getIntersectionType(baseTypes) :
                    undefined;
            }
            if (t.flags & TypeFlags.Index) {
                return stringNumberSymbolType;
            }
            if (t.flags & TypeFlags.TemplateLiteral) {
                const types = (t as TemplateLiteralType).types;
                const constraints = mapDefined(types, getBaseConstraint);
                return constraints.length === types.length ? getTemplateLiteralType((t as TemplateLiteralType).texts, constraints) : stringType;
            }
            if (t.flags & TypeFlags.StringMapping) {
                const constraint = getBaseConstraint((t as StringMappingType).type);
                return constraint && constraint !== (t as StringMappingType).type ? getStringMappingType((t as StringMappingType).symbol, constraint) : stringType;
            }
            if (t.flags & TypeFlags.IndexedAccess) {
                if (isMappedTypeGenericIndexedAccess(t)) {
                    // For indexed access types of the form { [P in K]: E }[X], where K is non-generic and X is generic,
                    // we substitute an instantiation of E where P is replaced with X.
                    return getBaseConstraint(substituteIndexedMappedType((t as IndexedAccessType).objectType as MappedType, (t as IndexedAccessType).indexType));
                }
                const baseObjectType = getBaseConstraint((t as IndexedAccessType).objectType);
                const baseIndexType = getBaseConstraint((t as IndexedAccessType).indexType);
                const baseIndexedAccess = baseObjectType && baseIndexType && getIndexedAccessTypeOrUndefined(baseObjectType, baseIndexType, (t as IndexedAccessType).accessFlags);
                return baseIndexedAccess && getBaseConstraint(baseIndexedAccess);
            }
            if (t.flags & TypeFlags.Conditional) {
                const constraint = getConstraintFromConditionalType(t as ConditionalType);
                return constraint && getBaseConstraint(constraint);
            }
            if (t.flags & TypeFlags.Substitution) {
                return getBaseConstraint(getSubstitutionIntersection(t as SubstitutionType));
            }
            if (isGenericTupleType(t)) {
                // We substitute constraints for variadic elements only when the constraints are array types or
                // non-variadic tuple types as we want to avoid further (possibly unbounded) recursion.
                const newElements = map(getElementTypes(t), (v, i) => {
                    const constraint = v.flags & TypeFlags.TypeParameter && t.target.elementFlags[i] & ElementFlags.Variadic && getBaseConstraint(v) || v;
                    return constraint !== v && everyType(constraint, c => isArrayOrTupleType(c) && !isGenericTupleType(c)) ? constraint : v;
                });
                return createTupleType(newElements, t.target.elementFlags, t.target.readonly, t.target.labeledElementDeclarations);
            }
            return t;
        }
    }

    function getApparentTypeOfIntersectionType(type: IntersectionType, thisArgument: Type) {
        if (type === thisArgument) {
            return type.resolvedApparentType || (type.resolvedApparentType = getTypeWithThisArgument(type, thisArgument, /*needApparentType*/ true));
        }
        const key = `I${getTypeId(type)},${getTypeId(thisArgument)}`;
        return getCachedType(key) ?? setCachedType(key, getTypeWithThisArgument(type, thisArgument, /*needApparentType*/ true));
    }

    function getResolvedTypeParameterDefault(typeParameter: TypeParameter): Type | undefined {
        if (!typeParameter.default) {
            if (typeParameter.target) {
                const targetDefault = getResolvedTypeParameterDefault(typeParameter.target);
                typeParameter.default = targetDefault ? instantiateType(targetDefault, typeParameter.mapper) : noConstraintType;
            }
            else {
                // To block recursion, set the initial value to the resolvingDefaultType.
                typeParameter.default = resolvingDefaultType;
                const defaultDeclaration = typeParameter.symbol && forEach(typeParameter.symbol.declarations, decl => isTypeParameterDeclaration(decl) && decl.default);
                const defaultType = defaultDeclaration ? getTypeFromTypeNode(defaultDeclaration) : noConstraintType;
                if (typeParameter.default === resolvingDefaultType) {
                    // If we have not been called recursively, set the correct default type.
                    typeParameter.default = defaultType;
                }
            }
        }
        else if (typeParameter.default === resolvingDefaultType) {
            // If we are called recursively for this type parameter, mark the default as circular.
            typeParameter.default = circularConstraintType;
        }
        return typeParameter.default;
    }

    /**
     * Gets the default type for a type parameter.
     *
     * If the type parameter is the result of an instantiation, this gets the instantiated
     * default type of its target. If the type parameter has no default type or the default is
     * circular, `undefined` is returned.
     */
    function getDefaultFromTypeParameter(typeParameter: TypeParameter): Type | undefined {
        const defaultType = getResolvedTypeParameterDefault(typeParameter);
        return defaultType !== noConstraintType && defaultType !== circularConstraintType ? defaultType : undefined;
    }

    function hasNonCircularTypeParameterDefault(typeParameter: TypeParameter) {
        return getResolvedTypeParameterDefault(typeParameter) !== circularConstraintType;
    }

    /**
     * Indicates whether the declaration of a typeParameter has a default type.
     */
    function hasTypeParameterDefault(typeParameter: TypeParameter): boolean {
        return !!(typeParameter.symbol && forEach(typeParameter.symbol.declarations, decl => isTypeParameterDeclaration(decl) && decl.default));
    }

    ;
    function getApparentTypeOfMappedType(type: MappedType) {
        return type.resolvedApparentType || (type.resolvedApparentType = getResolvedApparentTypeOfMappedType(type));
    }

    function getResolvedApparentTypeOfMappedType(type: MappedType): Type {
        const target = (type.target ?? type) as MappedType;
        const typeVariable = getHomomorphicTypeVariable(target);
        if (typeVariable && !target.declaration.nameType) {
            // We have a homomorphic mapped type or an instantiation of a homomorphic mapped type, i.e. a type
            // of the form { [P in keyof T]: X }. Obtain the modifiers type (the T of the keyof T), and if it is
            // another generic mapped type, recursively obtain its apparent type. Otherwise, obtain its base
            // constraint. Then, if every constituent of the base constraint is an array or tuple type, apply
            // this mapped type to the base constraint. It is safe to recurse when the modifiers type is a
            // mapped type because we protect again circular constraints in getTypeFromMappedTypeNode.
            const modifiersType = getModifiersTypeFromMappedType(type);
            const baseConstraint = isGenericMappedType(modifiersType) ? getApparentTypeOfMappedType(modifiersType) : getBaseConstraintOfType(modifiersType);
            if (baseConstraint && everyType(baseConstraint, t => isArrayOrTupleType(t) || isArrayOrTupleOrIntersection(t))) {
                return instantiateType(target, prependTypeMapping(typeVariable, baseConstraint, type.mapper));
            }
        }
        return type;
    }

    function isArrayOrTupleOrIntersection(type: Type) {
        return !!(type.flags & TypeFlags.Intersection) && every((type as IntersectionType).types, isArrayOrTupleType);
    }

    function isMappedTypeGenericIndexedAccess(type: Type) {
        let objectType;
        return !!(type.flags & TypeFlags.IndexedAccess && getObjectFlags(objectType = (type as IndexedAccessType).objectType) & ObjectFlags.Mapped &&
            !isGenericMappedType(objectType) && isGenericIndexType((type as IndexedAccessType).indexType) &&
            !(getMappedTypeModifiers(objectType as MappedType) & MappedTypeModifiers.ExcludeOptional) && !(objectType as MappedType).declaration.nameType);
    }

    /**
     * For a type parameter, return the base constraint of the type parameter. For the string, number,
     * boolean, and symbol primitive types, return the corresponding object types. Otherwise return the
     * type itself.
     */
    function getApparentType(...[type, fwpt] : [type: Type, vwpt: FlowPerspective]): Type {
        return (
            // TODO
            getApparentType1(type, { realmOwnerSymb: getCtxtualGlobalObj(fwpt), } )
        ) ;
    }
    function getApparentType1(...[type, { realmOwnerSymb, }] : (
        ArgsWithOptions<[type: Type,], {
            //
            realmOwnerSymb: Symbol ,
        }>
    )): Type {
        const t = type.flags & TypeFlags.Instantiable ? getBaseConstraintOfType(type) || unknownType : type;
        const objectFlags = getObjectFlags(t);
        return objectFlags & ObjectFlags.Mapped ? getApparentTypeOfMappedType(t as MappedType) :
            objectFlags & ObjectFlags.Reference && t !== type ? getTypeWithThisArgument(t, type) :
            t.flags & TypeFlags.Intersection ? getApparentTypeOfIntersectionType(t as IntersectionType, type) :
            t.flags & TypeFlags.StringLike ? globalStringType :
            t.flags & TypeFlags.NumberLike ? globalNumberType :
            t.flags & TypeFlags.BigIntLike ? getGlobalBigIntType() :
            t.flags & TypeFlags.BooleanLike ? globalBooleanType :
            t.flags & TypeFlags.ESSymbolLike ? getGlobalESSymbolType() :
            t.flags & TypeFlags.NonPrimitive ? emptyObjectType :
            t.flags & TypeFlags.Index ? stringNumberSymbolType :
            t.flags & TypeFlags.Unknown && !strictNullChecks ? emptyObjectType :
            t;
    }

    function getReducedApparentType(type: Type): Type {
        // Since getApparentType may return a non-reduced union or intersection type, we need to perform
        // type reduction both before and after obtaining the apparent type. For example, given a type parameter
        // 'T extends A | B', the type 'T & X' becomes 'A & X | B & X' after obtaining the apparent type, and
        // that type may need further reduction to remove empty intersections.
        return getReducedType(getApparentType(getReducedType(type)));
    }

    ;

    /**
     * query
     * the type it would conform to,
     * where the {@link Expression} lexically lies at, subject to ctxtual narrowings,
     * .
     * 
     */
    function getEvaluatedTypeOf(node: Expression, ): Type | undefined
    { return ; }

    function getContextualTypedTermsFacts(node: Expression, )
    {
        ;

    }

    var resolveName = createNameResolver({
        // compilerOptions,
        // requireSymbol,
        // argumentsSymbol,
        // globals,
        // getSymbolOfDeclaration,
        // error,
        // getRequiresScopeChangeCache,
        // setRequiresScopeChangeCache,
        // lookup: getSymbol,
        // onPropertyWithInvalidInitializer: checkAndReportErrorForInvalidInitializer,
        // onFailedToResolveSymbol,
        // onSuccessfullyResolvedSymbol,
    });

    //#endregion

    ;

    //#region 

    function getDeclarationContainer(node: Node): Node {
        return findAncestor(getRootDeclaration(node), node => {
            switch (node.kind) {
                case SyntaxKind.VariableDeclaration:
                case SyntaxKind.VariableDeclarationList:
                case SyntaxKind.ImportSpecifier:
                case SyntaxKind.NamedImports:
                case SyntaxKind.NamespaceImport:
                case SyntaxKind.ImportClause:
                    return false;
                default:
                    return true;
            }
        })!.parent;
    }

    function getTypeOfPrototypeProperty(prototype: Symbol): Type {
        // TypeScript 1.0 spec (April 2014): 8.4
        // Every class automatically contains a static property member named 'prototype',
        // the type of which is an instantiation of the class type with type Any supplied as a type argument for each type parameter.
        // It is an error to explicitly declare a static property member with the name 'prototype'.
        const classType = getDeclaredTypeOfSymbol(getParentOfSymbol(prototype)!) as InterfaceType;
        return classType.typeParameters ? createTypeReference(classType as GenericType, map(classType.typeParameters, _ => anyType)) : classType;
    }

    // Return the type of the given property in the given type, or undefined if no such property exists
    function getTypeOfPropertyOfType(type: Type, name: __String): Type | undefined {
        const prop = getPropertyOfType(type, name);
        return prop ? getTypeOfSymbol(prop) : undefined;
    }

    /**
     * Return the type of the matching property or index signature in the given type, or undefined
     * if no matching property or index signature exists. Add optionality to index signature types.
     */
    function getTypeOfPropertyOrIndexSignatureOfType(type: Type, name: __String): Type | undefined {
        let propType;
        return getTypeOfPropertyOfType(type, name) ||
            (propType = getApplicableIndexInfoForName(type, name)?.type) &&
                addOptionality(propType, /*isProperty*/ true, /*isOptional*/ true);
    }

    function isTypeAny(type: Type | undefined) {
        return type && (type.flags & TypeFlags.Any) !== 0;
    }

    function isErrorType(type: Type) {
        // The only 'any' types that have alias symbols are those manufactured by getTypeFromTypeAliasReference for
        // a reference to an unresolved symbol. We want those to behave like the errorType.
        return type === errorType || !!(type.flags & TypeFlags.Any && type.aliasSymbol);
    }

    // Return the type of a binding element parent. We check SymbolLinks first to see if a type has been
    // assigned by contextual typing.
    function getTypeForBindingElementParent(node: BindingElementGrandparent, checkMode: CheckMode) {
        if (checkMode !== CheckMode.Normal) {
            return getTypeForVariableLikeDeclaration(node, /*includeOptionality*/ false, checkMode);
        }
        const symbol = getSymbolOfDeclaration(node);
        return symbol && getSymbolLinks(symbol).type || getTypeForVariableLikeDeclaration(node, /*includeOptionality*/ false, checkMode);
    }

    function getRestType(source: Type, properties: PropertyName[], symbol: Symbol | undefined): Type {
        source = filterType(source, t => !(t.flags & TypeFlags.Nullable));
        if (source.flags & TypeFlags.Never) {
            return emptyObjectType;
        }
        if (source.flags & TypeFlags.Union) {
            return mapType(source, t => getRestType(t, properties, symbol));
        }

        let omitKeyType = getUnionType(map(properties, getLiteralTypeFromPropertyName));

        const spreadableProperties: Symbol[] = [];
        const unspreadableToRestKeys: Type[] = [];

        for (const prop of getPropertiesOfType(source)) {
            const literalTypeFromProperty = getLiteralTypeFromProperty(prop, TypeFlags.StringOrNumberLiteralOrUnique);
            if (
                !isTypeAssignableTo(literalTypeFromProperty, omitKeyType)
                && !(getDeclarationModifierFlagsFromSymbol(prop) & (ModifierFlags.Private | ModifierFlags.Protected))
                && isSpreadableProperty(prop)
            ) {
                spreadableProperties.push(prop);
            }
            else {
                unspreadableToRestKeys.push(literalTypeFromProperty);
            }
        }

        if (isGenericObjectType(source) || isGenericIndexType(omitKeyType)) {
            if (unspreadableToRestKeys.length) {
                // If the type we're spreading from has properties that cannot
                // be spread into the rest type (e.g. getters, methods), ensure
                // they are explicitly omitted, as they would in the non-generic case.
                omitKeyType = getUnionType([omitKeyType, ...unspreadableToRestKeys]);
            }

            if (omitKeyType.flags & TypeFlags.Never) {
                return source;
            }

            const omitTypeAlias = getGlobalOmitSymbol();
            if (!omitTypeAlias) {
                return errorType;
            }
            return getTypeAliasInstantiation(omitTypeAlias, [source, omitKeyType]);
        }
        const members = createSymbolTable();
        for (const prop of spreadableProperties) {
            members.set(prop.escapedName, getSpreadSymbol(prop, /*readonly*/ false));
        }
        const result = createAnonymousType(symbol, members, emptyArray, emptyArray, getIndexInfosOfType(source));
        result.objectFlags |= ObjectFlags.ObjectRestType;
        return result;
    }

    function isGenericTypeWithUndefinedConstraint(type: Type) {
        return !!(type.flags & TypeFlags.Instantiable) && maybeTypeOfKind(getBaseConstraintOfType(type) || unknownType, TypeFlags.Undefined);
    }

    function getNonUndefinedType(type: Type) {
        const typeOrConstraint = someType(type, isGenericTypeWithUndefinedConstraint) ? mapType(type, t => t.flags & TypeFlags.Instantiable ? getBaseConstraintOrType(t) : t) : type;
        return getTypeWithFacts(typeOrConstraint, TypeFacts.NEUndefined);
    }

    // Determine the control flow type associated with a destructuring declaration or assignment. The following
    // forms of destructuring are possible:
    //   let { x } = obj;  // BindingElement
    //   let [ x ] = obj;  // BindingElement
    //   { x } = obj;      // ShorthandPropertyAssignment
    //   { x: v } = obj;   // PropertyAssignment
    //   [ x ] = obj;      // Expression
    // We construct a synthetic element access expression corresponding to 'obj.x' such that the control
    // flow analyzer doesn't have to handle all the different syntactic forms.
    function getFlowTypeOfDestructuring(node: BindingElement | PropertyAssignment | ShorthandPropertyAssignment | Expression, declaredType: Type) {
        const reference = getSyntheticElementAccess(node);
        return reference ? getFlowTypeOfReference(reference, declaredType) : declaredType;
    }

    function getSyntheticElementAccess(node: BindingElement | PropertyAssignment | ShorthandPropertyAssignment | Expression): ElementAccessExpression | undefined {
        const parentAccess = getParentElementAccess(node);
        if (parentAccess && canHaveFlowNode(parentAccess) && parentAccess.flowNode) {
            const propName = getDestructuringPropertyName(node);
            if (propName) {
                const literal = setTextRangeWorker(parseNodeFactory.createStringLiteral(propName), node);
                const lhsExpr = isLeftHandSideExpression(parentAccess) ? parentAccess : parseNodeFactory.createParenthesizedExpression(parentAccess);
                const result = setTextRangeWorker(parseNodeFactory.createElementAccessExpression(lhsExpr, literal), node);
                setParent(literal, result);
                setParent(result, node);
                if (lhsExpr !== parentAccess) {
                    setParent(lhsExpr, result);
                }
                result.flowNode = parentAccess.flowNode;
                return result;
            }
        }
    }

    function getParentElementAccess(node: BindingElement | PropertyAssignment | ShorthandPropertyAssignment | Expression) {
        const ancestor = node.parent.parent;
        switch (ancestor.kind) {
            case SyntaxKind.BindingElement:
            case SyntaxKind.PropertyAssignment:
                return getSyntheticElementAccess(ancestor as BindingElement | PropertyAssignment);
            case SyntaxKind.ArrayLiteralExpression:
                return getSyntheticElementAccess(node.parent as Expression);
            case SyntaxKind.VariableDeclaration:
                return (ancestor as VariableDeclaration).initializer;
            case SyntaxKind.BinaryExpression:
                return (ancestor as BinaryExpression).right;
        }
    }

    function getDestructuringPropertyName(node: BindingElement | PropertyAssignment | ShorthandPropertyAssignment | Expression) {
        const parent = node.parent;
        if (node.kind === SyntaxKind.BindingElement && parent.kind === SyntaxKind.ObjectBindingPattern) {
            return getLiteralPropertyNameText((node as BindingElement).propertyName || (node as BindingElement).name as Identifier);
        }
        if (node.kind === SyntaxKind.PropertyAssignment || node.kind === SyntaxKind.ShorthandPropertyAssignment) {
            return getLiteralPropertyNameText((node as PropertyAssignment | ShorthandPropertyAssignment).name);
        }
        return "" + ((parent as BindingPattern | ArrayLiteralExpression).elements as NodeArray<Node>).indexOf(node);
    }

    function getLiteralPropertyNameText(name: PropertyName) {
        const type = getLiteralTypeFromPropertyName(name);
        return type.flags & (TypeFlags.StringLiteral | TypeFlags.NumberLiteral) ? "" + (type as StringLiteralType | NumberLiteralType).value : undefined;
    }

    /** Return the inferred type for a binding element */
    function getTypeForBindingElement(declaration: BindingElement): Type | undefined {
        const checkMode = declaration.dotDotDotToken ? CheckMode.RestBindingElement : CheckMode.Normal;
        const parentType = getTypeForBindingElementParent(declaration.parent.parent, checkMode);
        return parentType && getBindingElementTypeFromParentType(declaration, parentType, /*noTupleBoundsCheck*/ false);
    }

    function getBindingElementTypeFromParentType(declaration: BindingElement, parentType: Type, noTupleBoundsCheck: boolean): Type {
        // If an any type was inferred for parent, infer that for the binding element
        if (isTypeAny(parentType)) {
            return parentType;
        }
        const pattern = declaration.parent;
        // Relax null check on ambient destructuring parameters, since the parameters have no implementation and are just documentation
        if (strictNullChecks && declaration.flags & NodeFlags.Ambient && isPartOfParameterDeclaration(declaration)) {
            parentType = getNonNullableType(parentType);
        }
        // Filter `undefined` from the type we check against if the parent has an initializer and that initializer is not possibly `undefined`
        else if (strictNullChecks && pattern.parent.initializer && !(hasTypeFacts(getTypeOfInitializer(pattern.parent.initializer), TypeFacts.EQUndefined))) {
            parentType = getTypeWithFacts(parentType, TypeFacts.NEUndefined);
        }

        const accessFlags = AccessFlags.ExpressionPosition | (noTupleBoundsCheck || hasDefaultValue(declaration) ? AccessFlags.AllowMissing : 0);
        let type: Type | undefined;
        if (pattern.kind === SyntaxKind.ObjectBindingPattern) {
            if (declaration.dotDotDotToken) {
                parentType = getReducedType(parentType);
                if (parentType.flags & TypeFlags.Unknown || !isValidSpreadType(parentType)) {
                    error(declaration, Diagnostics.Rest_types_may_only_be_created_from_object_types);
                    return errorType;
                }
                const literalMembers: PropertyName[] = [];
                for (const element of pattern.elements) {
                    if (!element.dotDotDotToken) {
                        literalMembers.push(element.propertyName || element.name as Identifier);
                    }
                }
                type = getRestType(parentType, literalMembers, declaration.symbol);
            }
            else {
                // Use explicitly specified property name ({ p: xxx } form), or otherwise the implied name ({ p } form)
                const name = declaration.propertyName || declaration.name as Identifier;
                const indexType = getLiteralTypeFromPropertyName(name);
                const declaredType = getIndexedAccessType(parentType, indexType, accessFlags, name);
                type = getFlowTypeOfDestructuring(declaration, declaredType);
            }
        }
        else {
            // This elementType will be used if the specific property corresponding to this index is not
            // present (aka the tuple element property). This call also checks that the parentType is in
            // fact an iterable or array (depending on target language).
            const elementType = checkIteratedTypeOrElementType(IterationUse.Destructuring | (declaration.dotDotDotToken ? 0 : IterationUse.PossiblyOutOfBounds), parentType, undefinedType, pattern);
            const index = pattern.elements.indexOf(declaration);
            if (declaration.dotDotDotToken) {
                // If the parent is a tuple type, the rest element has a tuple type of the
                // remaining tuple element types. Otherwise, the rest element has an array type with same
                // element type as the parent type.
                const baseConstraint = mapType(parentType, t => t.flags & TypeFlags.InstantiableNonPrimitive ? getBaseConstraintOrType(t) : t);
                type = everyType(baseConstraint, isTupleType) ?
                    mapType(baseConstraint, t => sliceTupleType(t as TupleTypeReference, index)) :
                    createArrayType(elementType);
            }
            else if (isArrayLikeType(parentType)) {
                const indexType = getNumberLiteralType(index);
                const declaredType = getIndexedAccessTypeOrUndefined(parentType, indexType, accessFlags, declaration.name) || errorType;
                type = getFlowTypeOfDestructuring(declaration, declaredType);
            }
            else {
                type = elementType;
            }
        }
        if (!declaration.initializer) {
            return type;
        }
        if (getEffectiveTypeAnnotationNode(walkUpBindingElementsAndPatterns(declaration))) {
            // In strict null checking mode, if a default value of a non-undefined type is specified, remove
            // undefined from the final type.
            return strictNullChecks && !(hasTypeFacts(checkDeclarationInitializer(declaration, CheckMode.Normal), TypeFacts.IsUndefined)) ? getNonUndefinedType(type) : type;
        }
        return widenTypeInferredFromInitializer(declaration, getUnionType([getNonUndefinedType(type), checkDeclarationInitializer(declaration, CheckMode.Normal)], UnionReduction.Subtype));
    }

    function getTypeForDeclarationFromJSDocComment(declaration: Node) {
        const jsdocType = getJSDocType(declaration);
        if (jsdocType) {
            return getTypeFromTypeNode(jsdocType);
        }
        return undefined;
    }

    function isNullOrUndefined(node: Expression) {
        const expr = skipParentheses(node, /*excludeJSDocTypeAssertions*/ true);
        return expr.kind === SyntaxKind.NullKeyword || expr.kind === SyntaxKind.Identifier && getResolvedSymbol(expr as Identifier) === undefinedSymbol;
    }

    function isEmptyArrayLiteral(node: Expression) {
        const expr = skipParentheses(node, /*excludeJSDocTypeAssertions*/ true);
        return expr.kind === SyntaxKind.ArrayLiteralExpression && (expr as ArrayLiteralExpression).elements.length === 0;
    }

    function addOptionality(type: Type, isProperty = false, isOptional = true): Type {
        return strictNullChecks && isOptional ? getOptionalType(type, isProperty) : type;
    }

    //#endregion

    ;

    function getContainingQualifiedNameNode(node: QualifiedName) {
        while (isQualifiedName(node.parent)) {
            node = node.parent;
        }
        return node;
    }

    function tryGetQualifiedNameAsValue(node: QualifiedName) {
        let left: Identifier | QualifiedName = getFirstIdentifier(node);
        let symbol = resolveName(left, left, SymbolFlags.Value, /*nameNotFoundMessage*/ undefined, /*isUse*/ true);
        if (!symbol) {
            return undefined;
        }
        while (isQualifiedName(left.parent)) {
            const type = getTypeOfSymbol(symbol);
            symbol = getPropertyOfType(type, left.parent.right.escapedText);
            if (!symbol) {
                return undefined;
            }
            left = left.parent;
        }
        return symbol;
    }

    /**
     * Resolves a qualified name and any involved aliases.
     */
    function resolveEntityName(name: EntityNameOrEntityNameExpression, meaning: SymbolFlags, ignoreErrors?: boolean, dontResolveAlias?: boolean, location?: Node): Symbol | undefined {
        if (nodeIsMissing(name)) {
            return undefined;
        }

        const namespaceMeaning = SymbolFlags.Namespace | (isInJSFile(name) ? meaning & SymbolFlags.Value : 0);
        let symbol: Symbol | undefined;
        if (name.kind === SyntaxKind.Identifier) {
            const message = meaning === namespaceMeaning || nodeIsSynthesized(name) ? Diagnostics.Cannot_find_namespace_0 : getCannotFindNameDiagnosticForName(getFirstIdentifier(name));
            const symbolFromJSPrototype = isInJSFile(name) && !nodeIsSynthesized(name) ? resolveEntityNameFromAssignmentDeclaration(name, meaning) : undefined;
            symbol = getMergedSymbol(resolveName(location || name, name, meaning, ignoreErrors || symbolFromJSPrototype ? undefined : message, /*isUse*/ true, /*excludeGlobals*/ false));
            if (!symbol) {
                return getMergedSymbol(symbolFromJSPrototype);
            }
        }
        else if (name.kind === SyntaxKind.QualifiedName || name.kind === SyntaxKind.PropertyAccessExpression) {
            const left = name.kind === SyntaxKind.QualifiedName ? name.left : name.expression;
            const right = name.kind === SyntaxKind.QualifiedName ? name.right : name.name;
            let namespace = resolveEntityName(left, namespaceMeaning, ignoreErrors, /*dontResolveAlias*/ false, location);
            if (!namespace || nodeIsMissing(right)) {
                return undefined;
            }
            else if (namespace === unknownSymbol) {
                return namespace;
            }
            if (
                namespace.valueDeclaration &&
                isInJSFile(namespace.valueDeclaration) &&
                getEmitModuleResolutionKind(compilerOptions) !== ModuleResolutionKind.Bundler &&
                isVariableDeclaration(namespace.valueDeclaration) &&
                namespace.valueDeclaration.initializer &&
                isCommonJsRequire(namespace.valueDeclaration.initializer)
            ) {
                const moduleName = (namespace.valueDeclaration.initializer as CallExpression).arguments[0] as StringLiteral;
                const moduleSym = resolveExternalModuleName(moduleName, moduleName);
                if (moduleSym) {
                    const resolvedModuleSymbol = resolveExternalModuleSymbol(moduleSym);
                    if (resolvedModuleSymbol) {
                        namespace = resolvedModuleSymbol;
                    }
                }
            }
            symbol = getMergedSymbol(getSymbol(getExportsOfSymbol(namespace), right.escapedText, meaning));
            if (!symbol && (namespace.flags & SymbolFlags.Alias)) {
                // `namespace` can be resolved further if there was a symbol merge with a re-export
                symbol = getMergedSymbol(getSymbol(getExportsOfSymbol(resolveAlias(namespace)), right.escapedText, meaning));
            }
            if (!symbol) {
                if (!ignoreErrors) {
                    const namespaceName = getFullyQualifiedName(namespace);
                    const declarationName = declarationNameToString(right);
                    const suggestionForNonexistentModule = getSuggestedSymbolForNonexistentModule(right, namespace);
                    if (suggestionForNonexistentModule) {
                        error(right, Diagnostics._0_has_no_exported_member_named_1_Did_you_mean_2, namespaceName, declarationName, symbolToString(suggestionForNonexistentModule));
                        return undefined;
                    }

                    const containingQualifiedName = isQualifiedName(name) && getContainingQualifiedNameNode(name);
                    const canSuggestTypeof = globalObjectType // <-- can't pull on types if global types aren't initialized yet
                        && (meaning & SymbolFlags.Type)
                        && containingQualifiedName
                        && !isTypeOfExpression(containingQualifiedName.parent)
                        && tryGetQualifiedNameAsValue(containingQualifiedName);
                    if (canSuggestTypeof) {
                        error(
                            containingQualifiedName,
                            Diagnostics._0_refers_to_a_value_but_is_being_used_as_a_type_here_Did_you_mean_typeof_0,
                            entityNameToString(containingQualifiedName),
                        );
                        return undefined;
                    }

                    if (meaning & SymbolFlags.Namespace && isQualifiedName(name.parent)) {
                        const exportedTypeSymbol = getMergedSymbol(getSymbol(getExportsOfSymbol(namespace), right.escapedText, SymbolFlags.Type));
                        if (exportedTypeSymbol) {
                            error(
                                name.parent.right,
                                Diagnostics.Cannot_access_0_1_because_0_is_a_type_but_not_a_namespace_Did_you_mean_to_retrieve_the_type_of_the_property_1_in_0_with_0_1,
                                symbolToString(exportedTypeSymbol),
                                unescapeLeadingUnderscores(name.parent.right.escapedText),
                            );
                            return undefined;
                        }
                    }

                    error(right, Diagnostics.Namespace_0_has_no_exported_member_1, namespaceName, declarationName);
                }
                return undefined;
            }
        }
        else {
            Debug.assertNever(name, "Unknown entity name kind.");
        }
        if (!nodeIsSynthesized(name) && isEntityName(name) && (symbol.flags & SymbolFlags.Alias || name.parent.kind === SyntaxKind.ExportAssignment)) {
            markSymbolOfAliasDeclarationIfTypeOnly(getAliasDeclarationFromName(name), symbol, /*finalTarget*/ undefined, /*overwriteEmpty*/ true);
        }
        return (symbol.flags & meaning) || dontResolveAlias ? symbol : resolveAlias(symbol);
    }

    ;

    //#region GDTCI

    /**
     * Returns true if the interface given by the symbol is free of "this" references.
     *
     * Specifically, the result is true if the interface itself contains no references
     * to "this" in its body, if all base types are interfaces,
     * and if none of the base interfaces have a "this" type.
     */
    function isThislessInterface(symbol: Symbol): boolean {
        if (!symbol.declarations) {
            return true;
        }
        for (const declaration of symbol.declarations) {
            if (declaration.kind === SyntaxKind.InterfaceDeclaration) {
                if (declaration.flags & NodeFlags.ContainsThis) {
                    return false;
                }
                const baseTypeNodes = getInterfaceBaseTypeNodes(declaration as InterfaceDeclaration);
                if (baseTypeNodes) {
                    for (const node of baseTypeNodes) {
                        if (isEntityNameExpression(node.expression)) {
                            const baseSymbol = resolveEntityName(node.expression, SymbolFlags.Type, /*ignoreErrors*/ true);
                            if (!baseSymbol || !(baseSymbol.flags & SymbolFlags.Interface) || getDeclaredTypeOfClassOrInterface(baseSymbol).thisType) {
                                return false;
                            }
                        }
                    }
                }
            }
        }
        return true;
    }

    function getDeclaredTypeOfClassOrInterface(symbol: Symbol): InterfaceType {
        let links = getSymbolLinks(symbol);
        const originalLinks = links;
        if (!links.declaredType) {
            const kind = symbol.flags & SymbolFlags.Class ? ObjectFlags.Class : ObjectFlags.Interface;
            const merged = mergeJSSymbols(symbol, symbol.valueDeclaration && getAssignedClassSymbol(symbol.valueDeclaration));
            if (merged) {
                // note:we overwrite links because we just cloned the symbol
                symbol = merged;
                links = merged.links;
            }

            const type = originalLinks.declaredType = links.declaredType = createObjectType(kind, symbol) as InterfaceType;
            const outerTypeParameters = getOuterTypeParametersOfClassOrInterface(symbol);
            const localTypeParameters = getLocalTypeParametersOfClassOrInterfaceOrTypeAlias(symbol);
            // A class or interface is generic if it has type parameters or a "this" type. We always give classes a "this" type
            // because it is not feasible to analyze all members to determine if the "this" type escapes the class (in particular,
            // property types inferred from initializers and method return types inferred from return statements are very hard
            // to exhaustively analyze). We give interfaces a "this" type if we can't definitely determine that they are free of
            // "this" references.
            if (outerTypeParameters || localTypeParameters || kind === ObjectFlags.Class || !isThislessInterface(symbol)) {
                type.objectFlags |= ObjectFlags.Reference;
                type.typeParameters = concatenate(outerTypeParameters, localTypeParameters);
                type.outerTypeParameters = outerTypeParameters;
                type.localTypeParameters = localTypeParameters;
                (type as GenericType).instantiations = new Map<string, TypeReference>();
                (type as GenericType).instantiations.set(getTypeListId(type.typeParameters), type as GenericType);
                (type as GenericType).target = type as GenericType;
                (type as GenericType).resolvedTypeArguments = type.typeParameters;
                type.thisType = createTypeParameter(symbol);
                type.thisType.isThisType = true;
                type.thisType.constraint = type;
            }
        }
        return links.declaredType as InterfaceType;
    }

    function getDeclaredTypeOfTypeAlias(symbol: Symbol): Type {
        const links = getSymbolLinks(symbol);
        if (!links.declaredType) {
            // Note that we use the links object as the target here because the symbol object is used as the unique
            // identity for resolution of the 'type' property in SymbolLinks.
            if (!pushTypeResolution(symbol, TypeSystemPropertyName.DeclaredType)) {
                return errorType;
            }

            const declaration = Debug.checkDefined(symbol.declarations?.find(isTypeAlias), "Type alias symbol with no valid declaration found");
            const typeNode = isJSDocTypeAlias(declaration) ? declaration.typeExpression : declaration.type;
            // If typeNode is missing, we will error in checkJSDocTypedefTag.
            let type = typeNode ? getTypeFromTypeNode(typeNode) : errorType;
            if (popTypeResolution()) {
                const typeParameters = getLocalTypeParametersOfClassOrInterfaceOrTypeAlias(symbol);
                if (typeParameters) {
                    // Initialize the instantiation cache for generic type aliases. The declared type corresponds to
                    // an instantiation of the type alias with the type parameters supplied as type arguments.
                    links.typeParameters = typeParameters;
                    links.instantiations = new Map<string, Type>();
                    links.instantiations.set(getTypeListId(typeParameters), type);
                }
                if (type === intrinsicMarkerType && symbol.escapedName === "BuiltinIteratorReturn") {
                    type = getBuiltinIteratorReturnType();
                }
            }
            else {
                type = errorType;
                if (declaration.kind === SyntaxKind.JSDocEnumTag) {
                    error(declaration.typeExpression.type, Diagnostics.Type_alias_0_circularly_references_itself, symbolToString(symbol));
                }
                else {
                    error(isNamedDeclaration(declaration) ? declaration.name || declaration : declaration, Diagnostics.Type_alias_0_circularly_references_itself, symbolToString(symbol));
                }
            }
            links.declaredType ??= type;
        }
        return links.declaredType;
    }

    function getBaseTypeOfEnumLikeType(type: Type) {
        return type.flags & TypeFlags.EnumLike && type.symbol.flags & SymbolFlags.EnumMember ? getDeclaredTypeOfSymbol(getParentOfSymbol(type.symbol)!) : type;
    }

    function getDeclaredTypeOfEnum(symbol: Symbol): Type {
        const links = getSymbolLinks(symbol);
        if (!links.declaredType) {
            const memberTypeList: Type[] = [];
            if (symbol.declarations) {
                for (const declaration of symbol.declarations) {
                    if (declaration.kind === SyntaxKind.EnumDeclaration) {
                        for (const member of (declaration as EnumDeclaration).members) {
                            if (hasBindableName(member)) {
                                const memberSymbol = getSymbolOfDeclaration(member);
                                const value = getEnumMemberValue(member).value;
                                const memberType = getFreshTypeOfLiteralType(
                                    value !== undefined ?
                                        getEnumLiteralType(value, getSymbolId(symbol), memberSymbol) :
                                        createComputedEnumType(memberSymbol),
                                );
                                getSymbolLinks(memberSymbol).declaredType = memberType;
                                memberTypeList.push(getRegularTypeOfLiteralType(memberType));
                            }
                        }
                    }
                }
            }
            const enumType = memberTypeList.length ?
                getUnionType(memberTypeList, UnionReduction.Literal, symbol, /*aliasTypeArguments*/ undefined) :
                createComputedEnumType(symbol);
            if (enumType.flags & TypeFlags.Union) {
                enumType.flags |= TypeFlags.EnumLiteral;
                enumType.symbol = symbol;
            }
            links.declaredType = enumType;
        }
        return links.declaredType;
    }

    function createComputedEnumType(symbol: Symbol) {
        const regularType = createTypeWithSymbol(TypeFlags.Enum, symbol) as EnumType;
        const freshType = createTypeWithSymbol(TypeFlags.Enum, symbol) as EnumType;
        regularType.regularType = regularType;
        regularType.freshType = freshType;
        freshType.regularType = regularType;
        freshType.freshType = freshType;
        return regularType;
    }

    function getDeclaredTypeOfEnumMember(symbol: Symbol): Type {
        const links = getSymbolLinks(symbol);
        if (!links.declaredType) {
            const enumType = getDeclaredTypeOfEnum(getParentOfSymbol(symbol)!);
            if (!links.declaredType) {
                links.declaredType = enumType;
            }
        }
        return links.declaredType;
    }

    function getDeclaredTypeOfTypeParameter(symbol: Symbol): TypeParameter {
        const links = getSymbolLinks(symbol);
        return links.declaredType || (links.declaredType = createTypeParameter(symbol));
    }

    function getDeclaredTypeOfAlias(symbol: Symbol): Type {
        const links = getSymbolLinks(symbol);
        return links.declaredType || (links.declaredType = getDeclaredTypeOfSymbol(resolveAlias(symbol)));
    }

    function getDeclaredTypeOfSymbol(symbol: Symbol): Type {
        return tryGetDeclaredTypeOfSymbol(symbol) || errorType;
    }

    function tryGetDeclaredTypeOfSymbol(symbol: Symbol): Type | undefined {
        if (symbol.flags & (SymbolFlags.Class | SymbolFlags.Interface)) {
            return getDeclaredTypeOfClassOrInterface(symbol);
        }
        if (symbol.flags & SymbolFlags.TypeAlias) {
            return getDeclaredTypeOfTypeAlias(symbol);
        }
        if (symbol.flags & SymbolFlags.TypeParameter) {
            return getDeclaredTypeOfTypeParameter(symbol);
        }
        if (symbol.flags & SymbolFlags.Enum) {
            return getDeclaredTypeOfEnum(symbol);
        }
        if (symbol.flags & SymbolFlags.EnumMember) {
            return getDeclaredTypeOfEnumMember(symbol);
        }
        if (symbol.flags & SymbolFlags.Alias) {
            return getDeclaredTypeOfAlias(symbol);
        }
        return undefined;
    }

    ;
    /**
     * A type is free of this references if it's the any, string, number, boolean, symbol, or void keyword, a string
     * literal type, an array with an element type that is free of this references, or a type reference that is
     * free of this references.
     */
    function isThislessType(node: TypeNode): boolean {
        switch (node.kind) {
            case SyntaxKind.AnyKeyword:
            case SyntaxKind.UnknownKeyword:
            case SyntaxKind.StringKeyword:
            case SyntaxKind.NumberKeyword:
            case SyntaxKind.BigIntKeyword:
            case SyntaxKind.BooleanKeyword:
            case SyntaxKind.SymbolKeyword:
            case SyntaxKind.ObjectKeyword:
            case SyntaxKind.VoidKeyword:
            case SyntaxKind.UndefinedKeyword:
            case SyntaxKind.NeverKeyword:
            case SyntaxKind.LiteralType:
                return true;
            case SyntaxKind.ArrayType:
                return isThislessType((node as ArrayTypeNode).elementType);
            case SyntaxKind.TypeReference:
                return !(node as TypeReferenceNode).typeArguments || (node as TypeReferenceNode).typeArguments!.every(isThislessType);
        }
        return false;
    }

    /** A type parameter is thisless if its constraint is thisless, or if it has no constraint. */
    function isThislessTypeParameter(node: TypeParameterDeclaration) {
        const constraint = getEffectiveConstraintOfTypeParameter(node);
        return !constraint || isThislessType(constraint);
    }

    /**
     * A variable-like declaration is free of this references if it has a type annotation
     * that is thisless, or if it has no type annotation and no initializer (and is thus of type any).
     */
    function isThislessVariableLikeDeclaration(node: VariableLikeDeclaration): boolean {
        const typeNode = getEffectiveTypeAnnotationNode(node);
        return typeNode ? isThislessType(typeNode) : !hasInitializer(node);
    }

    /**
     * A function-like declaration is considered free of `this` references if it has a return type
     * annotation that is free of this references and if each parameter is thisless and if
     * each type parameter (if present) is thisless.
     */
    function isThislessFunctionLikeDeclaration(node: FunctionLikeDeclaration): boolean {
        const returnType = getEffectiveReturnTypeNode(node);
        const typeParameters = getEffectiveTypeParameterDeclarations(node);
        return (node.kind === SyntaxKind.Constructor || (!!returnType && isThislessType(returnType))) &&
            node.parameters.every(isThislessVariableLikeDeclaration) &&
            typeParameters.every(isThislessTypeParameter);
    }

    /**
     * Returns true if the class or interface member given by the symbol is free of "this" references. The
     * function may return false for symbols that are actually free of "this" references because it is not
     * feasible to perform a complete analysis in all cases. In particular, property members with types
     * inferred from their initializers and function members with inferred return types are conservatively
     * assumed not to be free of "this" references.
     */
    function isThisless(symbol: Symbol): boolean {
        if (symbol.declarations && symbol.declarations.length === 1) {
            const declaration = symbol.declarations[0];
            if (declaration) {
                switch (declaration.kind) {
                    case SyntaxKind.PropertyDeclaration:
                    case SyntaxKind.PropertySignature:
                        return isThislessVariableLikeDeclaration(declaration as VariableLikeDeclaration);
                    case SyntaxKind.MethodDeclaration:
                    case SyntaxKind.MethodSignature:
                    case SyntaxKind.Constructor:
                    case SyntaxKind.GetAccessor:
                    case SyntaxKind.SetAccessor:
                        return isThislessFunctionLikeDeclaration(declaration as FunctionLikeDeclaration | AccessorDeclaration);
                }
            }
        }
        return false;
    }


    // The mappingThisOnly flag indicates that the only type parameter being mapped is "this". When the flag is true,
    // we check symbols to see if we can quickly conclude they are free of "this" references, thus needing no instantiation.
    function createInstantiatedSymbolTable(symbols: Symbol[], mapper: TypeMapper, mappingThisOnly: boolean): SymbolTable {
        const result = createSymbolTable();
        for (const symbol of symbols) {
            result.set(symbol.escapedName, mappingThisOnly && isThisless(symbol) ? symbol : instantiateSymbol(symbol, mapper));
        }
        return result;
    }

    function addInheritedMembers(symbols: SymbolTable, baseSymbols: Symbol[]) {
        for (const base of baseSymbols) {
            if (isStaticPrivateIdentifierProperty(base)) {
                continue;
            }
            const derived = symbols.get(base.escapedName);
            if (
                !derived
                // non-constructor/static-block assignment declarations are ignored here; they're not treated as overrides
                || derived.valueDeclaration
                    && isBinaryExpression(derived.valueDeclaration)
                    && !isConstructorDeclaredProperty(derived)
                    && !getContainingClassStaticBlock(derived.valueDeclaration)
            ) {
                symbols.set(base.escapedName, base);
                symbols.set(base.escapedName, base);
            }
        }
    }

    function isStaticPrivateIdentifierProperty(s: Symbol): boolean {
        return !!s.valueDeclaration && isPrivateIdentifierClassElementDeclaration(s.valueDeclaration) && isStatic(s.valueDeclaration);
    }

    function resolveDeclaredMembers(type: InterfaceType): InterfaceTypeWithDeclaredMembers {
        if (!(type as InterfaceTypeWithDeclaredMembers).declaredProperties) {
            const symbol = type.symbol;
            const members = getMembersOfSymbol(symbol);
            (type as InterfaceTypeWithDeclaredMembers).declaredProperties = getNamedMembers(members);
            // Start with signatures at empty array in case of recursive types
            (type as InterfaceTypeWithDeclaredMembers).declaredCallSignatures = emptyArray;
            (type as InterfaceTypeWithDeclaredMembers).declaredConstructSignatures = emptyArray;
            (type as InterfaceTypeWithDeclaredMembers).declaredIndexInfos = emptyArray;

            (type as InterfaceTypeWithDeclaredMembers).declaredCallSignatures = getSignaturesOfSymbol(members.get(InternalSymbolName.Call));
            (type as InterfaceTypeWithDeclaredMembers).declaredConstructSignatures = getSignaturesOfSymbol(members.get(InternalSymbolName.New));
            (type as InterfaceTypeWithDeclaredMembers).declaredIndexInfos = getIndexInfosOfSymbol(symbol);
        }
        return type as InterfaceTypeWithDeclaredMembers;
    }

    /**
     * Indicates whether a declaration name is definitely late-bindable.
     * A declaration name is only late-bindable if:
     * - It is a `ComputedPropertyName`.
     * - Its expression is an `Identifier` or either a `PropertyAccessExpression` an
     * `ElementAccessExpression` consisting only of these same three types of nodes.
     * - The type of its expression is a string or numeric literal type, or is a `unique symbol` type.
     */
    function isLateBindableName(node: DeclarationName): node is LateBoundName {
        return isLateBindableAST(node)
            && isTypeUsableAsPropertyName(isComputedPropertyName(node) ? checkComputedPropertyName(node) : checkExpressionCached((node as ElementAccessExpression).argumentExpression));
    }

    function isLateBindableIndexSignature(node: DeclarationName): node is LateBoundName {
        return isLateBindableAST(node)
            && isTypeUsableAsIndexSignature(isComputedPropertyName(node) ? checkComputedPropertyName(node) : checkExpressionCached((node as ElementAccessExpression).argumentExpression));
    }

    function isLateBindableAST(node: DeclarationName) {
        if (!isComputedPropertyName(node) && !isElementAccessExpression(node)) {
            return false;
        }
        const expr = isComputedPropertyName(node) ? node.expression : node.argumentExpression;
        return isEntityNameExpression(expr);
    }

    function isTypeUsableAsIndexSignature(type: Type): boolean {
        return isTypeAssignableTo(type, stringNumberSymbolType);
    }

    function isLateBoundName(name: __String): boolean {
        return (name as string).charCodeAt(0) === CharacterCodes._ &&
            (name as string).charCodeAt(1) === CharacterCodes._ &&
            (name as string).charCodeAt(2) === CharacterCodes.at;
    }

    /**
     * Indicates whether a declaration has a late-bindable dynamic name.
     */
    function hasLateBindableName(node: Declaration): node is LateBoundDeclaration | LateBoundBinaryExpressionDeclaration {
        const name = getNameOfDeclaration(node);
        return !!name && isLateBindableName(name);
    }

    function hasLateBindableIndexSignature(node: Declaration) {
        const name = getNameOfDeclaration(node);
        return !!name && isLateBindableIndexSignature(name);
    }

    /**
     * Indicates whether a declaration has an early-bound name or a dynamic name that can be late-bound.
     */
    function hasBindableName(node: Declaration) {
        return !hasDynamicName(node) || hasLateBindableName(node);
    }

    /**
     * Indicates whether a declaration name is a dynamic name that cannot be late-bound.
     */
    function isNonBindableDynamicName(node: DeclarationName) {
        return isDynamicName(node) && !isLateBindableName(node);
    }

    /**
     * Adds a declaration to a late-bound dynamic member. This performs the same function for
     * late-bound members that `addDeclarationToSymbol` in binder.ts performs for early-bound
     * members.
     */
    function addDeclarationToLateBoundSymbol(symbol: Symbol, member: LateBoundDeclaration | BinaryExpression, symbolFlags: SymbolFlags) {
        Debug.assert(!!(getCheckFlags(symbol) & CheckFlags.Late), "Expected a late-bound symbol.");
        symbol.flags |= symbolFlags;
        getSymbolLinks(member.symbol).lateSymbol = symbol;
        if (!symbol.declarations) {
            symbol.declarations = [member];
        }
        else if (!member.symbol.isReplaceableByMethod) {
            symbol.declarations.push(member);
        }
        if (symbolFlags & SymbolFlags.Value) {
            if (!symbol.valueDeclaration || symbol.valueDeclaration.kind !== member.kind) {
                symbol.valueDeclaration = member;
            }
        }
    }

    /**
     * Performs late-binding of a dynamic member. This performs the same function for
     * late-bound members that `declareSymbol` in binder.ts performs for early-bound
     * members.
     *
     * If a symbol is a dynamic name from a computed property, we perform an additional "late"
     * binding phase to attempt to resolve the name for the symbol from the type of the computed
     * property's expression. If the type of the expression is a string-literal, numeric-literal,
     * or unique symbol type, we can use that type as the name of the symbol.
     *
     * For example, given:
     *
     *   const x = Symbol();
     *
     *   interface I {
     *     [x]: number;
     *   }
     *
     * The binder gives the property `[x]: number` a special symbol with the name "__computed".
     * In the late-binding phase we can type-check the expression `x` and see that it has a
     * unique symbol type which we can then use as the name of the member. This allows users
     * to define custom symbols that can be used in the members of an object type.
     *
     * @param parent The containing symbol for the member.
     * @param earlySymbols The early-bound symbols of the parent.
     * @param lateSymbols The late-bound symbols of the parent.
     * @param decl The member to bind.
     */
    function lateBindMember(parent: Symbol, earlySymbols: SymbolTable | undefined, lateSymbols: Map<__String, TransientSymbol>, decl: LateBoundDeclaration | LateBoundBinaryExpressionDeclaration) {
        Debug.assert(!!decl.symbol, "The member is expected to have a symbol.");
        const links = getNodeLinks(decl);
        if (!links.resolvedSymbol) {
            // In the event we attempt to resolve the late-bound name of this member recursively,
            // fall back to the early-bound name of this member.
            links.resolvedSymbol = decl.symbol;
            const declName = isBinaryExpression(decl) ? decl.left : decl.name;
            const type = isElementAccessExpression(declName) ? checkExpressionCached(declName.argumentExpression) : checkComputedPropertyName(declName);
            if (isTypeUsableAsPropertyName(type)) {
                const memberName = getPropertyNameFromType(type);
                const symbolFlags = decl.symbol.flags;

                // Get or add a late-bound symbol for the member. This allows us to merge late-bound accessor declarations.
                let lateSymbol = lateSymbols.get(memberName);
                if (!lateSymbol) lateSymbols.set(memberName, lateSymbol = createSymbol(SymbolFlags.None, memberName, CheckFlags.Late));

                // Report an error if there's a symbol declaration with the same name and conflicting flags.
                const earlySymbol = earlySymbols && earlySymbols.get(memberName);
                // Duplicate property declarations of classes are checked in checkClassForDuplicateDeclarations.
                if (!(parent.flags & SymbolFlags.Class) && lateSymbol.flags & getExcludedSymbolFlags(symbolFlags)) {
                    // If we have an existing early-bound member, combine its declarations so that we can
                    // report an error at each declaration.
                    const declarations = earlySymbol ? concatenate(earlySymbol.declarations, lateSymbol.declarations) : lateSymbol.declarations;
                    const name = !(type.flags & TypeFlags.UniqueESSymbol) && unescapeLeadingUnderscores(memberName) || declarationNameToString(declName);
                    forEach(declarations, declaration => error(getNameOfDeclaration(declaration) || declaration, Diagnostics.Property_0_was_also_declared_here, name));
                    error(declName || decl, Diagnostics.Duplicate_property_0, name);
                    lateSymbol = createSymbol(SymbolFlags.None, memberName, CheckFlags.Late);
                }
                lateSymbol.links.nameType = type;
                addDeclarationToLateBoundSymbol(lateSymbol, decl, symbolFlags);
                if (lateSymbol.parent) {
                    Debug.assert(lateSymbol.parent === parent, "Existing symbol parent should match new one");
                }
                else {
                    lateSymbol.parent = parent;
                }
                return links.resolvedSymbol = lateSymbol;
            }
        }
        return links.resolvedSymbol;
    }

    function lateBindIndexSignature(parent: Symbol, earlySymbols: SymbolTable | undefined, lateSymbols: Map<__String, TransientSymbol>, decl: LateBoundDeclaration | LateBoundBinaryExpressionDeclaration) {
        // First, late bind the index symbol itself, if needed
        let indexSymbol = lateSymbols.get(InternalSymbolName.Index);
        if (!indexSymbol) {
            const early = earlySymbols?.get(InternalSymbolName.Index);
            if (!early) {
                indexSymbol = createSymbol(SymbolFlags.None, InternalSymbolName.Index, CheckFlags.Late);
            }
            else {
                indexSymbol = cloneSymbol(early);
                indexSymbol.links.checkFlags |= CheckFlags.Late;
            }
            lateSymbols.set(InternalSymbolName.Index, indexSymbol);
        }
        // Then just add the computed name as a late bound declaration
        // (note: unlike `addDeclarationToLateBoundSymbol` we do not set up a `.lateSymbol` on `decl`'s links,
        // since that would point at an index symbol and not a single property symbol, like most consumers would expect)
        if (!indexSymbol.declarations) {
            indexSymbol.declarations = [decl];
        }
        else if (!decl.symbol.isReplaceableByMethod) {
            indexSymbol.declarations.push(decl);
        }
    }

    function getResolvedMembersOrExportsOfSymbol(symbol: Symbol, resolutionKind: MembersOrExportsResolutionKind): Map<__String, Symbol> {
        const links = getSymbolLinks(symbol);
        if (!links[resolutionKind]) {
            const isStatic = resolutionKind === MembersOrExportsResolutionKind.resolvedExports;
            const earlySymbols = !isStatic ? symbol.members :
                symbol.flags & SymbolFlags.Module ? getExportsOfModuleWorker(symbol).exports :
                symbol.exports;

            // In the event we recursively resolve the members/exports of the symbol, we
            // set the initial value of resolvedMembers/resolvedExports to the early-bound
            // members/exports of the symbol.
            links[resolutionKind] = earlySymbols || emptySymbols;

            // fill in any as-yet-unresolved late-bound members.
            const lateSymbols = createSymbolTable() as Map<__String, TransientSymbol>;
            for (const decl of symbol.declarations || emptyArray) {
                const members = getMembersOfDeclaration(decl);
                if (members) {
                    for (const member of members) {
                        if (isStatic === hasStaticModifier(member)) {
                            if (hasLateBindableName(member)) {
                                lateBindMember(symbol, earlySymbols, lateSymbols, member);
                            }
                            else if (hasLateBindableIndexSignature(member)) {
                                lateBindIndexSignature(symbol, earlySymbols, lateSymbols, member as Node as LateBoundDeclaration | LateBoundBinaryExpressionDeclaration);
                            }
                        }
                    }
                }
            }
            const assignments = getFunctionExpressionParentSymbolOrSymbol(symbol).assignmentDeclarationMembers;

            if (assignments) {
                const decls = arrayFrom(assignments.values());
                for (const member of decls) {
                    const assignmentKind = getAssignmentDeclarationKind(member as BinaryExpression | CallExpression);
                    const isInstanceMember = assignmentKind === AssignmentDeclarationKind.PrototypeProperty
                        || isBinaryExpression(member) && isPossiblyAliasedThisProperty(member, assignmentKind)
                        || assignmentKind === AssignmentDeclarationKind.ObjectDefinePrototypeProperty
                        || assignmentKind === AssignmentDeclarationKind.Prototype; // A straight `Prototype` assignment probably can never have a computed name
                    if (isStatic === !isInstanceMember) {
                        if (hasLateBindableName(member)) {
                            lateBindMember(symbol, earlySymbols, lateSymbols, member);
                        }
                    }
                }
            }

            let resolved = combineSymbolTables(earlySymbols, lateSymbols);
            if (symbol.flags & SymbolFlags.Transient && links.cjsExportMerged && symbol.declarations) {
                for (const decl of symbol.declarations) {
                    const original = getSymbolLinks(decl.symbol)[resolutionKind];
                    if (!resolved) {
                        resolved = original;
                        continue;
                    }
                    if (!original) continue;
                    original.forEach((s, name) => {
                        const existing = resolved!.get(name);
                        if (!existing) resolved!.set(name, s);
                        else if (existing === s) return;
                        else resolved!.set(name, mergeSymbol(existing, s));
                    });
                }
            }
            links[resolutionKind] = resolved || emptySymbols;
        }

        return links[resolutionKind];
    }

    /**
     * Gets a SymbolTable containing both the early- and late-bound members of a symbol.
     *
     * For a description of late-binding, see `lateBindMember`.
     */
    function getMembersOfSymbol(symbol: Symbol) {
        return symbol.flags & SymbolFlags.LateBindingContainer
            ? getResolvedMembersOrExportsOfSymbol(symbol, MembersOrExportsResolutionKind.resolvedMembers)
            : symbol.members || emptySymbols;
    }

    /**
     * If a symbol is the dynamic name of the member of an object type, get the late-bound
     * symbol of the member.
     *
     * For a description of late-binding, see `lateBindMember`.
     */
    function getLateBoundSymbol(symbol: Symbol): Symbol {
        if (symbol.flags & SymbolFlags.ClassMember && symbol.escapedName === InternalSymbolName.Computed) {
            const links = getSymbolLinks(symbol);
            if (!links.lateSymbol && some(symbol.declarations, hasLateBindableName)) {
                // force late binding of members/exports. This will set the late-bound symbol
                const parent = getMergedSymbol(symbol.parent)!;
                if (some(symbol.declarations, hasStaticModifier)) {
                    getExportsOfSymbol(parent);
                }
                else {
                    getMembersOfSymbol(parent);
                }
            }
            return links.lateSymbol || (links.lateSymbol = symbol);
        }
        return symbol;
    }


    ;

    //#endregion

    ;

    ;

    ;

    const {
        templateLiteralTypes ,
        stringMappingTypes,
        decoratorContextOverrideTypeCache ,
        substitutionTypes ,

        cachedTypes,
        evolvingArrayTypes,
        markerTypes,
    } = arstc ;

    var undefinedProperties: SymbolTable = new Map();

    ;

    ;

    ;

    ;

    var tupleTypes = new Map<string, GenericType>();

    ;

    ;

    ;

    return {

        FlowPtPerspectiveImpl,
        getFlowPtPerspective,
        getFlowNodeVerbatim ,
        getFlowPtPerspectiveLexically ,

        SymbolImpl ,
        createSymbol ,
        createPositionalArg,
        createHardTypedPositionalArg,
        createProperty,
        createHardTypedProperty,
        SymbDenotImpl,
        TypeImpl ,
        createType,
        createTypeWithSymbol,
        createOriginType,
        createIntrinsicType,
        checkIntrinsicName,
        createTypeParameter,
        SignatureImpl ,
        IdentifierImpl ,

        seenIntrinsicNames,

        getTypeListId,
        getSymbolId,
        getAliasId,

        getUnionTypeFromSortedList,
        getUnionType,

        errorTypes: {
            //

            anyType,
            autoType ,
            wildcardType ,
            blockedStringType ,
            errorType ,
            unresolvedType ,
            nonInferrableAnyType ,
            intrinsicMarkerType ,
            unknownType ,
            undefinedType ,
            missingType ,
            optionalType ,
            nullType ,

            voidType ,
            neverType ,
            silentNeverType ,
            implicitNeverType ,
            unreachableNeverType ,

        } ,

        anyType,
        autoType ,
        wildcardType ,
        blockedStringType ,
        unknownType ,
        undefinedType ,
        nullType ,

        voidType ,
        neverType ,

        unknownSymbol ,
        resolvingSymbol ,
        getUnresolvedSymbolForEntityName ,

        elementaryTypes : {
            stringType ,
            numberType ,
            bigintType ,
            falseType ,
            trueType ,
            booleanType,
            esSymbolType ,
            nonPrimitiveType ,
        } ,

        nonnullPts,

        // typeCombinationsReductionsAndRelationship,

        literalTyping: {
            ...altta ,
        },

        acatCore,
        acat ,

        paramica ,

        acasta,
        gmsc: {
            //
            getMergedSymbol,
            getSymbolOfDeclaration ,
            getSymbolOfNode,
            getParentOfSymbol ,
        },

        //
        //
        getPropagatingFlagsOfTypes,

        createDeferredTypeReference,

        tryCreateTypeReference,
        createTypeReference,
        cloneTypeReference,

        getTypeArguments,
        getTypeReferenceArity,

        etc: {
            //
            analyseCompilerOptions,
            languageVersion,
            moduleKind,
            legacyDecorators,
            useDefineForClassFields,
            emitStandardClassFields,
            allowSyntheticDefaultImports,
            CSAC,
            allocateTypeAndSymbolAllocatorCore,
            createSymbol,
            // createSymDenot,
            createType,
            createTypeWithSymbol,
            createOriginType,
            allocateCoreTypesCore,
            createIntrinsicType,
            checkIntrinsicName,
            createTypeParameter,
            seenIntrinsicNames,
            anyType,
            autoType,
            wildcardType,
            blockedStringType,
            errorType,
            unresolvedType,
            nonInferrableAnyType,
            intrinsicMarkerType,
            unknownType,
            undefinedType,
            missingType,
            optionalType,
            nullType,
            voidType,
            neverType,
            silentNeverType,
            implicitNeverType,
            unreachableNeverType,
            unknownSymbol,
            resolvingSymbol,
            getAliasId,
            getTypeListId,
            length,
            getTypeId,
            // createUniqueESSymbolType,
            getPropagatingFlagsOfTypes,
            tryCreateTypeReference,
            createTypeReference,
            cloneTypeReference,
            getTypeArguments,
            getTypeReferenceArity,
            allocateLiteralTypesAllocator,
            createLiteralType,
            getFreshTypeOfLiteralType,
            getRegularTypeOfLiteralType,
            isFreshLiteralType,
            // eLiteralTypes,
            // stringLiteralTypes,
            // numberLiteralTypes,
            // bigIntLiteralTypes,
            // enumLiteralTypes,
            // getLiteralType,
            // getStringLiteralType,
            // getNumberLiteralType,
            // getBigIntLiteralType,
            // getEnumLiteralType,
            allocateBaseSignatureReprAllocator,
            // createSignature,
            // cloneSignature,
            // createUnionSignature,
            allocateCoreSymbolTableAllocator,
            createPositionalArg,
            createHardTypedPositionalArg,
            createProperty,
            createHardTypedProperty,
            allocateFlowPerspectorAllocator,
            getFlowPtPerspective,
            getFlowPtPerspectiveLexically,
            getFlowNodeVerbatim,
            allocateCoreTypesRestAllocator,
            templateLiteralTypes,
            stringMappingTypes,
            substitutionTypes,
            decoratorContextOverrideTypeCache,
            cachedTypes,
            markerTypes,
            allocateCoreCombinedTypesAllocator,
            unionTypes,
            unionOfUnionTypes,
            intersectionTypes,
            getUnionTypeFromSortedList,
            allocateTypeCheckerCore,
            compilerOptions,
            strictNullChecks,
            strictFunctionTypes,
            strictBindCallApply,
            strictPropertyInitialization,
            strictBuiltinIteratorReturn,
            noImplicitAny,
            noImplicitThis,
            useUnknownInCatchVariables,
            exactOptionalPropertyTypes,
            noUncheckedSideEffectImports,
            getUnresolvedSymbolForEntityName,
            getSymbolPath,
            getMergedSymbol,
            // getMergedSymbol,
            // getMergedSymbol,
            getSymbolOfDeclaration,
            getSymbolOfNode,
            getParentOfSymbol,
            unresolvedSymbols,
            errorTypes,
            createDeferredTypeReference,
            // localAliasTypeArguments,
            getTypeOfSymbol,
            getTypeOfSymbolOnsite,
            stringType,
            numberType,
            bigintType,
            falseType,
            regularFalseType,
            trueType,
            regularTrueType,
            booleanType,
            esSymbolType,
            nonPrimitiveType,
            nonnullPts,
            emptySymbols,
            createAnonymousType,
            undefinedWideningType,
            undefinedOrMissingType,
            nullWideningType,
            indexedAccessTypes,
            stringOrNumberType,
            stringNumberSymbolType,
            numberOrBigIntType,
            templateConstraintType,
            numericStringType,
            makeFunctionTypeMapper,
            uniqueLiteralType,
            reportUnreliableMapper,
            reportUnmeasurableMapper,
            emptyObjectType,
            emptyJsxObjectType,
            emptyFreshJsxObjectType,
            emptyTypeLiteralSymbol,
            emptyTypeLiteralType,
            unknownEmptyObjectType,
            unknownUnionType,
            emptyGenericType,
            anyFunctionType,
            noConstraintType,
            circularConstraintType,
            resolvingDefaultType,
            markerSuperType,
            markerSubType,
            markerOtherType,
            markerSuperTypeForCheck,
            markerSubTypeForCheck,
            noTypePredicate,
            anySignature,
            unknownSignature,
            resolvingSignature,
            silentNeverSignature,
            enumNumberIndexInfo,
            createTypeofType,
            createObjectType,
            isReservedMemberName,
            setStructuredTypeMembers,
            createUnnamedShallowStructuralType,
            subtypeReductionCache,
            getUnionType,
            containsType,
            insertType,
            addTypeToUnion,
            addTypesToUnion,
            removeSubtypes,
            // hasEmptyObject,
            removeRedundantLiteralTypes,
            // remove,
            removeStringLiteralsMatchedByTemplateLiterals,
            // templates,
            isTypeMatchedByTemplateLiteralOrStringMapping,
            removeConstrainedTypeVariables,
            isNamedUnionType,
            addNamedUnions,
            createOriginUnionOrIntersectionType,
            getUnionTypeWorker,
            // includes,
            // namedTypesCount,
            getUnionOrIntersectionTypePredicate,
            // compositeType,
            typePredicateKindsMatch,
            addTypeToIntersection,
            addTypesToIntersection,
            removeRedundantSupertypes,
            // remove,
            eachUnionContains,
            extractRedundantTemplateLiterals,
            // literals,
            removeFromEach,
            intersectUnionsOfPrimitiveTypes,
            createIntersectionType,
            // getIntersectionType,
            // typeMembershipMap,
            // includes,
            getDeferredIntersectionType,
            // containedUndefinedType,
            subtypeRelation,
            strictSubtypeRelation,
            assignableRelation,
            comparableRelation,
            identityRelation,
            enumRelation,
            isTypeIdenticalTo,
            compareTypesIdentical,
            compareTypesAssignable,
            compareTypesSubtypeOf,
            isTypeSubtypeOf,
            isTypeStrictSubtypeOf,
            isTypeAssignableTo,
            isTypeDerivedFrom,
            isTypeComparableTo,
            areTypesComparable,
            checkTypeAssignableTo,
            isTypeRelatedTo,
            // related,
            checkTypeRelatedTo,
            // uniqueLiteralType,
            // makeFunctionTypeMapper,
            // reportUnreliableMapper,
            // reportUnmeasurableMapper,
            typeMappers,
            getTypePerspective,
            getTypeFromClassOrInterfaceReference,
            // getTypeAliasInstantiation,
            // type,
            // typeKind,
            // links,
            // typeParameters,
            // id,
            // instantiation,
            getTypeFromTypeAliasReference,
            // typeArguments,
            // id,
            // errorType,
            isLocalTypeAlias,
            // declaration,
            getTypeReferenceName,
            resolveTypeReferenceName,
            getTypeReferenceType,
            // jsdocType,
            getTypeFromJSDocValueReference,
            // valueType,
            // isImportTypeWithQualifier,
            getNoInferType,
            isNoInferTargetType,
            isNoInferType,
            getSubstitutionType,
            getOrCreateSubstitutionType,
            getSubstitutionIntersection,
            isUnaryTupleTypeNode,
            getImpliedConstraint,
            getConditionalFlowTypeOfType,
            isJSDocTypeReference,
            checkNoTypeArguments,
            getIntendedTypeFromJSDocTypeReference,
            // typeArgs,
            getTypeFromJSDocNullableTypeNode,
            getTypeFromTypeReference,
            typeArgumentsFromTypeReferenceNode,
            getTypeFromTypeQueryNode,
            getTypeFromTypeNode,
            getTypeFromLiteralTypeNode,
            getESSymbolLikeTypeForNode,
            getPublicMembersOfEvaluatedTypeOf,
            // sAcTpe,
            getPublicMembersOfType,
            getPublicMembersOfSymb,
            getPublicMembersSymbolsOfSymb,
            getNamedMembers,
            isNamedMember,
            getNamedOrIndexSignatureMembers,
            getEvaluatedTypeOf,
            getContextualTypedTermsFacts,
            resolveName,
            isolatedModulesLikeFlagName,
            canCollectSymbolAliasAccessabilityData,
            argumentsSymbol,
            tupleTypes,
        } ,

    } as const ;
    }

    export const {
        /** @deprecated WIP/TBD/TODO */
        allocateTypeChecker: allocateTypeChecker ,
    } = {
        /** @deprecated WIP/TBD/TODO */
        allocateTypeChecker: allocateTypeCheckerCore ,
    } ;

}

enum GtptnFlags {
    DEALIAS = 1 << 1 ,
    AS_DEFERREDSUBSTITYPE = 1 << 3 ,
}

enum GepubmtFlags {
    DEALIAS = 1 << 1 ,
    AS_DEFERREDSUBSTITYPE = 1 << 3 ,
}













export {
    ReadonlySymbolTable ,
    Sttc,
} ;























