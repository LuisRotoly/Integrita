package com.example.integritaback.controllers;
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

    //listar todas as mensalidade
    @RequestMapping(value="/mensalidade", method=RequestMethod.GET)
    public @ResponseBody List<MensalidadeModelo> listar(){
        return acoes.findAll();
    }

    //listar um paciente especifico pelo codigo
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
    @RequestMapping(value="/mensalidade/{codigo}", method=RequestMethod.DELETE)
    public @ResponseBody void remover(@RequestBody MensalidadeModelo mensalidade){
        acoes.delete(mensalidade);
    }
}