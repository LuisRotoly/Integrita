package com.example.integritaback.modelo;
import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="avaliacaoPilates")
public class AvaliacaoPilatesModelo {

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
    @Column(name="cervical")
    private String cervical;
    @Column(name="toracica")
    private String toracica;
    @Column(name="lombar")
    private String lombar;
    @Column(name="quadril")
    private String quadril;
    @Column(name="joelho")
    private String joelho;
    @Column(name="ombro")
    private String ombro;
    @Column(name="articulacoes")
    private String articulacoes;
    @Column(name="observacoes", columnDefinition="LONGTEXT")
    private String observacoes;
    @Column(name="dataAtual")
    private Date dataAtual = new Date();

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

    public String getCervical() {
        return cervical;
    }

    public void setCervical(String cervical) {
        this.cervical = cervical;
    }

    public String getToracica() {
        return toracica;
    }

    public void setToracica(String toracica) {
        this.toracica = toracica;
    }

    public String getLombar() {
        return lombar;
    }

    public void setLombar(String lombar) {
        this.lombar = lombar;
    }

    public String getQuadril() {
        return quadril;
    }

    public void setQuadril(String quadril) {
        this.quadril = quadril;
    }

    public String getJoelho() {
        return joelho;
    }

    public void setJoelho(String joelho) {
        this.joelho = joelho;
    }

    public String getOmbro() {
        return ombro;
    }

    public void setOmbro(String ombro) {
        this.ombro = ombro;
    }

    public String getArticulacoes() {
        return articulacoes;
    }

    public void setArticulacoes(String articulacoes) {
        this.articulacoes = articulacoes;
    }

    public String getObservacoes() {
        return observacoes;
    }

    public void setObservacoes(String observacoes) {
        this.observacoes = observacoes;
    }

    public Date getDataAtual() {
        return dataAtual;
    }

    public void setDataAtual(Date dataAtual) {
        this.dataAtual = dataAtual;
    }
}
