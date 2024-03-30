





import {
    CompilerOptionsValue,
    bindSourceFile ,
    Debug,
    ImportsNotUsedAsValues,
    JsxEmit,
    MapLike,
    ModuleDetectionKind,
    ModuleKind,
    ModuleResolutionKind,
    NewLineKind,
    PickAlt,
    PluginImport,
    PollingWatchKind,
    TsConfigSourceFile,
    TypeChecker,
    WatchDirectoryKind,
    WatchFileKind ,
} from "./_namespaces/ts" ;








export interface SupportedCompilerOptions extends
SupportedCompilerHelpAndTroubleshootingOptions, 
SupportedCompilerIgnoreDeprecationsOptions
{ }

export interface SupportedCompilerOptions extends 
SupportedCompileLanguageAndLinkageOptions,
SupportedModuleResolutionOptions,
SupportedCompilerDistEmitOptions,
SupportedCompilerDownlevellingOptions
{ }

/**
 * `strict` affects type-checking, yet
 * generally doesn't affect desugaring at all
 * .
 * 
 */
export interface SupportedCompileLanguageAndLinkageOptions extends
SupportedCompiledSourcesLintingOptions,
SupportedCompileDesugaringAndLinkageOptions, 
SupportedCompilerIgnoreDeprecationsOptions
{ }

/**
 * everything from including
 * {@link SupportedCompilerDesugaringOptions desugaring},
 * {@link SupportedCompilerDownlevellingOptions downlevelling},
 * to {@link SupportedCompilerDistEmitOptions} .
 * 
 */
export interface SupportedCompileDesugaringAndLinkageOptions
extends
SupportedModuleInterLinkageOptions,
SupportedAllowedModuleImportExtsOptions,
SupportedCompileDesugaringAndDownlevellingOptions,
SupportedCompilerDownlevellingOptions,
SupportedCompilerIgnoreDeprecationsOptions
{ }

/**
 * {@link SupportedCompilerDesugaringOptions desugaring} and
 * {@link SupportedCompilerDownlevellingOptions downlevelling}.
 * 
 */
export interface SupportedCompileDesugaringAndDownlevellingOptions extends
SupportedCompilerDesugaringOptions,
SupportedCompilerDownlevellingOptions,
SupportedCompilerIgnoreDeprecationsOptions
{}

/**
 * inter-linking between modules
 * 
 */
export interface SupportedModuleInterLinkageOptions
extends
SupportedModuleResolutionOptions,
SupportedModuleInterFmtsInteropOptions,
SupportedAllowedModuleImportExtsOptions,
SupportedCompilerIgnoreDeprecationsOptions
{ }

/**
 * configures the translations of import-path(s) occuring in a code -
 * to resolve to (if any) specific some other files.
 * 
 */
export interface SupportedModuleResolutionOptions
extends
SupportedCompilerSrcFilePathsOptions,
SupportedCompilerDesugaringOptions,
SupportedCompilerIgnoreDeprecationsOptions
{ }

export interface SupportedModuleInterFmtsInteropOptions extends
SupportedCompilerSrcFilePathsOptions,
SupportedAllowedModuleImportExtsOptions,
SupportedCompilerIgnoreDeprecationsOptions
{ }

/**
 * configures the meaning - by corresponding, desugared form - of relevant language features or constructs.
 */
export interface SupportedCompilerDesugaringOptions
{
}

export interface SupportedCompilerDesugaringOptions
{
    /** @internal */ all?: boolean;
}

export interface SupportedAllowedModuleImportExtsOptions
{
    allowImportingTsExtensions?: boolean;
    allowJs?: boolean;
    /** @internal */ allowNonTsExtensions?: boolean;
    allowArbitraryExtensions?: boolean;
}

export interface SupportedCompilerOptions
{
    //

    allowSyntheticDefaultImports?: boolean;
}

export interface SupportedCompiledSourcesLintingOptions
{
    allowUmdGlobalAccess?: boolean;
    /** do not use. before removing existing code, try to ask colleague what such section of code means. */
    allowUnreachableCode?: boolean;
    /** do not use. {@link noUnlabelledJumps removal of labels would be a bad idea}. */
    allowUnusedLabels?: boolean;
    /** enforce explicit label ref, in jumps (excluding `return`  and `throw`). */
    noUnlabelledJumps?: boolean;
}

