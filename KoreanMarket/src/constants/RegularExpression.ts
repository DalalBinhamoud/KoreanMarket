export const LETTERS_ONLY = /^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z ]+$/
export const PASSWORD_REGEX = /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/
export const PHONE_NUMBER = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
// export const PHONE_NUMBER = /^[0-9*#+]+$/
