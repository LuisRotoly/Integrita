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

    //listar um acompanhamento especifica pelo codigo
    @RequestMapping(value="/acompanhamentos/acupuntura/{codigo}", method=RequestMethod.GET)
    public @ResponseBody List<AcompanhamentoModelo> filtrarAcupuntura(@PathVariable Integer codigo){
        return acoes.findByCodigoAndAcupuntura(codigo);
    }

    //listar um acompanhamento especifica pelo codigo
    @RequestMapping(value="/acompanhamentos/fisioterapia/{codigo}", method=RequestMethod.GET)
    public @ResponseBody List<AcompanhamentoModelo> filtrarFisioterapia(@PathVariable Integer codigo){
        return acoes.findByCodigoAndFisioterapia(codigo);
    }

    //cadastrar acompanhamento fisioterapia ou acupuntura
    @RequestMapping(value="/acompanhamento", method=RequestMethod.POST)
    public @ResponseBody AcompanhamentoModelo cadastrar(@RequestBody AcompanhamentoModelo acompanhamentoModelo){
        return acoes.save(acompanhamentoModelo);
    }
}
