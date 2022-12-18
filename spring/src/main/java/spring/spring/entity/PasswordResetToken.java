package spring.spring.entity;

import java.util.Date;
import jakarta.persistence.*;
import lombok.Data;


@Data
@Entity
@Table(name = "passwordResetToken" )
public class PasswordResetToken {
 
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
 
    private String token;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;
 
    private Date expiryDate;
}