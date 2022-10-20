package pqmnrt3.arranchamento.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pqmnrt3.arranchamento.Entity.Refeicao;
import pqmnrt3.arranchamento.Repository.RefeicaoRepository;

@Service
public class RefeicaoService {

    @Autowired
    private RefeicaoRepository refeicaoRepository;

    public List<Refeicao> buscarTodos() {
        return refeicaoRepository.findAll();
    }

    public Refeicao findRefeicaoById(Long id) {
        return refeicaoRepository.findRefeicaoById(id);
    }

    public Refeicao inserir(Refeicao refeicao) {
        Refeicao newRefeicao = refeicaoRepository.saveAndFlush(refeicao);
        return newRefeicao;
    }

    public Refeicao atualizar(Refeicao refeicao) {
        return refeicaoRepository.saveAndFlush(refeicao);
    }

    public void deletar(Long id) {
        Refeicao newRefeicao = refeicaoRepository.findById(id).get();
        refeicaoRepository.delete(newRefeicao);
    }
}
