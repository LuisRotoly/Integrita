package com.example.integritaback.modelo;
import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="paciente")
public class PacienteModelo {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="idPaciente")
    private int codigo;
    @Column(name="nomePaciente")
    private String nomePaciente;
    @Column(name="cpf")
    private String CPF;
    @Column(name="telefone")
    private String telefone;
    @Column(name="idade")
    private String idade;
    @Column(name="profissao")
    private String profissao;
    @Column(name="sexo")
    private char sexo;
    @Column(name="endereco")
    private String endereco;
    @Column(name="acupuntura")
    private boolean acupuntura;
    @Column(name="pilates")
    private boolean pilates;
    @Column(name="ativo")
    private boolean ativo;
    @Column(name="dataAtual")
    private Date dataAtual;

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

    public String getCPF() {
        return CPF;
    }

    public void setCPF(String CPF) {
        this.CPF = CPF;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getIdade() {
        return idade;
    }

    public void setIdade(String idade) {
        this.idade = idade;
    }

    public String getProfissao() {
        return profissao;
    }

    public void setProfissao(String profissao) {
        this.profissao = profissao;
    }

    public char getSexo() {
        return sexo;
    }

    public void setSexo(char sexo) {
        this.sexo = sexo;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public boolean isAcupuntura() {
        return acupuntura;
    }

    public void setAcupuntura(boolean acupuntura) {
        this.acupuntura = acupuntura;
    }

    public boolean isPilates() {
        return pilates;
    }

    public void setPilates(boolean pilates) {
        this.pilates = pilates;
    }

    public boolean isAtivo() {
        return ativo;
    }

    public void setAtivo(boolean ativo) {
        this.ativo = ativo;
    }

    public Date getDataAtual() {
        return dataAtual;
    }

    public void setDataAtual(Date dataAtual) {
        this.dataAtual = dataAtual;
    }
}
