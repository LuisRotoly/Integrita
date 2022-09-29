package com.example.integritaback;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PacienteController {
    @Autowired
    private Repositorio acoes;

    @CrossOrigin(origins = "http://localhost:3000/")

    //listar paciente
    @RequestMapping(value="/paciente", method=RequestMethod.GET)
    public @ResponseBody List<PacienteModelo> listar(){
        return acoes.findAll();
    }

    //cadastrar paciente
    @RequestMapping(value="/paciente", method=RequestMethod.POST)
    public @ResponseBody PacienteModelo cadastrar(@RequestBody PacienteModelo paciente){
        return acoes.save(paciente);
    }
}
