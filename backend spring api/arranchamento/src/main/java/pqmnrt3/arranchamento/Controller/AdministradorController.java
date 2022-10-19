package pqmnrt3.arranchamento.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pqmnrt3.arranchamento.Entity.Administrador;
import pqmnrt3.arranchamento.Service.AdministradorService;

@RestController
@RequestMapping("/api/administrador")
public class AdministradorController {

    @Autowired
    private AdministradorService administradorService;

    @GetMapping("/")
    public List<Administrador> buscarTodos() {
        return administradorService.buscarTodos();
    }

    @GetMapping("/{id}")
    public Administrador buscarAdministradorPorId(@PathVariable Long id) {
        return administradorService.findAdministradorById(id);
    }

    @PostMapping("/")
    public Administrador inserir(@RequestBody Administrador administrador) {
        return administradorService.inserir(administrador);
    }

    @PutMapping("/")
    public Administrador atualizar(@RequestBody Administrador administrador) {
        return administradorService.atualizar(administrador);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        administradorService.deletar(id);
        return ResponseEntity.ok().build();
    }

}
