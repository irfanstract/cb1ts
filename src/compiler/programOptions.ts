import {
    BaseNodeFactory,
    CreateSourceFileOptions,
    EmitHelperFactory,
    GetCanonicalFileName,
    MapLike,
    ModeAwareCache,
    ModeAwareCacheKey,
    ModuleResolutionCache,
    MultiMap,
    NodeFactoryFlags,
    OptionsNameMap,
    PackageJsonInfo,
    PackageJsonInfoCache,
    Pattern,
    ProgramBuildInfo,
    Push,
    SymlinkCache,
    ThisContainer,
} from "./_namespaces/ts";


























export enum ModuleResolutionKind {
    Classic  = 1,
    Node10   = 2,
    // Starting with node12, node's module resolver has significant departures from traditional cjs resolution
    // to better support ecmascript modules and their use within node - however more features are still being added.
    // TypeScript's Node ESM support was introduced after Node 12 went end-of-life, and Node 14 is the earliest stable
    // version that supports both pattern trailers - *but*, Node 16 is the first version that also supports ECMASCript 2022.
    // In turn, we offer both a `NodeNext` moving resolution target, and a `Node16` version-anchored resolution target
    Node16   = 3,
    NodeNext = 99, // Not simply `Node16` so that compiled code linked against TS can use the `Next` value reliably (same as with `ModuleKind`)
    Bundler   = 100,
}

export enum ModuleDetectionKind {
    /**
     * Files with imports, exports and/or import.meta are considered modules
     */
    Legacy = 1,
    /**
     * Legacy, but also files with jsx under react-jsx or react-jsxdev and esm mode files under moduleResolution: node16+
     */
    Auto = 2,
    /**
     * Consider all non-declaration files modules, regardless of present syntax
     */
    Force = 3,
}

export interface PluginImport {
    name: string;
}

export interface ProjectReference {
    /** A normalized path on disk */
    path: string;
    /** The path as the user originally wrote it */
    originalPath?: string;
    /** True if the output of this reference should be prepended to the output of this project. Only valid for --outFile compilations */
    prepend?: boolean;
    /** True if it is intended that this reference form a circularity */
    circular?: boolean;
}




export interface TypeAcquisition {
    enable?: boolean;
    include?: string[];
    exclude?: string[];
    disableFilenameBasedTypeAcquisition?: boolean;
    [option: string]: CompilerOptionsValue | undefined;
}





export enum WatchFileKind {
    FixedPollingInterval,
    PriorityPollingInterval,
    DynamicPriorityPolling,
    FixedChunkSizePolling,
    UseFsEvents,
    UseFsEventsOnParentDirectory,
}

export enum WatchDirectoryKind {
    UseFsEvents,
    FixedPollingInterval,
    DynamicPriorityPolling,
    FixedChunkSizePolling,
}

export enum PollingWatchKind {
    FixedInterval,
    PriorityInterval,
    DynamicPriority,
    FixedChunkSize,
}




export interface WatchOptions {
    watchFile?: WatchFileKind;
    watchDirectory?: WatchDirectoryKind;
    fallbackPolling?: PollingWatchKind;
    synchronousWatchDirectory?: boolean;
    excludeDirectories?: string[];
    excludeFiles?: string[];

    [option: string]: CompilerOptionsValue | undefined;
}





/* `CompilerOptions` */

export type CompilerOptionsValue = string | number | boolean | (string | number)[] | string[] | MapLike<string[]> | PluginImport[] | ProjectReference[] | null | undefined;


















































