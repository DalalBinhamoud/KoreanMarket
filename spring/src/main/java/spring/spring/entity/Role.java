package spring.spring.entity;

import lombok.Getter;
import lombok.Setter;

// import javax.persistence.*;
import jakarta.persistence.*;

@Setter
@Getter
@Entity
@Table(name = "role")
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(length = 60)
    private String name;
}