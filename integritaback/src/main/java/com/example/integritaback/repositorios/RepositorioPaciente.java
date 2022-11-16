package com.example.integritaback.repositorios;
import java.util.List;

import com.example.integritaback.modelo.PacienteModelo;
import com.example.integritaback.projections.PacienteProjecao;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface RepositorioPaciente extends CrudRepository<PacienteModelo, Integer> {

    //lista todos os pacientes
    List<PacienteModelo> findAll();

    //busca por nome
    List<PacienteModelo> findByNomePacienteStartsWith(String busca);

    //pesquisa de pacientes ordenados pelo nome
    List<PacienteModelo> findByOrderByNomePaciente();

    //pesquisa por idPaciente
    PacienteModelo findByCodigo(int codigo);

    //pesquisa por idPaciente e retorna somente o nomePaciente
    @Query(value = "SELECT nome_paciente FROM paciente WHERE id_paciente = :codigo", nativeQuery = true)
    String findByCodigoReturnNomePaciente(int codigo);

    //pesquisa pacientes que fazem acupuntura
    @Query(value = "SELECT * FROM paciente WHERE acupuntura = 1", nativeQuery = true)
    List<PacienteModelo> findAllAcupuntura();

    //remove paciente
    void delete(PacienteModelo paciente);

    //cadastra/altera paciente
    <PacMod extends PacienteModelo> PacMod save(PacMod paciente);

    //lista nome e id de paciente, usando pelo nome
    @Query(value = "SELECT (`id_paciente`) as `codigo`, (`nome_paciente`) as `nomePaciente` FROM paciente WHERE (`nome_paciente`) LIKE CONCAT(:nomePaciente,'%')", nativeQuery = true)
    List<PacienteProjecao> listIdNome(String nomePaciente);
}
