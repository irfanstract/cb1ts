

import * as ts from "./_namespaces/ts";
import {
    __String,
    addInternalEmitFlags,
    addRange,
    append,
    arrayFrom,
    arrayIsEqualTo,
    AsExpression,
    AssertClause,
    BuilderProgram,
    CancellationToken,
    canHaveDecorators,
    canHaveIllegalDecorators,
    chainDiagnosticMessages,
    changeExtension,
    changesAffectingProgramStructure,
    changesAffectModuleResolution,
    combinePaths,
    CommentDirective,
    CommentDirectivesMap,
    compareDataObjects,
    comparePaths,
    compareValues,
    Comparison,
    CompilerHost,
    CompilerOptions,
    computeLineAndCharacterOfPosition,
    concatenate,
    contains,
    containsIgnoredPath,
    containsPath,
    convertToRelativePath,
    createCommentDirectivesMap,
    createCompilerDiagnostic,
    createCompilerDiagnosticFromMessageChain,
    createDiagnosticCollection,
    createDiagnosticForNodeFromMessageChain,
    createDiagnosticForNodeInSourceFile,
    createDiagnosticForRange,
    createFileDiagnostic,
    createFileDiagnosticFromMessageChain,
    createGetCanonicalFileName,
    createInputFilesWithFilePaths,
    createModeAwareCache,
    createModeAwareCacheKey,
    createModuleResolutionCache,
    createMultiMap,
    CreateProgramOptions,
    createSourceFile,
    CreateSourceFileOptions,
    createSymlinkCache,
    createTypeChecker,
    createTypeReferenceDirectiveResolutionCache,
    createWriteFileMeasuringIO ,
    CustomTransformers,
    Debug,
    DeclarationWithTypeParameterChildren,
    DeprecationVersion,
    Diagnostic,
    DiagnosticCategory,
    diagnosticCategoryName,
    DiagnosticMessage,
    DiagnosticMessageChain,
    DiagnosticReporter,
    Diagnostics,
    DiagnosticWithLocation,
    directorySeparator,
    DirectoryStructureHost,
    emitFiles,
    EmitHost,
    EmitOnly,
    EmitResult,
    emptyArray,
    ensureTrailingDirectorySeparator,
    equateStringsCaseInsensitive,
    equateStringsCaseSensitive,
    explainIfFileIsRedirectAndImpliedFormat,
    ExportAssignment,
    ExportDeclaration,
    Extension,
    extensionFromPath,
    externalHelpersModuleNameText,
    factory,
    fileExtensionIs,
    fileExtensionIsOneOf,
    FileIncludeKind,
    FileIncludeReason,
    fileIncludeReasonToDiagnostics,
    FilePreprocessingDiagnostics,
    FilePreprocessingDiagnosticsKind,
    FileReference,
    filter,
    find,
    findIndex,
    firstDefined,
    firstDefinedIterator,
    flatMap,
    flatten,
    forEach,
    forEachAncestorDirectory,
    forEachChild,
    forEachChildRecursively,
    forEachEmittedFile,
    forEachEntry,
    forEachKey,
    FunctionLikeDeclaration,
    getAllowJSCompilerOption,
    getAutomaticTypeDirectiveNames,
    getBaseFileName,
    GetCanonicalFileName,
    getCommonSourceDirectoryOfConfig,
    getDefaultLibFileName,
    getDirectoryPath,
    getEmitDeclarations,
    getEmitModuleKind,
    getEmitModuleResolutionKind,
    getEmitScriptTarget,
    getErrorSpanForNode,
    getExternalModuleName,
    getJSXImplicitImportBase,
    getJSXRuntimeImport,
    getLineAndCharacterOfPosition,
    getLineStarts,
    getMatchedFileSpec,
    getMatchedIncludeSpec,
    getNewLineCharacter,
    getNormalizedAbsolutePath,
    getNormalizedAbsolutePathWithoutRoot,
    getNormalizedPathComponents,
    getOutputDeclarationFileName,
    getOutputPathsForBundle,
    getPackageScopeForPath,
    getPathFromPathComponents,
    getPositionOfLineAndCharacter,
    getPropertyArrayElementValue,
    getPropertyAssignment,
    getResolvedModule,
    getResolveJsonModule,
    getRootLength,
    getSetExternalModuleIndicator,
    getSpellingSuggestion,
    getStrictOptionValue,
    getSupportedExtensions,
    getSupportedExtensionsWithJsonIfResolveJsonModule,
    getTemporaryModuleResolutionState,
    getTextOfIdentifierOrLiteral,
    getTransformers,
    getTsBuildInfoEmitOutputFilePath,
    getTsConfigObjectLiteralExpression,
    getTsConfigPropArray,
    getTsConfigPropArrayElementValue,
    HasChangedAutomaticTypeDirectiveNames,
    hasChangesInResolutions,
    hasExtension,
    HasInvalidatedResolutions,
    hasJSDocNodes,
    hasJSFileExtension,
    hasJsonModuleEmitEnabled,
    hasProperty,
    hasSyntacticModifier,
    hasZeroOrOneAsteriskCharacter,
    HeritageClause,
    Identifier,
    identity,
    ImportClause,
    ImportDeclaration,
    ImportOrExportSpecifier,
    InputFiles,
    InternalEmitFlags,
    inverseJsxOptionMap,
    isAmbientModule,
    isAnyImportOrReExport,
    isArray,
    isArrayLiteralExpression,
    isBuildInfoFile,
    isCheckJsEnabledForFile,
    isClassDeclaration,
    isDeclarationFileName,
    isDecorator,
    isDefaultModifier,
    isExportDeclaration,
    isExportModifier,
    isExternalModule,
    isExternalModuleNameRelative,
    isIdentifierText,
    isImportCall,
    isImportDeclaration,
    isImportEqualsDeclaration,
    isImportSpecifier,
    isImportTypeNode,
    isIncrementalCompilation,
    isInJSFile,
    isLiteralImportTypeNode,
    isModifier,
    isModuleDeclaration,
    isObjectLiteralExpression,
    isParameter,
    isPlainJsFile,
    isRequireCall,
    isRootedDiskPath,
    isSourceFileJS,
    isString,
    isStringLiteral,
    isStringLiteralLike,
    isTraceEnabled,
    JsonSourceFile,
    JsxEmit,
    length,
    libMap,
    libs,
    mapDefined,
    mapDefinedIterator,
    maybeBind,
    memoize,
    MethodDeclaration,
    ModeAwareCache,
    ModeAwareCacheKey,
    ModifierFlags,
    ModifierLike,
    ModuleBlock,
    ModuleDeclaration,
    ModuleKind,
    ModuleResolutionCache,
    ModuleResolutionHost,
    moduleResolutionIsEqualTo,
    ModuleResolutionKind,
    moduleResolutionSupportsPackageJsonExportsAndImports,
    Mutable,
    Node,
    NodeArray,
    NodeFlags,
    nodeModulesPathPart,
    NodeWithTypeArguments,
    noop,
    normalizePath,
    notImplementedResolver,
    noTransformers,
    ObjectLiteralExpression,
    OperationCanceledException,
    optionsHaveChanges,
    outFile,
    PackageId,
    packageIdToPackageName,
    packageIdToString,
    PackageJsonInfoCache,
    padLeft,
    ParameterDeclaration,
    ParseConfigFileHost,
    ParsedCommandLine,
    parseIsolatedEntityName,
    parseJsonSourceFileConfigFileContent,
    parseNodeFactory,
    Path,
    pathIsAbsolute,
    pathIsRelative,
    Program,
    ProgramHost,
    ProjectReference,
    ProjectReferenceFile,
    projectReferenceIsEqualTo,
    PropertyDeclaration,
    ReferencedFile,
    removeFileExtension,
    removePrefix,
    removeSuffix,
    resolutionExtensionIsTSOrJson,
    ResolutionMode,
    resolveConfigFileProjectName,
    ResolvedConfigFileName,
    ResolvedModuleFull,
    ResolvedModuleWithFailedLookupLocations,
    ResolvedProjectReference,
    ResolvedTypeReferenceDirectiveWithFailedLookupLocations,
    resolveModuleName,
    resolveTypeReferenceDirective,
    returnFalse,
    returnUndefined,
    SatisfiesExpression,
    ScriptKind,
    ScriptTarget,
    setParent,
    setParentRecursive,
    setResolvedModule,
    setResolvedTypeReferenceDirective,
    skipTrivia,
    skipTypeChecking,
    some,
    sortAndDeduplicateDiagnostics,
    SortedReadonlyArray,
    SourceFile,
    sourceFileAffectingCompilerOptions,
    sourceFileMayBeEmitted,
    SourceOfProjectReferenceRedirect,
    stableSort,
    startsWith,
    Statement,
    stringContains,
    StringLiteral,
    StringLiteralLike,
    StructureIsReused,
    supportedJSExtensionsFlat,
    SymlinkCache,
    SyntaxKind,
    sys,
    targetOptionDeclaration,
    toFileNameLowerCase,
    tokenToString,
    trace,
    tracing,
    trimStringEnd,
    TsConfigSourceFile,
    TypeChecker,
    typeDirectiveIsEqualTo,
    TypeReferenceDirectiveResolutionCache,
    UnparsedSource,
    VariableDeclaration,
    VariableStatement,
    versionMajorMinor,
    walkUpParenthesizedExpressions,
    WriteFileCallback,
    WriteFileCallbackData,
    writeFileEnsuringDirectories,
    zipToModeAwareCache,
} from "./_namespaces/ts";
import * as performance from "./_namespaces/ts.performance";














