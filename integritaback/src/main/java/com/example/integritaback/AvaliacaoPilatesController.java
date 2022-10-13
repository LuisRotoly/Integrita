package com.example.integritaback;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
public class AvaliacaoPilatesController {
    @Autowired
    private RepositorioPilates acoes;

    //listar uma avaliacao especifica pelo codigo
    @RequestMapping(value="/avaliacao/pilates/{codigo}", method=RequestMethod.GET)
    public @ResponseBody AvaliacaoPilatesModelo filtrar(@PathVariable Integer codigo){
        return acoes.findByCodigo(codigo);
    }

    //cadastrar avaliacao pilates
    @RequestMapping(value="/avaliacao/pilates", method=RequestMethod.POST)
    public @ResponseBody AvaliacaoPilatesModelo cadastrar(@RequestBody AvaliacaoPilatesModelo avaliacaoPilates){
        return acoes.save(avaliacaoPilates);
    }
}
