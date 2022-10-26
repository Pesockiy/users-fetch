import { useEffect, useState } from 'react'

const validateEmail = (email) => {
    return String(email).match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/)
}
const validatePhone = (phone) => {
    return String(phone).match(/^\+380(\d{9})$/)
}
const validatePassport = (passport) => {
    return String(passport).match(/^[А-ЯЇЄІ0-9]+$/i)
}
const validatePassword = (password) => {
    return String(password).match(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])[0-9a-zA-Z!@#$%^&*()_+-={}[]|]/g)
}
const validateName = (name) => {
    return String(name).match(/^[a-zа-яїєі'-]+$/i)
}

const useValiadtion = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true)
    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [passportError, setPassportError] = useState(false)
    const [inputValid, setInputValid] = useState(false)
    const [maxLength, setMaxLengthError] = useState(false)
    const [minLength, setMinLengthError] = useState(false)

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break
                case 'nameError':
                    validateName(value)
                        ? setNameError(false)
                        : setNameError(true)
                    break
                case 'emailError':
                    validateEmail(value)
                        ? setEmailError(false)
                        : setEmailError(true)
                    break
                case 'phoneError':
                    validatePhone(value)
                        ? setPhoneError(false)
                        : setPhoneError(true)
                    break
                case 'passwordError':
                    validatePassword(value)
                        ? setPasswordError(false)
                        : setPasswordError(true)
                    break
                case 'passportError':
                    validatePassport(value) || value === ''
                        ? setPassportError(false)
                        : setPassportError(true)
                    break
                case 'minLength':
                    value.length < validations[validation]
                        ? setMinLengthError(true)
                        : setMinLengthError(false)
                    break
                case 'maxLength':
                    value.length > validations[validation]
                        ? setMaxLengthError(true)
                        : setMaxLengthError(false)
                    break
            }
        }
    }, [value])

    useEffect(() => {
        if (isEmpty || emailError || phoneError || maxLength || minLength || passwordError || passportError || nameError) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [isEmpty, emailError, phoneError, maxLength, minLength, passwordError, passportError, nameError])

    return {
        isEmpty,
        inputValid,
        nameError,
        emailError,
        phoneError,
        passwordError,
        passportError,
        maxLength,
        minLength
    }
}

export default useValiadtion
