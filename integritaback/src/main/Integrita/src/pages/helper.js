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

export { transformarData, verificarSexo, pegaLastSegment };
