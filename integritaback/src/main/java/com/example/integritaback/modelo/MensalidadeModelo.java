package com.example.integritaback.modelo;
import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="mensalidade")
public class MensalidadeModelo {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="idMensalidade")
    private int idMensalidade;
    @Column(name="idPaciente")
    private int codigo;
    @Column(name="pilates")
    private int pilates;
    @Column(name="acupuntura")
    private int acupuntura;
    @Column(name="valorTotal")
    private int valorTotal;
    @Column(name="dataAtual")
    private Date dataAtual;

    public int getIdMensalidade() {
        return idMensalidade;
    }

    public void setIdMensalidade(int idMensalidade) {
        this.idMensalidade = idMensalidade;
    }
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

    public int getValorTotal() {
        return valorTotal;
    }

    public void setValorTotal(int valorTotal) {
        this.valorTotal = valorTotal;
    }

    public Date getDataAtual() {
        return dataAtual;
    }

    public void setDataAtual(Date dataAtual) {
        this.dataAtual = dataAtual;
    }
}
