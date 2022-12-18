package spring.spring.controller;

import spring.spring.entity.RefreshToken;
import spring.spring.entity.Role;
import spring.spring.entity.User;
import spring.spring.exception.TokenRefreshException;
import spring.spring.jwtrequest.RefreshTokenRequest;
import spring.spring.jwtresponse.LoginResponse;
import spring.spring.jwtresponse.TokenRefreshResponse;
import spring.spring.payload.LoginDto;
import spring.spring.payload.RegisterDto;
import spring.spring.repository.RoleRepository;
import spring.spring.repository.UserRepository;
import spring.spring.security.JWTGenerator;
import spring.spring.services.OTPService;
import spring.spring.services.RefreshTokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashSet;
import java.util.Set;
import javax.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private AuthenticationManager authenticationManager;
    private UserRepository userRepository;
    private RoleRepository roleRepository;
    private PasswordEncoder passwordEncoder;
    private JWTGenerator jwtGenerator;

    @Autowired
    public AuthController(AuthenticationManager authenticationManager, UserRepository userRepository,
                          RoleRepository roleRepository, PasswordEncoder passwordEncoder, JWTGenerator jwtGenerator) {
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtGenerator = jwtGenerator;
    }

    @Autowired
    RefreshTokenService refreshTokenService;

    @Autowired
    public OTPService otpService;

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(HttpServletRequest req, @RequestBody LoginDto loginDto){
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                loginDto.getEmail(),
                loginDto.getPassword()));       
        SecurityContextHolder.getContext().setAuthentication(authentication);
         String token = jwtGenerator.generateToken(authentication);

           RefreshToken refreshToken = refreshTokenService.createRefreshToken(loginDto.getEmail());
         return ResponseEntity.ok(new LoginResponse(token, refreshToken.getToken(),loginDto.getEmail()));
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterDto registerDto) {
        if (userRepository.existsByEmail(registerDto.getEmail())) {
            return new ResponseEntity<>("email is taken!", HttpStatus.BAD_REQUEST);
        }

        User user = new User();
        user.setEmail(registerDto.getEmail());
        user.setName(registerDto.getName());
        user.setPhone(registerDto.getPhone());
        user.setPassword(passwordEncoder.encode((registerDto.getPassword())));

        // convert roles list to roles set
        Role role = new Role();
        role.setName("ROLE_ADMIN");
        Set<Role> rolesSet = new HashSet<>();
        rolesSet.add(role);
        user.setRoles(rolesSet);

        // Role roles = roleRepository.findByName("ROLE_ADMIN").get();
        // user.setRoles(Collections.singleton(roles));

        userRepository.save(user);

        return new ResponseEntity<>("User registered success!", HttpStatus.OK);
    }

    @PostMapping("/refreshtoken")
    public ResponseEntity<?> refreshtoken(@Valid @RequestBody RefreshTokenRequest request) {
      String requestRefreshToken = request.getRefreshToken();


      return refreshTokenService.findByToken(requestRefreshToken)
          .map(refreshTokenService::verifyExpiration)
          .map(RefreshToken::getUser)
          .map(user -> {
          
            Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                user.getEmail(),
                user.getPassword()));

            String token = jwtGenerator.generateToken(authentication);
            return ResponseEntity.ok(new TokenRefreshResponse(token, requestRefreshToken));
          })
          .orElseThrow(() -> new TokenRefreshException(requestRefreshToken, "Refresh token is not in database!"));
    }

    @RequestMapping(value="/logout", method = RequestMethod.GET)
    public @ResponseBody String logout(HttpServletRequest request, HttpServletResponse response){
       Authentication auth = SecurityContextHolder.getContext().getAuthentication(); 
       if (auth != null){    
       String username = auth.getName();
       //Remove the recently used OTP from server. 
       otpService.clearOTP(username);
       new SecurityContextLogoutHandler().logout(request, response, auth);
       }
   return "redirect:/login?logout";    
    }
}
