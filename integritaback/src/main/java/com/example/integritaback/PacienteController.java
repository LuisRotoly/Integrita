package com.example.integritaback;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*")
@RestController
public class PacienteController {
    @Autowired
    private RepositorioPaciente acoes;

    //listar todos os pacientes
    @RequestMapping(value="/paciente", method=RequestMethod.GET)
    public @ResponseBody List<PacienteModelo> listar(){
        return acoes.findAll();
    }

    //listar paciente especifico pelo nome
    @RequestMapping(value="/editar/listar/{nomePaciente}", method=RequestMethod.GET)
    public @ResponseBody List<PacienteModelo> filtrar(@PathVariable String nomePaciente){
        return acoes.findByNomePaciente(nomePaciente);
    }

    //listar um paciente especifico pelo codigo
    @RequestMapping(value="/editar/{codigo}", method=RequestMethod.GET)
    public @ResponseBody PacienteModelo filtrar(@PathVariable Integer codigo){
        return acoes.findByCodigo(codigo);
    }

    //cadastrar paciente
    @RequestMapping(value="/paciente", method=RequestMethod.POST)
    public @ResponseBody PacienteModelo cadastrar(@RequestBody PacienteModelo paciente){
        return acoes.save(paciente);
    }

    //editar paciente
    @RequestMapping(value="/editar/{codigo}", method=RequestMethod.PUT)
    public @ResponseBody PacienteModelo editar(@RequestBody PacienteModelo paciente){
        return acoes.save(paciente);
    }
}
