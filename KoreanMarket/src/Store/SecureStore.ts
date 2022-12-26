import * as SecureStore from 'expo-secure-store';

 export const saveValue = async(key, value) => {
    await SecureStore.setItemAsync(key, value);
  }
  
  export const  getValueFor =async (key) =>{
    if(SecureStore.isAvailableAsync()){
      let result = await SecureStore.getItemAsync(key);
      if (result) {
        return result
      } else {
        return ''
      }
    }else{
      return ''
    }
 
  }

  export const  removeValueFor =async (key) =>{
    await SecureStore.deleteItemAsync(key);
  }