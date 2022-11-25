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

    //lista os atendimentos em uma data especifica
    @Query(value = "SELECT * FROM agenda WHERE substring(data,1,10) IN (:data0,:data1,:data2,:data3,:data4)", nativeQuery = true)
    List<AgendaModelo> encontraAtendimento(String data0, String data1, String data2, String data3, String data4);

    //remove atendimento
    @Query(value = "DELETE agenda FROM agenda WHERE id_agenda = :idAgenda;", nativeQuery = true)
    void delete(Integer idAgenda);

    //cadastra/altera atendimento
    <AgeMod extends AgendaModelo> AgeMod save(AgeMod agendaModelo);
}