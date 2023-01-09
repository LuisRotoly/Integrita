function transformarData(data) {
  var dia = String(data.getDate()).padStart(2, "0");
  var mes = String(data.getMonth() + 1).padStart(2, "0");
  var ano = data.getFullYear();
  var dataAtual = dia + "/" + mes + "/" + ano;
  return dataAtual;
}
function verificarSexo(sexo) {
  if (sexo === "M") {
    return "Masculino";
  } else {
    return "Feminino";
  }
}
function pegaLastSegment(pathname) {
  const url = pathname;
  const lastSegment = url.split("/").pop();
  return lastSegment;
}
function converteNumeroMes(numero) {
  const date = new Date();
  date.setMonth(numero - 1);
  return date.toLocaleString('pt-BR', {month: 'long',});
}

export { transformarData, verificarSexo, pegaLastSegment, converteNumeroMes };
