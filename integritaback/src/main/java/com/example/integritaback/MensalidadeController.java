package com.example.integritaback;

import org.springframework.beans.factory.annotation.Autowired;
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
    public @ResponseBody MensalidadeModelo filtrar(@PathVariable Integer codigo){
        return acoes.findByCodigo(codigo);
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