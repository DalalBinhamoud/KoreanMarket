import { changeLanguage } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import { I18nManager, View } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "src/components/Layouts";

const Settings = () => {
  const { t, i18n } = useTranslation()
  const languages = [{
    name:  'عربي',
    code: 'ar'
  },{
    name:  'English',
    code: 'en'
  }]

  const changeLanguage = (code: string)=>{
    i18n.changeLanguage(code)
    if (code === 'ar') {
      I18nManager.forceRTL(true)
    } else {
      I18nManager.forceRTL(false)
    }
  }

  return (
    <SafeAreaView>
      <Header title={t('welcome')} hasBackBtn={false} />
      <View>
        {languages.map((language,index) => (
         <Button key={index} onPress={()=>changeLanguage(language.code)}>{language.name}</Button>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Settings;