export interface SupportedCompilerDesugaringOptions
{
    alwaysStrict?: boolean; // Always combine with strict property
}

export interface SupportedCompilerSrcFilePathsOptions
{
    baseUrl?: string;
}

export interface SupportedCompilerOptions
{
    /**
     * An error if set - this should only go through the -b pipeline and not actually be observed
     *
     * @internal
     */
    build?: boolean;
    /** @deprecated */
    charset?: string;
}

export interface SupportedCompiledSourcesLintingOptions
{
    checkJs?: boolean;
}

export interface SupportedCompilerOptions
{
    /** @internal */ configFilePath?: string;
    /**
     * configFile is set as non enumerable property so as to avoid checking of json source files
     *
     * @internal
     */
    readonly configFile?: TsConfigSourceFile;
}

export interface SupportedCompilerSrcFilePathsOptions
{
    customConditions?: string[];
}

export interface SupportedCompilerDistEmitOptions
{
    declaration?: boolean;
    declarationMap?: boolean;
    emitDeclarationOnly?: boolean;
    declarationDir?: string;
}

export interface SupportedCompilerHelpAndTroubleshootingOptions
{
    /** @internal */ diagnostics?: boolean;
    /** @internal */ extendedDiagnostics?: boolean;
    disableSizeLimit?: boolean;
    disableSourceOfProjectReferenceRedirect?: boolean;
    disableSolutionSearching?: boolean;
    disableReferencedProjectLoad?: boolean;
}

/**
 * configures
 * the translation -
 * from sources - to {@link SupportedCompileTargetPlatformBytecodeOptions the target-platform bytecode fmt} -
 * without changing the meanings of any of the language constructs at all
 * .
 * 
 */
export interface SupportedCompilerDownlevellingOptions
extends SupportedCompileTargetPlatformBytecodeOptions
{
}

/**
 * assumptions-or-requirements of the platform used to run the generated bytecodes.
 * 
 */
export interface SupportedCompileTargetPlatformBytecodeOptions
{
}

export interface SupportedCompileTargetPlatformBytecodeOptions
{
    downlevelIteration?: boolean;
    emitBOM?: boolean;
    emitDecoratorMetadata?: boolean;
}

/**
 * configures
 * checking/linting(s)-specific options
 * not affecting {@link SupportedCompilerDesugaringOptions desugaring} and more generally {@link SupportedCompileDesugaringAndLinkageOptions desugaring-and-linkage} at all
 * .
 * 
 */
export interface SupportedCompiledSourcesLintingOptions
{}

export interface SupportedCompiledSourcesLintingOptions extends
SupportedCompilerExactOptionalPropertyTypesOptions
{}

export interface SupportedCompilerExactOptionalPropertyTypesOptions
{
    exactOptionalPropertyTypes?: boolean;
}

export interface SupportedCompilerDesugaringOptions
{
    experimentalDecorators?: boolean;
}

export interface SupportedCompilerSrcFilePathsOptions
extends SupportedCompilerSrcFilePathsStrictsOptions
{}

export interface SupportedCompiledSourcesLintingOptions extends
SupportedCompilerSrcFilePathsStrictsOptions
{
}

export interface SupportedCompilerSrcFilePathsStrictsOptions
{
    forceConsistentCasingInFileNames?: boolean;
}

export interface SupportedCompilerHelpAndTroubleshootingOptions
extends
SupportedCompilerSrcFilePathsStrictsOptions,
SupportedCompilerIgnoreDeprecationsOptions
{
}

export interface SupportedCompilerHelpAndTroubleshootingOptions
{
    /** @internal */ generateCpuProfile?: string;
    /** @internal */ generateTrace?: string;
    /** @internal */ help?: boolean;
}

export interface SupportedCompilerIgnoreDeprecationsOptions
{
    ignoreDeprecations?: string;
}

export interface SupportedCompilerDownlevellingOptions
{
    importHelpers?: boolean;
}

/**
 * {@link importsNotUsedAsValues} is considered a desugaring config as
 * it *changes the meaning of* unused imports
 * (ie
 * under {@link importsNotUsedAsValues}, *semantically*, `import` means "do actual fetch/import/load, run the file, then name some its exports", while,
 * with the switch disabled, `import`s turns into merely "i merely want to use functions and interfaces defined in the module" )
 * .
 * 
 */
