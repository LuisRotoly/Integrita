package com.example.integritaback.controllers;
import com.example.integritaback.modelo.AvaliacaoAcunpunturaModelo;
import com.example.integritaback.repositorios.RepositorioAcupuntura;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
public class AvaliacaoAcupunturaController {
    @Autowired
    private RepositorioAcupuntura acoes;

    //listar uma avaliacao especifica pelo codigo
    @RequestMapping(value="/avaliacao/acupunturas/{codigo}", method=RequestMethod.GET)
    public @ResponseBody AvaliacaoAcunpunturaModelo filtrar(@PathVariable Integer codigo){
        return acoes.findByCodigo(codigo);
    }

    //cadastrar avaliacao acupuntura
    @RequestMapping(value="/avaliacao/acupuntura", method=RequestMethod.POST)
    public @ResponseBody AvaliacaoAcunpunturaModelo cadastrar(@RequestBody AvaliacaoAcunpunturaModelo avaliacaoAcupuntura){
        return acoes.save(avaliacaoAcupuntura);
    }
}