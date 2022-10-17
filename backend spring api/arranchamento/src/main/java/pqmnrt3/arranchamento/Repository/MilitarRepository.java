package pqmnrt3.arranchamento.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import pqmnrt3.arranchamento.Entity.Militar;

public interface MilitarRepository extends JpaRepository<Militar, Long> {

    Militar findMilitarById(Long id);

}
