package spring.spring.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import spring.spring.exception.APIException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.*;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import java.util.Date;

@Component
public class JWTGenerator {

    public String generateToken(Authentication authentication) {
        String username = authentication.getName();
        Date currentDate = new Date();
        Date expireDate = new Date(currentDate.getTime() + SecurityConstants.JWT_EXPIRATION);

        String token = Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(expireDate)
                .signWith(SignatureAlgorithm.HS512, SecurityConstants.JWT_SECRET)
                .compact();

        return token;
    }

    // not logged in user
    public String generateToken() {
        Date currentDate = new Date();
        Date expireDate = new Date(currentDate.getTime() + SecurityConstants.JWT_EXPIRATION);

        String token = Jwts.builder()
                .setSubject("anonymous")
                .setIssuedAt(new Date())
                .setExpiration(expireDate)
                .signWith(SignatureAlgorithm.HS512, SecurityConstants.JWT_SECRET)
                .compact();

        return token;
    }

    public String getUsernameFromJWT(String token) {
        Claims claims = Jwts.parser()
                .setSigningKey(SecurityConstants.JWT_SECRET)
                .parseClaimsJws(token)
                .getBody();
        return claims.getSubject();
    }


        // validate JWT token
        public boolean validateToken(String token) {
            try {
                Jwts.parser().setSigningKey(SecurityConstants.JWT_SECRET).parseClaimsJws(token);
                return true;
            } catch (SignatureException ex) {
                throw new APIException(HttpStatus.BAD_REQUEST, "Invalid JWT signature");
            } catch (MalformedJwtException ex) {
                throw new APIException(HttpStatus.BAD_REQUEST, "Invalid JWT token");
            } catch (UnsupportedJwtException ex) {
                throw new APIException(HttpStatus.BAD_REQUEST, "Unsupported JWT token");
            } catch (IllegalArgumentException ex) {
                throw new APIException(HttpStatus.BAD_REQUEST, "JWT claims string is empty.");
            }
        }
    
    // catch (ExpiredJwtException ex) {
    // throw new APIException(HttpStatus.BAD_REQUEST, "Expired JWT token");
    // }

}
