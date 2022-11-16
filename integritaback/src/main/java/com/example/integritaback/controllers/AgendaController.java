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
    @RequestMapping(value="/agenda", method=RequestMethod.GET)
    public @ResponseBody List<AgendaModelo> filtrar(){
        return acoes.findAll();
    }

    //cadastrar o atendimento na agenda
    @RequestMapping(value="/agenda", method=RequestMethod.POST)
    public @ResponseBody AgendaModelo cadastrar(@RequestBody AgendaModelo agendaModelo){
        return acoes.save(agendaModelo);
    }

    //remover o atendimento
    @RequestMapping(value="/agenda/{idAgenda}", method=RequestMethod.POST)
    public @ResponseBody AgendaModelo remover(@RequestBody AgendaModelo agendaModelo){
        return acoes.save(agendaModelo);
    }
}
