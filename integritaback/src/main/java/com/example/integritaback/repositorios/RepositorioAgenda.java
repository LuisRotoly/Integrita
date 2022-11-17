package com.example.integritaback.repositorios;
import com.example.integritaback.modelo.AgendaModelo;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface RepositorioAgenda extends CrudRepository<AgendaModelo, Integer> {
    //lista todos os atendimentos
    List<AgendaModelo> findAll();

    //lista um atendimento pelo idAgenda
    AgendaModelo findByidAgenda(Integer idAgenda);

    //remove atendimento
    @Query(value = "DELETE agenda FROM agenda WHERE id_agenda = :idAgenda;", nativeQuery = true)
    void delete(Integer idAgenda);

    //cadastra/altera atendimento
    <AgeMod extends AgendaModelo> AgeMod save(AgeMod agendaModelo);
}