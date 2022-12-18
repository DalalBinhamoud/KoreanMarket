package spring.spring.services;

import javax.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

	@Autowired
	private JavaMailSender javaMailSender;
	
	public void sendOtpMessage(String to, String subject, String message) throws MessagingException, jakarta.mail.MessagingException {
	
		  jakarta.mail.internet.MimeMessage msg = null;
          msg = javaMailSender.createMimeMessage();

	        MimeMessageHelper helper = new MimeMessageHelper(msg, true);

	        helper.setTo(to);
	        helper.setSubject(subject);
	        helper.setText(message, true);
	        javaMailSender.send(msg);

			// SimpleMailMessage message2 = new SimpleMailMessage();
			// message2.setFrom("dalalmansourh3@gmail.com");
			// message2.setTo("dl0o0o0l33@gmail.com");
			// message2.setText("test msg");
			// message2.setSubject(subject);
			// javaMailSender.send(message2);
			// System.out.println("Mail Send...");
   }
	
}