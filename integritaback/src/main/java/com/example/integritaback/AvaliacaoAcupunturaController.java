package com.example.integritaback;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
public class AvaliacaoAcupunturaController {
    @Autowired
    private RepositorioAcupuntura acoes;

    //listar uma avaliacao especifica pelo codigo
    @RequestMapping(value="/avaliacao/acupuntura/{codigo}", method=RequestMethod.GET)
    public @ResponseBody AvaliacaoAcunpunturaModelo filtrar(@PathVariable Integer codigo){
        return acoes.findByCodigo(codigo);
    }

    //cadastrar avaliacao acupuntura
    @RequestMapping(value="/avaliacao/acupuntura", method=RequestMethod.POST)
    public @ResponseBody AvaliacaoAcunpunturaModelo cadastrar(@RequestBody AvaliacaoAcunpunturaModelo avaliacaoAcupuntura){
        return acoes.save(avaliacaoAcupuntura);
    }
}