export interface SupportedCompilerDesugaringOptions
{
    importsNotUsedAsValues?: ImportsNotUsedAsValues;
}

export interface SupportedCompilerOptions
{
    /** @internal */ init?: boolean;
}

export interface SupportedCompilerDistEmitOptions extends
SupportedCompiledSourcesSourceMapOptions
{}

export interface SupportedCompiledSourcesSourceMapOptions
{
    inlineSourceMap?: boolean;
}

export interface SupportedCompiledSourcesSourceMapOptions
{
    inlineSources?: boolean;
}

/**
 * the meanings of certain language constructs
 * will be affected/impacted by {@link isolatedModules} -
 * for example, in case of {@link SupportedCompilerDesugaringOptions type-directed emit} combined with `--isolated-modules`,
 * *given extension methods* and implicit conversions will not be available, effective changing the behvr of the affected code(s)
 * .
 * 
 */
export interface SupportedCompilerDesugaringOptions
{
    isolatedModules?: boolean;
}

export interface SupportedCompilerDesugaringOptions
extends SupportedCompiledJsxDesugaringOptions
{
}

/**
 * JSX desugaring config
 * 
 */
export interface SupportedCompiledJsxDesugaringOptions
{
    jsx?: JsxEmit;
}

export interface SupportedCompiledSourcesLintingOptions
{
    /** @deprecated */
    keyofStringsOnly?: boolean;
}

export interface SupportedCompilerSrcFilePathsOptions
{
    lib?: string[];
}

export interface SupportedCompilerHelpAndTroubleshootingOptions
{
    /** @internal */ listEmittedFiles?: boolean;
    /** @internal */ listFiles?: boolean;
    /** @internal */ explainFiles?: boolean;
    /** @internal */ listFilesOnly?: boolean;
    locale?: string;
}

export interface SupportedCompilerSrcFilePathsOptions
{
    mapRoot?: string;
}

export interface SupportedCompilerOptions
{
    maxNodeModuleJsDepth?: number;
}

export interface SupportedCompilerDesugaringOptions
{
    module?: ModuleKind;
}

export interface SupportedCompilerSrcFilePathsOptions
{
    moduleResolution?: ModuleResolutionKind;
    moduleSuffixes?: string[];
}

/**
 * changes to
 * the whitelisting(s) of importible module types and
 * {@link SupportedCompilerSrcFilePathsOptions the translations of the import-path(s)}
 * may affect the meanings of `import`s of affected kinds of module files
 * (eg {@link bindSourceFile the CFA} may render failing (eg *imports of non-existent modules*) import(s) as {@link TypeChecker.getNeverType non-terminating unless `throw`ing} )
 * .
 * 
 */
export interface SupportedCompilerDesugaringOptions extends
SupportedCompilerModuleDetectingOptions, SupportedAllowedModuleImportExtsOptions
{ }
export interface SupportedCompileDesugaringAndLinkageOptions extends SupportedCompilerModuleDetectingOptions
{ }
export interface SupportedCompilerSrcFilePathsOptions extends SupportedCompilerModuleDetectingOptions
{ }

export interface SupportedCompilerModuleDetectingOptions
{
    moduleDetection?: ModuleDetectionKind;
}

export interface SupportedCompileTargetPlatformBytecodeOptions
{
    newLine?: NewLineKind;
}

export interface SupportedCompilerDistEmitOptions
{
    noEmit?: boolean;
    /** @internal */ noEmitForJsFiles?: boolean;
}

export interface SupportedCompilerDownlevellingOptions
{
    noEmitHelpers?: boolean;
}

export interface SupportedCompilerDistEmitOptions
{
    noEmitOnError?: boolean;
    noErrorTruncation?: boolean;
}

export interface SupportedCompiledSourcesLintingOptions
{
    noFallthroughCasesInSwitch?: boolean;
    noImplicitAny?: boolean; // Always combine with strict property
    noImplicitReturns?: boolean;
    noImplicitThis?: boolean; // Always combine with strict property
    /** @deprecated */
    noStrictGenericChecks?: boolean;
    noUnusedLocals?: boolean;
    noUnusedParameters?: boolean;
}

/**
 * removing `"use strict"` directives
 * in some cases will affect the meanings of certain idioms
 * (eg `this`-ref in `function`s defined outside Strict Mode yet called without `thisArg`, returning `globalThis` rather than `undefined` )
 * .
 * 
 */
