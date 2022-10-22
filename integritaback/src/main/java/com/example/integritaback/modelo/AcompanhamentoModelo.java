package com.example.integritaback.modelo;
import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="acompanhamento")
public class AcompanhamentoModelo {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="idAcompanhamento")
    private int idAcompanhamento;
    @Column(name="idPaciente")
    private int codigo;
    @Column(name="descricao")
    private String descricao;
    @Column(name="dataAtual")
    private Date dataAtual;

    public int getIdAcompanhamento() {
        return idAcompanhamento;
    }

    public void setIdAcompanhamento(int idAcompanhamento) {
        this.idAcompanhamento = idAcompanhamento;
    }

    public int getCodigo() {
        return codigo;
    }

    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Date getDataAtual() {
        return dataAtual;
    }

    public void setDataAtual(Date dataAtual) {
        this.dataAtual = dataAtual;
    }
}
