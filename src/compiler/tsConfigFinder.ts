import {
    __String,
    combinePaths,
    forEachAncestorDirectory,
} from "./_namespaces/ts";










export function findConfigFile(searchPath: string, fileExists: (fileName: string) => boolean, configName = "tsconfig.json"): string | undefined {
    return forEachAncestorDirectory(searchPath, ancestor => {
        const fileName = combinePaths(ancestor, configName);
        return fileExists(fileName) ? fileName : undefined;
    });
}










