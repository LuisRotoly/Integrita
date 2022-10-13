package com.example.integritaback;
import java.util.List;
import org.springframework.data.repository.CrudRepository;

public interface RepositorioPaciente extends CrudRepository<PacienteModelo, Integer> {

    //lista todos os pacientes
    List<PacienteModelo> findAll();

    //pesquisa por nome
    List<PacienteModelo> findByNomePaciente(String nomePaciente);

    //pesquisa por idPaciente
    PacienteModelo findByCodigo(int codigo);

    //remove paciente
    void delete(PacienteModelo paciente);

    //cadastra/altera paciente
    <PacMod extends PacienteModelo> PacMod save(PacMod paciente);
}
