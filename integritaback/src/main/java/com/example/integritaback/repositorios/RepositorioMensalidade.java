package com.example.integritaback.repositorios;
import java.util.List;

import com.example.integritaback.modelo.MensalidadeModelo;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.CrudRepository;

public interface RepositorioMensalidade extends CrudRepository<MensalidadeModelo, Integer> {

    //lista todas as mensalidade
    List<MensalidadeModelo> findAll();

    //pesquisa por as mensalidades pagas e ordena desc

    List<MensalidadeModelo> findByCodigo(int codigo, Sort sort);

    //remove mensalidade
    void delete(MensalidadeModelo mensalidade);

    //cadastra/altera mensalidade
    <MenMod extends MensalidadeModelo> MenMod save(MenMod mensalidade);
}