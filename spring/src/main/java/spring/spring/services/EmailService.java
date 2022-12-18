package spring.spring.services;

import javax.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import spring.spring.entity.User;

@Service
public class EmailService {

	@Autowired
	private JavaMailSender javaMailSender;

	public void sendOtpMessage(String to, String subject, String message)
			throws MessagingException, jakarta.mail.MessagingException {

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

	public SimpleMailMessage constructResetTokenEmail(
			String contextPath, String token, User user) {
		String url = contextPath + "/api/auth/changePassword?token=" + token;
		String message = "reset your password through the below link";
		return constructEmail("Reset Password", message + " \r\n" + url, user);
	}

	private SimpleMailMessage constructEmail(String subject, String body,
			User user) {
		SimpleMailMessage email = new SimpleMailMessage();
		email.setSubject(subject);
		email.setText(body);
		email.setTo(user.getEmail());
		email.setFrom("dalalmansourh3@gmail.com");
		return email;
	}

}