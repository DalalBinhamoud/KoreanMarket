package spring.spring.payload;

import lombok.Data;

@Data
public class PasswordDto {

    private String oldPassword;

    private  String token;

    // @ValidPassword
    private String newPassword;
}
