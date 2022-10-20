package pqmnrt3.arranchamento.Entity;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.Data;

@Entity
@Data
public class Refeicao {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Boolean cafe;
    private Boolean almoco;
    private Boolean janta;

    @ManyToOne
    private Militar militar;

    private LocalDateTime dataRefeicao;

}
