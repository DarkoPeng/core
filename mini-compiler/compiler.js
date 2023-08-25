/** Vue.js 编译器 */
function compiler(template) {
  const templateAST = parse(template)
  const jsAST = transform(templateAST)
  const code = generate(jsAST)

  return code
}

function parse(template) {}
