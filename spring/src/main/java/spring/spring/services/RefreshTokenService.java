package spring.spring.services;


import java.time.Instant;
import java.util.Optional;
import java.util.UUID;
import spring.spring.security.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import spring.spring.exception.TokenRefreshException;
import spring.spring.entity.RefreshToken;
import spring.spring.repository.RefreshTokenRepository;
import spring.spring.repository.UserRepository;

@Service
public class RefreshTokenService {

  @Autowired
  private RefreshTokenRepository refreshTokenRepository;

  @Autowired
  private UserRepository userRepository;

  public Optional<RefreshToken> findByToken(String token) {
    return refreshTokenRepository.findByToken(token);
  }

  public RefreshToken createRefreshToken(String email) {
    RefreshToken refreshToken = new RefreshToken();

    refreshToken.setUser(userRepository.findByEmail(email).get());
    refreshToken.setExpiryDate(Instant.now().plusMillis(SecurityConstants.REFRESH_JWT_EXPIRATION));
    refreshToken.setToken(UUID.randomUUID().toString());

    refreshToken = refreshTokenRepository.save(refreshToken);
    return refreshToken;
  }

  public RefreshToken verifyExpiration(RefreshToken token) {
    if (token.getExpiryDate().compareTo(Instant.now()) < 0) {
      refreshTokenRepository.delete(token);
      throw new TokenRefreshException(token.getToken(), "Refresh token was expired. Please make a new signin request");
    }

    return token;
  }

  @Transactional
  public int deleteByUserId(Long userId) {
    return refreshTokenRepository.deleteByUser(userRepository.findById(userId).get());
  }
}