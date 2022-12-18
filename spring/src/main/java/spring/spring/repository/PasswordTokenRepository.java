package spring.spring.repository;

import spring.spring.entity.PasswordResetToken;
import spring.spring.entity.User;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories
public interface PasswordTokenRepository extends JpaRepository<PasswordResetToken, Long> {
  Optional<PasswordResetToken> findById(long id);

  PasswordResetToken findByToken(String token);

   Optional<User> getUserByToken(String token);
}