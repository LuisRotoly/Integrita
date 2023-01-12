package com.example.integritaback.controllers;
import com.example.integritaback.modelo.AcompanhamentoModelo;
import com.example.integritaback.repositorios.RepositorioAcompanhamento;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class AcompanhamentoController {
    @Autowired
    private RepositorioAcompanhamento acoes;

    //listar uma avaliacao especifica pelo codigo
    @RequestMapping(value="/acompanhamentos/{codigo}", method=RequestMethod.GET)
    public @ResponseBody List<AcompanhamentoModelo> filtrar(@PathVariable Integer codigo){
        return acoes.findByCodigoOrderByDataAtualDesc(codigo);
    }

    //cadastrar avaliacao pilates
    @RequestMapping(value="/acompanhamento", method=RequestMethod.POST)
    public @ResponseBody AcompanhamentoModelo cadastrar(@RequestBody AcompanhamentoModelo acompanhamentoModelo){
        return acoes.save(acompanhamentoModelo);
    }
}
