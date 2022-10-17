package pqmnrt3.arranchamento.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import pqmnrt3.arranchamento.Entity.Refeicao;

public interface RefeicaoRepository extends JpaRepository<Refeicao, Long> {

    Refeicao findRefeicaoById(Long id);

}
