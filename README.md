# Build Error with Injection
A minimal example that shows how a ng-packagr builds fails.
The library was created with Angular CLI but I moved the files into the library root folder
as secondary entry points with subfolders (src/ in this case) are causing other build errrors.


## Description

I see a warning and an error when building with
```
ng build library
```



```
Warning: Can't resolve all parameters for FooClass in ng-packagr-bug-inject/projects/library/foo/public-api.ts: (?). This will become an error in Angular v6.x

Warning: Can't resolve all parameters for FooClass in ng-packagr-bug-inject/projects/library/foo/public-api.ts: (?). This will become an error in Angular v6.x
```

together with this error


```
BUILD ERROR
projects/dist/library/bar/public-api.d.ts(1,31): error TS2307: Cannot find module '@my/library/some-component'.
: Can't resolve all parameters for BarDirective inng-packagr-bug-inject/projects/dist/library/bar/my-library-bar.d.ts: (?).

Error: projects/dist/library/bar/public-api.d.ts(1,31): error TS2307: Cannot find module '@my/library/some-component'.
: Can't resolve all parameters for BarDirective inng-packagr-bug-inject/projects/dist/library/bar/my-library-bar.d.ts: (?).

    at Object.<anonymous> (ng-packagr-bug-inject/node_modules/ng-packagr/lib/ngc/compile-source-files.js:62:68)
    at Generator.next (<anonymous>)
    atng-packagr-bug-inject/node_modules/ng-packagr/lib/ngc/compile-source-files.js:7:71
    at new Promise (<anonymous>)
    at __awaiter (ng-packagr-bug-inject/node_modules/ng-packagr/lib/ngc/compile-source-files.js:3:12)
    at Object.compileSourceFiles (ng-packagr-bug-inject/node_modules/ng-packagr/lib/ngc/compile-source-files.js:21:12)
    at Object.<anonymous> (ng-packagr-bug-inject/node_modules/ng-packagr/lib/ng-v5/entry-point/ts/compile-ngc.transform.js:42:34)
    at Generator.next (<anonymous>)
    atng-packagr-bug-inject/node_modules/ng-packagr/lib/ng-v5/entry-point/ts/compile-ngc.transform.js:7:71
    at new Promise (<anonymous>)
```

## Structure
FooClass
-> Injects BAR_TOKEN

SomeComponent
-> plain component, no dependencies

BarDirective
-> Defines BAR_TOKEN
-> Injects SomeComponent

## Testcases
This will cause the error to go away- so it's no workaround.

1. Remove SomeComponent Inejection in Bar
-> Works

2. Remove BAR_TOKEN Injection in Foo
-> Works