export interface SupportedCompilerDesugaringOptions
{
    /** @deprecated */
    noImplicitUseStrict?: boolean;
}

export interface SupportedCompiledSourcesLintingOptions
{
    noPropertyAccessFromIndexSignature?: boolean;
}

export interface SupportedCompiledSourcesLintingOptions
{
}

export interface SupportedCompilerHelpAndTroubleshootingOptions
{
    assumeChangesOnlyAffectDirectDependencies?: boolean;
    noLib?: boolean;
    noResolve?: boolean;
    /** @internal */
    noDtsResolution?: boolean;
}

export interface SupportedCompiledSourcesLintingOptions
{
    legacyUncheckedIndexedAccessType?: boolean;
    /** @deprecated superseded by {@link legacyUncheckedIndexedAccessType} */
    noUncheckedIndexedAccess?: boolean;
}

export interface SupportedCompilerDistEmitOptions
{
    /** @deprecated */
    out?: string;
    outDir?: string;
    outFile?: string;
}

export interface SupportedCompilerSrcFilePathsOptions
{
    paths?: MapLike<string[]>;
    /**
     * The directory of the config file that specified 'paths'. Used to resolve relative paths when 'baseUrl' is absent.
     *
     * @internal
     */
    pathsBasePath?: string;
    outFile?: string;
}

export interface SupportedCompilerSrcFilePathsOptions extends SupportedCompilerPluginsOptions
{}
export interface SupportedCompileTargetPlatformBytecodeOptions extends SupportedCompilerPluginsOptions
{}
export interface SupportedCompilerDesugaringOptions extends SupportedCompilerPluginsOptions
{}

export interface SupportedCompilerPluginsOptions {
    /** @internal */ plugins?: PluginImport[];
}

export interface SupportedCompilerDownlevellingOptions
{
    preserveConstEnums?: boolean;
}

export interface SupportedCompiledSourcesLintingOptions
{
    noImplicitOverride?: boolean;
}

export interface SupportedCompilerOptions
{
    preserveSymlinks?: boolean;
}

/**
 * see {@link importsNotUsedAsValues}.
 * 
 */
export interface SupportedCompilerDesugaringOptions
{
    /** @deprecated */
    preserveValueImports?: boolean;
}

export interface SupportedCompilerOptions
{
    /** @internal */ preserveWatchOutput?: boolean;
}

export interface SupportedCompileDesugaringAndLinkageOptions
{
    project?: string;
}

export interface SupportedCompileTargetPlatformBytecodeOptions
{
    /** @internal */ pretty?: boolean;
}

export interface SupportedCompiledJsxDesugaringOptions
{
    reactNamespace?: string;
    jsxFactory?: string;
    jsxFragmentFactory?: string;
    jsxImportSource?: string;
}

export interface SupportedCompileDesugaringAndLinkageOptions
{
    composite?: boolean;
}

export interface SupportedCompilerDistEmitOptions
{
    incremental?: boolean;
    tsBuildInfoFile?: string;
}

export interface SupportedCompileTargetPlatformBytecodeOptions
{
    removeComments?: boolean;
}

export interface SupportedCompilerSrcFilePathsOptions
{
    resolvePackageJsonExports?: boolean;
    resolvePackageJsonImports?: boolean;
}

export interface SupportedCompilerSrcFilePathsOptions
{
    rootDir?: string;
    rootDirs?: string[];
}

/**
 * `skipLibCheck` *merely* *suppress diagnostics emitted by* typechecking of the libraries ;
 * it doesn't {@link SupportedCompilerDesugaringOptions affect the meanings of expressions building on references to such affected libraries at all}
 * .
 * 
 */
export interface SupportedCompiledSourcesLintingOptions
{
    skipLibCheck?: boolean;
    skipDefaultLibCheck?: boolean;
}

export interface SupportedCompiledSourcesSourceMapOptions
{
    sourceMap?: boolean;
}

export interface SupportedCompilerSrcFilePathsOptions
{
    sourceRoot?: string;
}

/**
 * `strict` affects type-checking, yet
 * generally doesn't affect desugaring at all
 * .
 * 
 */
