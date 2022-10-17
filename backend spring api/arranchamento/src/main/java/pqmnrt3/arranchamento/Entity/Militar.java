package pqmnrt3.arranchamento.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Militar {

    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private Long id;

    private String nome;
    private String identidade;
    private String numero;
    private String graduacao;
    private String nomeDeGuerra;
    private String cia;
    private String om;
    private String login;
}
