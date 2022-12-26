import { RegisterDto, LoginDto } from 'src/models/Auth'
import api from 'src/api' ;
 
  const AuthService = ()=> {


const Register = (registerDto: RegisterDto)=>{
   return api.post(
        '/auth/register',
        registerDto).then((res)=>{
            return res
        })
   }

const Login = (loginDto: LoginDto)=>{
   return api.post(
        '/auth/login',
        loginDto).then((res)=>{
            return res
        })
   }

   const ForgetPassword = (email: any)=>{
    return api.post(`auth/resetPassword?email=${email}`, {}).then((res)=>{
      return res
    })
   }

     return {
        Register,
        Login,
        ForgetPassword
    }
 }

 export default AuthService;
 