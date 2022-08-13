| lang                | exeutable file | complie / interpert command                                                             | run command                   |
| ------------------- | -------------- | --------------------------------------------------------------------------------------- | ----------------------------- |
| rust                | .exe           | rustc main.rs                                                                           | ./main.exe                    |
| nodejs (javascript) | .js            |                                                                                         | node main.js                  |
| go                  | .go            | go build                                                                                | go run main.go                |
| java                | .class, .jar   | javac main.java                                                                         | java main, java -jar main.jar |
| C#                  | .exe           | csc main.cs                                                                             | ./main.exe                    |
| Scalar              | .jar           | scalac main.scala -o main.jar                                                           | scala main.jar                |
| Haskell             | .exe           | ghc --make main.hs                                                                      | ./main.exe                    |
| C                   | .exe           | gcc main.c -o main.exe                                                                  | ./main.exe                    |
| php                 | .php           |                                                                                         | php main.php                  |
| ruby                |                |                                                                                         |                               |
| Typescript          | .js            | tsc main.ts                                                                             | node main.js                  |
| deno                | .ts            | deno complie --unstable --allow-read main.ts                                            | deno run main.ts              |
| bun                 | .js            |                                                                                         | bun run main.js               |
| python              | .py            | python main.py                                                                          | python main.py                |
| R                   | .R             |                                                                                         | Rscript main.R                |
| Carbon              | .carbon        |                                                                                         | bazel run main.carbon         |
| Erlang              | .erl           | c(main).                                                                                | main:start()                  |
| Kotlin              | .jar           | kotlinc main.kt -include-runtime -d main.jar                                            | java -jar main.jar            |
| Flutter             | .dart          | flutter build main.dart                                                                 | flutter run main.dart         |
| ObjectiveC          | .m             | gcc main.m -framework Foundation                                                        | ./main                        |
| WebAssembly         | .wasm          | clang --target=wasm32-wasi --sysroot=/wasi-src/wasi-sysroot/sysroot main.c -o main.wasm | use docker                    |
| SQL                 |                |                                                                                         |                               |
| Shell               | .sh            |                                                                                         | sh script.sh                  |
| Assembly            | .exe           | nasm -f win32 main.asm -o main.o | ld  main.o -o main.exe                               | ./main.exe                    |
| Swift               | .swift         | swift build main.swift                                                                  | swift run main                |
| Lua                 | .lua           |                                                                                         | lua main.lua                  |