export interface SupportedCompiledSourcesLintingOptions
{
    //
    strict?: boolean;
    strictESLint?: boolean ;
    strictFunctionTypes?: boolean; // Always combine with strict property
    strictBindCallApply?: boolean; // Always combine with strict property
    strictNullChecks?: boolean; // Always combine with strict property
    strictPropertyInitialization?: boolean; // Always combine with strict property
}

export interface SupportedCompilerDownlevellingOptions
extends SupportedCompileOmitUnusedDefinitionsOptions
{
}

export interface SupportedCompileOmitUnusedDefinitionsOptions
{
    //
    /** whether to omit unused, non-exported definitions */
    stripInternal?: boolean;
}

export interface SupportedCompiledSourcesLintingOptions
{
    /** @deprecated */
    suppressExcessPropertyErrors?: boolean;
    /** @deprecated */
    suppressImplicitAnyIndexErrors?: boolean;
    /** @internal */ suppressOutputPathCheck?: boolean;
}

export interface SupportedCompileTargetPlatformBytecodeOptions
{
    target?: ScriptTarget;
}

export interface SupportedCompilerOptions
{
    traceResolution?: boolean;
}

export interface SupportedCompiledSourcesLintingOptions
{
    useUnknownInCatchVariables?: boolean;
}

export interface SupportedModuleInterFmtsInteropOptions
{
    resolveJsonModule?: boolean;
}

export interface SupportedCompilerSrcFilePathsOptions
{
    types?: string[];
    /** Paths used to compute primary types search locations */
    typeRoots?: string[];
}

/**
 * {@link verbatimModuleSyntax} is considered a desugaring config as
 * it *changes the meaning of* *unused imports* (ie {@link verbatimModuleSyntax} *semantically* guarantees 1-to-1 correspondence to actual *import behv*)
 * .
 * 
 */
export interface SupportedCompilerDesugaringOptions
{
    verbatimModuleSyntax?: boolean;
}

export interface SupportedCompileDesugaringAndLinkageOptions
{
    /** @internal */ version?: boolean;
}

export interface SupportedCompilerOptions
{
    /** @internal */ watch?: boolean;
}

export interface SupportedModuleInterFmtsInteropOptions
{
    esModuleInterop?: boolean;
}

export interface SupportedCompilerOptions
{
    /** @internal */ showConfig?: boolean;
}

export interface SupportedCompilerDesugaringOptions
{
    useDefineForClassFields?: boolean;

}







