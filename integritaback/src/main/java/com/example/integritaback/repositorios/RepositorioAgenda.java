package com.example.integritaback.repositorios;
import com.example.integritaback.modelo.AgendaModelo;
import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface RepositorioAgenda extends CrudRepository<AgendaModelo, Integer> {
    //lista todos os atendimentos
    List<AgendaModelo> findAll();

    //remove atendimento
    void delete(AgendaModelo agendaModelo);

    //cadastra/altera atendimento
    <AgeMod extends AgendaModelo> AgeMod save(AgeMod agendaModelo);
}
