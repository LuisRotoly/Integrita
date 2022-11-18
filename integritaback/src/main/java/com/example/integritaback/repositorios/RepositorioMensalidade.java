package com.example.integritaback.repositorios;
import java.util.List;

import com.example.integritaback.projections.MensalidadeProjecao;
import com.example.integritaback.modelo.MensalidadeModelo;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.Query;
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

    //listar soma dos recebiveis do mes do ano
    @Query(value = "SELECT SUM(`valor_total`) as `soma`, data_atual as `data` FROM mensalidade WHERE year(`data_atual`)= :ano GROUP BY YEAR(`data_atual`), MONTH(`data_atual`) ORDER BY MONTH(`data_atual`);", nativeQuery = true)
    List<MensalidadeProjecao> listarRecebiveisdoMes(String ano);
}