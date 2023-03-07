export const utilities = {
  inputMaxLength: () => ({
    email: 320,
    name: 30,
    password: 30,
    description: 200
  }),

  OTPConfig: () => ({
    OTPLength: 4,
    resendOTPTimeLimit: 60, // 60 seconds
  }),
  productCategories:() => ['clothes','food', 'electronics']
}
