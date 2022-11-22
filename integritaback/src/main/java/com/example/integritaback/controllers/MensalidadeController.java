package com.example.integritaback.controllers;
import com.example.integritaback.modelo.AgendaModelo;
import com.example.integritaback.projections.MensalidadeProjecao;
import com.example.integritaback.modelo.MensalidadeModelo;
import com.example.integritaback.repositorios.RepositorioMensalidade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class MensalidadeController {
    @Autowired
    private RepositorioMensalidade acoes;

    //listar uma mensalidade pelo idMensalidade
    @RequestMapping(value="/mensalidade/listar/{idMensalidade}", method=RequestMethod.GET)
    public @ResponseBody MensalidadeModelo listarPeloidMensalidade(@PathVariable Integer idMensalidade){
        return acoes.findByidMensalidade(idMensalidade);
    }

    //listar a mensalidade de um paciente especifico pelo codigo do paciente
    @RequestMapping(value="/mensalidade/{codigo}", method=RequestMethod.GET)
    public @ResponseBody List<MensalidadeModelo> filtrar(@PathVariable Integer codigo, Sort sort){
        sort = Sort.by(Sort.Direction.DESC,"dataAtual");
        return acoes.findByCodigo(codigo, sort);
    }

    //cadastrar mensalidade
    @RequestMapping(value="/mensalidade", method=RequestMethod.POST)
    public @ResponseBody MensalidadeModelo cadastrar(@RequestBody MensalidadeModelo mensalidade){
        return acoes.save(mensalidade);
    }

    //remover mensalidade
    @RequestMapping(value="/mensalidade/{idMensalidade}", method=RequestMethod.DELETE)
    public @ResponseBody void remover(@PathVariable Integer idMensalidade){
        MensalidadeModelo mensalidadeModelo = listarPeloidMensalidade(idMensalidade);
        acoes.delete(mensalidadeModelo);
    }

    //listar soma dos recebiveis do mes do ano
    @RequestMapping(value="/mensalidade/relatorio/{ano}", method=RequestMethod.GET)
    public @ResponseBody List<MensalidadeProjecao> listarRecebiveis(@PathVariable String ano){
        return acoes.listarRecebiveisdoMes(ano);
    }
}