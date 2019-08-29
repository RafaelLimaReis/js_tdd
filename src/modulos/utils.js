/**
 * exports
 */
function sum(a, b) {
  return a + b;
}
/**
 * named export
 * pode ter varios exports no mesmo modulo
 * só pode ser importado usando mesmo nome
 * import obrigatório usar as {}
 */
export function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

export { mult, div }

// metodo principal => só deve haver um "default" por modulo
export default sum;
