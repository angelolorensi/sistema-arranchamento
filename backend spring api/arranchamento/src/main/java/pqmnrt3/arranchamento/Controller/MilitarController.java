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

import pqmnrt3.arranchamento.Entity.Militar;
import pqmnrt3.arranchamento.Service.MilitarService;

@RestController
@RequestMapping("/api/militar")
public class MilitarController {

    @Autowired
    private MilitarService militarService;

    @GetMapping("/")
    public List<Militar> buscarTodos() {
        return militarService.buscarTodos();
    }

    @GetMapping("/{id}")
    public Militar buscarMilitarPorId(@PathVariable Long id) {
        return militarService.findMilitarById(id);
    }

    @PostMapping("/")
    public Militar inserir(@RequestBody Militar militar) {
        return militarService.inserir(militar);
    }

    @PutMapping("/")
    public Militar atualizar(@RequestBody Militar militar) {
        return militarService.atualizar(militar);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        militarService.deletar(id);
        return ResponseEntity.ok().build();
    }

}
