// Validation utilities
function validateEmail(email) {
    return email.includes('@');
}

module.exports = { validateEmail };


function sanitizeInput(input) {
    return input.replace(/[<>]/g, '');  // защита от XSS
}
function validatePassword(password) {
    return password.length >= 8;
}