// NOTE: We must reevaluate the target for upcoming features when each successive TC39 edition is ratified in
//       June of each year. This includes changes to `LanguageFeatureMinimumTarget`, `ScriptTarget`,
//       transformers/esnext.ts, commandLineParser.ts, and the contents of each lib/esnext.*.d.ts file.
export const enum ScriptTarget
{

    /*
     * 
     * dynamically-typed language(s).
     * 
     * generally
     * these
     * treat functions each as
     * never overloaded and therefore only has unique sgn eg `(...args: <some-tuple-like-type> ) => RT`
     * 
     */

    /**
     * 
     * EcmaScript/JavaScript
     * 
     * ES (and therefore TS), and Python, do not maintain types ;
     * all functions are treated as if they each is internally represented as `(...args: any[] ) => any`,
     * not doing any checks apart from eg desugarable default-values or destructuring
     * 
     */

    ESBuildEarliestVer = 1400,
    ESBuild2022,
    ESBuild2023,
    /** don't use in your projects! unstable */
    ESBuildNext,

    TSNodeEarliestVer = 1300,
    TSNode2019,
    TSNode2020,
    TSNode2021,
    TSNode2022,
    /** don't use in your projects! unstable */
    TSNodeNext,

    ESEarliestVer = 1000 ,
    /** don't use in your projects! */
    ES3,
    ES5,
    ES2015,
    ES2016,
    ES2017,
    ES2018,
    ES2019,
    ES2020,
    ES2021,
    ES2022,
    /** don't use in your projects! unstable */
    ESNext = 1099,
    
    /*
     * 
     * Python.
     * CPython
     * treat functions each as
     * never overloaded and therefore only has unique sgn eg `(...args: [...args, **kwArgs, ** ] ) => RT`
     * .
     * same goes for Cython, altho it adds type-ing support .
     * 
     * RPython
     * is restricted subset of Python.
     * 
     */

    PythonEarliestVer,
    /** CPython 3 */ Python3p05 = 21099,
    /** CPython 3 */ Python3p06,
    /** CPython 3 */ Python3p07,
    /** CPython 3 */ Python3p08,
    /** CPython 3 */ Python3p09,
    /** CPython 3 */ Python3p10,
    /** CPython 3 */ Python3p11,
    /** don't use in your projects! unstable */
    PythonNext,
    /** Cython */ CythonEarliestVer,
    /** don't use in your projects! unstable */
    CythonNext,
    /** RPython */ RPythonEarliestVer,
    /** don't use in your projects! unstable */
    RPythonNext,

    /*
     * 
     * ISO C.
     * ISO C (but not C++ !)
     * doesn't support function overloading,
     * making it effectively like the former two ;
     * 
     */
    
    /** ISO C */ StdCEarliestVer = 31009,
    /** ISO C */ StdC1999,
    /** ISO C */ StdC2004,
    /** ISO C */ StdC2011,
    /** ISO C */ StdC2021,
    /** don't use in your projects! unstable */
    StdCNext,
    
    /*
     * 
     * statically-typed lang(s)
     * 
     * JVM-based lang(s), and C++
     * imposes overloading based on the compile-time types of the args
     * (accounts the types of the arg(s) to resolve which overload to run ),
     * and relies on the receivers' types to resolve implicit conversions ;
     * unlike dyn-typed lang(s),
     * it's generally
     * not possible to have them args typed as `any[]` and get `intendedMethod(...args)` to work,
     * since in these languages
     * there's no such thing as
     * "common entry point agnostic of the args' types" which JS, Python, Ruby and ISO C all have,
     * except
     * as possibly simulated by
     * `BootstrapMethod`s-based dynamic ov-lding which will however generally cannot be made to fully equate regular direct, static calls.
     * 
     */
    
    /** JVM */ JavaPlatformEarliestVer = 131000,
    /** JVM */ JavaPlatformVersion9,
    /** JVM */ JavaPlatformVersion10,
    /** JVM */ JavaPlatformVersion11,
    /** JVM */ JavaPlatformVersion13,
    /** JVM */ JavaPlatformVersion15,
    /** JVM */ JavaPlatformVersion17,
    /** JVM */ JavaPlatformVersion19,
    /** JVM . new: Project Loom. */ JavaPlatformVersion21,
    /** JVM . new: FFI         . */ JavaPlatformVersion22,
    /** JVM . Next ; unstable target. don't use in your projects! */ JavaPlatformNext,
    /** ART */ DalvikEarliestVer,
    /** ART */ Dalvik2018,
    /** ART */ Dalvik2020,
    /** ART */ Dalvik2022,
    /** ART. Next is unstable, do not use. don't use in your projects! */ DalvikNext,
    /** KotlinVM */ KotlVmEarliestVer,
    /** KotlinVM */ KotlVm2021,
    /** KotlinVM */ KotlVm2022,
    /** KotlinVM */ KotlVm2023,
    /** KotlinVM. Next is unstable, do not use. don't use in your projects! */ KotlVmNext,

    /** EPFL TASTy */ TASTyEarliestVer = 143000 ,
    /** EPFL TASTy `3.2` */ TASTyVersion3p02 ,
    /** EPFL TASTy `3.3` */ TASTyVersion3p03 ,
    /** EPFL TASTy `3.4` */ TASTyVersion3p04 ,
    /** EPFL TASTy. Next is unstable, do not use. don't use in your projects! */ TASTyNext ,

}

export type SupportedValidScriptTargetName = (
    Exclude<keyof typeof ScriptTarget, `${string }${"Next" | "EarliestVer"}`>
) ;

export type SupportedTSLikeTargetName = (
    Extract<SupportedValidScriptTargetName, `${"ESBuild" | "TSNode" | "ES" }${string }`>
) ;

export type SupportedPyLikeTargetName = (
    Extract<SupportedValidScriptTargetName, `${"Python" | "Cyth" | "RPyth" }${string }`>
) ;

export type SupportedStdCLikeTargetName = (
    Extract<SupportedValidScriptTargetName, `${"StdC" }${`${1 | 2 }${string}` }`>
) ;

export type SupportedJavaPlatformAlikeTargetName = (
    Extract<SupportedValidScriptTargetName, `${"JavaPlatform" }${`Version${string}` }`>
) ;











