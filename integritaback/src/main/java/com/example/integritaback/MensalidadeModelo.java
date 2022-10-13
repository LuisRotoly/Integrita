package com.example.integritaback;
import javax.persistence.*;

@Entity
@Table(name="mensalidade")
public class MensalidadeModelo {

    @Id
    @Column(name="idPaciente")
    private int codigo;
    @Column(name="pilates")
    private int pilates;
    @Column(name="acupuntura")
    private int acupuntura;
    @Column(name="valorTotal")
    private double valorTotal;
    @Column(name="dataAtual")
    private String dataAtual;

    public int getCodigo() {
        return codigo;
    }

    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }

    public int getPilates() {
        return pilates;
    }

    public void setPilates(int pilates) {
        this.pilates = pilates;
    }

    public int getAcupuntura() {
        return acupuntura;
    }

    public void setAcupuntura(int acupuntura) {
        this.acupuntura = acupuntura;
    }

    public double getValorTotal() {
        return valorTotal;
    }

    public void setValorTotal(double valorTotal) {
        this.valorTotal = valorTotal;
    }

    public String getDataAtual() {
        return dataAtual;
    }

    public void setDataAtual(String dataAtual) {
        this.dataAtual = dataAtual;
    }
}
