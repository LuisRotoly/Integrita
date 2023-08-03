package com.example.integritaback.repositorios;
import com.example.integritaback.modelo.AcompanhamentoModelo;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface RepositorioAcompanhamento  extends CrudRepository<AcompanhamentoModelo, Integer> {

    //lista todos as avaliacoes
    List<AcompanhamentoModelo> findAll();

    //pesquisa por idPaciente e acupuntura
    @Query(value = "SELECT * FROM acompanhamento WHERE id_paciente = :codigo AND acupuntura = true ORDER BY data_atual DESC", nativeQuery = true)
    List<AcompanhamentoModelo> findByCodigoAndAcupuntura(int codigo);

    //pesquisa por idPaciente e fisioterapia
    @Query(value = "SELECT * FROM acompanhamento WHERE id_paciente = :codigo AND fisioterapia = true ORDER BY data_atual DESC", nativeQuery = true)
    List<AcompanhamentoModelo> findByCodigoAndFisioterapia(int codigo);

    //remove avaliacao
    void delete(AcompanhamentoModelo acompanhamentoModelo);

    //cadastra/altera avaliacao
    <AcoMod extends AcompanhamentoModelo> AcoMod save(AcoMod acompanhamentoModelo);
}
