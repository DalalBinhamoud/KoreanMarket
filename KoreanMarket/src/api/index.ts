import axios from 'axios'
import { REACT_APP_BASE_URL } from '@env'
import { getValueFor, saveValue, removeValueFor} from 'src/Store/SecureStore'
import { object } from 'yup'


let api = axios.create({
  baseURL: REACT_APP_BASE_URL,
  timeout: 10000,
})

const  token = getValueFor('token')

  api.interceptors.request.use((config) => {
    if(token?._z === null){
      config.headers.Authorization = `Bearer `
    }else{
      config.headers.Authorization = `Bearer ${token?._z} `
    }

    return config
  });

  api.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const originalConfig = err.config;
      if (!originalConfig.url.includes('auth/') && err.response) {
        // Access Token was expired
        if (err.response.status === 401 && !originalConfig._retry && token?._z) {
          originalConfig._retry = true;
  
          try {
            const rs = await api.post("/auth/refreshtoken", {
              refreshToken: getValueFor('refreshToken'),
            });
  
            const { accessToken } = rs.data;
            saveValue('token', accessToken)
  
            return api(originalConfig);
          } catch (_error) {
            return Promise.reject(_error);
          }
        }
      }
      return Promise.reject(err);
    }
  );
  


export default api
