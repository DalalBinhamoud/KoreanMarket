
import React from 'react'
import { useTranslation } from 'react-i18next';
import{View} from 'react-native'
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';

interface IProps{
    message: String
    visible: boolean
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
}
const PopUp = ({message, visible, setVisible}:IProps)=>{
    const {t} = useTranslation()
    const hideModal = () => setVisible(false)

    return(
    <View>
     <Portal>
          <Dialog visible={visible} onDismiss={hideModal}>
            <Dialog.Content>
              <Paragraph>{message}</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideModal}>{t('btnText.ok')}</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
 </View>)
}

export default PopUp;