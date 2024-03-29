package com.example.integritaback.controllers;
import com.example.integritaback.modelo.AgendaModelo;
import com.example.integritaback.repositorios.RepositorioAgenda;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class AgendaController {
    @Autowired
    private RepositorioAgenda acoes;

    //listar todos os atendimentos
    @RequestMapping(value="/agendas", method=RequestMethod.GET)
    public @ResponseBody List<AgendaModelo> filtrar(){
        return acoes.findAll();
    }

    //listar um atendimento pelo idAgenda
    @RequestMapping(value="/agendas/{idAgenda}", method=RequestMethod.GET)
    public @ResponseBody AgendaModelo listarPeloidAgenda(@PathVariable Integer idAgenda){
        return acoes.findByidAgenda(idAgenda);
    }

    //cadastrar o atendimento na agenda
    @RequestMapping(value="/agendas", method=RequestMethod.POST)
    public @ResponseBody AgendaModelo cadastrar(@RequestBody AgendaModelo agendaModelo){
        return acoes.save(agendaModelo);
    }

    //remover o atendimento
    @RequestMapping(value="/agendas/{idAgenda}", method=RequestMethod.DELETE)
    public @ResponseBody void remover(@PathVariable Integer idAgenda){
        AgendaModelo agendaModelo = listarPeloidAgenda(idAgenda);
        acoes.delete(agendaModelo);
    }

    //clonar os atendimentos da ultima semana
    @RequestMapping(value="/agendas/clone/{data0}/{data1}/{data2}/{data3}/{data4}", method=RequestMethod.GET)
    public @ResponseBody List<AgendaModelo> clone(@PathVariable String data0,@PathVariable String data1,@PathVariable String data2,@PathVariable String data3,@PathVariable String data4){
        return acoes.encontraAtendimento(data0,data1,data2,data3,data4);
    }

    //limpar os atendimentos
    @RequestMapping(value="/agendas/limpar/{data0}/{data1}/{data2}/{data3}/{data4}", method=RequestMethod.DELETE)
    public @ResponseBody void limparAtendimentos(@PathVariable String data0,@PathVariable String data1,@PathVariable String data2,@PathVariable String data3,@PathVariable String data4){
        acoes.limpar(data0,data1,data2,data3,data4);
    }
}