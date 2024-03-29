package spring.spring.controller;

import java.util.HashMap;
import java.util.Map;
import javax.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import spring.spring.helper.EmailTemplate;
import spring.spring.services.EmailService;
import spring.spring.services.OTPService;

@RestController
@RequestMapping("/api/auth")
public class OTPController {
  @Autowired
  public OTPService otpService;

  @Autowired
  public EmailService emailService;

  @Validated
  @GetMapping("/generateOtp")
  public String generateOTP(@RequestParam("email") String userEmail)
    throws MessagingException, jakarta.mail.MessagingException {
    Authentication auth = SecurityContextHolder
      .getContext()
      .getAuthentication();
    System.out.println(auth);
    String username = auth.getName();
    int otp = otpService.generateOTP(username);
    //Generate The Template to send OTP
    EmailTemplate template = new EmailTemplate("SendOtp.html");
    String message = template.getTemplate(String.valueOf(otp), username);

    emailService.sendOtpMessage(userEmail, "OTP - Korean MArket", message);

    return "otppage";
  }

  @RequestMapping(value = "/validateOtp", method = RequestMethod.GET)
  public @ResponseBody String validateOtp(@RequestParam("otpnum") int otpnum) {
    final String SUCCESS = "Entered Otp is valid";
    final String FAIL = "Entered Otp is NOT valid. Please Retry!";
    Authentication auth = SecurityContextHolder
      .getContext()
      .getAuthentication();
    String username = auth.getName();
    //Validate the Otp
    if (otpnum >= 0) {
      int serverOtp = (int) otpService.getOtp(username);
      if (serverOtp > 0) {
        if (otpnum == serverOtp) {
          otpService.clearOTP(username);

          return ("Entered Otp is valid");
        } else {
          return FAIL;
        }
      } else {
        return FAIL;
      }
    } else {
      return FAIL;
    }
  }
}
