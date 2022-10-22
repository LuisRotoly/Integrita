package com.example.integritaback.repositorios;
import java.util.List;

import com.example.integritaback.modelo.AvaliacaoAcunpunturaModelo;
import org.springframework.data.repository.CrudRepository;

public interface RepositorioAcupuntura extends CrudRepository<AvaliacaoAcunpunturaModelo, Integer> {

    //lista todos as avaliacoes
    List<AvaliacaoAcunpunturaModelo> findAll();

    //pesquisa por idPaciente
    AvaliacaoAcunpunturaModelo findByCodigo(int codigo);

    //remove paciente
    void delete(AvaliacaoAcunpunturaModelo avaliacaoAcunpuntura);

    //cadastra/altera paciente
    <AvaAcu extends AvaliacaoAcunpunturaModelo> AvaAcu save(AvaAcu avaliacaoAcunpuntura);
}