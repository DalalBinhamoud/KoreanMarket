package spring.spring.helper;


import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class EmailTemplate {
    
    private String template;
    private Map replacementParams;
    public EmailTemplate(String customtemplate) { 
        
        try {
           this.template = loadTemplate(customtemplate);
        } catch (Exception e) {
           this.template = "Empty";
        }
    
}
private String loadTemplate(String customtemplate) throws Exception {
    
        ClassLoader classLoader = getClass().getClassLoader();
        File file = new File(classLoader.getResource(customtemplate).getFile());
        String content = "Empty";
        try {
            content = new String(Files.readAllBytes(file.toPath()));
        } catch (IOException e) {
            throw new Exception("Could not read template  = " + customtemplate);
        }
        return content;
        
}
public String getTemplate(Map replacements) {
    
        String cTemplate = this.template;
        // Set<Map.Entry> replacmentsSet = replacements
        Set<Map.Entry> replacementsSet = new HashSet(replacements.values());
        // replacementsSet.add(replacements.values());

        //Replace the String 
        for (Map.Entry entry : replacementsSet) {
            cTemplate = cTemplate.replace("{{" + entry.getKey() + "}}", (CharSequence) entry.getValue());
        }
        return cTemplate;
    }
}