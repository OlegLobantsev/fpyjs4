function getPasswordChecker(password) {
    let pass = password;
    return function check(users_pass) {
        if (password === users_pass) {
            return true;
        }
        return false;
    }
}

let user_1 = getPasswordChecker("@Admin");
console.log(user_1(49846876));
console.log(user_1("Pokdcm8wk"));
console.log(user_1("@Admin"));