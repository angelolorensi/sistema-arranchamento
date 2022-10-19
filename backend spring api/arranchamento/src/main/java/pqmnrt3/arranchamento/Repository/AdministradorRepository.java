package pqmnrt3.arranchamento.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import pqmnrt3.arranchamento.Entity.Administrador;

public interface AdministradorRepository extends JpaRepository<Administrador, Long> {

    Administrador findAdministradorById(Long id);

}
