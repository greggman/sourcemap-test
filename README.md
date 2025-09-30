# Sourcemap Test

Shows that source map support is not part of JavaScript itself. It's part of external tools like DevTools

https://greggman.github.io/sourcemap-test/

This example compiles Typescript to JavaScript with a source map. The code throws in a function in a module.

Notice that the stack trace returned to JavaScript shows JavaScript file names and line numbers where
as in DevTools itself, it shows the source-map file names and line numbers.

Source Map support is entirely external to JavaScript itself.

