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

import pqmnrt3.arranchamento.Entity.Refeicao;
import pqmnrt3.arranchamento.Service.RefeicaoService;

@RestController
@RequestMapping("/api/refeicao")
public class RefeicaoController {

    @Autowired
    private RefeicaoService refeicaoService;

    @GetMapping("/")
    public List<Refeicao> buscarTodos() {
        return refeicaoService.buscarTodos();
    }

    @GetMapping("/{id}")
    public Refeicao buscarRefeicaoPorId(@PathVariable Long id) {
        return refeicaoService.findRefeicaoById(id);
    }

    @PostMapping("/")
    public Refeicao inserir(@RequestBody Refeicao refeicao) {
        return refeicaoService.inserir(refeicao);
    }

    @PutMapping("/")
    public Refeicao atualizar(@RequestBody Refeicao refeicao) {
        return refeicaoService.atualizar(refeicao);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        refeicaoService.deletar(id);
        return ResponseEntity.ok().build();
    }

}
