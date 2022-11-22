package com.example.integritaback.repositorios;
import java.util.List;

import com.example.integritaback.projections.MensalidadeProjecao;
import com.example.integritaback.modelo.MensalidadeModelo;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface RepositorioMensalidade extends CrudRepository<MensalidadeModelo, Integer> {

    //listar uma mensalidade pelo idMensalidade
    MensalidadeModelo findByidMensalidade(Integer idMensalidade);

    //listar a mensalidade de um paciente especifico pelo codigo do paciente

    List<MensalidadeModelo> findByCodigo(int codigo, Sort sort);

    //remove mensalidade
    @Query(value = "DELETE mensalidade FROM mensalidade WHERE id_mensalidade = :idMensalidade;", nativeQuery = true)
    void delete(Integer idMensalidade);

    //cadastra/altera mensalidade
    <MenMod extends MensalidadeModelo> MenMod save(MenMod mensalidade);

    //listar soma dos recebiveis do mes do ano
    @Query(value = "SELECT SUM(`valor_total`) as `soma`, data_atual as `data` FROM mensalidade WHERE year(`data_atual`)= :ano GROUP BY YEAR(`data_atual`), MONTH(`data_atual`) ORDER BY MONTH(`data_atual`);", nativeQuery = true)
    List<MensalidadeProjecao> listarRecebiveisdoMes(String ano);
}