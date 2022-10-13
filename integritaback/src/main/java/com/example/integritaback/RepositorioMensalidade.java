package com.example.integritaback;
import java.util.List;
import org.springframework.data.repository.CrudRepository;

public interface RepositorioMensalidade extends CrudRepository<MensalidadeModelo, Integer> {

    //lista todas as mensalidade
    List<MensalidadeModelo> findAll();

    //pesquisa por idPaciente
    MensalidadeModelo findByCodigo(int codigo);

    //remove mensalidade
    void delete(MensalidadeModelo mensalidade);

    //cadastra/altera mensalidade
    <MenMod extends MensalidadeModelo> MenMod save(MenMod mensalidade);
}