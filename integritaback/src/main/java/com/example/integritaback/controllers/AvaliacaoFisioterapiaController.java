package com.example.integritaback.controllers;

import com.example.integritaback.modelo.AvaliacaoFisioterapiaModelo;
import com.example.integritaback.repositorios.RepositorioFisioterapia;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
public class AvaliacaoFisioterapiaController {

    @Autowired
    private RepositorioFisioterapia acoes;

    //listar uma avaliacao especifica pelo codigo
    @RequestMapping(value="/avaliacao/fisioterapiaa/{codigo}", method= RequestMethod.GET)
    public @ResponseBody AvaliacaoFisioterapiaModelo filtrar(@PathVariable Integer codigo){
        return acoes.findByCodigo(codigo);
    }

    //cadastrar avaliacao fisioterapia
    @RequestMapping(value="/avaliacao/fisioterapia", method=RequestMethod.POST)
    public @ResponseBody AvaliacaoFisioterapiaModelo cadastrar(@RequestBody AvaliacaoFisioterapiaModelo avaliacaoFisioterapiaModelo){
        return acoes.save(avaliacaoFisioterapiaModelo);
    }
}
