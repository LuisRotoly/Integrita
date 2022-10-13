package com.example.integritaback;
import javax.persistence.*;

@Entity
@Table(name="avaliacaoAcupuntura")
public class AvaliacaoAcunpunturaModelo {
    @Id
    @Column(name="idPaciente")
    private int codigo;
    @Column(name="queixa")
    private String queixa;
    @Column(name="hda")
    private String hda;
    @Column(name="hdp")
    private String hdp;
    @Column(name="medicacoes")
    private String medicacoes;
    @Column(name="emocional")
    private String emocional;
    @Column(name="cardiorespiratorio")
    private String cardiorespiratorio;
    @Column(name="digestivo")
    private String digestivo;
    @Column(name="intestinal")
    private String intestinal;
    @Column(name="urinario")
    private String urinario;
    @Column(name="dermatologico")
    private String dermatologico;
    @Column(name="neurologico")
    private String neurologico;
    @Column(name="exameFisico")
    private String exameFisico;
    @Column(name="manchas")
    private String manchas;
    @Column(name="vascularizacao")
    private String vascularizacao;
    @Column(name="escamacoes")
    private String escamacoes;
    @Column(name="alteracoes")
    private String alteracoes;
    @Column(name="dor")
    private String dor;
    @Column(name="orelha")
    private char orelha;
    @Column(name="sangria")
    private boolean sangria;
    @Column(name="observacoes")
    private String observacoes;
    @Column(name="material")
    private String material;
    @Column(name="pac")
    private String pac;
    @Column(name="pae")
    private String pae;
    @Column(name="mtc")
    private String mtc;
    @Column(name="psn")
    private String psn;
    @Column(name="pse")
    private String pse;
    @Column(name="observacaoGeral")
    private String observacaoGeral;
    @Column(name="dataAtual")
    private String dataAtual;

    public String getDataAtual() {
        return dataAtual;
    }

    public void setDataAtual(String dataAtual) {
        this.dataAtual = dataAtual;
    }

    public int getCodigo() {
        return codigo;
    }

    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }

    public String getQueixa() {
        return queixa;
    }

    public void setQueixa(String queixa) {
        this.queixa = queixa;
    }

    public String getHda() {
        return hda;
    }

    public void setHda(String hda) {
        this.hda = hda;
    }

    public String getHdp() {
        return hdp;
    }

    public void setHdp(String hdp) {
        this.hdp = hdp;
    }

    public String getMedicacoes() {
        return medicacoes;
    }

    public void setMedicacoes(String medicacoes) {
        this.medicacoes = medicacoes;
    }

    public String getEmocional() {
        return emocional;
    }

    public void setEmocional(String emocional) {
        this.emocional = emocional;
    }

    public String getCardiorespiratorio() {
        return cardiorespiratorio;
    }

    public void setCardiorespiratorio(String cardiorespiratorio) {
        this.cardiorespiratorio = cardiorespiratorio;
    }

    public String getDigestivo() {
        return digestivo;
    }

    public void setDigestivo(String digestivo) {
        this.digestivo = digestivo;
    }

    public String getIntestinal() {
        return intestinal;
    }

    public void setIntestinal(String intestinal) {
        this.intestinal = intestinal;
    }

    public String getUrinario() {
        return urinario;
    }

    public void setUrinario(String urinario) {
        this.urinario = urinario;
    }

    public String getDermatologico() {
        return dermatologico;
    }

    public void setDermatologico(String dermatologico) {
        this.dermatologico = dermatologico;
    }

    public String getNeurologico() {
        return neurologico;
    }

    public void setNeurologico(String neurologico) {
        this.neurologico = neurologico;
    }

    public String getExameFisico() {
        return exameFisico;
    }

    public void setExameFisico(String exameFisico) {
        this.exameFisico = exameFisico;
    }

    public String getManchas() {
        return manchas;
    }

    public void setManchas(String manchas) {
        this.manchas = manchas;
    }

    public String getVascularizacao() {
        return vascularizacao;
    }

    public void setVascularizacao(String vascularizacao) {
        this.vascularizacao = vascularizacao;
    }

    public String getEscamacoes() {
        return escamacoes;
    }

    public void setEscamacoes(String escamacoes) {
        this.escamacoes = escamacoes;
    }

    public String getAlteracoes() {
        return alteracoes;
    }

    public void setAlteracoes(String alteracoes) {
        this.alteracoes = alteracoes;
    }

    public String getDor() {
        return dor;
    }

    public void setDor(String dor) {
        this.dor = dor;
    }

    public char getOrelha() {
        return orelha;
    }

    public void setOrelha(char orelha) {
        this.orelha = orelha;
    }

    public boolean isSangria() {
        return sangria;
    }

    public void setSangria(boolean sangria) {
        this.sangria = sangria;
    }

    public String getObservacoes() {
        return observacoes;
    }

    public void setObservacoes(String observacoes) {
        this.observacoes = observacoes;
    }

    public String getMaterial() {
        return material;
    }

    public void setMaterial(String material) {
        this.material = material;
    }

    public String getPac() {
        return pac;
    }

    public void setPac(String pac) {
        this.pac = pac;
    }

    public String getPae() {
        return pae;
    }

    public void setPae(String pae) {
        this.pae = pae;
    }

    public String getMtc() {
        return mtc;
    }

    public void setMtc(String mtc) {
        this.mtc = mtc;
    }

    public String getPsn() {
        return psn;
    }

    public void setPsn(String psn) {
        this.psn = psn;
    }

    public String getPse() {
        return pse;
    }

    public void setPse(String pse) {
        this.pse = pse;
    }

    public String getObservacaoGeral() {
        return observacaoGeral;
    }

    public void setObservacaoGeral(String observacaoGeral) {
        this.observacaoGeral = observacaoGeral;
    }
}
