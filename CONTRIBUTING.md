# Instructions for Logging Issues

## 1. Read the FAQ

Please [read the FAQ](https://github.com/Microsoft/TypeScript/wiki/FAQ) before logging new issues, even if you think you have found a bug.

Issues that ask questions answered in the FAQ will be closed without elaboration.

## 2. Search for Duplicates

[Search the existing issues](https://github.com/Microsoft/TypeScript/search?type=Issues) before logging a new one.

Some search tips:
 * *Don't* restrict your search to only open issues. An issue with a title similar to yours may have been closed as a duplicate of one with a less-findable title.
 * Check for synonyms. For example, if your bug involves an interface, it likely also occurs with type aliases or classes.
 * Search for the title of the issue you're about to log. This sounds obvious but 80% of the time this is sufficient to find a duplicate when one exists.
 * Read more than the first page of results. Many bugs here use the same words so relevancy sorting is not particularly strong.
 * If you have a crash, search for the first few topmost function names shown in the call stack.

## 3. Do you have a question?

The issue tracker is for **issues**, in other words, bugs and suggestions.
If you have a *question*, please use [Stack Overflow](https://stackoverflow.com/questions/tagged/typescript), [Gitter](https://gitter.im/Microsoft/TypeScript), your favorite search engine, or other resources.
Due to increased traffic, we can no longer answer questions in the issue tracker.

## 4. Did you find a bug?

When logging a bug, please be sure to include the following:
 * What version of TypeScript you're using (run `tsc --v`)
 * If at all possible, an *isolated* way to reproduce the behavior
 * The behavior you expect to see, and the actual behavior

You can try out the nightly build of TypeScript (`npm install typescript@next`) to see if the bug has already been fixed.

## 5. Do you have a suggestion?

We also accept suggestions in the issue tracker.
Be sure to [check the FAQ](https://github.com/Microsoft/TypeScript/wiki/FAQ) and [search](https://github.com/Microsoft/TypeScript/issues?utf8=%E2%9C%93&q=is%3Aissue) first.

In general, things we find useful when reviewing suggestions are:
* A description of the problem you're trying to solve
* An overview of the suggested solution
* Examples of how the suggestion would work in various places
  * Code examples showing e.g. "this would be an error, this wouldn't"
  * Code examples showing the generated JavaScript (if applicable)
* If relevant, precedent in other languages can be useful for establishing context and expected behavior

# Instructions for Contributing Code

## What You'll Need

0. [A bug or feature you want to work on](https://github.com/microsoft/TypeScript/labels/help%20wanted)!
1. [A GitHub account](https://github.com/join).
2. A copy of the TypeScript code. See the next steps for instructions.
3. [Node](https://nodejs.org), which runs JavaScript locally. Current or LTS will both work.
4. An editor. [VS Code](https://code.visualstudio.com) is the best place to start for TypeScript.
5. The hereby command line tool, for building and testing changes. See the next steps for how to install it.

## Get Started

1. Install node using the version you downloaded from [nodejs.org](https://nodejs.org).
2. Open a terminal.
3. Make a fork&mdash;your own copy&mdash;of TypeScript on your GitHub account, then make a clone&mdash;a local copy&mdash;on your computer. ([Here are some step-by-step instructions](https://github.com/anitab-org/mentorship-android/wiki/Fork%2C-Clone-%26-Remote)). Add `--depth=1` to the end of the `git clone` command to save time.
4. Install the hereby command line tool: `npm install -g hereby`
5. Change to the TypeScript folder you made: `cd TypeScript`
6. Install dependencies: `npm ci`
7. Make sure everything builds and tests pass: `hereby runtests-parallel`
8. Open the TypeScript folder in your editor.
9. Follow the directions below to add and debug a test.

## Helpful tasks

Running `hereby --tasks` provides the full listing, but here are a few common tasks you might use.

```
hereby local             # Build the compiler into built/local.
hereby clean             # Delete the built compiler.
hereby LKG               # Replace the last known good with the built one.
                         # Bootstrapping step to be executed when the built compiler reaches a stable state.
hereby tests             # Build the test infrastructure using the built compiler.
hereby runtests          # Run tests using the built compiler and test infrastructure.
                         # You can override the specific suite runner used or specify a test for this command.
                         # Use --tests=<testPath> for a specific test and/or --runner=<runnerName> for a specific suite.
                         # Valid runners include conformance, compiler, fourslash, and project
hereby runtests-parallel # Like runtests, but split across multiple threads. Uses a number of threads equal to the system
                         # core count by default. Use --workers=<number> to adjust this.
hereby baseline-accept   # This replaces the baseline test results with the results obtained from hereby runtests.
hereby lint              # Runs eslint on the TypeScript source.
hereby help              # List the above commands.
```

## Tips

### Using a development container

If you prefer to develop using containers, this repository includes a [development container](https://code.visualstudio.com/docs/remote/containers) that you can use to quickly create an isolated development environment with all the tools you need to start working on TypeScript. To get started with a dev container and VS Code, either:

- Clone the TypeScript repository locally and use the `Open Folder in Container` command.
- Use the `Clone Repository in Container Volume` command to clone the TypeScript repository into a new container.

### Faster clones

The TypeScript repository is relatively large. To save some time, you might want to clone it without the repo's full history using `git clone --depth=1`.

### Filename too long on Windows

You might need to run `git config --global core.longpaths true` before cloning TypeScript on Windows.

### Minimizing The `npm install` Duration And Effort

consider
*temporarily* keeping `devDependencies` in `package.json` as small as this
(and restore the complete list(ing) after the `install` )
:
```json
{
    "devDependencies": {
        "@esfx/canceltoken": "^1.0.0",
        "@types/chai": "^4.3.12",
        "@types/microsoft__typescript-etw": "^0.1.3",
        "@types/minimist": "^1.2.5",
        "@types/mocha": "^10.0.6",
        "@types/ms": "^0.7.34",
        "@types/node": "latest",
        "@types/source-map-support": "^0.5.10",
        "@types/which": "^3.0.3",
        "chai": "^4.4.1",
        "chalk": "^4.1.2",
        "chokidar": "^3.6.0",
        "fast-xml-parser": "^4.3.5",
        "glob": "^10.3.10",
        "hereby": "^1.8.9",
        "jsonc-parser": "^3.2.1"
    },
}
```

### Using local builds

Run `hereby` to build a version of the compiler/language service that reflects changes you've made. You can then run `node <repo-root>/built/local/tsc.js` in place of `tsc` in your project. For example, to run `tsc --watch` from within the root of the repository on a file called `test.ts`, you can run `node ./built/local/tsc.js --watch test.ts`.

## Contributing bug fixes

TypeScript is currently accepting contributions in the form of bug fixes. A bug must have an issue tracking it in the issue tracker that has been approved (labelled ["help wanted"](https://github.com/Microsoft/TypeScript/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) or in the "Backlog milestone") by the TypeScript team. Your pull request should include a link to the bug that you are fixing. If you've submitted a PR for a bug, please post a comment in the bug to avoid duplication of effort.

## Contributing features

Features (things that add new or improved functionality to TypeScript) may be accepted, but will need to first be approved (labelled ["help wanted"](https://github.com/Microsoft/TypeScript/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) or in the "Backlog" milestone) by a TypeScript project maintainer in the suggestion issue. Features with language design impact, or that are adequately satisfied with external tools, will not be accepted.

## Issue claiming

If you intend to work on an issue, please avoid leaving comments like "I'm going to work on this". There are a few reasons for this. These comments tend to [discourage anyone from working in the area](https://devblogs.microsoft.com/oldnewthing/20091201-00/?p=15843), yet many issues are much more difficult than they first appear, and you might find yourself trying to fix several issues before finding one that can be completed. Many issues have a long trail of people indicating that they're going to try to fix it, but no PR.

Conversely, you do not need to ask anyone's permission before starting work on an issue marked as "help wanted". It's always fine to try! We ask that you choose issues tagged in the "Backlog" milestone as these are issues that we've identified as needing fixes / implementations.

The sheer quantity of open issues, combined with their general difficulty, makes it extremely unlikely that you and another contributor are a) working on the same issue and b) both going to find a solution.

## Legal

You will need to complete a Contributor License Agreement (CLA). Briefly, this agreement testifies that you are granting us permission to use the submitted change according to the terms of the project's license, and that the work being submitted is under appropriate copyright. Upon submitting a pull request, you will automatically be given instructions on how to sign the CLA.

## Housekeeping

Your pull request should:

* Include a description of what your change intends to do
* Be based on reasonably recent commit in the **main** branch
* Include adequate tests
    * At least one test should fail in the absence of your non-test code changes. If your PR does not match this criteria, please specify why
    * Tests should include reasonable permutations of the target fix/change
    * Include baseline changes with your change
* Follow the code conventions described in [Coding guidelines](https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines)
* To avoid line ending issues, set `autocrlf = input` and `whitespace = cr-at-eol` in your git configuration

## Force-pushing

Avoid force-pushing your changes, especially when updating your PR based on review feedback. Force-pushed changes are not easily viewable on GitHub, and not at all viewable if a force-push also rebases against main. TypeScript PRs are squash merged, so the specific commits on your PR branch do not matter, only the PR title itself. Don't worry about having a perfect commit history; instead focus on making your changes as easy to review and merge as possible.

## Contributing `lib.d.ts` fixes

There are three relevant locations to be aware of when it comes to TypeScript's library declaration files:

* `src/lib`: the location of the sources themselves.
* `lib`: the location of the last-known-good (LKG) versions of the files which are updated periodically.
* `built/local`: the build output location, including where `src/lib` files will be copied to.

Any changes should be made to [src/lib](https://github.com/Microsoft/TypeScript/tree/main/src/lib). **Most** of these files can be updated by hand, with the exception of any generated files (see below).

Library files in `built/local/` are updated automatically by running the standard build task:

```sh
hereby
```

The files in `lib/` are used to bootstrap compilation and usually **should not** be updated unless publishing a new version or updating the LKG.

### Modifying generated library files

The files `src/lib/dom.generated.d.ts` and `src/lib/webworker.generated.d.ts` both represent type declarations for the DOM and are auto-generated. To make any modifications to them, you will have to direct changes to https://github.com/Microsoft/TSJS-lib-generator

## Documentation on TypeScript Compiler

If you need a head start understanding how the compiler works, or how the code in different parts of the compiler works, there is a separate repo: [TypeScript Compiler Notes](https://github.com/microsoft/TypeScript-Compiler-Notes). As the name implies, it contains notes understood by different engineers about different parts of the compiler.

## Running the Tests

To run all tests, invoke the `runtests-parallel` target using hereby:

```Shell
hereby runtests-parallel
```

This will run all tests; to run only a specific subset of tests, use:

```Shell
hereby runtests --tests=<regex>
```

e.g. to run all compiler baseline tests:

```Shell
hereby runtests --tests=compiler
```

or to run a specific test: `tests\cases\compiler\2dArrays.ts`

```Shell
hereby runtests --tests=2dArrays
```

## Debugging the tests

You can debug with VS Code or Node instead with `hereby runtests -i`:

```Shell
hereby runtests --tests=2dArrays -i
```

You can also use the [provided VS Code launch configuration](./.vscode/launch.template.json) to launch a debug session for an open test file. Rename the file 'launch.json', open the test file of interest, and launch the debugger from the debug panel (or press F5).

## Adding a Test

To add a new test case, add a `.ts` file in `tests\cases\compiler` with code that shows the bug is now fixed, or your new feature now works.

These files support metadata tags in the format  `// @metaDataName: value`.
The supported names and values are the same as those supported in the compiler itself, with the addition of the `fileName` flag.
`fileName` tags delimit sections of a file to be used as separate compilation units.
They are useful for testing modules.
See below for examples.

**Note** that if you have a test corresponding to a specific area of spec compliance, you can put it in the appropriate subfolder of `tests\cases\conformance`.
**Note** that test filenames must be distinct from all other test names, so you may have to work a bit to find a unique name if it's something common.

### Tests for multiple files

When you need to mimic having multiple files in a single test to test features such as "import", use the `filename` tag:

```ts
// @filename: file1.ts
export function f() {
}

// @filename: file2.ts
import { f as g } from "file1";

var x = g();
```

## Managing the baselines

Most tests generate "baselines" to find differences in output.
As an example, compiler tests usually emit one file each for

- the `.js` and `.d.ts` output (all in the same `.js` output file),
- the errors produced by the compiler (in an `.errors.txt` file),
- the types of each expression (in a `.types` file),
- the symbols for each identifier (in a `.symbols` file), and
- the source map outputs for files if a test opts into them (in a `.js.map` file).

When a change in the baselines is detected, the test will fail. To inspect changes vs the expected baselines, use

```Shell
git diff --diff-filter=AM --no-index ./tests/baselines/reference ./tests/baselines/local
```

Alternatively, you can set the `DIFF` environment variable and run `hereby diff`, or manually run your favorite folder diffing tool between `tests/baselines/reference` and `tests/baselines/local`. Our team largely uses Beyond Compare and WinMerge.

After verifying that the changes in the baselines are correct, run

```Shell
hereby baseline-accept
```

This will change the files in `tests\baselines\reference`, which should be included as part of your commit.
Be sure to validate the changes carefully -- apparently unrelated changes to baselines can be clues about something you didn't think of.

## Localization

All strings the user may see are stored in [`diagnosticMessages.json`](./src/compiler/diagnosticMessages.json).
If you make changes to it, run `hereby generate-diagnostics` to push them to the `Diagnostic` interface in `diagnosticInformationMap.generated.ts`.

See [coding guidelines on diagnostic messages](https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines#diagnostic-messages).

## conventions to adhere in source files; the coding convention

### indentation and linebreaking

#### indentations should be 4 spaces (char `0x20`, *SPACE*)

expected indentation is 4 spaces (char `0x20`, *SPACE*):
```javascript
for (const item of items )
{//4567890123456789012  <<<<<<
    propagate(item) ;
}
```

...and __avoid using <code>Tab</code>s__

#### consider putting opening curly-bracket in separate line

so you get:
```javascript
for (const item of items )
{ /* this opening brace should be in this new line here */
    propagate(item) ;
}
```

```javascript
LOOP:
for (const stm of bArg.statements )
{
    /* if kind is "RETURN", break the loop  */
    switch (stm.kind) {
      case "RETURN" :
        break LOOP ;
      default:
        continue LOOP ;
    }
}
```

this is
necessary
to allow Git revs to simply *checkout* *toggling methods abstract and concrete* 'in a breeze' without exiting with `you must resolve the conflict and then run git rebase --continue` inwhichcase requires unnecessary user intervention necessary to resolve merge-conflicts - see this *diff*
:
```diff
@@ -364,11 +364,9 @@ abstract class EsClassEmitterImpl

  /**
   * terminates the statement list
   * 
   */
+ <<<<< mergend at MERGE_HEAD
+ abstract
  terminateStatementList(...args: [returnSmtcs: ReturnSemantics, options ?: { preserveWorkingRegister ?: boolean, } ] )
- >>>>> parent at HEAD~1
- {
-     return terminateStatementList0(StatementListMarking.SEMANTIC_ENDOFTHREAD, ...args ) ;
- }
+ <<<<< mergend at MERGE_HEAD
+ : void ; /* the formely-there `abstract`-method `terminateStatementList0` is now this method */

```

notice that here in the *diff*, with the above advice adhered,
the line specifying `terminateStatementList` together with the signature
doesn't get touched at all, unlike the surrounding lines which does,
saving us from any need to *being surprised with the rebase being incomplete* (since it suspended due to *merge-conflicts*), incase it happening without we ever anticipating.

exactly the same reason we should avoid plain JSON and instead switch to JSON'__C__ or full JS/ES (since JSON's ban of trailing commas effectively make Git-checkout-ing of such files harder than necessary).

### `tsconfig.json`

are (./src/tsconfig.json), (./src/tsconfig-base.json), etc

the need of `paths` in `tsconfig.json` is metioned in:

-  https://stackoverflow.com/a/57273280

-  *the tickets linked to* ticket at https://github.com/microsoft/TypeScript/pull/56946 .


### consider using labels in control-flow

#### `break` and `continue` should always be labelled

```diff
+ LOOP :
  for (const stm of bArg.statements )
  {
      if (isEndOfControlFlowMarkingStmt(stm) )
-     { break ; }
+     { break LOOP ; }
  }
```

an example involving a pitfall:

```diff
+ LOOP:
  for (const stm of bArg.statements )
  {
    /* if kind is "RETURN", break the loop  */
    switch (stm.kind) {
      case "RETURN" :
-       break ;
+       break LOOP ;
      default:
-       continue ;
+       continue LOOP ;
    }
  }
+ /*
+  * `continue` would, as expected, relate to the (enclosing) `for`, but `break` wouldn't -
+  * it'd only end up at the `switch`, constituting a bug!
+  */
```

### Usage Of ESLint In This Project

#### The ESLint Rules For This Project

<!--
see [the ESLint Config CJS File, `./.eslintrc.cjs`](./.eslintrc.cjs)
-->
[`./.eslintrc.json`](./.eslintrc.json) would likely be replaced with `.eslintrc.cjs` in future.

<!--

#### use `.eslintrc.cjs`, avoid `.eslintrc.json`

(note: ESLint doesn't yet support `.mjs` ext!)

-->

##### issues with JSON

JSON Specification disallows trailing comma, but
omission of trailing comma doesn't play well Git
(eg unexpected auto-merge corrupting your JSON files)

```javascript
{
  "imports": {
    // from current branch
    "dest": "${project}/dist"
    // from merged branch
    "pipelining": true
//  ^^^^^^^ [Syntax Error] Unexpected Identifier; Expected Comma Or Closing Brace
  } ,
}
```

JSONC and regular JS/TS would avoid the above problem:

```javascript
module.exports = {
    // from current branch
    "dest": "${project}/dist" , // we can freely use trailing comma here, avoiding the above issues
    // from merged branch
    "pipelining": true , // we can freely use trailing comma here, avoiding the above issues
} ;
```

#### DO NOT use `eslint:recommended`!

__`eslint:recommended`
tries to get rid of a large number of common, safe constructs,
whose avoiding would require even worse constructs
(eg forced to resort to more bug-prone, implicit label-less `break`s)!__
__avoid enabling the whole set__ ;
instead,
*individually* enable the items, like this:

```diff
- "extends": "eslint:recommended",
  "rules": {
+   "import/no-cycle": [
+     "error"
+   ],
+   "semi": [
+     "error",
+     "always"
+   ],
+   "array-callback-return": "error" ,
+   "getter-return": "error" ,
+   "no-constructor-return": "warn" ,
+   "no-unsafe-finally": "warn" ,
+   "no-case-declarations": "warn" ,
+   "require-yield": "error" ,
+   "no-param-reassign": "error" ,
+   "no-loop-func": "warn" ,
+   "no-plusplus": "warn" ,
+   "curly": "warn" ,
+   "default-case": "warn" ,
+   "default-case-last": "error" ,
+   "no-misleading-character-class": "error" ,
  },
```

### avoid *non-trivial overloading and run-time checks*, if possible

#### avoid `typeof x === "object"`

`null` is very special unlike `undefined`, `boolean`s and `string`s ;
`typeof`ing it will yield `"object"` !

```javascript
/** @type {number | number[] | null } */ const xArg ;

if (typeof xArg === "object") {
  /*
   * `null` is very special unlike `undefined`, `boolean`s and `string`s as
   * `typeof`ing it will yield `"object"` !
   * 
   */
}

```

#### avoid potential pit-falls in null-checking of `number`
```javascript
({ height: heightArg, }) => {
  ;
  
  /* avoid these */
  if (!heightArg) { heightArg = 32 ; } /* wrong!! not only `undefined` and `null`; `0` would too coerce to `false` */
  
  /* OK */
  if (!(typeof heightArg === "number" )) { heightArg = 32 ; }

  ;
}

```

#### avoid non-trivial overloading if possible

JavaScript, as does Python, is not Java, Kotlin, Scala nor Rust ; JavaScript doesn't consider signatures when resolving methods.

the first alternative is to give em different names:

```diff
  interface DispatchService
  {
+   /* avoid overloading; give these each its own name */
-   schedule
+   scheduleImmediately
        (cb: NoArgCallback ) ;
-   schedule
+   scheduleAfterMillis
        (tMillis: number, cb: NoArgCallback ) ;
-   schedule
+   scheduleCancellableAfterMillis
        (s: AbortSignal, tMillis: number, cb: NoArgCallback ) ;

  }

```

however, sometimes it's not applicable since the author intended them the same name (ie superclass version of the named method only support two signature(s), while subclass is more general and support 6 different sig(s)), so what abt alternative tweaks like parameter-reordering like this instead?

```diff
  interface DispatchService
  {
+   /* reordered the parameters */
    schedule
        (callbk: NoArgCallback ) ;
+   schedule
+       (callbk: NoArgCallback, tMillis ?: number, cancelPt ?: AbortSignal,) ;
    schedule
-       (tMillis: number, cb: NoArgCallback ) ;
+       (cb: NoArgCallback, tMillis: number, ) ;
    schedule
-       (s: AbortSignal, tMillis: number, cb: NoArgCallback ) ;
+       (cb: NoArgCallback, tMillis: number, s: AbortSignal,) ;

  }

```


### Relevant Considerations Affecting TypeScript And Type-Checked JavaScript

some ESLint rules are enforced here -
see [the ESLint Config CJS File, `./.eslintrc.cjs`](./.eslintrc.cjs)

relevant open issues with `tsc`:

- Merging, Occurences, Highlighting, of same-named decl(s):
  - https://github.com/microsoft/TypeScript/issues/36626  (missing *merging* for between same-named `const =` and `type =` )
- Dependent-Typing, Type-Guard(s), Aliased Boolean Expr(s) :
  - https://github.com/microsoft/TypeScript/issues/17588 (missing support for Scala-style inner-class(es) ) 
  - https://github.com/microsoft/TypeScript/issues/27808 (missing support for `extends oneof`) 
  - https://github.com/microsoft/TypeScript/pull/47190 (CFA/narrowing involving destructured property from -   discriminant-union-typed structs )
  - https://github.com/microsoft/TypeScript/pull/44730 (transparency, of boolean expr aliases (ie `const` without type-ascription ) )
  - https://github.com/microsoft/TypeScript/pull/57465 (missing inferring of `x is T` signatures )








