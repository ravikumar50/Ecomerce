export function isValidEmail(email) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

export function isValidPassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d\W]).{8,}$/.test(password);
}