/** @internal */
export function createGetSourceFile(
    readFile: ProgramHost<any>["readFile"],
    getCompilerOptions: () => CompilerOptions,
    setParentNodes: boolean | undefined
): CompilerHost["getSourceFile"] {
    return (fileName, languageVersionOrOptions, onError) => {
        let text: string | undefined;
        try {
            performance.mark("beforeIORead");
            text = readFile(fileName, getCompilerOptions().charset);
            performance.mark("afterIORead");
            performance.measure("I/O Read", "beforeIORead", "afterIORead");
        }
        catch (e) {
            if (onError) {
                onError(e.message);
            }
            text = "";
        }
        return text !== undefined ? createSourceFile(fileName, text, languageVersionOrOptions, setParentNodes) : undefined;
    };
}

/** @internal */
export function createCompilerHostWorker(options: CompilerOptions, setParentNodes?: boolean, system = sys): CompilerHost {
    const existingDirectories = new Map<string, boolean>();
    const getCanonicalFileName = createGetCanonicalFileName(system.useCaseSensitiveFileNames);
    function directoryExists(directoryPath: string): boolean {
        if (existingDirectories.has(directoryPath)) {
            return true;
        }
        if ((compilerHost.directoryExists || system.directoryExists)(directoryPath)) {
            existingDirectories.set(directoryPath, true);
            return true;
        }
        return false;
    }

    function getDefaultLibLocation(): string {
        return getDirectoryPath(normalizePath(system.getExecutingFilePath()));
    }

    const newLine = getNewLineCharacter(options);
    const realpath = system.realpath && ((path: string) => system.realpath!(path));
    const compilerHost: CompilerHost = {
        getSourceFile: createGetSourceFile(fileName => compilerHost.readFile(fileName), () => options, setParentNodes),
        getDefaultLibLocation,
        getDefaultLibFileName: options => combinePaths(getDefaultLibLocation(), getDefaultLibFileName(options)),
        writeFile: createWriteFileMeasuringIO(
            (path, data, writeByteOrderMark) => system.writeFile(path, data, writeByteOrderMark),
            path => (compilerHost.createDirectory || system.createDirectory)(path),
            path => directoryExists(path),
        ),
        getCurrentDirectory: memoize(() => system.getCurrentDirectory()),
        useCaseSensitiveFileNames: () => system.useCaseSensitiveFileNames,
        getCanonicalFileName,
        getNewLine: () => newLine,
        fileExists: fileName => system.fileExists(fileName),
        readFile: fileName => system.readFile(fileName),
        trace: (s: string) => system.write(s + newLine),
        directoryExists: directoryName => system.directoryExists(directoryName),
        getEnvironmentVariable: name => system.getEnvironmentVariable ? system.getEnvironmentVariable(name) : "",
        getDirectories: (path: string) => system.getDirectories(path),
        realpath,
        readDirectory: (path, extensions, include, exclude, depth) => system.readDirectory(path, extensions, include, exclude, depth),
        createDirectory: d => system.createDirectory(d),
        createHash: maybeBind(system, system.createHash)
    };
    return compilerHost;
}

















