package com.example.integritaback;

import javax.persistence.*;

@Entity
@Table(name="paciente")
public class PacienteModelo {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="idPaciente")
    private int codigo;
    @Column(name="nomePaciente")
    private String nomePaciente;
    @Column(name="CPF")
    private String CPF;

    public String getNomePaciente() {
        return nomePaciente;
    }
    public void setNomePaciente(String nomePaciente) {
        this.nomePaciente = nomePaciente;
    }
    public String getCPF() {
        return CPF;
    }
    public void setCPF(String CPF) {
        this.CPF = CPF;
    }
    public int getcodigo() {
        return codigo;
    }
    public void setcodigo(int codigo) {
        this.codigo = codigo;
    }
}
