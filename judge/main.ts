import * as ts from 'typescript'

// 参考: https://github.com/microsoft/TypeScript/wiki/Using-the-Compiler-API
function compileSolution(solutionPath: string, options: ts.CompilerOptions): void {
  const program = ts.createProgram([solutionPath], options)
  const diagnostics = ts.getPreEmitDiagnostics(program)

  const diagnosticMessages = diagnostics.map((diagnostic) =>
    ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n')
  )

  console.log(diagnosticMessages)

  const hasError = diagnosticMessages.length > 0 ? true : false
  const submissionStatus = hasError ? 'Wrong Answer' : 'Accepted'

  console.log(`Submission status is ${submissionStatus}`)
}

compileSolution(process.argv[2], {
  noImplicitAny: true,
  target: ts.ScriptTarget.ES5,
  module: ts.ModuleKind.CommonJS,
  noEmit: true,
})
