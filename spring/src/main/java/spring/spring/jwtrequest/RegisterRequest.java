package spring.spring.jwtrequest;

import java.util.Set;
import javax.validation.constraints.*;
import lombok.Setter;
import lombok.Getter;

@Setter
@Getter
public class RegisterRequest {

    @NotBlank
    @Size(max = 50)
    @Email
    private String email;
    
    private Set<String> role;
    
    @NotBlank
    @Size(min = 6, max = 40)
    private String password;
    
}
