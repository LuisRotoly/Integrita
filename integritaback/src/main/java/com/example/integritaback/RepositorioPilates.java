package com.example.integritaback;
import java.util.List;
import org.springframework.data.repository.CrudRepository;

public interface RepositorioPilates extends CrudRepository<AvaliacaoPilatesModelo, Integer> {

    //lista todos as avaliacoes
    List<AvaliacaoPilatesModelo> findAll();

    //pesquisa por idPaciente
    AvaliacaoPilatesModelo findByCodigo(int codigo);

    //remove avaliacao
    void delete(AvaliacaoPilatesModelo avaliacaoPilates);

    //cadastra/altera avaliacao
    <AvaPil extends AvaliacaoPilatesModelo> AvaPil save(AvaPil avaliacaoPilates);
}
