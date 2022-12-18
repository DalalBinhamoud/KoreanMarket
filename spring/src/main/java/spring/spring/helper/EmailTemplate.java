package spring.spring.helper;

public class EmailTemplate {
    
    private String template;
    String firstHyperText =  "<!DOCTYPE html><html><head></head> <body><h1> Hi {{user}}</h1><br/>";
    String secHyperText =  "<h2> Otp Number from Spring Boot application is {{otpnum}}</h2> <br/></body></html>";
    
    public EmailTemplate(String customtemplate) { 

        try { 
           this.template = loadTemplate(customtemplate);
        } catch (Exception e) {
           this.template = firstHyperText + secHyperText;
        }
    
}
private String loadTemplate(String customtemplate) throws Exception {
        return firstHyperText + secHyperText;
        
}
public String getTemplate(String otp, String username) {
        String cTemplate = this.template;
        cTemplate = cTemplate.replace("{{user}}", (CharSequence) username);
        cTemplate = cTemplate.replace("{{otpnum}}", (CharSequence) otp);
        return cTemplate;
    }
}