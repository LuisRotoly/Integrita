package com.example.integritaback.modelo;
import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="agenda")
public class AgendaModelo {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="idAgenda")
    private int idAgenda;
    @Column(name="idPaciente")
    private int codigo;
    @Column(name="nomePaciente")
    private String nomePaciente;
    @Column(name="pilates")
    private boolean pilates;
    @Column(name="acupuntura")
    private boolean acupuntura;
    @Column(name="data")
    private String data;

    public int getIdAgenda() {
        return idAgenda;
    }

    public void setIdAgenda(int idAgenda) {
        this.idAgenda = idAgenda;
    }

    public int getCodigo() {
        return codigo;
    }

    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }

    public String getNomePaciente() {
        return nomePaciente;
    }

    public void setNomePaciente(String nomePaciente) {
        this.nomePaciente = nomePaciente;
    }

    public boolean isPilates() {
        return pilates;
    }

    public void setPilates(boolean pilates) {
        this.pilates = pilates;
    }

    public boolean isAcupuntura() {
        return acupuntura;
    }

    public void setAcupuntura(boolean acupuntura) {
        this.acupuntura = acupuntura;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }
}
