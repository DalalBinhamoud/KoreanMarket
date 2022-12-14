package spring.spring.jwtresponse;

import java.util.Set;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class LoginResponse {
    private String token;
	private String type = "Bearer";
	private String refreshToken;
	private String email;
	// private Set<String> roles;

	public LoginResponse(String accessToken, String refreshToken, String email) {
		this.token = accessToken;
		this.refreshToken = refreshToken;
		// this.id = id;
		this.email = email;
		// this.roles = roles;
	}
    
}
