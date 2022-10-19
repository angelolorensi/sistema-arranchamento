package pqmnrt3.arranchamento.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Administrador {

    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private Long id;

    private String cia;
    private String login;
    private String senha;
}
