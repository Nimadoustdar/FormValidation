export const validate = (data, type) => {

    const errors = {}

    // Email Validate

    if (!data.email) {
        errors.email = 'Email required'
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = 'Email address is invalid'
    } else {
        delete errors.email
    }
    // password Validate

    if (!data.password) {
        errors.password = 'Password required'

    } else if (data.password.length < 6) {
        errors.password = 'Password need to be 6 character or more'
    } else {
        delete errors.password
    }

    if (type === 'singup') {

        // Username Validate
        if (!data.user.trim()) {
            errors.user = 'Username required'
        } else {
            delete errors.user
        }
        // confirmPassword Validate

        if (!data.confirmPassword) {
            errors.confirmPassword = 'Confirm the password '

        } else if (data.confirmPassword !== data.password) {
            errors.confirmPassword = '  Password do not match'
        } else {
            delete errors.confirmPassword
        }
        // Checkbox Validate

        if (data.isAccept) {
            delete errors.isAccept
        } else {
            errors.isAccept = "Accept our regulations"
        }
    }

    return errors

}
