package pqmnrt3.arranchamento.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pqmnrt3.arranchamento.Entity.Militar;
import pqmnrt3.arranchamento.Repository.MilitarRepository;

@Service
public class MilitarService {

    @Autowired
    private MilitarRepository militarRepository;

    public List<Militar> buscarTodos() {
        return militarRepository.findAll();
    }

    public Militar findMilitarById(Long id) {
        return militarRepository.findMilitarById(id);
    }

    public Militar inserir(Militar militar) {
        Militar newMilitar = militarRepository.saveAndFlush(militar);
        return newMilitar;
    }

    public Militar atualizar(Militar militar) {
        return militarRepository.saveAndFlush(militar);
    }

    public void deletar(Long id) {
        Militar newMilitar = militarRepository.findById(id).get();
        militarRepository.delete(newMilitar);
    }

}
