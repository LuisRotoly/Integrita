package com.example.integritaback.repositorios;
import com.example.integritaback.modelo.AcompanhamentoModelo;
import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface RepositorioAcompanhamento  extends CrudRepository<AcompanhamentoModelo, Integer> {

    //lista todos as avaliacoes
    List<AcompanhamentoModelo> findAll();

    //pesquisa por idPaciente
    List<AcompanhamentoModelo> findByCodigoOrderByDataAtualDesc(int codigo);

    //remove avaliacao
    void delete(AcompanhamentoModelo acompanhamentoModelo);

    //cadastra/altera avaliacao
    <AcoMod extends AcompanhamentoModelo> AcoMod save(AcoMod acompanhamentoModelo);
}
