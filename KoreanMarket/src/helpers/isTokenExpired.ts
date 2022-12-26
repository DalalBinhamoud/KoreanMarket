import jwt_decode from 'jwt-decode'

export const isTokenExpired = (token) => {
    var decoded:any = jwt_decode(token)
    if (decoded.exp < Date.now() / 1000) {
      return true
    } else {
      return false
    }
  }