



import { error } from "console";
import {
    __String,
    AccessExpression,
    addRelatedInfo,
    AllOrNever1,
    append,
    appendIfUnique,
    ArgsWithOptions,
    ArrayBindingElement,
    arrayFrom,
    ArrayLiteralExpression,
    ArrayTypeNode,
    ArrowFunction,
    AssignmentDeclarationKind,
    BigIntLiteralType,
    BinaryExpression,
    BinaryOperatorToken,
    binarySearch,
    BindableAccessExpression,
    BindableObjectDefinePropertyCall,
    BindablePropertyAssignmentExpression,
    BindableStaticAccessExpression,
    BindableStaticNameExpression,
    BindableStaticPropertyAssignmentExpression,
    BindingElement,
    Block,
    BreakOrContinueStatement,
    CallChain,
    CallExpression,
    canHaveFlowNode,
    canHaveLocals,
    canHaveSymbol,
    CaseBlock,
    CaseClause,
    cast,
    CatchClause,
    CharacterCodes,
    CheckFlags,
    ClassLikeDeclaration,
    ClassStaticBlockDeclaration,
    compareValues,
    CompilerOptions,
    concatenate,
    ConditionalExpression,
    ConditionalTypeNode,
    contains,
    ContextFlags,
    createBinaryExpressionTrampoline,
    createDiagnosticForNodeInSourceFile,
    createFileDiagnostic,
    createNameResolver,
    createQueue,
    createSymbolTable,
    Debug,
    Declaration,
    declarationNameToString,
    DeferredTypeReference,
    DeleteExpression,
    DestructuringAssignment,
    Diagnostic,
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
    emptyArray,
    EntityNameExpression,
    EntityNameOrEntityNameExpression,
    EnumDeclaration,
    escapeLeadingUnderscores,
    every,
    EvolvingArrayType,
    ExportAssignment,
    exportAssignmentIsAlias,
    ExportDeclaration,
    ExportSpecifier,
    Expression,
    ExpressionStatement,
    filter,
    find,
    findAncestor,
    findIndex,
    FlowArrayMutation,
    FlowAssignment,
    FlowCall,
    FlowCondition,
    FlowFlags,
    FlowLabel,
    FlowNode,
    FlowReduceLabel,
    FlowSwitchClause,
    forEach,
    forEachChild,
    ForInOrOfStatement,
    ForStatement,
    FreshableIntrinsicType,
    FreshableType,
    FunctionDeclaration,
    FunctionExpression,
    FunctionLikeDeclaration,
    GenericType,
    GetAccessorDeclaration,
    getAllowSyntheticDefaultImports,
    getAssignedExpandoInitializer,
    getAssignmentDeclarationKind,
    getAssignmentDeclarationPropertyAccessKind,
    getCheckFlags,
    getCombinedModifierFlags,
    getCombinedNodeFlags,
    getContainingClass,
    getContainingFunction,
    getEffectiveContainerForJSDocTemplateTag,
    getElementOrPropertyAccessName,
    getEmitModuleKind,
    getEmitScriptTarget,
    getEmitStandardClassFields,
    getEnclosingBlockScopeContainer,
    getEnclosingContainer,
    getErrorSpanForNode,
    getEscapedTextOfIdentifierOrLiteral,
    getEscapedTextOfJsxNamespacedName,
    getExpandoInitializer,
    getHostSignatureFromJSDoc,
    getImmediatelyInvokedFunctionExpression,
    getJSDocHost,
    getJSDocTypeTag,
    getLeftmostAccessExpression,
    getNameOfDeclaration,
    getNameOrArgument,
    getNodeId,
    getObjectFlags,
    getRangesWhere,
    getRightMostAssignedExpression,
    getSingleVariableOfVariableStatement,
    getSourceFileOfNode,
    getSourceTextOfNodeFromSourceFile,
    getSpanOfTokenAtPosition,
    getStrictOptionValue,
    getSymbolId,
    getSymbolNameForPrivateIdentifier,
    getTextOfIdentifierOrLiteral,
    getThisContainer,
    getTokenPosOfNode,
    getUseDefineForClassFields,
    HasContainerFlags,
    hasDynamicName,
    HasFlowNode,
    hasJSDocNodes,
    HasLocals,
    hasSyntacticModifier,
    Identifier,
    identifierToKeywordKind,
    idText,
    IfStatement,
    ImmutableJs,
    ImportClause,
    ImportTypeNode,
    IndexedAccessType,
    IndexInfo,
    IndexType,
    InterfaceType,
    InternalSymbolName,
    IntersectionFlags,
    IntersectionType,
    IntrinsicType,
    isAliasableExpression,
    isAmbientModule,
    isAssertionExpression,
    isAssignmentExpression,
    isAssignmentOperator,
    isAssignmentTarget,
    isAsyncFunction,
    isAutoAccessorPropertyDeclaration,
    isBinaryExpression,
    isBindableObjectDefinePropertyCall,
    isBindableStaticAccessExpression,
    isBindableStaticNameExpression,
    isBindingPattern,
    isBlock,
    isBlockOrCatchScoped,
    IsBlockScopedContainer,
    isBooleanLiteral,
    isCallExpression,
    isClassStaticBlockDeclaration,
    isCommonJsExportPropertyAssignment,
    isConditionalTypeNode,
    isConstTypeReference,
    IsContainer,
    isDeclaration,
    isDeclarationStatement,
    isDestructuringAssignment,
    isDottedName,
    isEmptyObjectLiteral,
    isEntityNameExpression,
    isEnumConst,
    isExportAssignment,
    isExportDeclaration,
    isExportsIdentifier,
    isExportSpecifier,
    isExpression,
    isExpressionOfOptionalChainRoot,
    isExpressionWithTypeArguments,
    isExternalModule,
    isExternalOrCommonJsModule,
    isForInOrOfStatement,
    isFunctionDeclaration,
    isFunctionLike,
    isFunctionLikeDeclaration,
    isFunctionLikeOrClassStaticBlockDeclaration,
    isFunctionSymbol,
    isGlobalScopeAugmentation,
    isIdentifier,
    isIdentifierName,
    isInJSFile,
    isInTopLevelContext,
    isJSDocAugmentsTag,
    isJSDocConstructSignature,
    isJSDocEnumTag,
    isJSDocIndexSignature,
    isJSDocTemplateTag,
    isJSDocTypeAlias,
    isJSDocTypeAssertion,
    isJSDocTypeExpression,
    isJsonSourceFile,
    isJsxNamespacedName,
    isLeftHandSideExpression,
    isLogicalOrCoalescingAssignmentExpression,
    isLogicalOrCoalescingAssignmentOperator,
    isLogicalOrCoalescingBinaryExpression,
    isLogicalOrCoalescingBinaryOperator,
    isModuleAugmentationExternal,
    isModuleBlock,
    isModuleDeclaration,
    isModuleExportsAccessExpression,
    isNamedDeclaration,
    isNamespaceExport,
    isNullishCoalesce,
    isObjectLiteralExpression,
    isObjectLiteralMethod,
    isObjectLiteralOrClassExpressionMethodOrAccessor,
    isOmittedExpression,
    isOptionalChain,
    isOptionalChainRoot,
    isOutermostOptionalChain,
    isParameterPropertyDeclaration,
    isParenthesizedExpression,
    isPartOfParameterDeclaration,
    isPartOfTypeQuery,
    isPrefixUnaryExpression,
    isPrivateIdentifier,
    isPrologueDirective,
    isPropertyAccessEntityNameExpression,
    isPropertyAccessExpression,
    isPropertyNameLiteral,
    isPrototypeAccess,
    isPushOrUnshiftIdentifier,
    isRequireCall,
    isShorthandPropertyAssignment,
    isSignedNumericLiteral,
    isSourceFile,
    isSpecialPropertyDeclaration,
    isStatement,
    isStatementButNotDeclaration,
    isStatic,
    isString,
    isStringLiteralLike,
    isStringOrNumericLiteralLike,
    isThisInitializedDeclaration,
    isTypeAlias,
    isTypeAliasDeclaration,
    isTypeOfExpression,
    isTypeReferenceType,
    isValidESSymbolDeclaration,
    isVariableDeclaration,
    isVariableDeclarationInitializedToBareOrAccessedRequire,
    isVariableStatement,
    IterationTypes,
    JSDocCallbackTag,
    JSDocClassTag,
    JSDocEnumTag,
    JSDocFunctionType,
    JSDocImportTag,
    JSDocNullableType,
    JSDocOverloadTag,
    JSDocParameterTag,
    JSDocPropertyLikeTag,
    JSDocSignature,
    JSDocTypedefTag,
    JSDocTypeLiteral,
    JsxAttribute,
    JsxAttributes,
    LabeledStatement,
    length,
    LiteralLikeElementAccessExpression,
    LiteralType,
    LiteralTypeNode,
    map,
    MappedSymbol,
    MappedType,
    MappedTypeNode,
    MetaProperty,
    MethodDeclaration,
    ModifierFlags,
    ModuleBlock,
    ModuleDeclaration,
    moduleExportNameIsDefault,
    Mutable,
    NamespaceExportDeclaration,
    Node,
    NodeArray,
    NodeFlags,
    nodeHasName,
    nodeIsMissing,
    nodeIsPresent,
    NodeWithTypeArguments,
    NonNullChain,
    NonNullExpression,
    NumberLiteralType,
    objectAllocator,
    ObjectFlags,
    ObjectLiteralExpression,
    ObjectType,
    OptionalChain,
    orderedRemoveItemAt,
    ParameterDeclaration,
    ParenthesizedExpression,
    Pattern,
    PatternAmbientModule,
    PostfixUnaryExpression,
    PrefixUnaryExpression,
    PrivateIdentifier,
    PropertyAccessChain,
    PropertyAccessEntityNameExpression,
    PropertyAccessExpression,
    PropertyDeclaration,
    PropertySignature,
    PseudoBigInt,
    pseudoBigIntToString,
    pushIfUnique,
    QualifiedName,
    reduceLeft,
    RelationComparisonResult,
    removeFileExtension,
    ResolvedType,
    ReturnStatement,
    ReverseMappedSymbol,
    ScriptTarget,
    SetAccessorDeclaration,
    setParent,
    setParentRecursive,
    setValueDeclaration,
    ShorthandPropertyAssignment,
    shouldPreserveConstEnums,
    Signature,
    SignatureDeclaration,
    SignatureFlags,
    skipParentheses,
    sliceAfter,
    some,
    SourceFile,
    SpreadElement,
    Statement,
    StringLiteral,
    StringLiteralType,
    StringMappingType,
    StructuredType,
    SubstitutionType,
    SuperExpression,
    SwitchStatement,
    Symbol,
    SymbolFlags,
    symbolName,
    SymbolTable,
    // SymbolTable,
    SyntaxKind,
    TemplateLiteralType,
    Ternary,
    TextRange,
    ThisExpression,
    ThrowStatement,
    tokenToString,
    tracing,
    TracingNode,
    TransientSymbol,
    TransientSymbolLinks,
    tryCast,
    tryParsePattern,
    TryStatement,
    TupleTypeNode,
    Type,
    TypeCheckerHost,
    TypeFlags,
    TypeFormatFlags,
    TypeId,
    TypeLiteralNode,
    TypeMapKind,
    TypeMapper,
    TypeNode,
    TypeOfExpression,
    TypeParameter,
    TypeParameterDeclaration,
    TypePredicate,
    TypePredicateKind,
    TypeQueryNode,
    TypeReference,
    TypeReferenceNode,
    TypeReferenceType,
    TypeVariable,
    unescapeLeadingUnderscores,
    UnionOrIntersectionType,
    UnionReduction,
    UnionType,
    UnionTypeNode,
    UniqueESSymbolType,
    unreachableCodeIsError,
    unusedLabelIsError,
    VariableDeclaration,
    WhileStatement,
    WithStatement,
} from "./_namespaces/ts.js";

