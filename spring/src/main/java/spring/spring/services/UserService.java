package spring.spring.services;

import java.util.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import spring.spring.entity.PasswordResetToken;
import spring.spring.entity.User;
import spring.spring.repository.PasswordTokenRepository;
import spring.spring.repository.UserRepository;
import spring.spring.security.SecurityConstants;

@Service
public class UserService {

    @Autowired
    PasswordTokenRepository passwordTokenRepository;

    @Autowired
    UserRepository userRepository;

    private PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository userRepository,
            PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
  
    }

    public void createPasswordResetTokenForUser(User user, String token) {
        PasswordResetToken myToken = new PasswordResetToken();
        myToken.setUser(user);
        myToken.setToken(token);
        Date currentDate = new Date();
        myToken.setExpiryDate(new Date(currentDate.getTime() + SecurityConstants.REFRESH_JWT_EXPIRATION));
            
        passwordTokenRepository.save(myToken);
    }

    public Optional<User> getUserByPasswordResetToken(final String token) {
        return Optional.ofNullable(passwordTokenRepository.findByToken(token).getUser());
    }

    public void changeUserPassword(User user, String password) {
        user.setPassword(passwordEncoder.encode(password));
        userRepository.save(user);
    }
}
