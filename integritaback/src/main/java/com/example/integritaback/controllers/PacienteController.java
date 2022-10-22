package com.example.integritaback.controllers;
import com.example.integritaback.repositorios.RepositorioPaciente;
import com.example.integritaback.modelo.PacienteModelo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*")
@RestController
public class PacienteController {
    @Autowired
    private RepositorioPaciente acoes;

    @RequestMapping(value="/paciente", method=RequestMethod.GET)
    public @ResponseBody List<PacienteModelo> listar(){
        return acoes.findByOrderByNomePaciente();
    }

    //listar paciente especifico pelo nome
    @RequestMapping(value="/editar/listar/{nomePaciente}", method=RequestMethod.GET)
    public @ResponseBody List<PacienteModelo> iniciaCom(@PathVariable String nomePaciente){
        return acoes.findByNomePacienteStartsWith(nomePaciente);
    }

    //listar tudo de um paciente especifico pelo codigo
    @RequestMapping(value="/editar/{codigo}", method=RequestMethod.GET)
    public @ResponseBody PacienteModelo filtrar(@PathVariable Integer codigo){
        return acoes.findByCodigo(codigo);
    }

    //mostrar somente o nomePaciente especifico pelo codigo
    @RequestMapping(value="/paciente/{codigo}", method=RequestMethod.GET)
    public @ResponseBody String filtrarNomePaciente(@PathVariable Integer codigo){
        return acoes.findByCodigoReturnNomePaciente(codigo);
    }

    //listar o nomePaciente e idPaciente que fazem acupuntura
    @RequestMapping(value="/paciente/acupuntura", method=RequestMethod.GET)
    public @ResponseBody List<PacienteModelo> filtrarNomeIdAcupuntura(){
        return acoes.findAllAcupuntura();
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
