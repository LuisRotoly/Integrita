package com.example.integritaback.repositorios;

import com.example.integritaback.modelo.AvaliacaoFisioterapiaModelo;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface RepositorioFisioterapia extends CrudRepository<AvaliacaoFisioterapiaModelo, Integer> {
    //lista todos as avaliacoes
    List<AvaliacaoFisioterapiaModelo> findAll();

    //pesquisa por idPaciente
    AvaliacaoFisioterapiaModelo findByCodigo(int codigo);

    //remove avaliacao
    void delete(AvaliacaoFisioterapiaModelo avaliacaoFisioterapia);

    //cadastra/altera avaliacao
    <AvaFis extends AvaliacaoFisioterapiaModelo> AvaFis save(AvaFis avaliacaoFisioterapia);
}