import * as moduleSpecifiers from "./_namespaces/ts.moduleSpecifiers.js";
import * as performance from "./_namespaces/ts.performance.js";

import {
    ReadonlySymbolTable ,
} from "./checkerByStudkitCore.js" ;







import {
    analyseCompilerOptions ,
    Sttc ,
} from "./checkerByStudkitCore.js" ;

function createCbTsTypeCheckerImpl(host: TypeCheckerHost)
{
    //

    const atc = Sttc.allocateTypeChecker() ;

    //

    const {
        FlowPtPerspectiveImpl ,
        getFlowPtPerspective,
        getFlowNodeVerbatim ,

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

            // errorType ,
            // unresolvedType ,
            // nonInferrableAnyType ,
            // intrinsicMarkerType ,
            // missingType ,
            // optionalType ,

            // silentNeverType ,
            // implicitNeverType ,
            // unreachableNeverType ,

        } ,

        // anyType,
        // autoType ,
        // wildcardType ,
        // blockedStringType ,
        // unknownType ,
        // undefinedType ,
        // nullType ,

        // voidType ,
        // neverType ,

        // unknownSymbol ,
        // resolvingSymbol ,
        // getUnresolvedSymbolForEntityName,

        literalTyping: {
            createLiteralType,
            isFreshLiteralType,
            getFreshTypeOfLiteralType,
            getRegularTypeOfLiteralType,
            getBigIntLiteralType ,
            getEnumLiteralType ,
            getNumberLiteralType ,
            getStringLiteralType ,

            //
            inteerned1: {
                eLiteralTypes ,
                stringLiteralTypes ,
                numberLiteralTypes ,
                bigIntLiteralTypes ,
                enumLiteralTypes ,
            } ,
        },

        // elementaryTypes : {
        //     stringType ,
        //     numberType ,
        //     bigintType ,
        //     falseType ,
        //     trueType ,
        //     booleanType,
        //     esSymbolType ,
        //     nonPrimitiveType ,
        // } ,

        // typeCombinationsReductionsAndRelationship: {
        //     //

        //     containsType,
        //     insertType,
        //     addTypeToUnion,
        //     addTypesToUnion,
        //     removeSubtypes ,
        //     removeRedundantLiteralTypes,
        //     removeStringLiteralsMatchedByTemplateLiterals,

        //     isTypeMatchedByTemplateLiteralOrStringMapping ,
        //     removeConstrainedTypeVariables ,

        //     isNamedUnionType ,
        //     addNamedUnions ,
        //     createOriginUnionOrIntersectionType ,
        //     getUnionTypeWorker ,
        //     getUnionOrIntersectionTypePredicate ,

        //     addTypeToIntersection ,
        //     addTypesToIntersection ,
        //     removeRedundantSupertypes,
        //     eachUnionContains ,
        //     removeFromEach ,
        //     intersectUnionsOfPrimitiveTypes ,
        //     createIntersectionType ,
        //     getIntersectionType ,

        //     extractRedundantTemplateLiterals,

        //     isTypeIdenticalTo,
        //     compareTypesIdentical ,
        //     compareTypesAssignable ,
        //     compareTypesSubtypeOf ,
        //     isTypeSubtypeOf ,
        //     isTypeStrictSubtypeOf ,
        //     isTypeAssignableTo ,
        //     isTypeDerivedFrom ,
        //     isTypeComparableTo ,
        //     areTypesComparable ,
        //     checkTypeAssignableTo ,
        //     isTypeRelatedTo ,
        //     checkTypeRelatedTo ,

        // } ,

        paramica: {
            cloneSignature ,
            createSignature ,
            createUnionSignature ,
        } ,

        // gmsc: {
        //     //
        //     getMergedSymbol,
        //     getSymbolOfDeclaration ,
        //     getSymbolOfNode,
        //     getParentOfSymbol ,
        // },
        //

        //
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
            // createSymbol,
            // createSymDenot,
            // createType,
            // createTypeWithSymbol,
            // createOriginType,
            allocateCoreTypesCore,
            // createIntrinsicType,
            // checkIntrinsicName,
            // createTypeParameter,
            // seenIntrinsicNames,
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
            // getAliasId,
            // getTypeListId,
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
            // createLiteralType,
            // getFreshTypeOfLiteralType,
            // getRegularTypeOfLiteralType,
            // isFreshLiteralType,
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
            // createPositionalArg,
            // createHardTypedPositionalArg,
            // createProperty,
            // createHardTypedProperty,
            allocateFlowPerspectorAllocator,
            // getFlowPtPerspective,
            getFlowPtPerspectiveLexically,
            // getFlowNodeVerbatim,
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
            // getUnionTypeFromSortedList,
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
            // getUnionType,
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

    } = atc ;

    interface FlowPerspective extends
    InstanceType<typeof FlowPtPerspectiveImpl>
    {}

    ;

    ;

    ;

    ;

    /**
     * when it comes to {@link globalThis `globalThis`} or {@link global} (or {@link window}),
     * due to the possibility of "multiple globals" per WHATWG,
     * we need to defer the allocation, to instantiation by means a calling {@link allocatePrGlbExt} ,
     * 
     */
    ;

    /**
     * when it comes to {@link globalThis `globalThis`} or {@link global} (or {@link window}),
     * due to the possibility of "multiple globals" per WHATWG,
     * we need to defer the allocation,
     * 
     */
    function allocatePrGlb()
    {
        ;

        var globals = createSymbolTable();
        var undefinedSymbol = createSymbol(SymbolFlags.Property, "undefined" as __String);
        undefinedSymbol.declarations = [];
    
        var globalThisSymbol = createSymbol(SymbolFlags.Module, "globalThis" as __String, CheckFlags.Readonly);
        globalThisSymbol.exports = globals;
        globalThisSymbol.declarations = [];
        globals.set(globalThisSymbol.escapedName, globalThisSymbol);
    
        return {
            globals ,
            undefinedSymbol ,
            globalThisSymbol ,
        } as const ;
    }

    // var globals = createSymbolTable();
    // var undefinedSymbol = createSymbol(SymbolFlags.Property, "undefined" as __String);
    // undefinedSymbol.declarations = [];

    // var globalThisSymbol = createSymbol(SymbolFlags.Module, "globalThis" as __String, CheckFlags.Readonly);
    // globalThisSymbol.exports = globals;
    // globalThisSymbol.declarations = [];
    // globals.set(globalThisSymbol.escapedName, globalThisSymbol);

    /**
     * when it comes to {@link globalThis `globalThis`} or {@link global} (or {@link window}),
     * due to the possibility of "multiple globals" per WHATWG,
     * we need to defer the allocation,
     * 
     */
    function allocatePrGlbExt()
    {
        ;

        const {
            globals ,
            undefinedSymbol ,
            globalThisSymbol ,
        } = (
            allocatePrGlb()
        ) ;

        function getGlobalSymbol(...[askedName] : (
            [name: __String, meaning: SymbolFlags, diagnostic: DiagnosticMessage | undefined]
        )): Symbol | undefined {
            // Don't track references for global symbols anyway, so value if `isReference` is arbitrary
            return (
                getPublicMembersOfSymb(globalThisSymbol)
                .find(e => (
                    e.escapedName === askedName
                ) )
            );
        }

        var requireSymbol = createSymbol(SymbolFlags.Property, "require" as __String);

        ;

        function getTypeOfGlobalSymbol(symbol: Symbol | undefined, arity: number): ObjectType {
            function getTypeDeclaration(symbol: Symbol): Declaration | undefined {
                const declarations = symbol.declarations;
                if (declarations) {
                    for (const declaration of declarations) {
                        switch (declaration.kind) {
                            case SyntaxKind.ClassDeclaration:
                            case SyntaxKind.InterfaceDeclaration:
                            case SyntaxKind.EnumDeclaration:
                                return declaration;
                        }
                    }
                }
            }

            if (!symbol) {
                return arity ? emptyGenericType : emptyObjectType;
            }
            const type = getDeclaredTypeOfSymbol(symbol);
            if (!(type.flags & TypeFlags.Object)) {
                error(getTypeDeclaration(symbol), Diagnostics.Global_type_0_must_be_a_class_or_interface_type, symbolName(symbol));
                return arity ? emptyGenericType : emptyObjectType;
            }
            if (length((type as InterfaceType).typeParameters) !== arity) {
                error(getTypeDeclaration(symbol), Diagnostics.Global_type_0_must_have_1_type_parameter_s, symbolName(symbol), arity);
                return arity ? emptyGenericType : emptyObjectType;
            }
            return type as ObjectType;
        }

        function getGlobalValueSymbol(name: __String, reportErrors: boolean): Symbol | undefined {
            return getGlobalSymbol(name, SymbolFlags.Value, reportErrors ? Diagnostics.Cannot_find_global_value_0 : undefined);
        }

        function getGlobalTypeSymbol(name: __String, reportErrors: boolean): Symbol | undefined {
            return getGlobalSymbol(name, SymbolFlags.Type, reportErrors ? Diagnostics.Cannot_find_global_type_0 : undefined);
        }

        function getGlobalTypeAliasSymbol(name: __String, arity: number, reportErrors: boolean): Symbol | undefined {
            const symbol = getGlobalSymbol(name, SymbolFlags.Type, reportErrors ? Diagnostics.Cannot_find_global_type_0 : undefined);
            if (symbol) {
                // Resolve the declared type of the symbol. This resolves type parameters for the type
                // alias so that we can check arity.
                getDeclaredTypeOfSymbol(symbol);
                if (length(getSymbolLinks(symbol).typeParameters) !== arity) {
                    const decl = symbol.declarations && find(symbol.declarations, isTypeAliasDeclaration);
                    error(decl, Diagnostics.Global_type_0_must_have_1_type_parameter_s, symbolName(symbol), arity);
                    return undefined;
                }
            }
            return symbol;
        }

        function getGlobalType(name: __String, arity: 0, reportErrors: true): ObjectType;
        function getGlobalType(name: __String, arity: 0, reportErrors: boolean): ObjectType | undefined;
        function getGlobalType(name: __String, arity: number, reportErrors: true): GenericType;
        function getGlobalType(name: __String, arity: number, reportErrors: boolean): GenericType | undefined;
        function getGlobalType(name: __String, arity: number, reportErrors: boolean): ObjectType | undefined {
            const symbol = getGlobalTypeSymbol(name, reportErrors);
            return symbol || reportErrors ? getTypeOfGlobalSymbol(symbol, arity) : undefined;
        }

        function getGlobalBuiltinTypes(typeNames: readonly string[], arity: 0): ObjectType[];
        function getGlobalBuiltinTypes(typeNames: readonly string[], arity: number): GenericType[];
        function getGlobalBuiltinTypes(typeNames: readonly string[], arity: number) {
            let types: Type[] | undefined;
            for (const typeName of typeNames) {
                types = append(types, getGlobalType(typeName as __String, arity, /*reportErrors*/ false));
            }
            return types ?? emptyArray;
        }

        function getGlobalTypedPropertyDescriptorType() {
            // We always report an error, so store a result in the event we could not resolve the symbol to prevent reporting it multiple times
            return deferredGlobalTypedPropertyDescriptorType ||= getGlobalType("TypedPropertyDescriptor" as __String, /*arity*/ 1, /*reportErrors*/ true) || emptyGenericType;
        }

        function getGlobalTemplateStringsArrayType() {
            // We always report an error, so store a result in the event we could not resolve the symbol to prevent reporting it multiple times
            return deferredGlobalTemplateStringsArrayType ||= getGlobalType("TemplateStringsArray" as __String, /*arity*/ 0, /*reportErrors*/ true) || emptyObjectType;
        }

        function getGlobalImportMetaType() {
            // We always report an error, so store a result in the event we could not resolve the symbol to prevent reporting it multiple times
            return deferredGlobalImportMetaType ||= getGlobalType("ImportMeta" as __String, /*arity*/ 0, /*reportErrors*/ true) || emptyObjectType;
        }

        function getGlobalImportMetaExpressionType() {
            if (!deferredGlobalImportMetaExpressionType) {
                // Create a synthetic type `ImportMetaExpression { meta: MetaProperty }`
                const symbol = createSymbol(SymbolFlags.None, "ImportMetaExpression" as __String);
                const importMetaType = getGlobalImportMetaType();

                const metaPropertySymbol = createSymbol(SymbolFlags.Property, "meta" as __String, CheckFlags.Readonly);
                metaPropertySymbol.parent = symbol;
                metaPropertySymbol.links.type = importMetaType;

                const members = createSymbolTable([metaPropertySymbol]);
                symbol.members = members;

                deferredGlobalImportMetaExpressionType = createAnonymousType(symbol, members, emptyArray, emptyArray, emptyArray);
            }
            return deferredGlobalImportMetaExpressionType;
        }

        function getGlobalImportCallOptionsType(reportErrors: boolean) {
            return (deferredGlobalImportCallOptionsType ||= getGlobalType("ImportCallOptions" as __String, /*arity*/ 0, reportErrors)) || emptyObjectType;
        }

        function getGlobalImportAttributesType(reportErrors: boolean) {
            return (deferredGlobalImportAttributesType ||= getGlobalType("ImportAttributes" as __String, /*arity*/ 0, reportErrors)) || emptyObjectType;
        }

        function getGlobalESSymbolConstructorSymbol(reportErrors: boolean): Symbol | undefined {
            return deferredGlobalESSymbolConstructorSymbol ||= getGlobalValueSymbol("Symbol" as __String, reportErrors);
        }

        function getGlobalESSymbolConstructorTypeSymbol(reportErrors: boolean): Symbol | undefined {
            return deferredGlobalESSymbolConstructorTypeSymbol ||= getGlobalTypeSymbol("SymbolConstructor" as __String, reportErrors);
        }

        function getGlobalESSymbolType() {
            return (deferredGlobalESSymbolType ||= getGlobalType("Symbol" as __String, /*arity*/ 0, /*reportErrors*/ false)) || emptyObjectType;
        }

        function getGlobalPromiseType(reportErrors: boolean) {
            return (deferredGlobalPromiseType ||= getGlobalType("Promise" as __String, /*arity*/ 1, reportErrors)) || emptyGenericType;
        }

        function getGlobalPromiseLikeType(reportErrors: boolean) {
            return (deferredGlobalPromiseLikeType ||= getGlobalType("PromiseLike" as __String, /*arity*/ 1, reportErrors)) || emptyGenericType;
        }

        function getGlobalPromiseConstructorSymbol(reportErrors: boolean): Symbol | undefined {
            return deferredGlobalPromiseConstructorSymbol ||= getGlobalValueSymbol("Promise" as __String, reportErrors);
        }

        function getGlobalPromiseConstructorLikeType(reportErrors: boolean) {
            return (deferredGlobalPromiseConstructorLikeType ||= getGlobalType("PromiseConstructorLike" as __String, /*arity*/ 0, reportErrors)) || emptyObjectType;
        }

        function getGlobalAsyncIterableType(reportErrors: boolean) {
            return (deferredGlobalAsyncIterableType ||= getGlobalType("AsyncIterable" as __String, /*arity*/ 3, reportErrors)) || emptyGenericType;
        }

        function getGlobalAsyncIteratorType(reportErrors: boolean) {
            return (deferredGlobalAsyncIteratorType ||= getGlobalType("AsyncIterator" as __String, /*arity*/ 3, reportErrors)) || emptyGenericType;
        }

        function getGlobalAsyncIterableIteratorType(reportErrors: boolean) {
            return (deferredGlobalAsyncIterableIteratorType ||= getGlobalType("AsyncIterableIterator" as __String, /*arity*/ 3, reportErrors)) || emptyGenericType;
        }

        function getGlobalBuiltinAsyncIteratorTypes() {
            // NOTE: This list does not include all built-in async iterator types, only those that are likely to be encountered frequently.
            return deferredGlobalBuiltinAsyncIteratorTypes ??= getGlobalBuiltinTypes(["ReadableStreamAsyncIterator"], 1);
        }

        function getGlobalAsyncIteratorObjectType(reportErrors: boolean) {
            return (deferredGlobalAsyncIteratorObjectType ||= getGlobalType("AsyncIteratorObject" as __String, /*arity*/ 3, reportErrors)) || emptyGenericType;
        }

        function getGlobalAsyncGeneratorType(reportErrors: boolean) {
            return (deferredGlobalAsyncGeneratorType ||= getGlobalType("AsyncGenerator" as __String, /*arity*/ 3, reportErrors)) || emptyGenericType;
        }

        function getGlobalIterableType(reportErrors: boolean) {
            return (deferredGlobalIterableType ||= getGlobalType("Iterable" as __String, /*arity*/ 3, reportErrors)) || emptyGenericType;
        }

        function getGlobalIteratorType(reportErrors: boolean) {
            return (deferredGlobalIteratorType ||= getGlobalType("Iterator" as __String, /*arity*/ 3, reportErrors)) || emptyGenericType;
        }

        function getGlobalIterableIteratorType(reportErrors: boolean) {
            return (deferredGlobalIterableIteratorType ||= getGlobalType("IterableIterator" as __String, /*arity*/ 3, reportErrors)) || emptyGenericType;
        }

        function getBuiltinIteratorReturnType() {
            return strictBuiltinIteratorReturn ? undefinedType : anyType;
        }

        function getGlobalBuiltinIteratorTypes() {
            // NOTE: This list does not include all built-in iterator types, only those that are likely to be encountered frequently.
            return deferredGlobalBuiltinIteratorTypes ??= getGlobalBuiltinTypes(["ArrayIterator", "MapIterator", "SetIterator", "StringIterator"], 1);
        }

        function getGlobalIteratorObjectType(reportErrors: boolean) {
            return (deferredGlobalIteratorObjectType ||= getGlobalType("IteratorObject" as __String, /*arity*/ 3, reportErrors)) || emptyGenericType;
        }

        function getGlobalGeneratorType(reportErrors: boolean) {
            return (deferredGlobalGeneratorType ||= getGlobalType("Generator" as __String, /*arity*/ 3, reportErrors)) || emptyGenericType;
        }

        function getGlobalIteratorYieldResultType(reportErrors: boolean) {
            return (deferredGlobalIteratorYieldResultType ||= getGlobalType("IteratorYieldResult" as __String, /*arity*/ 1, reportErrors)) || emptyGenericType;
        }

        function getGlobalIteratorReturnResultType(reportErrors: boolean) {
            return (deferredGlobalIteratorReturnResultType ||= getGlobalType("IteratorReturnResult" as __String, /*arity*/ 1, reportErrors)) || emptyGenericType;
        }

        function getGlobalDisposableType(reportErrors: boolean) {
            return (deferredGlobalDisposableType ||= getGlobalType("Disposable" as __String, /*arity*/ 0, reportErrors)) || emptyObjectType;
        }

        function getGlobalAsyncDisposableType(reportErrors: boolean) {
            return (deferredGlobalAsyncDisposableType ||= getGlobalType("AsyncDisposable" as __String, /*arity*/ 0, reportErrors)) || emptyObjectType;
        }

        function getGlobalTypeOrUndefined(name: __String, arity = 0): ObjectType | undefined {
            const symbol = getGlobalSymbol(name, SymbolFlags.Type, /*diagnostic*/ undefined);
            return symbol && getTypeOfGlobalSymbol(symbol, arity) as GenericType;
        }

        function getGlobalExtractSymbol(): Symbol | undefined {
            // We always report an error, so cache a result in the event we could not resolve the symbol to prevent reporting it multiple times
            deferredGlobalExtractSymbol ||= getGlobalTypeAliasSymbol("Extract" as __String, /*arity*/ 2, /*reportErrors*/ true) || unknownSymbol;
            return deferredGlobalExtractSymbol === unknownSymbol ? undefined : deferredGlobalExtractSymbol;
        }

        function getGlobalOmitSymbol(): Symbol | undefined {
            // We always report an error, so cache a result in the event we could not resolve the symbol to prevent reporting it multiple times
            deferredGlobalOmitSymbol ||= getGlobalTypeAliasSymbol("Omit" as __String, /*arity*/ 2, /*reportErrors*/ true) || unknownSymbol;
            return deferredGlobalOmitSymbol === unknownSymbol ? undefined : deferredGlobalOmitSymbol;
        }

        function getGlobalAwaitedSymbol(reportErrors: boolean): Symbol | undefined {
            // Only cache `unknownSymbol` if we are reporting errors so that we don't report the error more than once.
            deferredGlobalAwaitedSymbol ||= getGlobalTypeAliasSymbol("Awaited" as __String, /*arity*/ 1, reportErrors) || (reportErrors ? unknownSymbol : undefined);
            return deferredGlobalAwaitedSymbol === unknownSymbol ? undefined : deferredGlobalAwaitedSymbol;
        }

        function getGlobalBigIntType() {
            return (deferredGlobalBigIntType ||= getGlobalType("BigInt" as __String, /*arity*/ 0, /*reportErrors*/ false)) || emptyObjectType;
        }

        function getGlobalClassDecoratorContextType(reportErrors: boolean) {
            return (deferredGlobalClassDecoratorContextType ??= getGlobalType("ClassDecoratorContext" as __String, /*arity*/ 1, reportErrors)) ?? emptyGenericType;
        }

        function getGlobalClassMethodDecoratorContextType(reportErrors: boolean) {
            return (deferredGlobalClassMethodDecoratorContextType ??= getGlobalType("ClassMethodDecoratorContext" as __String, /*arity*/ 2, reportErrors)) ?? emptyGenericType;
        }

        function getGlobalClassGetterDecoratorContextType(reportErrors: boolean) {
            return (deferredGlobalClassGetterDecoratorContextType ??= getGlobalType("ClassGetterDecoratorContext" as __String, /*arity*/ 2, reportErrors)) ?? emptyGenericType;
        }

        function getGlobalClassSetterDecoratorContextType(reportErrors: boolean) {
            return (deferredGlobalClassSetterDecoratorContextType ??= getGlobalType("ClassSetterDecoratorContext" as __String, /*arity*/ 2, reportErrors)) ?? emptyGenericType;
        }

        function getGlobalClassAccessorDecoratorContextType(reportErrors: boolean) {
            return (deferredGlobalClassAccessorDecoratorContextType ??= getGlobalType("ClassAccessorDecoratorContext" as __String, /*arity*/ 2, reportErrors)) ?? emptyGenericType;
        }

        function getGlobalClassAccessorDecoratorTargetType(reportErrors: boolean) {
            return (deferredGlobalClassAccessorDecoratorTargetType ??= getGlobalType("ClassAccessorDecoratorTarget" as __String, /*arity*/ 2, reportErrors)) ?? emptyGenericType;
        }

        function getGlobalClassAccessorDecoratorResultType(reportErrors: boolean) {
            return (deferredGlobalClassAccessorDecoratorResultType ??= getGlobalType("ClassAccessorDecoratorResult" as __String, /*arity*/ 2, reportErrors)) ?? emptyGenericType;
        }

        function getGlobalClassFieldDecoratorContextType(reportErrors: boolean) {
            return (deferredGlobalClassFieldDecoratorContextType ??= getGlobalType("ClassFieldDecoratorContext" as __String, /*arity*/ 2, reportErrors)) ?? emptyGenericType;
        }

        function getGlobalNaNSymbol(): Symbol | undefined {
            return (deferredGlobalNaNSymbol ||= getGlobalValueSymbol("NaN" as __String, /*reportErrors*/ false));
        }

        function getGlobalRecordSymbol(): Symbol | undefined {
            deferredGlobalRecordSymbol ||= getGlobalTypeAliasSymbol("Record" as __String, /*arity*/ 2, /*reportErrors*/ true) || unknownSymbol;
            return deferredGlobalRecordSymbol === unknownSymbol ? undefined : deferredGlobalRecordSymbol;
        }

        var iterationTypesCache = new Map<string, IterationTypes>(); // cache for common IterationTypes instances
        var noIterationTypes: IterationTypes = {
            get yieldType(): Type {
                return Debug.fail("Not supported");
            },
            get returnType(): Type {
                return Debug.fail("Not supported");
            },
            get nextType(): Type {
                return Debug.fail("Not supported");
            },
        };

        var anyIterationTypes = createIterationTypes(anyType, anyType, anyType);

        var asyncIterationTypesResolver: IterationTypesResolver = {
            iterableCacheKey: "iterationTypesOfAsyncIterable",
            iteratorCacheKey: "iterationTypesOfAsyncIterator",
            iteratorSymbolName: "asyncIterator",
            getGlobalIteratorType: getGlobalAsyncIteratorType,
            getGlobalIterableType: getGlobalAsyncIterableType,
            getGlobalIterableIteratorType: getGlobalAsyncIterableIteratorType,
            getGlobalIteratorObjectType: getGlobalAsyncIteratorObjectType,
            getGlobalGeneratorType: getGlobalAsyncGeneratorType,
            getGlobalBuiltinIteratorTypes: getGlobalBuiltinAsyncIteratorTypes,
            resolveIterationType: (type, errorNode) => getAwaitedType(type, errorNode, Diagnostics.Type_of_await_operand_must_either_be_a_valid_promise_or_must_not_contain_a_callable_then_member),
            mustHaveANextMethodDiagnostic: Diagnostics.An_async_iterator_must_have_a_next_method,
            mustBeAMethodDiagnostic: Diagnostics.The_0_property_of_an_async_iterator_must_be_a_method,
            mustHaveAValueDiagnostic: Diagnostics.The_type_returned_by_the_0_method_of_an_async_iterator_must_be_a_promise_for_a_type_with_a_value_property,
        };

        var syncIterationTypesResolver: IterationTypesResolver = {
            iterableCacheKey: "iterationTypesOfIterable",
            iteratorCacheKey: "iterationTypesOfIterator",
            iteratorSymbolName: "iterator",
            getGlobalIteratorType,
            getGlobalIterableType,
            getGlobalIterableIteratorType,
            getGlobalIteratorObjectType,
            getGlobalGeneratorType,
            getGlobalBuiltinIteratorTypes,
            resolveIterationType: (type, _errorNode) => type,
            mustHaveANextMethodDiagnostic: Diagnostics.An_iterator_must_have_a_next_method,
            mustBeAMethodDiagnostic: Diagnostics.The_0_property_of_an_iterator_must_be_a_method,
            mustHaveAValueDiagnostic: Diagnostics.The_type_returned_by_the_0_method_of_an_iterator_must_have_a_value_property,
        };

        let globalObjectType: ObjectType;
        let globalFunctionType: ObjectType;
        let globalCallableFunctionType: ObjectType;
        let globalNewableFunctionType: ObjectType;
        let globalArrayType: GenericType;
        let globalReadonlyArrayType: GenericType;
        let globalStringType: ObjectType;
        let globalNumberType: ObjectType;
        let globalBooleanType: ObjectType;
        let globalRegExpType: ObjectType;
        let globalThisType: GenericType;
        let anyArrayType: Type;
        let autoArrayType: Type;
        let anyReadonlyArrayType: Type;
        let deferredGlobalNonNullableTypeAlias: Symbol;

        // The library files are only loaded when the feature is used.
        // This allows users to just specify library files they want to used through --lib
        // and they will not get an error from not having unrelated library files
        var deferredGlobalESSymbolConstructorSymbol: Symbol | undefined;
        var deferredGlobalESSymbolConstructorTypeSymbol: Symbol | undefined;
        var deferredGlobalESSymbolType: ObjectType | undefined;
        var deferredGlobalTypedPropertyDescriptorType: GenericType;
        var deferredGlobalPromiseType: GenericType | undefined;
        var deferredGlobalPromiseLikeType: GenericType | undefined;
        var deferredGlobalPromiseConstructorSymbol: Symbol | undefined;
        var deferredGlobalPromiseConstructorLikeType: ObjectType | undefined;
        var deferredGlobalIterableType: GenericType | undefined;
        var deferredGlobalIteratorType: GenericType | undefined;
        var deferredGlobalIterableIteratorType: GenericType | undefined;
        var deferredGlobalIteratorObjectType: GenericType | undefined;
        var deferredGlobalGeneratorType: GenericType | undefined;
        var deferredGlobalIteratorYieldResultType: GenericType | undefined;
        var deferredGlobalIteratorReturnResultType: GenericType | undefined;
        var deferredGlobalAsyncIterableType: GenericType | undefined;
        var deferredGlobalAsyncIteratorType: GenericType | undefined;
        var deferredGlobalAsyncIterableIteratorType: GenericType | undefined;
        var deferredGlobalBuiltinIteratorTypes: readonly GenericType[] | undefined;
        var deferredGlobalBuiltinAsyncIteratorTypes: readonly GenericType[] | undefined;
        var deferredGlobalAsyncIteratorObjectType: GenericType | undefined;
        var deferredGlobalAsyncGeneratorType: GenericType | undefined;
        var deferredGlobalTemplateStringsArrayType: ObjectType | undefined;
        var deferredGlobalImportMetaType: ObjectType;
        var deferredGlobalImportMetaExpressionType: ObjectType;
        var deferredGlobalImportCallOptionsType: ObjectType | undefined;
        var deferredGlobalImportAttributesType: ObjectType | undefined;
        var deferredGlobalDisposableType: ObjectType | undefined;
        var deferredGlobalAsyncDisposableType: ObjectType | undefined;
        var deferredGlobalExtractSymbol: Symbol | undefined;
        var deferredGlobalOmitSymbol: Symbol | undefined;
        var deferredGlobalAwaitedSymbol: Symbol | undefined;
        var deferredGlobalBigIntType: ObjectType | undefined;
        var deferredGlobalNaNSymbol: Symbol | undefined;
        var deferredGlobalRecordSymbol: Symbol | undefined;
        var deferredGlobalClassDecoratorContextType: GenericType | undefined;
        var deferredGlobalClassMethodDecoratorContextType: GenericType | undefined;
        var deferredGlobalClassGetterDecoratorContextType: GenericType | undefined;
        var deferredGlobalClassSetterDecoratorContextType: GenericType | undefined;
        var deferredGlobalClassAccessorDecoratorContextType: GenericType | undefined;
        var deferredGlobalClassAccessorDecoratorTargetType: GenericType | undefined;
        var deferredGlobalClassAccessorDecoratorResultType: GenericType | undefined;
        var deferredGlobalClassFieldDecoratorContextType: GenericType | undefined;

        ;

        /**
         * Instantiates a global type that is generic with some element type, and returns that instantiation.
         */
        function createTypeFromGenericGlobalType(genericGlobalType: GenericType, typeArguments: readonly Type[]): ObjectType {
            return genericGlobalType !== emptyGenericType ? createTypeReference(genericGlobalType, typeArguments) : emptyObjectType;
        }

        return {
            globals ,
            undefinedSymbol ,
            globalThisSymbol ,
            requireSymbol ,
            getGlobalSymbol ,
        } as const ;
    }

    //
}

interface IterationTypesResolver {
    iterableCacheKey: "iterationTypesOfAsyncIterable" | "iterationTypesOfIterable";
    iteratorCacheKey: "iterationTypesOfAsyncIterator" | "iterationTypesOfIterator";
    iteratorSymbolName: "asyncIterator" | "iterator";
    getGlobalIteratorType: (reportErrors: boolean) => GenericType;
    getGlobalIterableType: (reportErrors: boolean) => GenericType;
    getGlobalIterableIteratorType: (reportErrors: boolean) => GenericType;
    getGlobalIteratorObjectType: (reportErrors: boolean) => GenericType;
    getGlobalGeneratorType: (reportErrors: boolean) => GenericType;
    getGlobalBuiltinIteratorTypes: () => readonly GenericType[];
    resolveIterationType: (type: Type, errorNode: Node | undefined) => Type | undefined;
    mustHaveANextMethodDiagnostic: DiagnosticMessage;
    mustBeAMethodDiagnostic: DiagnosticMessage;
    mustHaveAValueDiagnostic: DiagnosticMessage;
}

;









