export function addComasToNumber(numero) {
  let numeroFormateado = numero.toFixed(2);

  return numeroFormateado.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}