package pqmnrt3.arranchamento.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pqmnrt3.arranchamento.Entity.Administrador;
import pqmnrt3.arranchamento.Repository.AdministradorRepository;

@Service
public class AdministradorService {

    @Autowired
    private AdministradorRepository administradorRepository;

    public List<Administrador> buscarTodos() {
        return administradorRepository.findAll();
    }

    public Administrador findAdministradorById(Long id) {
        return administradorRepository.findAdministradorById(id);
    }

    public Administrador inserir(Administrador administrador) {
        Administrador newAdministrador = administradorRepository.saveAndFlush(administrador);
        return newAdministrador;
    }

    public Administrador atualizar(Administrador administrador) {
        return administradorRepository.saveAndFlush(administrador);
    }

    public void deletar(Long id) {
        Administrador newAdministrador = administradorRepository.findById(id).get();
        administradorRepository.delete(newAdministrador);
    }

}
