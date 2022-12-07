import { Document, Page, Text, Image, StyleSheet } from "@react-pdf/renderer";
import clinica from "../images/clinica.png";
import { transformarData } from "../pages/helper";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  textBold: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Bold",
  },
  textAssinatura: {
    marginTop: 25,
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Times-Roman",
  },
  textNome: {
    marginTop: 10,
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Times-Roman",
  },
  textData: {
    marginTop: 20,
    fontSize: 12,
    textAlign: "center",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
});

function PDFImprimir(props) {
  return (
    <Document>
      <Page style={styles.body}>
        <Image style={styles.image} src={clinica} />
        <Text style={styles.title}>{props.titulo}</Text>
        {props.dados.map(({ idAcompanhamento, descricao, dataAtual }) => (
          <Text style={styles.text} key={idAcompanhamento}>
            <Text style={styles.textBold}>Data da sessão:</Text> {transformarData(new Date(dataAtual))}
            {"\n"}
            <Text style={styles.textBold}>Descrição:</Text> {descricao}
          </Text>
        ))}
        <Text style={styles.textAssinatura}>
          _________________________________________________
        </Text>
        <Text style={styles.textNome}>
          Aline Marconi Riboldi   CREFITO: 213180-F
        </Text>
        <Text style={styles.textData}>{transformarData(new Date())}</Text>
      </Page>
    </Document>
  );
}

export default PDFImprimir;
