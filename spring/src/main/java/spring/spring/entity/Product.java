package spring.spring.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "product" )

public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    // @OneToOne
    // @JoinColumn(name = "user_id", referencedColumnName = "id")
    // private User user;

    private String name;
    private String description;
    private String category;
    private String price;
    private Integer unitsInStock;
}
